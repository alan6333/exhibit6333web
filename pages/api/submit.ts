import {google} from 'googleapis'
import {NextApiRequest, NextApiResponse} from "next";

type SheetForm = {
    fname: string
    email: string
    phonenum: string
    country: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method !== 'POST'){
        return res.status(405).send({message: 'Only POST requests are all allowed'})
    }

    const body = req.body as SheetForm

    try {
        //prepare auth 
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
                private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
            range: 'A2:D2',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.fname, body.email, body.phonenum, body.country]
                ]
            }
        });

        return res.status(200).json({
            data: response.data
        })

    }catch(e){
        console.error(e)
        return res.status(500).send({message: 'Something went wrong'})
    }
}

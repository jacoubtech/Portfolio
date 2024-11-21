import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

type SheetForm = {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    service: string;
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(404).send({ message: 'Only POST requests are allowed' });
    }

    const body = req.body as SheetForm;

    try {
        // Prepare auth
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            projectId: process.env.GOOGLE_PROJECT_ID,
            scopes: ['https://www.googleapis.com/auth/spreadsheets',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/drive'
            ], // Adjust scopes as needed
        });

        
        const sheets = google.sheets({ auth, version: 'v4'});
        const respense = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1:F1',
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            requestBody: {
                values: [
                    [body.firstname, body.lastname, body.email, body.phone, body.service, body.message],
                ],
            },
        })
        // Use the Sheets API to write or manipulate data here
        res.status(200).json({ message: 'Connected successfully' });
    } catch (e) {
        console.error('Error connecting to Google Sheets API:', e);
        res.status(500).json({ message: 'Internal server error' });
    }
}

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from 'next';

const db = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const contactData = JSON.parse(req.body);
        const savedContact = await db.contact.create({
            data: contactData,
        });
        
        res.status(201).json(savedContact);
    }
}
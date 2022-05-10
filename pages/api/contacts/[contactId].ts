import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const db = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "DELETE") {
        const deletedContact = await db.contact.delete({
            where: {
                id: String(req.query.contactId),
            },
        });

        res.status(200).json(deletedContact);
    } else if (req.method === "PATCH") {
        const contactData = JSON.parse(req.body);
        const editedContact = await db.contact.update({
            where: {
                id: String(req.query.contactId),
            },
            data: {
                ...contactData,
            },
        });

        res.status(200).json(editedContact);
    }
}

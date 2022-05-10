import { Contact, Prisma } from "@prisma/client";

export const createContact = async (contact: Prisma.ContactCreateInput) => {
    const response = await fetch("/api/contacts", {
        method: "POST",
        body: JSON.stringify(contact),
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};

export const deleteContact = async (contactId: string) => {
    const response = await fetch(`/api/contacts/${contactId}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json() as Contact;
};

export const editContact = async (
    contact: Prisma.ContactUpdateInput,
    contactId: string
) => {
    const response = await fetch(`/api/contacts/${contactId}`, {
        method: "PATCH",
        body: JSON.stringify(contact),
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json() as Contact;
};

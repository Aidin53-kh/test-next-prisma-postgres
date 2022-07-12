import { Contact, Prisma } from "@prisma/client";
import type { Dispatch, SetStateAction } from "react";

export type AppContextProps = {
    contacts: Contact[];
    setContacts: Dispatch<SetStateAction<Contact[]>>;
    handleCreateContact: (contact: Prisma.ContactCreateInput) => void;
    handleDeleteContact: (contactId: string) => void;
    handleEditContact: (
        contact: Prisma.ContactUpdateInput,
        contactId: string
    ) => void;
    selectedContact: Contact | undefined;
    setSelectedContact: Dispatch<SetStateAction<Contact | undefined>>;
};

export const APP_CONTEXT_DEFUALTS = {
    contacts: [],
    setContacts: () => {},
    handleCreateContact: () => {},
    handleDeleteContact: () => {},
    selectedContact: undefined,
    setSelectedContact: () => {},
    handleEditContact: () => {},
};

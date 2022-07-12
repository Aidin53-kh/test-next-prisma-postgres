import React, { createContext, useContext, useState } from "react";
import { Contact, Prisma } from "@prisma/client";
import { createContact, deleteContact, editContact } from "../lib/contacts";
import { AppContextProps, APP_CONTEXT_DEFUALTS } from "./types";

const appContext = createContext<AppContextProps>(APP_CONTEXT_DEFUALTS);

type AppProviderPorps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderPorps) => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [selectedContact, setSelectedContact] = useState<Contact>();

    const handleCreateContact = async (contact: Prisma.ContactCreateInput) => {
        try {
            const createdContact = await createContact(contact);
            setContacts([...contacts, createdContact]);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteContact = async (contactId: string) => {
        try {
            const deletedContact = await deleteContact(contactId);
            const newContactsList = contacts.filter(
                (contact) => contact.id !== deletedContact.id
            );
            setContacts(newContactsList);
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditContact = async (
        contact: Prisma.ContactUpdateInput,
        contactId: string
    ) => {
        try {
            const editedContact = await editContact(contact, contactId);
            const newContactList = [...contacts];

            const contactIndex = contacts.findIndex(
                (contact) => contact.id === editedContact.id
            );
            newContactList[contactIndex] = editedContact;

            setContacts(newContactList);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <appContext.Provider
            value={{
                contacts,
                setContacts,
                handleCreateContact,
                handleDeleteContact,
                selectedContact,
                setSelectedContact,
                handleEditContact,
            }}
        >
            {children}
        </appContext.Provider>
    );
};

export const useAppContext = () => useContext(appContext);

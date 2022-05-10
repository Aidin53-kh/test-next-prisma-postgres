import React, { useEffect } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { Contact as IContact, PrismaClient } from "@prisma/client";
import { DesktopSidebar } from "../components/sidebar/DesktopSideber";
import { Contact } from "../components/contact";
import { useAppContext } from "../providers/AppProvider";

const db = new PrismaClient();

interface HomeProps {
    contacts: IContact[];
}

const Home: NextPage<HomeProps> = ({ contacts }) => {
    const { setContacts, contacts: appContacts } = useAppContext();

    useEffect(() => setContacts(contacts), []);
    
    return (
        <div className="flex">
            <DesktopSidebar />

            <main className="w-full max-w-5xl mx-auto px-4">
                <h1 className="text-3xl font-semibold my-8 text-neutral-800">Contacts</h1>
                {appContacts.map((contact) => (
                    <Contact key={contact.id} contact={contact} />
                ))}
            </main>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    const contacts = await db.contact.findMany();

    return {
        props: {
            contacts,
        },
    };
};

export default Home;

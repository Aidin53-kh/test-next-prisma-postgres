import { Contact as IContact } from "@prisma/client";
import { useAppContext } from "../../providers/AppProvider";
import { Avatar } from "../avatar";

interface ContactProps {
    contact: IContact;
}

export const Contact: React.FC<ContactProps> = ({ contact }) => {
    const { handleDeleteContact, selectedContact, setSelectedContact } = useAppContext();

    return (
        <div
            className={`border-b flex items-center justify-between px-3 py-6 hover:bg-gray-100 ${
                selectedContact?.id === contact.id &&
                "bg-green-50 hover:bg-green-50"
            }`}
        >
            <div className="mr-3">
                <Avatar />
            </div>
            <div className="flex-1">
                <h3 className="font-semibold mb-1">
                    {contact.firstName} {contact.lastName}
                </h3>
                <p className="text-sm text-gray-500">{contact.email}</p>
            </div>
            <div className="flex gap-4">
                <p
                    className="text-blue-400 cursor-pointer hover:underline"
                    onClick={() => setSelectedContact(contact)}
                >
                    Edit
                </p>
                <p
                    className="text-red-400 cursor-pointer hover:underline"
                    onClick={() => {
                        setSelectedContact(undefined);
                        handleDeleteContact(contact.id);
                    }}
                >
                    Delete
                </p>
            </div>
        </div>
    );
};

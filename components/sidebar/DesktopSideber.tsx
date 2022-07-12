import XIcon from "@heroicons/react/outline/XIcon";
import { useAppContext } from "../../providers/AppProvider";
import { EditContactForm } from "../forms/EditContactFrom";
import { AddContactForm } from "../forms/AddContactForm";

export const DesktopSidebar: React.FC = () => {
    const { selectedContact, setSelectedContact } = useAppContext();

    return (
        <aside className="max-w-[300px] min-w-[300px] lg:max-w-[370px] lg:min-w-[370px] p-6 border-r sticky top-0 h-screen">
            <div className="flex items-center justify-between mt-3 mb-20">
                {selectedContact ? (
                    <>
                        <h2 className="text-xl font-semibold">Edit Contact</h2>
                        <span onClick={() => setSelectedContact(undefined)}>
                            <XIcon className="w-6 h-6 text-gray-600" />
                        </span>
                    </>
                ) : (
                    <h2 className="text-xl font-semibold">Create Contact</h2>
                )}
            </div>

            {selectedContact ? <EditContactForm /> : <AddContactForm />}
        </aside>
    );
};

import { Contact } from "@prisma/client";
import { ErrorMessage, Form, Formik } from "formik";
import { useAppContext } from "../../providers/AppProvider";
import { editContactSchema } from "../../schema/contact";
import { Button } from "../button";
import { TextFiled } from "../textfiled";

export const EditContactForm: React.FC = () => {
    const { handleEditContact, selectedContact } = useAppContext();
    const { firstName, lastName, email, avatar } = selectedContact as Contact;

    if (!selectedContact) return null;

    return (
        <Formik
            initialValues={{
                lastName,
                firstName,
                email,
                avatar,
            }}
            onSubmit={(contact) =>
                handleEditContact(contact, selectedContact.id)
            }
            validationSchema={editContactSchema}
            enableReinitialize
        >
            <Form>
                <p className="mb-1 ml-1 text-gray-600 text-sm">first name</p>
                <TextFiled name="firstName" placeholder="first name" />
                <ErrorMessage
                    name="firstName"
                    render={(message) => (
                        <p className="text-sm text-red-500">{message}</p>
                    )}
                />

                <p className="mb-1 ml-1 text-gray-600 mt-6 text-sm">
                    last name
                </p>
                <TextFiled name="lastName" placeholder="last name" />
                <ErrorMessage
                    name="lastName"
                    render={(message) => (
                        <p className="text-sm text-red-500">{message}</p>
                    )}
                />

                <p className="mb-1 ml-1 text-gray-600 mt-6 text-sm">email</p>
                <TextFiled name="email" placeholder="email" />
                <ErrorMessage
                    name="email"
                    render={(message) => (
                        <p className="text-sm text-red-500">{message}</p>
                    )}
                />

                <p className="mb-1 ml-1 text-gray-600 mt-6 text-sm">avatar</p>
                <TextFiled name="avatar" placeholder="avatar" />
                <ErrorMessage
                    name="avatar"
                    render={(message) => (
                        <p className="text-sm text-red-500">{message}</p>
                    )}
                />
                <div className="flex justify-end mt-10">
                    <Button type="submit">Update</Button>
                </div>
            </Form>
        </Formik>
    );
};

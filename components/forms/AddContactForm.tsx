import { ErrorMessage, Form, Formik } from "formik";
import { useAppContext } from "../../providers/AppProvider";
import { createContactSchema } from "../../schema/contact";
import { Button } from "../button";
import { TextFiled } from "../textfiled";

export const AddContactForm: React.FC = () => {
    const { handleCreateContact } = useAppContext();
    
    return (
        <Formik
            initialValues={{
                lastName: '',
                firstName: '',
                email: '', 
                avatar: '',
            }}
            onSubmit={handleCreateContact}
            validationSchema={createContactSchema}
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

                <p className="mb-1 ml-1 mt-6 text-gray-600 text-sm">last name</p>
                <TextFiled name="lastName" placeholder="last name" />
                <ErrorMessage
                    name="lastName"
                    render={(message) => (
                        <p className="text-sm text-red-500">{message}</p>
                    )}
                />

                <p className="mb-1 ml-1 mt-6 text-gray-600 text-sm">email</p>
                <TextFiled name="email" placeholder="email" />
                <ErrorMessage
                    name="email"
                    render={(message) => (
                        <p className="text-sm text-red-500">{message}</p>
                    )}
                />

                <p className="mb-1 ml-1 mt-6 text-gray-600 text-sm">avatar</p>
                <TextFiled name="avatar" placeholder="avatar" />
                <ErrorMessage
                    name="avatar"
                    render={(message) => (
                        <p className="text-sm text-red-500">{message}</p>
                    )}
                />

                <div className="flex justify-end mt-10">
                    <Button type="submit">Create</Button>
                </div>
            </Form>
        </Formik>
    );
};

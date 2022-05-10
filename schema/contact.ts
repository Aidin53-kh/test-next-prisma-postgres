import * as Yup from 'yup';

export const createContactSchema = Yup.object({
    firstName: Yup.string().min(4).max(20).required(),
    lastName: Yup.string().min(4).max(20).required(),
    email: Yup.string().email().required(),
    avatar: Yup.string().required()
});

export const editContactSchema = createContactSchema;

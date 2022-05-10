import { Field } from "formik";
import type { InputHTMLAttributes } from "react";

export const TextFiled: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
    return (
        <Field
            className={`w-full bg-gray-100 rounded-lg px-5 py-3 outline-none ${className || ''}`}
            {...props}
        />
    );
};

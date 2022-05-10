import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <button className="border-blue-400 text-blue-400 py-1 px-7 flex justify-center items-center border uppercase hover:bg-blue-50 active:bg-blue-100 rounded-full">
            {children}
        </button>
    );
};

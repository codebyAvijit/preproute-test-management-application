import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    isLoading?: boolean;
}

const Button = ({
    children,
    variant = "primary",
    isLoading = false,
    className,
    disabled,
    ...props
}: ButtonProps) => {
    return (
        <button
            disabled={disabled || isLoading}
            className={clsx(
                "h-12 rounded-lg px-6 text-sm font-medium transition-all duration-200",
                {
                    "bg-indigo-500 text-white hover:bg-indigo-600": variant === "primary",

                    "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50":
                        variant === "secondary",

                    "bg-red-500 text-white hover:bg-red-600": variant === "danger",
                },

                isLoading && "cursor-not-allowed opacity-70",

                className,
            )}
            {...props}
        >
            {isLoading ? "Authenticating..." : children}
        </button>
    );
};

export default Button;

import clsx from "clsx";
import type { InputHTMLAttributes } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = ({
  error,
  className,
  ...props
}: InputProps) => {
  return (
    <div className="space-y-1">
      <input
        className={clsx(
          "h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none transition-all",
          "focus:border-indigo-500",
          error &&
            "border-red-500 focus:border-red-500",
          className
        )}
        {...props}
      />

      {error && (
        <p className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
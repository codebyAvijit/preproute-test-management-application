import clsx from "clsx";
import type {
  SelectHTMLAttributes,
} from "react";

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  error?: string;
  placeholder?: string;
}

const Select = ({
  options,
  error,
  placeholder = "Select Option",
  className,
  ...props
}: SelectProps) => {
  return (
    <div className="w-full">
      <select
        className={clsx(
          `
          h-12
          w-full
          rounded-lg
          border
          border-slate-300
          bg-white
          px-4
          text-sm
          outline-none
          transition-all
          focus:border-indigo-500
          disabled:cursor-not-allowed
          disabled:bg-slate-100
          `,
          error &&
            "border-red-500 focus:border-red-500",
          className
        )}
        {...props}
      >
        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;
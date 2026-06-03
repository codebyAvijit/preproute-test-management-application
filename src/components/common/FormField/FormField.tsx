import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: ReactNode;
}

const FormField = ({
  label,
  required,
  children,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700">
        {label}

        {required && (
          <span className="ml-1 text-red-500">
            *
          </span>
        )}
      </label>

      {children}
    </div>
  );
};

export default FormField;
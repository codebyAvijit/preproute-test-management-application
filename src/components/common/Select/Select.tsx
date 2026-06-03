interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  value?: string;
  onChange?: (
    value: string
  ) => void;

  options: Option[];
}

const Select = ({
  value,
  onChange,
  options,
}: SelectProps) => {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange?.(e.target.value)
      }
      className="
        h-12
        w-full
        rounded-lg
        border
        border-slate-300
        px-4
        outline-none
        focus:border-indigo-500
      "
    >
      <option value="">
        Select
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
  );
};

export default Select;
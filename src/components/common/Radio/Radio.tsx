interface RadioProps {
  checked: boolean;
  label: string;
  onChange: () => void;
}

const Radio = ({
  checked,
  label,
  onChange,
}: RadioProps) => {
  return (
    <label className="flex cursor-pointer items-center gap-3">
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
      />

      <span>{label}</span>
    </label>
  );
};

export default Radio;
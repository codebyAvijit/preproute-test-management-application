import Radio from "@/components/common/Radio/Radio";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const DifficultyRadioGroup = ({
  value,
  onChange,
}: Props) => {
  return (
    <div className="flex gap-10">
      <Radio
        label="Easy"
        checked={value === "easy"}
        onChange={() =>
          onChange("easy")
        }
      />

      <Radio
        label="Medium"
        checked={
          value === "medium"
        }
        onChange={() =>
          onChange("medium")
        }
      />

      <Radio
        label="Difficult"
        checked={value === "hard"}
        onChange={() =>
          onChange("hard")
        }
      />
    </div>
  );
};

export default DifficultyRadioGroup;
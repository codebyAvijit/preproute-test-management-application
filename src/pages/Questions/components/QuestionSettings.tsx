import { FormField, Select } from "@/components/common";

const QuestionSettings = () => {
  return (
    <div className="space-y-6">
      <h3 className="font-medium">
        Question Settings
      </h3>

      <FormField label="Level of Difficulty">
        <Select
          options={[]}
          placeholder="Select from Drop-down"
        />
      </FormField>

      <FormField label="Topic">
        <Select
          options={[]}
          placeholder="Select from Drop-down"
        />
      </FormField>

      <FormField label="Sub-topic">
        <Select
          options={[]}
          placeholder="Select from Drop-down"
        />
      </FormField>
    </div>
  );
};

export default QuestionSettings;
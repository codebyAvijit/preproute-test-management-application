import type {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import {
  FormField,
  Input,
  Select,
} from "@/components/common";

import type {
  CreateTestFormData,
} from "../schemas/createTest.schema";

interface TestBasicInfoProps {
  register: UseFormRegister<CreateTestFormData>;
  errors: FieldErrors<CreateTestFormData>;
}

const difficultyOptions = [
  {
    label: "Easy",
    value: "easy",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "Hard",
    value: "hard",
  },
];


const TestBasicInfo = ({
  register,
  errors,
}: TestBasicInfoProps) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="mb-6 text-lg font-semibold text-slate-800">
        Test Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <FormField
          label="Test Name"
          required
        >
          <Input
            placeholder="Enter Test Name"
            error={
              errors.name?.message
            }
            {...register("name")}
          />
        </FormField>

        

        <FormField
          label="Difficulty"
          required
        >
          <Select
            options={
              difficultyOptions
            }
            error={
              errors.difficulty
                ?.message
            }
            {...register(
              "difficulty"
            )}
          />
        </FormField>

        <FormField
          label="Total Time (Minutes)"
          required
        >
          <Input
            type="number"
            placeholder="60"
            error={
              errors.totalTime
                ?.message
            }
           {...register("totalTime")}
          />
        </FormField>
      </div>
    </div>
  );
};

export default TestBasicInfo;
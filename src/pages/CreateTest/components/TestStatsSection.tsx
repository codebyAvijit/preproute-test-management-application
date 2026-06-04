import type {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import {
  FormField,
  Input,
} from "@/components/common";

import type {
  CreateTestFormData,
} from "../schemas/createTest.schema";

interface Props {
  register: UseFormRegister<CreateTestFormData>;
  errors: FieldErrors<CreateTestFormData>;
}

const TestStatsSection = ({
  register,
  errors,
}: Props) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="mb-6 text-lg font-semibold text-slate-800">
        Test Statistics
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          label="Total Marks"
          required
        >
          <Input
            type="number"
            error={errors.totalMarks?.message?.toString()}
            {...register("totalMarks")}
          />
        </FormField>

        <FormField
          label="Total Questions"
          required
        >
          <Input
            type="number"
            error={errors.totalQuestions?.message?.toString()}
           {...register("totalQuestions")}
          />
        </FormField>
      </div>
    </div>
  );
};

export default TestStatsSection;
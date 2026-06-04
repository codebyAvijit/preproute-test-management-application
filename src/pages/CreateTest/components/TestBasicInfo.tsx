import type {
  FieldErrors,
  UseFormWatch,
  UseFormSetValue,
} from "react-hook-form";

import { FormField, Radio } from "@/components/common";

import type { CreateTestFormData } from "../schemas/createTest.schema";

interface TestBasicInfoProps {
  errors: FieldErrors<CreateTestFormData>;

  watch: UseFormWatch<CreateTestFormData>;

  setValue: UseFormSetValue<CreateTestFormData>;
}

const TestBasicInfo = ({
  errors,
  watch,
  setValue,
}: TestBasicInfoProps) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="mb-6 text-lg font-semibold text-slate-800">
        Test Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <FormField label="Test Difficulty Level" required>
          <div className="flex gap-10">
            <Radio
              label="Easy"
              checked={watch("difficulty") === "easy"}
              onChange={() => setValue("difficulty", "easy")}
            />

            <Radio
              label="Medium"
              checked={watch("difficulty") === "medium"}
              onChange={() => setValue("difficulty", "medium")}
            />

            <Radio
              label="Difficult"
              checked={watch("difficulty") === "hard"}
              onChange={() => setValue("difficulty", "hard")}
            />
          </div>

          {errors.difficulty && (
            <p className="text-sm text-red-500">{errors.difficulty.message}</p>
          )}
        </FormField>
      </div>
    </div>
  );
};

export default TestBasicInfo;

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

const MarkingSchemeSection = ({
  register,
  errors,
}: Props) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="mb-6 text-lg font-semibold text-slate-800">
        Marking Scheme
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <FormField
          label="Correct Marks"
          required
        >
          <Input
            type="number"
            error={errors.correctMarks?.message?.toString()}
            {...register("correctMarks")}
          />
        </FormField>

        <FormField
          label="Wrong Marks"
          required
        >
          <Input
            type="number"
            error={errors.wrongMarks?.message?.toString()}
           {...register("wrongMarks")}
          />
        </FormField>

        <FormField
          label="Unattempt Marks"
          required
        >
          <Input
            type="number"
            error={errors.unattemptMarks?.message?.toString()}
            {...register("unattemptMarks")}
          />
        </FormField>
      </div>
    </div>
  );
};

export default MarkingSchemeSection;
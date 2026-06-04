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

const MarkingSchemeRow = ({
  register,
  errors,
}: Props) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">
        Marking Scheme
      </h3>

      <div className="grid gap-6 md:grid-cols-5">
        <FormField label="Wrong Answer">
          <Input
            type="number"
            error={errors.wrongMarks?.message}
            {...register("wrongMarks")}
          />
        </FormField>

        <FormField label="Unattempted">
          <Input
            type="number"
            error={
              errors.unattemptMarks?.message
            }
            {...register(
              "unattemptMarks"
            )}
          />
        </FormField>

        <FormField label="Correct Answer">
          <Input
            type="number"
            error={
              errors.correctMarks?.message
            }
            {...register(
              "correctMarks"
            )}
          />
        </FormField>

        <FormField label="No of Questions">
          <Input
            type="number"
            error={
              errors.totalQuestions?.message
            }
            {...register(
              "totalQuestions"
            )}
          />
        </FormField>

        <FormField label="Total Marks">
          <Input
            type="number"
            error={
              errors.totalMarks?.message
            }
            {...register(
              "totalMarks"
            )}
          />
        </FormField>
      </div>
    </div>
  );
};

export default MarkingSchemeRow;
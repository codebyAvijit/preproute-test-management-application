import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

import { FormField, Select } from "@/components/common";

import { useSubjects } from "../hooks/api/useSubjects";
import { useTopics } from "../hooks/api/useTopics";
import { useSubTopics } from "../hooks/api/useSubTopics";

import type { CreateTestFormData } from "../schemas/createTest.schema";

interface Props {
  register: UseFormRegister<CreateTestFormData>;
  errors: FieldErrors<CreateTestFormData>;
  subjectId?: string;
  selectedTopics: string[];
  setValue: UseFormSetValue<CreateTestFormData>;
}

const SubjectTopicSection = ({
  register,
  errors,
  subjectId,
  selectedTopics,
  setValue,
}: Props) => {
  const { data: subjects = [] } = useSubjects();

  const { data: topics = [] } = useTopics(subjectId);

  const { data: subTopics = [] } = useSubTopics(selectedTopics);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="mb-6 text-lg font-semibold text-slate-800">
        Subject & Topics
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Subject */}

        <FormField label="Subject" required>
          <Select
            options={subjects.map((subject) => ({
              label: subject.name,
              value: subject.id,
            }))}
            error={errors.subject?.message?.toString()}
            {...register("subject")}
            onChange={(e) => {
              setValue("subject", e.target.value);

              setValue("topics", []);

              setValue("subTopics", []);
            }}
          />
        </FormField>

        {/* Topic */}

        <FormField label="Topic" required>
          <Select
            options={topics.map((topic) => ({
              label: topic.name,
              value: topic.id,
            }))}
            disabled={!subjectId}
            onChange={(e) => {
              setValue("topics", [e.target.value]);

              setValue("subTopics", []);
            }}
          />
        </FormField>

        {/* Sub Topic */}

        <FormField label="Sub Topic">
          <Select
            options={subTopics.map((subTopic) => ({
              label: subTopic.name,
              value: subTopic.id,
            }))}
            disabled={selectedTopics.length === 0}
            onChange={(e) => setValue("subTopics", [e.target.value])}
          />
        </FormField>
      </div>
    </div>
  );
};

export default SubjectTopicSection;

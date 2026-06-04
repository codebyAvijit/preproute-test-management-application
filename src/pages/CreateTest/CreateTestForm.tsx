import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-hot-toast";

import Button from "@/components/common/Button/Button";

import TestBasicInfo from "./components/TestBasicInfo";
import SubjectTopicSection from "./components/SubjectTopicSection";
import MarkingSchemeSection from "./components/MarkingSchemeSection";
import TestStatsSection from "./components/TestStatsSection";

import {
  createTestSchema,
  type CreateTestFormData,
} from "./schemas/createTest.schema";

import { useCreateTest } from "./hooks/useCreateTest";

const CreateTestForm = () => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTestFormData>({
    resolver: zodResolver(createTestSchema),

    defaultValues: {
  name: "",
  subject: "",
  topics: [],
  subTopics: [],
  difficulty: "",

  totalTime: "",
totalMarks: "",
totalQuestions: "",
correctMarks: "",
wrongMarks: "",
unattemptMarks: "",
},
  });

  const selectedSubject = watch("subject");

  const selectedTopics = watch("topics");

  const createTestMutation = useCreateTest();

  const onSubmit = async (values: CreateTestFormData) => {
    try {
 await createTestMutation.mutateAsync({
  name: values.name,

  subject: values.subject,

  topics: values.topics,

  sub_topics: values.subTopics,

  correct_marks: Number(
    values.correctMarks
  ),

  wrong_marks: Number(
    values.wrongMarks
  ),

  unattempt_marks: Number(
    values.unattemptMarks
  ),

  difficulty: values.difficulty,

  total_time: Number(
    values.totalTime
  ),

  total_marks: Number(
    values.totalMarks
  ),

  total_questions: Number(
    values.totalQuestions
  ),
});

      toast.success("Test created successfully");
      reset();
    } catch (error) {
      console.error(error);

      toast.error("Failed to create test");
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <TestBasicInfo register={register} errors={errors} />

      <SubjectTopicSection
        register={register}
        errors={errors}
        subjectId={selectedSubject}
        selectedTopics={selectedTopics}
        setValue={setValue}
      />

      <MarkingSchemeSection register={register} errors={errors} />

      <TestStatsSection register={register} errors={errors} />

      <div className="flex justify-end">
        <Button
          type="submit"
          isLoading={createTestMutation.isPending}
          loadingText="Creating..."
        >
          Create Test
        </Button>
      </div>
    </form>
  );
};

export default CreateTestForm;

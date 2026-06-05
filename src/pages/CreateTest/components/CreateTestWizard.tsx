import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { Button, FormField, Input, Select,Skeleton } from "@/components/common";

import {
  createTestSchema,
  type CreateTestFormData,
} from "../schemas/createTest.schema";

import { useSubjects } from "../hooks/api/useSubjects";

import { useTopics } from "../hooks/api/useTopics";

import { useSubTopics } from "../hooks/api/useSubTopics";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";



import {
  saveTestDetails,
  clearTestDetails,
} from "@/store/testCreation/testCreationSlice";

import TestTypeTabs from "./TestTypeTabs";
import DifficultyRadioGroup from "./DifficultyRadioGroup";
import MarkingSchemeRow from "./MarkingSchemeRow";

const CreateTestWizard = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const savedTest = useAppSelector((state) => state.testCreation.testDetails);

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTestFormData>({
    resolver: zodResolver(createTestSchema),

    defaultValues: savedTest ?? {
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

  const {
  data: subjects = [],
  isLoading: subjectsLoading,
} = useSubjects();

  const { data: topics = [] } = useTopics(selectedSubject);

  const { data: subTopics = [] } = useSubTopics(selectedTopics);

  const onNext = (values: CreateTestFormData) => {
    dispatch(saveTestDetails(values));

    toast.success("Test details saved");

    navigate("/questions");
  };

  const handleCancel = () => {
    reset();

    dispatch(clearTestDetails());

    navigate("/dashboard");
  };
if (subjectsLoading) {
  return (
    <div className="space-y-8">
      <Skeleton className="h-10 w-80" />

      <div className="grid gap-8 md:grid-cols-2">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />

        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />

        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>

      <Skeleton className="h-40 w-full" />

      <div className="flex justify-end gap-4">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  );
}
  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-8" noValidate>
      <TestTypeTabs />

      <div className="grid gap-8 md:grid-cols-2">
        <FormField label="Subject" required>
          <Select
            placeholder="Choose from Drop-down"
            options={subjects.map((subject) => ({
              label: subject.name,
              value: subject.id,
            }))}
            error={errors.subject?.message}
            {...register("subject")}
          />
        </FormField>

        <FormField label="Name of Test" required>
          <Input
            placeholder="Enter name of Test"
            error={errors.name?.message}
            {...register("name")}
          />
        </FormField>

        <FormField label="Topic" required>
          <Select
            placeholder="Choose from Drop-down"
            options={topics.map((topic) => ({
              label: topic.name,
              value: topic.id,
            }))}
            disabled={!selectedSubject}
            value={watch("topics")[0] ?? ""}
            onChange={(e) => {
              setValue("topics", [e.target.value]);

              setValue("subTopics", []);
            }}
          />
          {errors.topics && (
            <p className="mt-1 text-sm text-red-500">{errors.topics.message}</p>
          )}
        </FormField>

        <FormField label="Sub Topic">
          <Select
            placeholder="Choose from Drop-down"
            options={subTopics.map((subTopic) => ({
              label: subTopic.name,
              value: subTopic.id,
            }))}
            disabled={selectedTopics.length === 0}
            value={watch("subTopics")[0] ?? ""}
            onChange={(e) => setValue("subTopics", [e.target.value])}
          />
          {errors.subTopics && (
            <p className="mt-1 text-sm text-red-500">
              {errors.subTopics.message}
            </p>
          )}
        </FormField>

        <FormField label="Duration (Minutes)" required>
          <Input
            placeholder="Enter the time"
            error={errors.totalTime?.message}
            {...register("totalTime")}
          />
        </FormField>

        <FormField label="Test Difficulty Level" required>
          <DifficultyRadioGroup
            value={watch("difficulty")}
            onChange={(value) => setValue("difficulty", value)}
          />

          {errors.difficulty && (
            <p className="mt-1 text-sm text-red-500">
              {errors.difficulty.message}
            </p>
          )}
        </FormField>
      </div>

      <MarkingSchemeRow register={register} errors={errors} />

      <div className="flex justify-end gap-4">
        <Button type="button" variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>

        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};

export default CreateTestWizard;

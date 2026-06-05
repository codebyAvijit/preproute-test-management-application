import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { useAppSelector } from "@/hooks/redux";

import { validateQuestion } from "../utils/validateQuestion";

import Button from "@/components/common/Button/Button";

const QuestionBuilderHeader = () => {
  const navigate = useNavigate();

  const questions = useAppSelector((state) => state.questions.questions);

  const handlePublish = () => {
    if (questions.length === 0) {
      toast.error("Please create at least one question");

      return;
    }

   for (
  let i = 0;
  i < questions.length;
  i++
) {
  const error =
    validateQuestion(
      questions[i]
    );

  if (error) {
    toast.error(
      `Question ${i + 1}: ${error}`
    );

    return;
  }
}

    navigate("/preview");
  };

  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-slate-500">
        Test Creation / Create Test / Chapter Wise
      </div>

      <Button onClick={handlePublish}>Publish</Button>
    </div>
  );
};

export default QuestionBuilderHeader;

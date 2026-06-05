import { useNavigate } from "react-router-dom";

import Button from "@/components/common/Button/Button";

const QuestionBuilderHeader = () => {
  const navigate =
    useNavigate();

  const handlePublish = () => {
    navigate("/preview");
  };

  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-slate-500">
        Test Creation / Create Test / Chapter Wise
      </div>

      <Button
        onClick={handlePublish}
      >
        Publish
      </Button>
    </div>
  );
};

export default QuestionBuilderHeader;
import Button from "@/components/common/Button/Button";

const QuestionBuilderHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-slate-500">
        Test Creation / Create Test / Chapter Wise
      </div>

      <Button>
        Publish
      </Button>
    </div>
  );
};

export default QuestionBuilderHeader;
import Button from "@/components/common/Button/Button";

import { useAppDispatch } from "@/hooks/redux";

import {
  createNewQuestion,
} from "@/store/questions/questionsSlice";

const ActionFooter = () => {
  const dispatch =
    useAppDispatch();

  const handleNext = () => {
    dispatch(
      createNewQuestion()
    );
  };

  return (
    <div className="flex justify-between">
      <Button
        variant="danger"
      >
        Exit Test Creation
      </Button>

      <Button
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
};

export default ActionFooter;
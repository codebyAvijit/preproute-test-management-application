import Button from "@/components/common/Button/Button";

import { useAppDispatch } from "@/hooks/redux";
import { useNavigate } from "react-router-dom";
import {
  createNewQuestion,
  clearQuestions,
} from "@/store/questions/questionsSlice";
import { clearTestDetails } from "@/store/testCreation/testCreationSlice";

const ActionFooter = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    dispatch(clearQuestions());

    dispatch(clearTestDetails());

    navigate("/create-test");
  };
  const dispatch = useAppDispatch();

  const handleNext = () => {
    dispatch(createNewQuestion());
  };

  return (
    <div className="flex justify-between">
      <Button variant="danger" onClick={handleExit}>
        Exit Test Creation
      </Button>

      <Button onClick={handleNext}>Next</Button>
    </div>
  );
};

export default ActionFooter;

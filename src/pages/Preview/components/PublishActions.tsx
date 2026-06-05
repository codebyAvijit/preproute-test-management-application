import { useNavigate } from "react-router-dom";

import Button from "@/components/common/Button/Button";

const PublishActions = () => {
  const navigate =
    useNavigate();

  const handleCancel = () => {
    navigate("/questions");
  };

  const handleConfirm = () => {
    navigate("/success");
  };

  return (
    <div className="flex justify-end gap-4">
      <Button
        variant="secondary"
        onClick={handleCancel}
      >
        Cancel
      </Button>

      <Button
        onClick={handleConfirm}
      >
        Confirm
      </Button>
    </div>
  );
};

export default PublishActions;
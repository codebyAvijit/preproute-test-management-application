import Button from "@/components/common/Button/Button";

const ActionFooter = () => {
  return (
    <div className="flex justify-between">
      <Button variant="danger">
        Exit Test Creation
      </Button>

      <Button>
        Next
      </Button>
    </div>
  );
};

export default ActionFooter;
import Button from "@/components/common/Button/Button";

const PublishActions = () => {
  return (
    <div className="flex justify-end gap-4">
      <Button variant="secondary">
        Cancel
      </Button>

      <Button>
        Confirm
      </Button>
    </div>
  );
};

export default PublishActions;
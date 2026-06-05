import { useNavigate } from "react-router-dom";

import Button from "@/components/common/Button/Button";

const SuccessPage = () => {
  const navigate =
    useNavigate();

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-10 text-center">
        <div className="mb-6 text-6xl">
          🎉
        </div>

        <h1 className="mb-4 text-3xl font-bold">
          Test Published Successfully
        </h1>

        <p className="mb-8 text-slate-500">
          Your test is now ready and available for students.
        </p>

        <div className="flex justify-center gap-4">
          <Button
            variant="secondary"
            onClick={() =>
              navigate("/dashboard")
            }
          >
            Dashboard
          </Button>

          <Button
            onClick={() =>
              navigate("/create-test")
            }
          >
            Create New Test
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
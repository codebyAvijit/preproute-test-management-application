import { useNavigate } from "react-router-dom";

import Button from "@/components/common/Button/Button";

import { useTests } from "./hooks/useTests";

import { toast } from "react-hot-toast";

import type { Test } from "@/types/test.types";
import Skeleton  from "@/components/common/Skeleton/Skeleton";

const DashboardPage = () => {
  const navigate = useNavigate();

  const { data: tests = [], isLoading } = useTests();


if (isLoading) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-32" />
        </div>

        <Skeleton className="h-10 w-32" />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        {[...Array(6)].map((_, index) => (
          <Skeleton
            key={index}
            className="mb-3 h-14 w-full"
          />
        ))}
      </div>
    </div>
  );
}

  if (tests.length === 0) {
    return (
      <div className="space-y-6">
       <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Test Dashboard</h1>

            <p className="text-sm text-slate-500">Manage all tests.</p>
          </div>

          <Button onClick={() => navigate("/create-test")}>Create Test</Button>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
          <h3 className="text-xl font-semibold">No Tests Found</h3>

          <p className="mt-2 text-slate-500">
            Create your first test to get started.
          </p>

          <div className="mt-6">
            <Button onClick={() => navigate("/create-test")}>
              Create Test
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Test Dashboard</h1>

          <p className="text-sm text-slate-500">Manage all tests.</p>
        </div>

        <Button onClick={() => navigate("/create-test")}>Create Test</Button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
       <table className="min-w-[900px] w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">
                Test Name
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">
                Subject
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">
                Questions
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {tests.map((test: Test) => (
              <tr key={test.id} className="border-t border-slate-200">
                <td className="px-6 py-4">{test.name}</td>

                <td className="px-6 py-4">{test.subject}</td>

                <td className="px-6 py-4">
                  <span
                    className={
                      test.status === "live"
                        ? "rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700"
                        : "rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700"
                    }
                  >
                    {test.status ?? "draft"}
                  </span>
                </td>

                <td className="px-6 py-4">{test.total_questions}</td>

                <td className="px-6 py-4">
                 <div className="flex flex-col gap-2 lg:flex-row">
                    <Button
                      variant="secondary"
                      onClick={() => navigate(`/create-test?testId=${test.id}`)}
                    >
                      Edit
                    </Button>

                    <Button
                      variant="danger"
                      onClick={() =>
                        toast.error(
                          "Delete functionality is unavailable because no delete API was provided.",
                        )
                      }
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;

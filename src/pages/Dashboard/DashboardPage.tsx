import { useNavigate } from "react-router-dom";

import Button from "@/components/common/Button/Button";

import { useTests } from "./hooks/useTests";

const DashboardPage = () => {
  const navigate = useNavigate();

  const {
    data: tests = [],
    isLoading,
  } = useTests();

  if (isLoading) {
    return (
      <div className="p-6">
        Loading tests...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">
            Test Dashboard
          </h1>

          <p className="text-sm text-slate-500">
            Manage all tests.
          </p>
        </div>

        <Button
          onClick={() =>
            navigate("/create-test")
          }
        >
          Create Test
        </Button>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="w-full">
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
            {tests.map((test) => (
              <tr
                key={test.id}
                className="border-t border-slate-200"
              >
                <td className="px-6 py-4">
                  {test.name}
                </td>

                <td className="px-6 py-4">
                  {test.subject}
                </td>

                <td className="px-6 py-4">
                  {test.status}
                </td>

                <td className="px-6 py-4">
                  {
                    test.total_questions
                  }
                </td>

                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                    >
                      Edit
                    </Button>

                    <Button
                      variant="danger"
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
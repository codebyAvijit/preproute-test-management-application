const ConfirmationHeader = () => {
  return (
    <div>
      <p className="text-sm text-slate-500">
        Test Creation
      </p>

      <div className="mt-4 flex items-center gap-4">
        <h1 className="text-2xl font-semibold">
          Test Created
        </h1>

        <div className="rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm text-emerald-600">
          ✓ All Questions Done
        </div>
      </div>
    </div>
  );
};

export default ConfirmationHeader;
import ConfirmationHeader from "./components/ConfirmationHeader";
import ConfirmationSidebar from "./components/ConfirmationSidebar";
import ConfirmationSummaryCard from "./components/ConfirmationSummaryCard";
import LiveUntilSection from "./components/LiveUntilSection";
import PublishActions from "./components/PublishActions";
import PublishModeTabs from "./components/PublishModeTabs";
import PublishScheduleFields from "./components/PublishScheduleFields";

const PreviewPage = () => {
  return (
    <div className="space-y-6">
      <ConfirmationHeader />

      <div className="grid gap-6 grid-cols-[260px_1fr]">
        <ConfirmationSidebar />

        <div className="space-y-6">
          <ConfirmationSummaryCard />

          <PublishModeTabs />

          <LiveUntilSection />

          <PublishScheduleFields />

          <PublishActions />
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;

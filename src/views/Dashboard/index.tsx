import ReportCard from "@/Components/Dashboard/ReportCard";
import reportCardList from "@/constants/reportCardList";

export default function Dashboard() {
  return (
    <div className="px-8 bg-slate-100 w-full">
      {/* upcoming expiry report  */}
      <div className="">
        <h5 className="">Upcoming Expiry Report</h5>
        <div className="grid gap-10 grid-cols-2">
          {reportCardList.map((report) => (
            <ReportCard
              members={report.members}
              description={report.description}
            />
          ))}
        </div>
      </div>
      {/* registration report  */}
      <div>
      <h5 className="">Registration Report</h5>
        <div className="grid gap-10 grid-cols-2">
          {reportCardList.map((report) => (
            <ReportCard
              members={report.members}
              description={report.description}
            />
          ))}
        </div>
      </div>
      {/* payment report  */}
      <div className="grid gap-10 grid-cols-2">
        {reportCardList.map((report) => (
          <ReportCard
            members={report.members}
            description={report.description}
          />
        ))}
      </div>
    </div>
  );
}

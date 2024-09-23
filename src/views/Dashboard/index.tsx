import ReportCard from "@/Components/Dashboard/ReportCard";
import Icon from "@/Components/common/Icon";
import reportCardList from "@/constants/reportCardList";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full gap-3 h-[8rem]   bg-gradient-to-r flex  pl-4 items-end pb-4 justify-between pr-6  from-rose-600 from-20% to-rose-900 to-80%">
        <div className="flex gap-3 h-8  justify-center items-center ">
          <Icon name="menu" className="text-white !text-2xl font-bold"></Icon>
          <h4 className="text-white">Dashboard</h4>
        </div>
        <div>
          <Icon
            name="notifications"
            className="text-white !text-2xl font-bold"
            symbolName="material-icons"
          />
        </div>
      </div>
      <div className=" bg-slate-100 px-3 w-full justify-start gap-8 flex flex-col">
        {/* upcoming expiry report  */}
        <div className="flex justify-between gap-3  flex-col w-full">
          <h5 className="w-full ">Upcoming Report</h5>
          <div className="flex justify-between gap-3 flex-wrap w-full ">
            {reportCardList.map((report) => (
              <ReportCard
                members={report.members}
                description={report.description}
              />
            ))}
          </div>
        </div>
        {/* registration report  */}
        <div className="flex justify-between gap-3  flex-col w-full">
          <h5 className="w-full ">Registration Report</h5>
          <div className="flex justify-between gap-3 flex-wrap w-full ">
            {reportCardList.map((report) => (
              <ReportCard
                members={report.members}
                description={report.description}
              />
            ))}
          </div>
        </div>
        {/* payment report  */}
        <div className="flex justify-between gap-3  flex-col w-full">
          <h5 className="w-full ">Payment Report</h5>
          <div className="flex justify-between gap-3 flex-wrap w-full ">
            {reportCardList.map((report) => (
              <ReportCard
                members={report.members}
                description={report.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

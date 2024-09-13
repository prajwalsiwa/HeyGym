import DateSwitch from "./DateSwitch";
import CustomBarChart from "../Charts/BarChart";


export type dateObj = {
  id: number;
  name: string
}

const dateList: dateObj[] = [{
  id:1,
  name: 'Weekly'

  
},{
  id:1,
  name: 'Monthly'

  
},{
  id:1,
  name: 'Yearly'
},
// {
//   id:4,
//   name: 'Semi Annually'
// }
]


const sampleData = [
  { name: 'Prajwal', value: 20 },
  { name: 'John', value: 30 },
  { name: 'Jane', value: 40 },
];

const ChartFills = [
  '#F43F5E', // Rose 500
  '#FB7185', // Rose 400
  '#FDA4AF', // Rose 300
  '#FECDD3', // Rose 200
  '#FFE4E6', // Rose 100
];

function Statistics() {
  return (
    <div className="h-[74%] py-0.5 px-2 justify-center flex items-center  bottom-0 rounded-t-3xl absolute w-full border-box bg-white">
      <div className="h-[98%] flex-col py-4 items-center gap-4  flex justify-center w-full bg-slate-200 rounded-3xl">
      <DateSwitch date={dateList} />
      <div className="h-full w-[90%]">
    <CustomBarChart data={sampleData} fills={ChartFills} yAxisLabel="Amount in numbers" /> 
      </div>
      </div>
      {/* <ToggleSwitch date={dateList} /> */}
    </div>
  );
}

export default Statistics;

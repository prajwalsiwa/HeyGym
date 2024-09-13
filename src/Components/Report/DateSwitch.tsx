import { Button } from "../common/Button";
import { dateObj } from "./Statistics";

interface dateSwitchProps {
  date: dateObj[]
}



function DateSwitch({date}: dateSwitchProps) {

  console.log(date,'this is date')
  return (
    <div className="rounded-xl border w-fit h-[3rem] border-rose-400 p-1.5 gap-2 flex justify-between ">
     {
      date.map((item)=> <Button className="px-2 flex justify-center items-center rounded-lg  bg-rose-500 text-white">{item.name}</Button>)
     }
    </div>
  );
}

export default DateSwitch;

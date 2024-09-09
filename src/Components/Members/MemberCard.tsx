import { Button } from "../common/Button";
import Icon from "../common/Icon";

interface memberCardProps {
  image?: string;
  name: string;
  date: string;
  duration: string;
  level: string;
  pack: string;
}

function MemberCard({
  name,
  date,
  duration,
  level,
  pack,
  image,
}: memberCardProps) {
  return (
    <div
      className="border border-gray-300 w-full h-24   rounded-xl p-2 px-3
    flex  items-center justify-between "
    >
      <div className="flex gap-2 h-full items-center">
        <div className="image-section h-16 w-16  rounded-lg overflow-hidden">
          <img src={image} alt="" className="w-full h-full" />
        </div>
        <div className="description h-full py-1 flex flex-col gap-0 ">
          <div className="">
            <span className="text-lg font-medium">{name}</span>
          </div>
          <div className="flex gap-2 h-full  items-start">
            <div className="flex  gap-1  justify-center items-center">
              <Icon name="calendar_month" className="" />
              <span className="text-sm">{date}</span>
            </div>
            <div className="flex  gap-1  justify-center items-center">
              <Icon name="timer" />
              <span className="text-sm">{duration}</span>
            </div>
          </div>
          <div>
            <span className="text-sm">
              {level} - {pack}
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <Button className="bg-gradient-to-r from-blue-500 to-teal-400 hover:from-pink-500 hover:to-orange-500  rounded-lg px-5 py-2">Notify</Button>
      </div>
    </div>
  );
}

export default MemberCard;

import MemberCard from "@/Components/Members/MemberCard";
import memberList from "@/Components/Members/memberList";

function Members() {
  return (
    <div className=" gap-2 h-full bg-white overflow-auto w-full flex flex-col justify-center p-4">
      {memberList?.map((member) => (
        <MemberCard
          key={member.id}
          name={member.name}
          date={member.start_date}
          duration={member.duration}
          level={member.level}
          pack={member.package_type}
          image={member.image_url}
        />
      ))}
    </div>
  );
}

export default Members;

import MemberCard from "@/Components/Members/MemberCard";
import memberList from "@/Components/Members/memberList";

function Members() {
  return (
    <div className="gap-2 pt-6  bg-white w-full flex flex-col justify-start h-full overflow-y-auto px-4">
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

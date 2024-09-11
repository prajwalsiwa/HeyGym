import { useState } from 'react';
import MemberCard from "@/Components/Members/MemberCard";
import memberList from "@/Components/Members/memberList";
import SearchBar from "@/Components/common/SearchBar";

function Members() {
  const [filteredMembers, setFilteredMembers] = useState(memberList);

  const handleSearch = (query: string) => {
    const normalizedQuery = query.toLowerCase();
    const filtered = memberList.filter(member =>
      member.name.toLowerCase().includes(normalizedQuery)
    );
    setFilteredMembers(filtered);
  };

  return (
    <div className="gap-2 pt-6 bg-white w-full flex flex-col justify-start h-full overflow-y-auto px-4">
      <SearchBar placeholder="Search Member here ..." onSubmit={handleSearch} />
      {filteredMembers.length > 0 ? (
        filteredMembers.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            date={member.start_date}
            duration={member.duration}
            level={member.level}
            pack={member.package_type}
            image={member.image_url}
          />
        ))
      ) : (
        <p>No members found</p>
      )}
    </div>
  );
}

export default Members;

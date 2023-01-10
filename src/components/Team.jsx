import { teams } from "../constants/index";
const Team = () => {
  return (
    <div className="bg-bgMain w-full py-[52px]">
      <div className="bg-bgMain w-[80%] mx-auto ">
        <div>
          <h5 className="font-open_sans text-[18px] text-primary leading-6 font-semibold">
            OUR TEAM
          </h5>
          <h1 className="mt-2 font-laila font-bold text-[48px]">
            Meat Our
            <span className="bg-gradient-to-b	from-bgMain to-[#DEE3BF] px-2 leading-10">
              Team
            </span>
          </h1>
        </div>
        <div className="flex justify-between gap-4 mt-[34px]">
          {teams.map((team) => (
            <div key={team.id}>
              <img src={team.image} alt={team.name} />
              <h3 className="font-open_sans text-[22px] leading-[30px] font-semibold mt-4">
                {team.name}
              </h3>
              <p className="font-open_sans text-[16px] leading-[29px] font-normal text-dimText italic">
                {team.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Team;

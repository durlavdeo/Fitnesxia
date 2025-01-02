import arrow from "../../assets/line.svg";

const ProgramCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="px-4 py-4 flex flex-col gap-4 bg-secondary-100 hover:bg-accent-500 cursor-pointer transition-all duration-300 justify-start items-start text-white rounded-xl w-[280px]">
      <img src={imgSrc} alt={`${title}`} width={70} />
      <p className="font-semibold text-xl mt-4">{title}</p>
      <p className="text-[15px] text-gray-200">{desc}</p>
      <a
        href="#"
        className="flex items-center gap-1 cursor-pointer text-gray-200 hover:text-white text-[15px] mt-2"
      >
        Learn More
        <span>
          <img src={arrow} alt="arrow" width={20} />
        </span>
      </a>
    </div>
  );
};

export default ProgramCard;

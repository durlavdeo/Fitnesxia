import CustomButton from "../shared/CustomButton";
import play from "../../assets/play.svg";
import AnimatedNumber from "../shared/AnimatedNumber";
import heroImg from "../../assets/heroImg.png";
import SectionLayout from "../../layouts/SectionLayout";

const Hero = () => {
  return (
    <SectionLayout id={"home"} className="flex bg-primary-300 text-white pt-4 pb-0 pr-10 gap-32 overflow-hidden">
      <div className="flex flex-col gap-8 w-[800px] mt-28">
        <h1 className="text-[50px] font-bold">
          GET HEALTHY BODY WITH THE PERFECT EXERCISES
        </h1>
        <p className="">
          We are always there to help you to make a healthy body and mind
          through the power of fitness.
        </p>
        <div className="flex items-center gap-4">
          <CustomButton text={"Get Started"} />
          <button className="flex items-center gap-2 hover:bg-gray-600 rounded-md p-2">
            <span className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center">
              <img src={play} alt="" width={40} />
            </span>
            <p>Watch Video</p>
          </button>
        </div>
        <div className="flex gap-1 items-center">
          <span className="flex flex-col items-start gap-0">
            <AnimatedNumber color={"white"} extraText={"+"} number={105} />
            <p>Expert Trainers</p>
          </span>
          <span className="h-12 border-l border-gray-300 mx-4"></span>
          <span className="flex flex-col items-start gap-0">
            <AnimatedNumber color={"white"} extraText={"+"} number={970} />
            <p>Member Joined</p>
          </span>
          <span className="h-12 border-l border-gray-300 mx-4"></span>
          <span className="flex flex-col items-start gap-0">
            <AnimatedNumber color={"white"} extraText={"+"} number={135} />
            <p>Fitness Programs</p>
          </span>
        </div>
      </div>
      <div>
        <div className={`relative`}>
          <img src={heroImg} alt="" className="scale-110" />
          <div className="w-fit bg-white shadow-md absolute bottom-44 left-32 rounded-md flex gap-6 px-4 py-3">
            <div>
              <p className="text-gray-900 text-sm">Today&apos;s Calories</p>
              <p className="text-lg text-black">150 Cal</p>
              <p className="mt-3 text-gray-800 text-sm">
                <span className="text-accent-100">+2.75%</span> This Week
              </p>
            </div>
            <div className="flex gap-2 items-end">
              <div className="bg-accent-500 rounded-full w-3 h-10"></div>
              <div className="bg-accent-500 rounded-full w-3 h-14"></div>
              <div className="bg-accent-500 rounded-full w-3 h-11"></div>
              <div className="bg-accent-500 rounded-full w-3 h-16"></div>
              <div className="bg-accent-500 rounded-full w-3 h-12"></div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Hero;

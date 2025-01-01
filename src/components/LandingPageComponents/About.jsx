import about from "../../assets/about.jpg";
import SectionLayout from "../../layouts/SectionLayout";
import CustomButton from "../shared/CustomButton";
import StatCard from "../shared/StatCard";
import deadLift from "../../assets/deadlift.png";

const About = () => {
  return (
    <SectionLayout id={"about"} className={"bg-primary-200 flex items-center gap-48 py-20"}>
      <div className={`w-[450px] h-[350px] rounded-lg shadow-md relative`}>
        <img src={about} alt="" className="w-[450px] h-[350px] rounded-lg" />
        <div className="absolute top-[70%] -right-20">
          <StatCard imgSrc={deadLift} extraText={"Professional Trainer"} />
        </div>
      </div>
      <div className="text-white flex flex-col gap-6 w-96">
        <h1 className="capitalize text-4xl text-white font-bold">
          get ready to reach your fitness goals{" "}
        </h1>
        <p>
          We are a gym that is committed to helping people reach their fitness
          goals. We offer a variety of theirs programs and services to fit your
          needs, whatever you are a experienced athelete. <br />
          <br /> We believe that everyone should have access to the benefits of
          exercise make it happen.
        </p>
        <div>
          <CustomButton text={"Free Trial Today"} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default About;

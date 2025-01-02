import SectionLayout from "../../layouts/SectionLayout";
import CustomButton from "../shared/CustomButton";
import extra from "../../assets/extra.png";
import StatCard from "../shared/StatCard";
import health from "../../assets/health.png";
import fire from "../../assets/fire.png";
import { Helmet } from "react-helmet";

const WhyChooseUs = () => {
  return (
    <SectionLayout className={"bg-primary-200 py-20 text-white flex gap-40"}>
      <Helmet>
        <title>
          Why Choose FITNESXIA: Expert Fitness Training & Personalized Plans
        </title>
        <meta
          name="description"
          content="Discover why FITNESXIA is the best choice for online fitness coaching, personalized fitness programs, and home workout plans. Our expert fitness trainers provide flexible, effective solutions for all fitness levels. Get fit with tailored fitness services that suit your lifestyle."
        />
      </Helmet>
      <div className="flex flex-col gap-8 w-[500px]">
        <h1 className="text-4xl font-bold capitalize">
          why should you choose fitnesxia services
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="flex items-center gap-3">
              {" "}
              <span className="rounded-full bg-accent-500 h-6 w-6 flex items-center justify-center">
                ✓
              </span>
              Personal Training
            </p>
            <p className="text-sm text-gray-300">
              Our personal trainers can help you create a personalized fitness
              plan and track your progress.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="flex items-center gap-3">
              {" "}
              <span className="rounded-full bg-accent-500 h-6 w-6 flex items-center justify-center">
                ✓
              </span>
              Expert Trainer
            </p>
            <p className="text-sm text-gray-300">
              Our personal trainers can help you create a personalized fitness
              plan and track your progress.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="flex items-center gap-3">
              {" "}
              <span className="rounded-full bg-accent-500 h-6 w-6 flex items-center justify-center">
                ✓
              </span>
              Flexible Time
            </p>
            <p className="text-sm text-gray-300">
              Our personal trainers can help you create a personalized fitness
              plan and track your progress.{" "}
            </p>
          </div>
        </div>
        <div>
          <CustomButton text={"Join Today"} />
        </div>
      </div>
      <div className="relative">
        <div className="h-[450px] w-[450px] bg-accent-500 rounded-full overflow-hidden">
          <img src={extra} alt="" />
        </div>
        <div className="absolute top-10 -right-10">
          <StatCard
            heading={"70 bpm"}
            extraText={"Heart Rate"}
            imgSrc={health}
          />
        </div>
        <div className="absolute bottom-16 -left-8">
          <StatCard heading={"24%"} extraText={"Fat Burning"} imgSrc={fire} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default WhyChooseUs;

import SectionLayout from "../../layouts/SectionLayout";
import TestimonialCarousel from "../TestimonialCarousel";
import t1 from "../../assets/t1.jpg";
import t2 from "../../assets/t2.jpg";
import t3 from "../../assets/t3.jpg";
import t4 from "../../assets/t4.jpg";
import curvedArrow from "../../assets/Image.png";
import { Helmet } from "react-helmet";

const imgs = [t1, t2, t3, t4];

const Reviews = () => {
  return (
    <SectionLayout
      id={"testimonials"}
      className={
        "bg-primary-200 text-white flex justify-between items-center pt-20 pb-32"
      }
    >
      <Helmet>
        <title>
          Client Success Stories: Real Results with Our Fitness Programs
        </title>
        <meta
          name="description"
          content="Hear from our clients about how FITNESXIA's online fitness coaching, personalized fitness plans, and home workout programs transformed their fitness journey. Real results, real stories!"
        />
      </Helmet>
      <div className="w-[450px] flex flex-col gap-8 relative">
        <h1 className="capitalize text-4xl font-bold">
          what our happy clients say about us
        </h1>
        <p>
          I&apos;ve been a member of FITNESXIA within for about 6 months now and
          I absolutely love it! The trainers are so motivating and they really
          help to reach fitness goals.
        </p>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-4 rtl:space-x-reverse">
            {imgs.map((img, index) => (
              <img
                key={index}
                className="w-10 h-10 border-2 border-primary-200 rounded-full"
                src={img}
                alt=""
              />
            ))}
            <a
              className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-accent-100 border-2 border-primary-200 rounded-full hover:bg-accent-200 transition-all duration-200"
              href="#"
            >
              +
            </a>
          </div>

          <p>
            ⭐ <span>4.9(450 Reviews)</span>{" "}
          </p>
        </div>
        <img
          src={curvedArrow}
          alt=""
          width={120}
          className="rotate-[35deg] absolute -bottom-28 -right-80"
        />
      </div>
      <div>
        <TestimonialCarousel />
      </div>
    </SectionLayout>
  );
};

export default Reviews;

import { useState } from "react";
import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.jpg";

const testimonials = [
  {
    id: 1,
    image: t1,
    name: "Jane Smith",
    status: "Web Developer",
    rating: 5,
    review:
      "This product exceeded my expectations! Highly recommend to everyone. The user interface is sleek, and the customer support was extremely responsive. I’ve been using it for months now, and it has never let me down. Truly a game-changer in its category.",
  },
  {
    id: 2,
    image: t2,
    name: "John Doe",
    status: "Graphic Designer",
    rating: 4,
    review:
      "A great experience, fantastic support, and a smooth process overall. The functionality is robust, and the ease of integration into our workflow was impressive. I especially loved how intuitive the dashboard is. Highly recommended for teams looking for efficiency.",
  },
  {
    id: 3,
    image: t3,
    name: "Emily Clark",
    status: "Project Manager",
    rating: 4,
    review:
      "Exceptional quality and great customer service. From onboarding to daily use, everything feels seamless. I appreciate the frequent updates and the attention to detail in every feature. It has streamlined our processes remarkably.",
  },
  {
    id: 4,
    image: t4,
    name: "Michael Lee",
    status: "Entrepreneur",
    rating: 5,
    review:
      "Absolutely phenomenal! This tool has helped me scale my business efficiently. The reporting tools are comprehensive, and the automation features save me hours every week. I can’t imagine running my operations without it now.",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const { image, name, status, rating, review } = testimonials[currentIndex];

  return (
    <div className="bg-secondary-100 shadow-md rounded-lg px-6 py-5 w-[350px] text-center text-white relative flex flex-col items-start min-h-[250px]">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full mx-auto mb-4 object-fit"
        />
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-semibold">{name}</h3>
          <p className="text-[10px] text-gray-300">{status}</p>
        </div>
      </div>

      <div className="text-yellow-400 mb-4">{"⭐".repeat(rating)}</div>
      <p className="italic text-sm text-gray-200">
        &apos;&apos;{review}&apos;&apos;
      </p>
      <div className="flex justify-between">
        <button
          onClick={prevTestimonial}
          className="absolute top-[50%] -left-5 shadow-md rounded-full h-10 w-10 bg-gray-300 text-black text-xl cursor-pointer hover:bg-accent-100 hover:text-white transition-all duration-200"
        >
          ❮
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute top-[50%] -right-5 shadow-md rounded-full h-10 w-10 bg-gray-300 text-black text-xl cursor-pointer hover:bg-accent-100 hover:text-white transition-all duration-200"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

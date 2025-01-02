import { useState } from "react";
import SectionLayout from "../../layouts/SectionLayout";
import PricingCard from "../shared/PricingCard";

const pricings = [
  {
    title: "discover",
    price: "$99",
    isPopular: false,
    featureLimit: 2,
  },
  {
    title: "enterprise",
    price: "$299",
    isPopular: true,
    featureLimit: 5,
  },
  {
    title: "professional",
    price: "$199",
    isPopular: false,
    featureLimit: 3,
  },
];

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <SectionLayout
      id={"pricing"}
      className={
        "bg-primary-100 flex flex-col items-center gap-6 text-white py-20 "
      }
    >
      <h1 className="text-4xl font-bold capitalize">choose the best plan</h1>
      <p>
        Choose a plan that right&apos;s right far your growing team. Simple
        pricing & No hidden cahrges.
      </p>
      <div className="inline-flex border-2 border-accent-300 rounded-full mb-6">
        <button
          onClick={() => setIsMonthly(true)}
          className={`px-6 py-3 rounded-full transition-all duration-300 text-white ${
            isMonthly ? "bg-accent-100" : "bg-transparent"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsMonthly(false)}
          className={`px-6 py-3 rounded-full transition-all duration-300 text-white ${
            !isMonthly ? "bg-accent-100 " : "bg-transparent"
          }`}
        >
          Annually
        </button>
      </div>

      <div className="mt-8 flex items-center gap-8">
        {pricings.map((pricing, index) => (
          <PricingCard
            key={index}
            title={pricing.title}
            price={pricing.price}
            isPopular={pricing.isPopular}
            featureLimit={pricing.featureLimit}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default PricingSection;

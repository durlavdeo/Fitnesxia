/* eslint-disable react/prop-types */

const features = ["5 classes per month", "4 group class monthly", "Online class access", "E-book fitness guide", "7 Extra fitness training"]

const PricingCard = ({title, price, isPopular, featureLimit}) => {
  return (
    <div className={` flex flex-col items-center gap-4 text-white w-[320px] rounded-2xl py-8 hover:bg-accent-500 transition-all duration-200 cursor-pointer ${isPopular ? 'bg-accent-500 scale-110' : 'bg-secondary-100' }`}>
        <p className="text-lg uppercase">{title}</p>
        <p className="text-4xl font-semibold mt-5">{price} <span className="text-sm font-normal">/ Per Month</span> </p>
        <ul className="mt-5">
            {
                features.map((feature, index) => (
                    <li key={index} className={`text-[15px] flex items-center gap-2 mb-3 ${featureLimit < index + 1 ? 'text-gray-500' : ''}`}>
                       <span>✓</span> {feature}
                    </li>
                ))
            }
        </ul>
        <button className={`outline-none mt-4 rounded-full border border-white w-[200px] py-3.5 cursor-pointer hover:bg-white hover:text-accent-500 ${isPopular ? 'bg-white text-accent-500' : '' } text-sm transition-all duration-200`}>
            Choose Plan
        </button>
    </div>
  )
}

export default PricingCard
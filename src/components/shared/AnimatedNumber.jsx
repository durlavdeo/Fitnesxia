/* eslint-disable react/prop-types */
import { useSpring, animated } from "@react-spring/web";

const AnimatedNumber = ({ number, color, extraText, fontsize }) => {
  const { value } = useSpring({
    from: { value: 0 },
    value: number,
    delay: 200,
    config: { duration: 1000 },
  });

  return (
    <div className={`flex items-center ${fontsize ? fontsize : 'text-3xl'} font-bold text-${color}`}>
      <animated.div>{value.to((n) => n.toFixed(0))}</animated.div>
      {extraText}
    </div>
  );
};

export default AnimatedNumber;

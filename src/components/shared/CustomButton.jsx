const CustomButton = ({ text }) => {
  return (
    <button className="hover:bg-accent-200 transition-all duration-200 bg-accent-100 text-white rounded-md px-5 py-2.5 min-w-fit font-semibold">
      {text}
    </button>
  );
};

export default CustomButton;

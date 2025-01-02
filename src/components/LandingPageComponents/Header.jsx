import CustomButton from "../shared/CustomButton";
import logo from "/logo.svg";
const Header = () => {
  return (
    <header className="flex justify-between px-40 py-6 bg-primary-300 text-white">
      <div className="flex gap-2 items-center">
        <span>
          {" "}
          <img src={logo} alt="FITNESXIA" width={65} />{" "}
        </span>
        <span className="font-bold text-2xl">FITNESXIA</span>
      </div>
      <nav className="flex items-center gap-12">
        <div className="flex gap-8 items-center">
          <a
            href="#home"
            className="hover:text-accent-400 transition-all duration-200"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-accent-400 transition-all duration-200"
          >
            About Us
          </a>
          <a
            href="#programs"
            className="hover:text-accent-400 transition-all duration-200"
          >
            Program
          </a>
          <a
            href="#pricing"
            className="hover:text-accent-400 transition-all duration-200"
          >
            Membership
          </a>
          <a
            href="#testimonials"
            className="hover:text-accent-400 transition-all duration-200"
          >
            Testimonials
          </a>
        </div>
        <CustomButton text={"Sign Up"} />
      </nav>
    </header>
  );
};

export default Header;

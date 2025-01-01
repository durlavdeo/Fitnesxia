import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fb from "../../assets/fb.svg"
import ig from "../../assets/ig.svg"
import twitter from "../../assets/twitter.svg"
import linkedin from "../../assets/linkedin.svg"

const Footer = () => {
  return (
    <footer className="px-32 py-16 bg-primary-100 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">Company</h3>
          <ul className="mt-4 flex flex-col gap-3 text-[14px] text-gray-300">
            <a className="hover:text-white transition-all duration-200 cursor-pointer">
              About Us
            </a>
            <a className="hover:text-white transition-all duration-200 cursor-pointer">
              Why us
            </a>
            <a className="hover:text-white transition-all duration-200 cursor-pointer">
              Security
            </a>
            <a className="hover:text-white transition-all duration-200 cursor-pointer">
              Partnership
            </a>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Categories</h3>
          <ul className="mt-4 flex flex-col gap-3 text-[14px] text-gray-300">
            <a className="hover:text-white transition-all duration-200 cursor-pointer">
              Basic Yoga
            </a>
            <a className="hover:text-white transition-all duration-200 cursor-pointer">
              Strength Training
            </a>
            <a className="hover:text-white transition-all duration-200 cursor-pointer">
              Body Building
            </a>
            <a className="hover:text-white transition-all duration-200 cursor-pointer">
              Weight Lost
            </a>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Help</h3>
          <ul className="mt-4 flex flex-col gap-3 text-[14px] text-gray-300">
            <a className="hover:text-white transition-all duration-200 cursor-pointer">
              Account
            </a>
            <a className="hover:text-white transition-all duration-200 cursor-pointer">
              Support Center
            </a>
            <a className="hover:text-white transition-all duration-200 cursor-pointer">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-all duration-200 cursor-pointer">
              Terms & Conditions
            </a>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Contact US</h3>
          <ul className="mt-4 flex flex-col gap-3 text-[14px] text-gray-300">
            <li className="hover:text-white transition-all duration-200 cursor-pointer flex items-center gap-3">
              <span>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-accent-100 text-xl"
                />{" "}
              </span>{" "}
              +1 (406) 555-0120
            </li>
            <a
              href="#"
              className="hover:text-white transition-all duration-200 cursor-pointer flex items-center gap-3"
            >
              <span>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-accent-100 text-xl"
                />
              </span>{" "}
              example@email.com
            </a>
            <li className="hover:text-white transition-all duration-200 cursor-pointer flex items-center gap-3">
              <span>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-accent-100 text-xl"
                />
              </span>{" "}
              2464 Royal Ln. Mesa, New Jersey 45463
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold w-fit">
            Subscribe Our Newsletter
          </h3>
          <div className="flex justify-between items-center rounded-full bg-white overflow-hidden p-1.5 mt-4">
            <input
              type="email"
              name="newsletter-email"
              id="email"
              className="px-3 py-2 outline-none text-gray-500 text-[15px] w-[85%]"
              placeholder="Enter your email"
            />
            <button className="h-10 w-10 bg-accent-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-accent-200 transition-all duraiton-200">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="text-white text-xl"
              />
            </button>
          </div>
          <p className="text-[14px] text-gray-300 mt-4">
            Never miss an update & news to your email.
          </p>
        </div>
      </div>
      <div className="w-full border mt-10 border-secondary-100"></div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={"/logo.svg"} alt="" width={60} />
          <h3 className="text-xl font-semibold">FITNESXIA</h3>
        </div>
        <p className="text-sm text-gray-400">
            &copy;2023 DurlavDeo. All Copyrights reserved.
        </p>
        <div className="flex gap-3 items-center">
            <span className="bg-gray-300 rounded-full text-primary-100 h-8 w-8 flex justify-center items-center cursor-pointer shadow-md hover:bg-gray-200 transition-all duration-200">
              <img src={fb} alt="" width={10} />
            </span>
            <span className="bg-gray-300 rounded-full text-primary-100 h-8 w-8 flex justify-center items-center cursor-pointer shadow-md hover:bg-gray-200 transition-all duration-200">
              <img src={ig} alt="" width={14} />
            </span>
            <span className="bg-gray-300 rounded-full text-primary-100 h-8 w-8 flex justify-center items-center cursor-pointer shadow-md hover:bg-gray-200 transition-all duration-200">
              <img src={twitter} alt="" width={14} />
            </span>
            <span className="bg-gray-300 rounded-full text-primary-100 h-8 w-8 flex justify-center items-center cursor-pointer shadow-md hover:bg-gray-200 transition-all duration-200">
              <img src={linkedin} alt="" width={14} />
            </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



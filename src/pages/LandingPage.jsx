import Header from "../components/LandingPageComponents/Header";
import Hero from "../components/LandingPageComponents/Hero";
import AnimatedNumber from "../components/shared/AnimatedNumber";
import SectionLayout from "../layouts/SectionLayout";
import hubspot from "../assets/hubsopt.svg";
import videoask from "../assets/videoask.svg";
import mapbox from "../assets/mapbox.svg";
import About from "../components/LandingPageComponents/About";
import Programs from "../components/LandingPageComponents/Programs";
import PricingSection from "../components/LandingPageComponents/Pricing";
import Reviews from "../components/LandingPageComponents/Reviews";
import Footer from "../components/LandingPageComponents/Footer";
import WhyChooseUs from "../components/LandingPageComponents/WhyChooseUs";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionLayout
          className={
            "flex justify-between items-center bg-primary-100 text-white py-6"
          }
        >
          <div className="flex flex-col gap-0 items-start">
            <div className="flex items-center gap-2">
              <AnimatedNumber
                extraText={"+"}
                number={970}
                fontsize={"text-[50px]"}
              />{" "}
              <span className="text-[50px] font-bold">More</span>
            </div>
            <p className="m-0">Trusted Companied Partner</p>
          </div>
          <div className="flex gap-10 items-center">
            <span>
              <img src={videoask} alt="" width={200} />
            </span>
            <span>
              <img src={hubspot} alt="" width={150} />
            </span>
            <span>
              <img src={mapbox} alt="" width={200} />
            </span>
          </div>
        </SectionLayout>
        <About />
        <Programs />
        <WhyChooseUs />
        <PricingSection />
        <Reviews />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;

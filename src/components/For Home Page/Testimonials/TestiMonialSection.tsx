import TestimonialCard from "./Testimonial Card/TestimonialCard";
import Slider from "react-slick";
import "./TestiMonialSection.css";
import { settingsForTestimonialSliders } from "../../../utils/Slick Slider Settings/settingsForTestimonialSlider";

const TestiMonialSection = () => {
  return (
    <div>
      <h2 className="text-4xl text-[#2A4D5E] font-bold text-center mt-20">
        Testimonials
      </h2>
      <hr className="border-1 w-3/4 mx-auto my-5" />
      <div className="testimonial-slider shadow-lg rounded-lg w-[95%] mx-auto">
        <Slider {...settingsForTestimonialSliders}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Slider>
      </div>
    </div>
  );
};

export default TestiMonialSection;

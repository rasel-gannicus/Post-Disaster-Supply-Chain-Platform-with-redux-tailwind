import TestimonialCard from "./Testimonial Card/TestimonialCard";
import Slider from "react-slick";
import "./TestiMonialSection.css";
import { settingsForTestimonialSliders } from "../../../utils/Slick Slider Settings/settingsForTestimonialSlider";
import { useGetTestimonialsQuery } from "../../../Redux/app/supply slice/supplyApi";

const TestiMonialSection = () => {
  const {data, isLoading, isError, error} = useGetTestimonialsQuery(undefined) ;
  let content = null;
  if (isLoading && !isError) {
      content = <h1>Loading...</h1>
  }
  if (!isLoading && isError) {
      content = <p>Error happened</p>
  }
  if (!isLoading && !isError && data.length === 0) {
      content = <p>No Supply Found</p>
  }
  if (!isLoading && !isError && data.length > 0) {
      content = data.map((index) => <TestimonialCard key={index._id} data={index}  />)
  }
  return (
    <div>
      <h2 className="text-4xl text-[#2A4D5E] font-bold text-center mt-20">
        Testimonials
      </h2>
      <hr className="border-1 w-3/4 mx-auto my-5" />
      <div className="testimonial-slider shadow-lg rounded-lg w-[95%] mx-auto">
        <Slider {...settingsForTestimonialSliders}>
          {content}
        </Slider>
      </div>
    </div>
  );
};

export default TestiMonialSection;

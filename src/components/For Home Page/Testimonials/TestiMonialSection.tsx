import TestimonialCard from "./Testimonial Card/TestimonialCard";

const TestiMonialSection = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-20">
        View Our Supplies
      </h2>
      <hr className="border-1 w-3/4 mx-auto my-5" />
      <div className="py-5 grid md:grid-cols-3 gap-6 px-5 ">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default TestiMonialSection;

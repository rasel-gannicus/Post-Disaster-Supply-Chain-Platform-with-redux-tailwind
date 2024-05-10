import TestimonialCard from "./Testimonial Card/TestimonialCard";

const TestiMonialSection = () => {
    return (
        <div  className="py-5 grid md:grid-cols-3 gap-6 px-5 ">
            <TestimonialCard /> 
            <TestimonialCard /> 
            <TestimonialCard /> 
        </div>
    );
};

export default TestiMonialSection;
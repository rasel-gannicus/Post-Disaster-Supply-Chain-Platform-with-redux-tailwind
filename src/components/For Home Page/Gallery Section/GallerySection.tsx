import Slider from "react-slick";
import {
  settingsForGallery,
} from "../../../utils/Slick Slider Settings/settingsForTestimonialSlider";
import GalleryCard from "./GalleryCard";
import "./GallerySection.css";
import { arrayForGalleryImage } from "../../../utils/arrayForGalleryImage/arrayForGalleryImage";

const GallerySection = () => {
   
  return (
    <div className=" my-40 gallery-slider-section shadow-2xl py-20 rounded-xl">
      <div className="absolute bg-black top-0 bottom-0 left-0 right-0 opacity-80 "></div>
      <Slider {...settingsForGallery}>
        {arrayForGalleryImage.map((index) => <GalleryCard src={index} />)}
      </Slider>
    </div>
  );
};

export default GallerySection;

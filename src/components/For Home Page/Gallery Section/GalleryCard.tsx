const GalleryCard = ({src} ) => {
  return (
    <div className="m-5 bg-base-100  shadow-lg">
      <img
        src={src}
        alt=""
      />
    </div>
  );
};

export default GalleryCard;

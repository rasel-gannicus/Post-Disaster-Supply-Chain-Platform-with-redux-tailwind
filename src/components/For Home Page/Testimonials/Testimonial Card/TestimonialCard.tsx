const TestimonialCard = (data) => {
  const datas = data.data ;
  return (
    <div className="mx-5 card glass bg-base-100  py-5 my-5">
      <figure className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2">
        <img
          src={datas.profile_picture}
          alt="Shoes"
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <div className=" text-center mb-3">
          {datas.testimonial}
        </div>
        <hr />
        <div className="text-center">
          <h2 className="font-semibold text-2xl text-teal-600">{data.name}</h2>
          <p className="text-gray-400"><span className="font-semibold">{datas.position}</span>, <span className="text-teal-700 font-semibold">{datas.company}</span> </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

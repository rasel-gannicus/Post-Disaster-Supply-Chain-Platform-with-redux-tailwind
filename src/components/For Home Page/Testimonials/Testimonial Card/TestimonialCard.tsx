const TestimonialCard = () => {
  return (
    <div className="card  w-full bg-base-100 shadow-xl border-4 py-5 ">
      <figure className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2">
        <img
          src="https://i.ibb.co/JsTcbXF/hacker.png"
          alt="Shoes"
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <div className=" text-center mb-3">
          life One day however a small line of blind text by the name of Lorem
          Ipsum from far
        </div>
        <hr />
        <div className="text-center">
          <h2 className="font-semibold text-2xl text-teal-600">Mr. Jonathan</h2>
          <p className="text-gray-400">Founder, New Jersey Security</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

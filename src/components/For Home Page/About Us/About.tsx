const About = () => {
  return (
    <div>
      <h2 className="text-center text-6xl font-semibold">About Us</h2>
      <div className="">
        <h2 className="text-center text-5xl my-5">
          We are an Globian non-profit organization that <span className="text-teal-600 font-bold">supports</span> good causes
          and positive change all over the world.
        </h2>
        <div className="grid md:grid-cols-3 my-20 gap-3">
          <div className="">
            <h2 className="font-bold text-3xl mb-7">Our Mission </h2>
            <p className="text-2xl">
              The CharityPress community was named a “Top 25 Best Global
              Philanthropist” by Barron’s. We beat Oprah. And, Mashable named
              CharityPress something like that.
            </p>
          </div>
          <div className="">
            <h2 className="font-bold text-3xl mb-7">Our Vision </h2>
            <p className="text-2xl">
              The Globian Fund for Charities seeks positive change around the
              world through support of non-profit organizations dedicated to
              social, cultural.
            </p>
          </div>
          <div className="">
            <h2 className="font-bold text-3xl mb-7">Our Values </h2>
            <p className="text-2xl">
              Accountability, Reliability, Cost-effectiveness, Personal service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

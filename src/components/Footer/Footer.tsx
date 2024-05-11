import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section text-white ">
      <div className="lg:max-w-[1200px] max-w-full  md:mx-auto mx-5 px-3 py-20 ">
        <div className="">
          <div className="flex gap-1 justify-center items-center bg-white text-black max-w-72 py-4 mx-auto rounded-lg mb-10">
            <div className="border-[3px] w-10 h-10 border-slate-400 rounded-full p-1 mr-2 overflow-hidden">
              <img src="logo.png" className="" alt="" />
            </div>

            <p className="font-semibold text-2xl ">Community Health</p>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-3 my-5">
          <span>
            <img className="w-10" src="placeholder.png" alt="" />
          </span>
          <p className="text-1xl ">Uttara, Dhaka</p>
        </div>
        <div className=" flex justify-center items-center gap-3 my-5">
          <span>
            <img className="w-10" src="old-phone.png" alt="" />
          </span>
          <p className="text-1xl">+8801716707031</p>
        </div>
        <div className=" flex justify-center items-center gap-3 my-5">
          <span>
            <img className="w-10" src="mail.png" alt="" />
          </span>
          <p className="text-1xl">shafikrasel5@gmail.com</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img
            className="w-8"
            src="https://i.ibb.co/tB9HhgW/facebook.png"
            alt=""
          />
          {/* <img className="w-8" src="https://i.ibb.co/0sh2Gtn/google-1.png" alt="" /> */}
          <img
            className="w-8"
            src="https://i.ibb.co/MGhDQ6K/social.png"
            alt=""
          />
          <img className="w-8" src="twitter.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

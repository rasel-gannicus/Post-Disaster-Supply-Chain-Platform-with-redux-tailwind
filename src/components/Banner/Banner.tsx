import './Banner.css' ;

const Banner = () => {
    return (
        <div className="banner-section flex justify-center items-center">
            <div className='banner-shadow bg-slate-700 z-10'></div>
            <div className=" z-50 relative flex gap-4 flex-col justify-center items-center">
                <h2 className='text-white text-4xl font-bold text-center'>Community Health and <br /> Medical Supply Chain Platform</h2>
                <button className="btn bg-regal-red border-none text-white" >View All Supplies</button>
            </div>
        </div>
    );
};

export default Banner;
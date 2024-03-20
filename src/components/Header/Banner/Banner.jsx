
const Banner = () => {
    return (
        <div>
            <section className="mx-auto">
            <div className="hero min-h-screen drop-shadow-2xl" style={{backgroundImage: "url('../../../src/assets/images/cover.jpg')", clipPath: "polygon(0 0, 100% 0%, 100% 90%, 0% 100%)"}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold"><span className="text-red-600">XON</span>XONI FRIENDS & <span className="text-green-600">FAMILY</span></h1>
                    <p className="mb-5">Welcome to XONXONI F&F, the haven for creative minds, adventurous spirits, hopeless romantics, intellects, brave hearts, and unique friendships.</p>
                    <button className="btn bg-gradient-to-r from-[#ced4da] from-10% via-[#dee2e6] via-30% to-[#ced4da] to-90% hover:from-pink-500 hover:to-yellow-500">Get Started</button>
                  </div>
                </div>
              </div>
        </section>
        </div>
    );
};

export default Banner;
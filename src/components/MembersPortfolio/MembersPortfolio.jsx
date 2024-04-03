import './MembersPortfolio.css'

const MembersPortfolio = () => {
    return (
        <div className="w-[350px] sm:w-[640px] md:w-[768px] lg:w-[1216px] mx-auto ">
            {/* <h1>tho os portfolio</h1>
            <img src="images/members/kawsarCover.jpg" alt="" /> */}
            <div className='flex items-end p-12 justify-end w-full h-full bgi'>
                <div className='flex flex-col justify-between h p-12'>
                    <div className='text-col'>
                        <h1>Like a Genus</h1>
                        <h1>I Love  to <br />
                            Explore <br />
                            The <br />
                            Universe <br />
                        </h1>
                    </div>
                    <div className='para-bol my-4 px-12 py-6'>
                        <p className='parabol-text'>
                            Enthralled by the vastness of space, I, <br />
                            like a genus, traverse celestial realms,  <br />
                            seeking the unknown, discovering  <br />
                            constellations, nebulae, and the  <br />
                            secrets hidden within the universe`&apos`s  <br />
                            enigmatic depths.
                        </p>
                    </div>
                    <div className='flex items-center gap-12'>
                        <button className='gbtn gtext'>More About Me</button>
                        <button className='gbtn gtext'>Follow Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembersPortfolio;
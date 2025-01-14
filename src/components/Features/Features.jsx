import { useEffect, useState } from "react";
// import Slide from "../Slide/Slide";


const Features = () => {

    const [slide, setSlide] = useState([]);

    useEffect( ()=>{
        fetch("slide.json")
        .then(res => res.json())
        .then(data => setSlide(data))
    }, [])
    // console.log(slide)
    return (
        <div>
            <section className="w-[350px] sm:w-[640px] md:w-[768px] lg:w-[1170px] mx-auto my-4 lg:my-8 border-[#d8dee9] drop-shadow-xl border rounded-lg">
                <div className="carousel w-full rounded-lg">
                    <div id="item1" className="carousel-item w-full">
                        <img src="images/slide(1).png" className="w-fit h-fit" alt="Slide 1" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="images/slide2.jpg" className="w-full" alt="Slide 2" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="images/slide3.jpg" className="w-full" alt="Slide 3" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="images/slide4.jpg" className="w-full" alt="Slide 4" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </section>

            {/* {
                slide.map((slide, idx)=> <Slide key={idx} slide={slide}></Slide>)
            } */}
        </div>
    );
};

export default Features;
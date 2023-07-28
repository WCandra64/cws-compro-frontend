import React, { useEffect } from "react";
import Card from "./Card";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { services } from "../data/Services";

const Services = () => {
    // const blogs = blog.slice(-3).toReversed();
    useEffect(() => {
        const slidesContainer = document.querySelector(".slides-container");
        const slide = document.querySelector(".slide");
        const prevButton = document.getElementById("slide-arrow-prev");
        const nextButton = document.getElementById("slide-arrow-next");
        const slideWidth = slidesContainer.clientWidth * 0.25;
        nextButton.addEventListener("click", () => {
            slidesContainer.scrollLeft += slideWidth;
        });
        prevButton.addEventListener("click", () => {
            slidesContainer.scrollLeft -= slideWidth;
        });
    }, []);

    return (
        <div className="w-full pb-8 px-20">
            <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
                <div className="pt-16 pb-10">
                    <h1 className=" mt-10 text-center text-slate-500">
                        LAYANAN
                    </h1>
                    <h1 className="text-3xl font-bold text-center">
                        <span className="text-[#11aaff]">Layanan</span> terbaik yang kami sediakan
                    </h1>
                </div>

                {/* <div className='flex grid grid-cols-2 md:hidden'>
              {service.slice(0,2).map((service, i) => (
                  <div key={i}>
                    <Card artikel={artikel} />
                  </div>
                )
              )}
            </div> */}
                <div className="m-2 relative">
                    <button className="slide-arrow" id="slide-arrow-prev">
                        <BsChevronLeft className="my-auto mx-auto" />
                    </button>

                    <button className="slide-arrow" id="slide-arrow-next">
                        <BsChevronRight className="my-auto mx-auto" />
                    </button>

                    <div className="slides-container flex m-0 p-0 w-full overflow-scroll scroll-smooth">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className={
                                    "slide z-2 bg-slate-900 drop-shadow-md hover:opacity-90 mx-[1%] my-4 hover:cursor-pointer overflow-hidden relative flex-[1_0_23%]"
                                }
                                onClick={() =>
                                    (window.location.href =
                                        "/blogs/" + service.id)
                                }
                            >
                                {/* <div> */}
                                <img
                                    src={"../src/assets/" + service.img}
                                    className="h-80 w-full opacity-50 object-cover"
                                />
                                <div className="absolute px-5 pt-2 pb-6 bottom-0">
                                    <h1 className="text-xl text-white">
                                        {service.title}
                                    </h1>
                                </div>
                                {/* </div> */}
                            </div>
                        ))}
                    </div>
                </div>

                {/* <div className='w-fit rounded-md bg-[#11aaff] hover:bg-[#325ccc] hover:drop-shadow-[1px_4px_4px_rgba(0,0,0,0.3)] hover:cursor-pointer py-2 px-12 m-auto mt-4 text-center' onClick={() => window.location.href = "/blogs"}>
              <span className='text-white font-medium '>Artikel Lainnya</span>
            </div> */}
            </div>
        </div>
    );
};

export default Services;

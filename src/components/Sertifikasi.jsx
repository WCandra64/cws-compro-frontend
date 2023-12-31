import React, { useEffect } from "react";
import Card from "./Card";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { sertifikasi } from "../data/Sertifikasi";

const Services = () => {
    return (
        <div className="w-full pb-24 px-20" id="sertifikasi">
            <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
                <div className="pt-16 pb-10">
                    <h1 className=" mt-10 text-center text-slate-500">
                        SERTIFIKASI
                    </h1>
                    <h1 className="text-3xl font-bold text-center">
                        <span className="text-[#2CACE4]">Sertifikasi Internasional</span> yang kami lakukan
                    </h1>
                </div>

                <div>
                    <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-sm md:max-w-7xl mx-auto">
                        {sertifikasi.map((sertif, i) => (
                            <div key={i} className="flex">
                                <div
                                    className="z-2 hover:bg-slate-100 bg-white drop-shadow-md hover:drop-shadow-none hover:border rounded-2xl mr-2 my-4 p-[1px] hover:p-0 hover:cursor-pointer overflow-hidden flex flex-col w-full"
                                    onClick={() =>
                                        (window.location.href = sertif.link)
                                    }
                                >
                                    <img
                                        src={"../src/assets/" + sertif.img}
                                        className="h-40 w-full object-contain p-4"
                                    />
                                    <div className="px-5 pt-2 pb-4 grow">
                                        <h1 className="pt-1 text-lg font-medium">
                                            {sertif.title} <br />
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Services;

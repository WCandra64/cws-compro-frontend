import React from "react";
// import './App.css'

const SertifikasiMOS = () => {
    return (
        <div className="px-20 py-[10vh] relative">
            <div className="pb-10">
                <h1 className="text-center font-bold text-2xl">
                    MICROSOFT OFFICE SPECIALIST (MOS) IN EXCEL
                </h1>
            </div>

            <img src="../src/assets/cert-mos.png" alt="Logo MOS" className="m-auto pb-10 w-60"/>

            <div className="">
                <p>
                Using Microsoft Excel is one of the most important skills in the job market today. Having solid work knowledge about Excel can improve your job performance, help you qualify for raises and promotions, or even help you get the new job you deserve.<br /> <br />
                This course guides you through using Microsoft Excel from the basics of opening Microsoft Excel to other advanced Microsoft Excel skills used by professionals, such as pivot tables and slicers.<br /> <br />
                It is hoped that after attending this course you will have the skills to use Microsoft Excel in data processing such as filling data, creating and processing tables, performing visual data presentation using graphs, and analyzing data effectively and efficiently using Pivot tables and Slicers.<br />
                </p>
            </div>

            <h1 className="py-10 text-xl font-bold pb-2">COURSE CONTENT</h1>
            <div className="md:grid md:grid-cols-2 gap-6">
                <div>
                    <ul className="list-disc pl-6">
                        <li>Pengenalan Excel, Interface dan Control</li>
                        <li>Manipulasi Row, Column dan Cell</li>
                        <li>Penyimpanan dan Pencetakan</li>
                        <li>Dasar-Dasar Formula</li>
                        <li>Formula Kompleks</li>
                        <li>Sorting, Filtering dan Outlining</li>
                        <li>Worksheet dan Tables</li>
                    </ul>
                </div>
                <div>
                    <ul className="list-disc pl-6">
                        <li>Bekerja dengan Chart dan Sparkline</li>
                        <li>Bekerja dengan Pivot Table</li>
                        <li>Conditional Formatting</li>
                        <li>What-if Analysis</li>
                        <li>Reviewing dan Sharing Workbook</li>
                        <li>Macro Dasar</li>
                        <li>Macro Lanjut</li>
                    </ul>
                </div>
            </div>

            <h1 className="py-16 text-3xl font-bold pb-12 text-center">DAFTAR SEKARANG</h1>
            <div className="md:grid md:grid-cols-2 gap-20">
                <div className="width-full">
                    <div
                        className="card-daftar bg-white drop-shadow-lg hover:drop-shadow-xl border-gray-500 hover:border-yellow-400 border-2 rounded-2xl overflow-hidden w-fit py-6 ml-auto mr-auto md:mr-0 my-1 hover:cursor-pointer"
                        onClick={() =>
                            (window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeInu9k4zsIlX7bWfrAPTH7I4HfcPCAMM0lNOqJlkP2TuNuVQ/viewform")
                        }
                    >
                        <div className="px-5 pt-2 pb-4 text-center">
                            <h2 className="pt-1 text-2xl font-bold text-gray-600">
                                Pelatihan + <br /> Sertifikasi
                            </h2>
                            <h1 className="pt-8 text-3xl font-bold text-[#2C3494]">
                                Rp 950.000
                            </h1>
                            <p className="text-xs pt-1">*belum termasuk pajak 10%</p>
                            {/* <div className="mt-10 bg-yellow-400 py-1 px-6 w-fit m-auto border border-black rounded-md">
                                Daftar
                            </div> */}
                        </div>
                    </div>
                </div>
                
                <div className="width-full">
                    <div
                        className="card-daftar bg-white drop-shadow-lg hover:drop-shadow-xl border-gray-500 hover:border-yellow-400 border-2 rounded-2xl overflow-hidden w-fit py-6 ml-auto mr-auto md:ml-0 mt-8 md:my-1 hover:cursor-pointer"
                        onClick={() =>
                            (window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfEnTPUMiTAkD_rQ3vtUno6S06jGBZ6XsUZFgIm8up9ZoAWKQ/viewform")
                        }
                    >
                        <div className="px-5 pt-2 pb-4 text-center">
                            <h2 className="pt-1 text-2xl font-bold text-gray-600">
                                Sertifikasi <br /> <br />
                            </h2>
                            <h1 className="pt-8 text-3xl font-bold text-[#2C3494]">
                                Rp 600.000
                            </h1>
                            <p className="text-xs pt-1">*belum termasuk pajak 10%</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SertifikasiMOS;

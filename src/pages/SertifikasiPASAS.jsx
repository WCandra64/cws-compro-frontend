import React from "react";
// import './App.css'

const SertifikasiPASAS = () => {
    return (
        <div className="px-20 py-[10vh] relative">
            <div className="pb-10">
                <h1 className="text-center font-bold text-2xl">
                    CERTIFIED INTERNATIONAL SPECIALIST DATA ENGINEERING
                </h1>
            </div>

            <img src="../src/assets/cert-pasas-2.png" alt="Logo MOS" className="m-auto pb-10 w-[30rem]"/>

            <div className="">
                <p>
                Certified International Specialist Data Engineering is a bundling program for training and certification related to data preparation and processing, where the program aims to ensure quality and competency for those who work as Data Engineers so that they can provide additional value related to how to manage and process raw data into data that can be used for the analysis process . In our Certified International Specialist Data Engineering training and exam we will use Talend data integration as a data ETL (Extract, Transform, Load) tool. Talend Data Integration is one of the most popular data processing programs in the business world and is widely used in various circles.
                <br /> <br />
                The program will last for 3 days for classroom or 5 days for virtual classes. You will know how to examines and establishes the fundamental theories, concepts, domains, techniques and terminology that are essential for every business and information technology in various industries professional who is involved in data warehousing. This training also will provide introduction to the design and creation of common relational databases and data warehouse used by industries. How to preparing the data, cleansing the data, combine various data source using ETL tools, create transformation, job and more.
                <br /> <br />
                With International Specialist Data Engineering Exam aims to ensure the Participants understand the importance of data preparation and integration process to implement data warehouse with best practice. In this certification exam, we will test the knowledge how to get the data source, cleansing, manipulating, joining the data and by the end they can create the data warehouse. This course includes a workbook containing the main concepts on each topic discussed and direct activities to strengthen the skills and knowledge gained. It also includes a digital student resource folder containing data sources to support direct activities.
                <br /> <br />
                </p>
            </div>

            <h1 className="py-10 text-xl font-bold pb-2">OUTLINE</h1>
            <div className="md:grid md:grid-cols-2 gap-6">
                <div>
                    <ul className="list-disc pl-6">
                        <li>Introduction to Data Warehousing</li>
                        <li>Implementation, Operation and Expansion of Data Warehouse</li>
                        <li>Introduction to Data Integration tools</li>
                        <li>Working with files</li>
                        <li>Joining data sources</li>
                        <li>Filtering data</li>
                        <li>Using context variables</li>
                    </ul>
                </div>
                <div>
                    <ul className="list-disc pl-6">
                        <li>Error handling</li>
                        <li>Generic schemas</li>
                        <li>Working with databases</li>
                        <li>Creating master Jobs</li>
                        <li>Working with web services</li>
                        <li>Running a stand-alone Job</li>
                        <li>Documenting a Job</li>
                    </ul>
                </div>
            </div>

            <h1 className="py-16 text-3xl font-bold pb-12 text-center">DAFTAR SEKARANG</h1>
            <div className="md:grid md:grid-cols-2 gap-20">
                <div className="width-full">
                    <div
                        className="card-daftar bg-white drop-shadow-lg hover:drop-shadow-xl border-gray-500 hover:border-yellow-400 border-2 rounded-2xl overflow-hidden w-fit py-6 ml-auto mr-auto md:mr-0 my-1 hover:cursor-pointer"
                        onClick={() =>
                            (window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfc9bnhT0PKkFHvNgvHrT6H4PW_ZSYoKdMOeORJgfo_FdPQ5w/viewform")
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

export default SertifikasiPASAS;

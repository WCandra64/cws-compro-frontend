import React from "react";
// import './App.css'

const SertifikasiFSFI = () => {
    return (
        <div className="px-20 py-[10vh] relative">
            <div className="pb-10">
                <h1 className="text-center font-bold text-2xl">
                    FORESEC CERTIFIED IN FORENSIC INVESTIGATOR
                </h1>
            </div>

            <img src="../src/assets/cert-foresec.png" alt="Logo FS" className="m-auto pb-10 w-96"/>

            <div className="">
                <p>
                This program provides participants with knowledge and skills that are essential for carrying out forensic investigator responsibilities in their organization. The first few modules lay groundwork for specialized security topics that covered network operation and design, TCP/IP protocol suite, introduce Port Scanning and understand role that routers play also conclude several topics about physical security.
                <br /> <br />
                </p>
            </div>

            <h1 className="py-10 text-xl font-bold pb-2">COURSE DURATION AND OBJECTIVES</h1>
            <div>
                <ul className="list-disc pl-6">
                    <li>5 DAYS OFFLINE TRAINING or 20 Hours Online Training Mix Beetween Synchronous and Asynchronous</li>
                    <li>
                        At the end of the program, the participants will be able to :
                        <ul className="list-decimal pl-6">
                            <li>Understand and perform penetration testing</li>
                            <li>Recognize method of reconnaissance techniques</li>
                            <li>Perform exploitation techniques and attacks</li>
                            <li>Conduct escapes techniques</li>
                            <li>Prepare proper documentation and reporting</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <h1 className="py-10 text-xl font-bold pb-2">PROGRAM MODULES</h1>
            <div className="md:grid md:grid-cols-2 gap-6">
                <div>
                    <ul className="pl-6">
                        <li><span className='font-bold'>Lesson 1</span> : Introduction to Computer Forensic Investigation</li>
                        <li><span className='font-bold'>Lesson 2</span> : Digital Imaging Process</li>
                        <li><span className='font-bold'>Lesson 3</span> : Media Analysis</li>
                        <li><span className='font-bold'>Lesson 4</span> : Incident Response and Evidence Acquisition</li>
                        <li><span className='font-bold'>Lesson 5</span> : Network Forensic Investigation</li>
                    </ul>
                </div>
                <div>
                    <ul className="pl-6">
                        <li><span className='font-bold'>Lesson 6</span> : Dissecting Protocols</li>
                        <li><span className='font-bold'>Lesson 7</span> : Extracting Log Evidence</li>
                        <li><span className='font-bold'>Lesson 8</span> : Covert Channel</li>
                        <li><span className='font-bold'>Lesson 9</span> : Encrypted Connection Traffic Flow Analysis</li>
                        <li><span className='font-bold'>Lesson 10</span> : Case Study</li>
                    </ul>
                </div>
            </div>

            <h1 className="py-16 text-3xl font-bold pb-12 text-center">DAFTAR SEKARANG</h1>
            <div className="md:grid md:grid-cols-2 gap-20">
                <div className="width-full">
                    <div
                        className="card-daftar bg-white drop-shadow-lg hover:drop-shadow-xl border-gray-500 hover:border-yellow-400 border-2 rounded-2xl overflow-hidden w-fit py-6 ml-auto mr-auto md:mr-0 my-1 hover:cursor-pointer"
                        onClick={() =>
                            (window.location.href = "#")
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
                            (window.location.href = "#")
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

export default SertifikasiFSFI;

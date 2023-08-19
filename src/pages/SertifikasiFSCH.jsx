import React from "react";
// import './App.css'

const SertifikasiFSCH = () => {
    return (
        <div className="px-20 py-[10vh] relative">
            <div className="pb-10">
                <h1 className="text-center font-bold text-2xl">
                    FORESEC CERTIFIED IN COMPUTER HACKING
                </h1>
            </div>

            <img src="../src/assets/cert-foresec.png" alt="Logo FS" className="m-auto pb-10 w-96"/>

            <div className="">
                <p>
                This program provides participants with knowledge and skills to understand perspective of attacker’s tactics and strategies. Introduce the plan and preparation required to perform Penetration Testing at complex and hardening environment. Presents information based on key elements of Pen Testing; Information Gathering, Scanning, Enumeration, Exploitation and Reporting. Appreciate Information Security from the point of view of both System Administrator and Computer Hacker.
                <br /> <br />
                At the end of the training, participants will understand the perspective of computer hacking and perform FCCH certification exam.
                <br /> <br />
                </p>
            </div>

            <h1 className="py-10 text-xl font-bold pb-2">TARGET AUDIENCE</h1>
            <div>
                <p>Network Administrator, Systems Administrator, Network Engineer, Systems Engineer.</p>
            </div>

            <h1 className="py-10 text-xl font-bold pb-2">REQUIREMENT</h1>
            <div>
                <p>Participants are required to have knowledge of Computer Networking Technology, Networking Security or related subjects.</p>
            </div>

            <h1 className="py-10 text-xl font-bold pb-2">AWARD</h1>
            <div>
                <p>Foresec Certified in Computer Hacking Certification will be awarded upon successfully passing the exam from Foresec, through an independent online exam engine, PXmatics.</p>
            </div>

            <h1 className="py-10 text-xl font-bold pb-2">PROGRAM OBJECTIVES</h1>
            <div className="md:grid md:grid-cols-2 gap-6">
                <div>
                    <ul className="pl-6">
                        <li><span className='font-bold'>Lesson 1</span> : Introduction to Penetration Testing</li>
                        <li><span className='font-bold'>Lesson 2</span> : Information Gathering VS Intelligence Gathering</li>
                        <li><span className='font-bold'>Lesson 3</span> : Service Information Gathering</li>
                        <li><span className='font-bold'>Lesson 4</span> : Identification of Vulnerabilities</li>
                        <li><span className='font-bold'>Lesson 5</span> : Exploiting Network Devices</li>
                    </ul>
                </div>
                <div>
                    <ul className="pl-6">
                        <li><span className='font-bold'>Lesson 6</span> : Exploiting Windows Services</li>
                        <li><span className='font-bold'>Lesson 7</span> : Exploiting Linux/Unix Services</li>
                        <li><span className='font-bold'>Lesson 8</span> : Exploiting Application Vulnerabilities</li>
                        <li><span className='font-bold'>Lesson 9</span> : Man in The Middle Attacks</li>
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

export default SertifikasiFSCH;

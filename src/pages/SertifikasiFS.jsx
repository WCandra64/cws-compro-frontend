import React from "react";
// import './App.css'

const SertifikasiFS = () => {
    return (
        <div className="px-20 py-[10vh] relative">
            <div className="pb-10">
                <h1 className="text-center font-bold text-2xl">
                    FORESEC CERTIFIED IN NETWORKING SECURITY
                </h1>
            </div>

            <img src="../src/assets/cert-foresec.png" alt="Logo FS" className="m-auto pb-10 w-96"/>

            <div className="">
                <p>
                This program provides participants with knowledge and skills that are essential for carrying out security responsibilities in their organization. The first few modules lay groundwork for specialized security topics that covered network operation and design, TCP/IP protocol suite, introduce Port Scanning and understand role that routers play also conclude several topics about physical security.
                <br /> <br />
                At the end of the training, participants will understand the fundamental of network security and perform FCNS certification exam.
                <br /> <br />
                </p>
            </div>

            <h1 className="py-10 text-xl font-bold pb-2">PROGRAM OBJECTIVES</h1>
            <div>
                <p>At the end of the program, the participants will be able to :</p>
                <ul className="list-decimal pl-6">
                    <li>Possess the security threat and risk assessment skills</li>
                    <li>Mitigate security risks and threats while designing a security solution</li>
                    <li>Apply the technical know-how to mitigate technical control issues</li>
                </ul>
            </div>

            <h1 className="py-10 text-xl font-bold pb-2">TARGET AUDIENCE</h1>
            <div>
                <p>This program is 5 days of intensive training class. Or 20 hours online learning mix between Synchronous and Asychronous online learning.</p>
            </div>

            <h1 className="py-10 text-xl font-bold pb-2">DURATION</h1>
            <div>
                <p>Foresec Certified in Networking Security Certification will be awarded upon successfully passing the exam from Foresec, through an independent online exam engine, PXmatics.</p>
            </div>

            <h1 className="py-10 text-xl font-bold pb-2">AWARD</h1>
            <div>
                <p>Foresec Certified in Networking Security Certification will be awarded upon successfully passing the exam from Foresec, through an independent online exam engine, PXmatics.</p>
            </div>

            <h1 className="py-10 text-xl font-bold pb-2">COURSE CONTENT</h1>
            <div className="md:grid md:grid-cols-2 gap-6">
                <div>
                    <ul className="pl-6">
                        <li><span className='font-bold'>MODULE 1</span> : UNDERSTANDING INFORMATION SECURITY RISKS</li>
                        <li><span className='font-bold'>MODULE 2</span> : UNDERSTANDING FIREWALL IMPLEMENTATION</li>
                        <li><span className='font-bold'>MODULE 3</span> : HARDENING ROUTER NETWORKS</li>
                        <li><span className='font-bold'>MODULE 4</span> : WIRELESS SECURITY IMPLEMENTATION</li>
                        <li><span className='font-bold'>MODULE 5</span> : DESIGNING SECURITY COMPUTING AND NETWORK ENVIRONMENTS</li>
                    </ul>
                </div>
                <div>
                    <ul className="pl-6">
                        <li><span className='font-bold'>MODULE 6</span> : END USER SECURITY STRATEGY</li>
                        <li><span className='font-bold'>MODULE 7</span> : MANAGING INCIDENT RESPONSE</li>
                        <li><span className='font-bold'>MODULE 8</span> : INTRUSION DETECTION AND PREVENTION</li>
                        <li><span className='font-bold'>MODULE 9</span> : VULNERABILITY MANAGEMENT</li>
                        <li><span className='font-bold'>MODULE 10</span> : CYBER LAW</li>
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

export default SertifikasiFS;

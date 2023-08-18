import React from "react";
// import './App.css'

const Tentang = () => {
    return (
        <div className="px-20 py-[10vh] relative">
            <img src="../src/assets/logo.png" className="absolute z-[-1] opacity-10 max-w-[70%] top-[20%] left-[15%]"/>
            <div className="pb-[8vh]">
                <h1 className="text-center font-bold text-2xl">
                    <span className="text-[#2CACE4]">Tentang</span> Kami
                </h1>
            </div>

            <div className="">
                <p>
                Kompetindo merupakan perusahaan jasa bergerak di bidang edukasi yang meliputi pelatihan, akademi, dan sertifikasi serta konsultan di bidang Teknologi Informasi dan Komunikasi meliputi Cybersecurity dan SPBE. Kompetindo didirikan sejak tahun 2016 dan telah berbadan hukum pada tahun 2019. Kompetindo berfokus pada peningkatan kemampuan dan keterampilan individu (IT Training) sehingga mampu menciptakan sumber daya yang berdaya saing tinggi serta diakui baik secara nasional maupun internasional.<br /> <br />
                Pada tahun 2020, kami mengembangkan program menjadi pelatihan online yang memadukan pembelajaran sinkron dan asinkron. Program maupun metode yang kami miliki telah teruji dan diminati oleh para mitra kerja sama yang terdiri dari pemerintahan, perusahaan berskala multinasional, kampus, sekolah kejuruan serta individu.<br /> <br />
                Kompetindo hadir dan siap membantu institusi, lembaga, maupun perusahaan yang ada di seluruh Indonesia bersama para mentor yang telah berstandar internasional. Harapannya output (kualitas SDM) yang dihasilkan mampu membawa institusi atau lembaga ke ranah persaingan yang semakin luas ke depannya. <br />
                </p>
            </div>

            <div className="py-24 md:grid md:grid-cols-2 gap-6">
                <div>
                    <h1 className="text-xl font-bold pb-4">Visi</h1>
                    <p>
                        Menjadi perusahaan terpercaya dalam mensejahterakan dan menghasilkan SDM unggul dan berdaya saing
                    </p>
                </div>
                <div>
                    <h1 className="text-xl font-bold pb-4">Misi</h1>
                    <ol className="list-decimal pl-6">
                        <li>Memiliki standar prosedur yang telah diakui secara internasional</li>
                        <li>Menjadi pilihan utama dalam bidang edukasi maupun konsultan teknologi informasi dan komunikasi</li>
                        <li>Memberikan solusi inovatif kepada pelanggan melalui SDM yang telah tersertifikasi</li>
                        <li>Menciptakan SDM yang berkualitas dan berdaya saing tinggi</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Tentang;

import React from "react";
// import './App.css'

const Tentang = () => {
    return (
        <div className="py-[10vh]">
            <div className="pt-[8vh] pb-[15vh]">
                <h1 className="text-center font-bold text-2xl text-[#11aaff]">
                    Tentang
                </h1>
                <h1 className="text-center font-bold text-xl">
                    PT. <span className="text-[#325ccc]">Cahaya</span>{" "}
                    <span className="text-[#11aaff]">Wahana</span>{" "}
                    <span className="text-[#fd3555]">Sejahtera</span>
                </h1>
            </div>

            <div className="px-20 text-center">
                <p>
                    Kompetindo bergerak di bidang pelatihan dan sertifikasi,
                    akademi, dan konsultan di bidang Teknologi Informasi dan
                    Komunikasi, berdiri sejak tahun 2016 dan telah berbadan
                    hukum sejak tahun 2019. Program yang kami rancang berfokus
                    pada peningkatan kemampuan & keterampilan seseorang (IT
                    Training) dan validasi internasional (sertifikasi) sehingga
                    diakui di seluruh dunia. <br />
                    <br />
                    Pada tahun 2020 saat pandemi melanda seluruh dunia, kami
                    mengembangkan program kami menjadi pelatihan online yang
                    memadukan antara pembelajaran sinkron dan asinkron. Saat
                    ini, metode yang dilakukan sudah teruji dan sangat diminati
                    oleh mitra kami.
                </p>
            </div>
        </div>
    );
};

export default Tentang;

import React from "react";
// import './App.css'

const SertifikasiLO = () => {
    return (
        <div className="px-20 py-[10vh] relative">
            <div className="pb-10">
                <h1 className="text-center font-bold text-2xl">
                    CERTIFIED INTERNATIONAL BUSSINESS INTELLEGENCE
                </h1>
            </div>

            <img src="../src/assets/cert-lo-2.png" alt="Logo LO" className="m-auto pb-10 w-[30rem]"/>

            <div className="">
                <p>
                Business Intelligence (BI) merupakan salah satu teknologi yang digunakan untuk pengumpulan, penyediaan akses, dan analisis data guna membantu top level menajemen dalam suatu perusahaan untuk membuat keputusan bisnis yang lebih baik.
                <br /> <br />
                Manfaat BI diantaranya adalah mengurangi kerja keras untuk memilah informasi yang tersimpan dalam sistem / format yang berbeda, memanfaatkan data pelanggan untuk membangun, memperbaiki dan memodifikasi model prediksipada perusahaan, bahkan BI dapat memprediksi kebutuhan persediaan / bahan baku pada waktu tertentu, yang memungkinkan pengguna untuk memesan jumlah yang tepat pada waktu yang tepat, mengurangi kelebihan stok.
                <br /> <br />
                BI dapat memberi wawasan lebih besar kepada perusahaan (biaya produksi / produksi), dan menambahkan opsi untuk merencanakan dan menghitung penyesuaian yang diperlukan untuk keuntungan yang lebih baik. BI akan memungkinkan perusahaan untuk mendapatkan visibilitas terhadap apa yang pelanggan beli atau tidak membeli, digunakan atau tidak digunakan, dan lain lain. Business Intelligence dapat memberikan data dan data historis multi dimensi, seperti produksi dan penjualan, Ini akan menjadi sumber untuk analisis tren saat ini dan masa depan. Ditambah dengan pengalaman pelanggan dan data pesaing, BI akan memberikan pemahaman lengkap tentang di mana bisnis ini berada, di mana sekarang dan ke mana tujuannya. 
                <br /> <br />
                </p>
            </div>

            <h1 className="py-10 text-xl font-bold pb-2">STRATEGI SERTIFIKASI</h1>
            <div>
                <p>At the end of the program, the participants will be able to :</p>
                <ul className="list-decimal pl-6">
                    <li>Possess the security threat and risk assessment skills</li>
                    <li>Mitigate security risks and threats while designing a security solution</li>
                    <li>Apply the technical know-how to mitigate technical control issues</li>
                </ul>
            </div>

            <h1 className="py-10 text-xl font-bold pb-2">TUJUAN SERTIFIKASI</h1>
            <div>
                <ul className="list-disc pl-6">
                    <li>Peserta mampu melakukan proses pengolahan informasi dari sistem yang dimiliki walapun dengan format data yang berbeda</li>
                    <li>Peserta mampu memberikan informasi yang valid untuk perusahaan sebagai dasar penentu kebijakan</li>
                    <li>Peserta mampu memberikan prediksi komptitor dan trend kegiatan ke depan</li>
                </ul>
            </div>

            <h1 className="py-10 text-xl font-bold pb-2">COURSE CONTENT</h1>
            <div className="md:grid md:grid-cols-2 gap-6">
                <div>
                    <ul className="pl-6">
                        <li><span className="font-bold">Module 1</span> : Data Modeling</li>
                        <li><span className="font-bold">Module 2</span> : Basis Data</li>
                        <li><span className="font-bold">Module 3</span> : Manipulating Data</li>
                        <li><span className="font-bold">Module 4</span> : Pengenalan Data Warehouse</li>
                        <li><span className="font-bold">Module 5</span> : Pentaho Data Integration (Kettle)</li>
                    </ul>
                </div>
                <div>
                    <ul className="pl-6">
                        <li><span className="font-bold">Module 6</span> : Multi Dimensional Modelling</li>
                        <li><span className="font-bold">Module 7</span> : Menampilkan OLAP Multidimensional Data</li>
                        <li><span className="font-bold">Module 8</span> : Data Staging</li>
                        <li><span className="font-bold">Module 9</span> : Visualisasi</li>
                    </ul>
                </div>
            </div>

            <h1 className="py-16 text-3xl font-bold pb-12 text-center">DAFTAR SEKARANG</h1>
            <div className="md:grid md:grid-cols-2 gap-20">
                <div className="width-full">
                    <div
                        className="card-daftar bg-white drop-shadow-lg hover:drop-shadow-xl border-gray-500 hover:border-yellow-400 border-2 rounded-2xl overflow-hidden w-fit py-6 ml-auto mr-auto md:mr-0 my-1 hover:cursor-pointer"
                        onClick={() =>
                            (window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSf1hVlo_2L7Vig1jP4gmA9znI4N3_NPK_3YT4NybDhPohIpPQ/viewform")
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

export default SertifikasiLO;

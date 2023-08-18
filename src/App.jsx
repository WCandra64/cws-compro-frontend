import React from "react";
import { Hero, Navbar, Mitra, Blog, Footer } from "./components";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Artikel from "./pages/Artikel";
import Tentang from "./pages/Tentang";
import NoPage from "./pages/NoPage";
import SertifikasiMOS from "./pages/SertifikasiMOS";
import SertifikasiLO from "./pages/SertifikasiLO";
import SertifikasiFS from "./pages/SertifikasiFS";
import SertifikasiPASAS from "./pages/SertifikasiPASAS";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path={"sertifikasi-pasas"} element={<SertifikasiPASAS />} />
                    <Route path={"sertifikasi-lo"} element={<SertifikasiLO />} />
                    <Route path={"sertifikasi-fs"} element={<SertifikasiFS />} />
                    <Route path={"sertifikasi-mos"} element={<SertifikasiMOS />} />
                    {/* <Route path={"blogs"} element={<Blogs />} />
                    <Route path={"blogs/:idArtikel"} element={<Artikel />} /> */}
                    <Route path={"tentang"} element={<Tentang />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;

import React from "react";
import Card from "./Card";
import { BsChevronBarRight } from "react-icons/bs";
import { blog } from "../data/Artikel";

const Blog = () => {
    const blogs = blog.slice(-3).toReversed();
    return (
        <div className="w-full pb-16 px-20 border-2" id="blog">
            <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
                <div className="py-4">
                    <h1 className="py-3 text-3xl font-bold">
                        <span className="text-[#11aaff]">Artikel</span>
                    </h1>
                    <p className="text-[#6D737A]">Baca artikel terbaru kami.</p>
                </div>

                <div className="flex grid grid-cols-2 md:hidden">
                    {blogs.slice(0, 2).map((artikel, i) => (
                        <div key={i}>
                            <Card artikel={artikel} />
                        </div>
                    ))}
                </div>
                <div className="md:grid md:grid-cols-3 hidden">
                    {blogs.map((artikel, i) => (
                        <div key={i}>
                            <Card artikel={artikel} />
                        </div>
                    ))}
                </div>

                <div
                    className="w-fit rounded-md bg-[#11aaff] hover:bg-[#325ccc] hover:drop-shadow-[1px_4px_4px_rgba(0,0,0,0.3)] hover:cursor-pointer py-2 px-12 m-auto mt-4 text-center"
                    onClick={() => (window.location.href = "/blogs")}
                >
                    <span className="text-white font-medium ">
                        Artikel Lainnya
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Blog;

const Card = ({ artikel }) => {
    return (
        <div
            className="z-2 bg-slate-50 hover:bg-white drop-shadow-md hover:drop-shadow-xl rounded-2xl mr-2 my-4 hover:cursor-pointer overflow-hidden"
            onClick={() => (window.location.href = "/blogs/" + artikel.id)}
        >
            <img src={artikel.linkImg} className="h-40 w-full object-cover" />
            <div className="px-5 pt-2 pb-1 border border-b">
                <h1 className="pt-1 truncate text-lg">{artikel.title}</h1>
                <p className="text-[#325ccc] font-medium text-xs truncate">
                    {artikel.date}
                </p>
            </div>
            <div className="p-5 pt-3 border border-b ">
                <p className="line-clamp-2 xl:line-clamp-3">
                    {artikel.content}
                </p>
            </div>

            {/* <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
            {artikel.category}
        </div> */}
        </div>
    );
};

export default Card;

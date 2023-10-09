

const EventPrice = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="mt-20 relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr bg-clip-border p-8 text-white shadow-md bg-white shadow-pink-500/40">
                <div className=" border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none space-y-5">
                    <h1 className="-mt-20 w-40 flex justify-center mx-auto gap-1 text-7xl rounded-full py-5 border-2 text-white bg-gray-500 ">
                        <span className="mt-2 text-4xl">$</span>299
                    </h1>
                    <div>
                        <h2 className="font-semibold text-2xl tracking-widest">STANDARD</h2>
                        <p className="italic text-gray-500">Ideal for Proposals, Birthdays</p>
                    </div>
                    <hr />

                </div>
                <div className="p-0">
                    <ul className="flex flex-col gap-4 text-center text-gray-500 font-medium">
                        <li>2 Days Event</li>
                        <li>Full Services Consultation</li>
                        <li>Breakfast & Lunch for Everyone</li>
                        <li>FREE Gifts for Kids</li>
                    </ul>
                </div>
                <div className="mt-12 p-0 mx-auto">
                    <button className="btn hover:text-white text-gray-500 bg-transparent hover:bg-[#fd2d2d] border-2 border-gray-500  ">Order Now</button>
                </div>
            </div>

            <div className="mt-20 relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr bg-clip-border p-8 text-white shadow-md bg-gray-50 shadow-pink-500/40">
                <div className=" border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none space-y-5">
                    <h1 className="-mt-20 w-40 flex justify-center mx-auto gap-1 text-7xl rounded-full py-5 border-2 text-white bg-[#fe3e01] ">
                        <span className="mt-2 text-4xl">$</span>499
                    </h1>
                    <div>
                        <h2 className="font-semibold text-2xl tracking-widest">PREMIUM</h2>
                        <p className="italic text-gray-500">Ideal for Wedding & Seminars</p>
                    </div>
                    <hr />

                </div>
                <div className="p-0">
                    <ul className="flex flex-col gap-4 text-center text-gray-500 font-medium">
                        <li>2 Days Event</li>
                        <li>Full Services Consultation</li>
                        <li>Breakfast & Lunch for Everyone</li>
                        <li>FREE Gifts for Kids</li>
                    </ul>
                </div>
                <div className="mt-12 p-0 mx-auto">
                    <button className="btn hover:text-white text-gray-500 bg-transparent hover:bg-gray-500 border-2 border-gray-500  ">Order Now</button>
                </div>
            </div>

            <div className="mt-20 relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr bg-clip-border p-8 text-white shadow-md bg-white shadow-pink-500/40">
                <div className=" border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none space-y-5">
                    <h1 className="-mt-20 w-40 flex justify-center mx-auto gap-1 text-7xl rounded-full py-5 border-2 text-white bg-gray-500 ">
                        <span className="mt-2 text-4xl">$</span>699
                    </h1>
                    <div>
                        <h2 className="font-semibold text-2xl tracking-widest">CORPORATE</h2>
                        <p className="italic text-gray-500">Ideal for large business events</p>
                    </div>
                    <hr />

                </div>
                <div className="p-0">
                    <ul className="flex flex-col gap-4 text-center text-gray-500 font-medium">
                        <li>2 Days Event</li>
                        <li>Full Services Consultation</li>
                        <li>Breakfast & Lunch for Everyone</li>
                        <li>FREE Gifts for Kids</li>
                    </ul>
                </div>
                <div className="mt-12 p-0 mx-auto">
                    <button className="btn hover:text-white text-gray-500 bg-transparent hover:bg-[#fd2d2d] border-2 border-gray-500  ">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default EventPrice;
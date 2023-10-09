import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from 'react';
import background from '../../assets/banner2.jpg'

const Banner = () => {
   useEffect(()=>{
    AOS.init();
    AOS.refresh();
   },[])
    return (
        <div className="hero min-h-[90vh] " style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div data-aos="zoom-in-down" data-aos-duration="2000" className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl font-bold">CELEBRATE YOUR EVENTS
                        THAT LASTS LONGER</h1>
                    <p className="mb-5">We are the Event Management Specialists..!!</p>
                    <button className="btn bg-[#ec1a55] text-white hover:bg-transparent hover:border-[#f62d66] hover:border-2">Read More</button>
                    <button className="btn bg-[#f75e7e] text-white ml-5 hover:bg-transparent hover:border-[#fd2d2d] hover:border-2 ">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
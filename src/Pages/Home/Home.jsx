import AOS from "aos";
import "aos/dist/aos.css";

import Gallary from "../../Gallary/Gallary";
import ContactUs from "./ContactUs";
import Service from "../Service/Service";

import Banner from "./Banner";
import { useEffect } from "react";


const Home = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="bg-[#f7f7f7] pt-8">

                <div data-aos="zoom-in"  data-aos-duration="3000"><Service></Service></div>
                <div data-aos="zoom-in-up" className="mt-20">

                    <h3 className="my-5 text-4xl font-bold  text-center ">Our Events <span className="text-[#fd2d2d]">Gallery</span> </h3>
                    <p className="text-center text-gray-500 text-xl font-medium">We make your events smart & impactful by personalised event management services.</p>

                    <Gallary></Gallary>
                    <div data-aos="zoom-in-down"  data-aos-duration="3000" className="flex flex-col md:flex-row justify-center gap-8 items-center pb-4">
                        <h2 className="text-xl font-medium">See Our Full Gallery of Events!</h2>
                        <button className="btn rounded-full bg-[#fd2d2d] hover:text-black text-white">Visit full Gallery</button>
                    </div>
                </div>
                <div data-aos="zoom-in"  data-aos-duration="3000"><ContactUs></ContactUs></div>


            </div>

        </div>
    );
};

export default Home;
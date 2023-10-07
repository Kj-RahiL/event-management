

import Service from "../Service/Service";

import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="bg-[#f7f7f7] py-8">
                <div className="text-center space-y-3 w-2/3 mx-auto my-8">
                    <h2 className="font-bold text-4xl text-center">Our <span className="text-[#fd2d2d]">Services</span></h2>
                    <p className="text-lg font-medium">We make your events smart & impactful by personalised event management services</p>
                    <p className="text-[#777777] font-light text-lg">
                        From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions,
                        We offer full range of Events Management Services that scale to your needs & budget
                    </p>
                </div>
                <Service></Service>
            </div>

        </div>
    );
};

export default Home;
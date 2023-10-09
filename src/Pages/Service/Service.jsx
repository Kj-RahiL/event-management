
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import EventPrice from "./EventPrice";
// import ServiceCard from "./ServiceCard";


const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/events.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // console.log(services)
    return (
        <div className="md:mx-20 ">
            <div className="text-center space-y-3 md:w-2/3 mx-auto my-8">
                <h2 className="font-bold text-4xl text-center">Our <span className="text-[#fd2d2d]">Services</span></h2>
                <p className="text-lg font-medium">We make your events smart & impactful by personalised event management services</p>
                <p className="text-[#777777] font-light text-lg p-2">
                    From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions,
                    We offer full range of Events Management Services that scale to your needs & budget
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 md:px-0">
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            <div className="mt-20 px-2 ">
                <div >
                    <h2 className="text-4xl font-bold">Our <span className="text-[#fd2d2d]">Events</span> Pricing Plans</h2>
                    <p className="text-lg text-gray-600 py-4">We make your events smart & impactful by personalised event management services.</p>
                </div>
                <EventPrice></EventPrice>
            </div>
        </div>
    );
};

export default Service;
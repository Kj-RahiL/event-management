
import Navbar from "../Shared/Navbar";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
// import ServiceCard from "./ServiceCard";


const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('/events.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    // console.log(services)
    return (
        <div className="mx-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service=> <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;
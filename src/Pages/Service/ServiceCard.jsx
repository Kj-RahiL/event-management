import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { id, name, title, img, description } = service;
    console.log(service)
    return (
        <div className="">
            
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className='card-body'>
                    <h2 className="font-bold text-2xl">{name}</h2>
                    <h3>{title}</h3>
                    <button className="btn"><Link
                        to={`/service/${id}`}
                        className="text-[#fd2d2d] font-bold"> Details</Link></button>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
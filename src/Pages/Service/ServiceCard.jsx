import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { id, title, img, description, } = service;
    console.log(service)
    return (
        <div className="">
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className='card-body'>
                    <h2 className="font-bold text-2xl">{title}</h2>
                    {
                        description.length > 150 ?
                            <p>{description.slice(0, 150)}<Link
                                to={`/service/${id}`}
                                className="text-[#fd2d2d] font-bold"> read more...</Link></p> :
                            <p>{description}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
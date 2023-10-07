import { useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {
    const { id } = useParams()
    const serviceDetails = useLoaderData()
    const details = serviceDetails.find(details => details?.id == id)
    console.log(details)
    console.log(id)
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={details.img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{details.title}</h2>
                <p>{details.description}</p>

            </div>
        </div>
    );
};

export default ServiceDetails;
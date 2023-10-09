import { useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {
    const { id } = useParams()
    const serviceDetails = useLoaderData()
    const details = serviceDetails.find(details => details?.id == id)
    // console.log(serviceDetails)
    // console.log(id)
    return (
        <div className="card w-96 lg:w-9/12 mx-auto m-20 lg:card-side bg-base-100 shadow-xl">
            <figure className="lg:w-1/2"><img className="h-full w-full "  src={details?.img} alt="Album" /></figure>
            <div className="card-body lg:w-1/2">
                <h2 className="card-title">{details?.name}</h2>
                <p className="card-title">{details?.title}</p>
                <p>{details.description}</p>

            </div>
        </div>
    );
};

export default ServiceDetails;
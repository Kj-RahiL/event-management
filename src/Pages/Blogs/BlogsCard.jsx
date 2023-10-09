import {  BsBorderWidth, BsCalendarDate } from "react-icons/bs";

const BlogsCard = ({ blog }) => {
    // console.log(blog)
    const { name, title, date, details, img } = blog
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex justify-between mx-10 my-5">
                    <h3 className="flex items-center gap-5 text-gray-500"><BsCalendarDate></BsCalendarDate>{date}</h3>
                    <h3 className="flex items-center gap-5 text-gray-500"><BsBorderWidth></BsBorderWidth>{name}</h3>
                </div>
                <h2 className="card-title">{title}
                </h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default BlogsCard;
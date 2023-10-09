import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";

const AboutCard = ({ author }) => {
    const { author_name, position, author_img_url, details } = author
    console.log(author)
    return (
        <div className="card lg:card-side lg:h-[312px] bg-base-100 shadow-xl glass">
            <figure className="w-2/4 "><img className="w-full h-full" src={author_img_url} /></figure>
            <div className="card-body w-2/4">
                <h2 className="text-2xl font-bold">{author_name}</h2>
                <h3 className="text-lg italic text-gray-800">{position}</h3>
                <p className="text-gray-600">{details}</p>
                <div className="card-actions flex gap-5 my-3">
                    <BsFacebook></BsFacebook>
                    <BsTwitter></BsTwitter>
                    <BsGoogle></BsGoogle>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;
import { useLoaderData } from "react-router-dom";
import AboutCard from "./AboutCard";
import AboutInfo from "./AboutInfo";


const About = () => {
    const authors = useLoaderData()
    console.log(authors)
    return (
        <div>
            <AboutInfo></AboutInfo>
            <div className="my-8 mx-auto md:h-2/4 lg:w-1/2 text-center space-y-2">
                <h2 className="text-4xl font-bold">Meet Our Team <span className="text-[#fd2d2d]">Members</span></h2>
                <p>We make your events smart & impactful by personalised event management services</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 my-8 mx-2 lg:mx-20">
            {
                authors.map(author=> <AboutCard key={author.id} author={author}></AboutCard>)
            }
        </div>
        </div>
    );
};

export default About;
import { useLoaderData } from "react-router-dom";

import BlogsCard from "./BlogsCard";
import LeftSide from "./LeftSide";


const Blogs = () => {
    const blogs = useLoaderData()
    // console.log(blogs)
    return (
        <div className="grid grid-cols-4 gap-6 mx-0 md:mx-4 lg:mx-20">
            
                <LeftSide></LeftSide>
            
            <div className="col-span-3 grid grid-cols-1 gap-5 px-3 md:px-0">
                {
                    blogs.map(blog => <BlogsCard key={blog.id} blog={blog}></BlogsCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;
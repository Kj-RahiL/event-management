import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSide = () => {
    const [title, setTitle] = useState([])
    useEffect(()=>{
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setTitle(data))
    },[])
    console.log(title)
    return (
        <div className=" space-y-6 bg-gray-50">
            <h2 className="text-3xl p-4 font-semibold bg-[#E7E7E7]">All Blog</h2>
                {
                    title.map(blog => <Link 
                        className="block ml-4 text-xl font-semibold"
                        to={`/blog/${blog.id}`} 
                        key={blog.id}
                        >{blog.name}</Link> )
                    
                }
           

        </div>
    );
};

export default LeftSide;
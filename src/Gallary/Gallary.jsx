import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'
import gallery4 from '../assets/gallery4.jpg'
const Gallary = () => {
    return (


        <div className="grid grid-cols-2 gap-2 my-8">
            <div>
                <img className="h-auto max-w-full rounded-lg" src={gallery1} alt=""/>
            </div>
            <div>
                <img className="h-full max-w-full rounded-lg" src={gallery2} alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src={gallery3} alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src={gallery4}alt=""/>
            </div>
        </div>


    );
};

export default Gallary;
import ContactFrom from "./ContactFrom";
import ContactInfo from "./ContactInfo";



const Contact = () => {
    return (
        <div>
            <h2 className="text-center text-xl font-medium text-gray-600 mt-10 -mb-5">Contact us if you need our services. We will be happy to make your events memorable!</h2>
           <ContactInfo></ContactInfo>
           <ContactFrom></ContactFrom>
        </div>
    );
};

export default Contact;
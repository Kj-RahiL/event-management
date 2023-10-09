

const ContactFrom = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-[#fd2d2d] p-8"> Message Form</h2>
           <form >
           <div>
                <input type="text" placeholder="Your Name" className="input input-bordered input-md w-full max-w-xs" />
                <input type="text" placeholder="Your Email" className="input input-bordered input-md w-full max-w-xs" />
            </div>
            <div>
                <input type="text" placeholder="Your Tel" className="input input-bordered input-md w-full max-w-xs" />
                <input type="text" placeholder="Where do here" className="input input-bordered input-md w-full max-w-xs" />
            </div>

            <textarea className="textarea textarea-secondary w-1/2 h-32" placeholder="Bio" name="textarea" ></textarea>
           </form>
        </div>
    );
};

export default ContactFrom;
import { useState } from "react";
import AnimationWrapper from "../common/page-animation";
import axios from "axios";
import { toast } from "react-hot-toast";

const HelpPage = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        category: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const categories = [
        "Account Issue",
        "Blog Issue",
        "Report Content",
        "Technical Problem",
        "Feature Request",
        "General Query"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.category || !formData.message) {
            toast.error("Please fill all fields.");
            return;
        }

        setLoading(true);

        try {
            // Connect to backend when ready
            await axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/support", formData);

            toast.success("Your query has been submitted! Our team will contact you soon.");
            
            setFormData({
                name: "",
                email: "",
                category: "",
                message: ""
            });

        } catch (err) {
            toast.error("Something went wrong. Try again later.");
            console.log(err);
        }

        setLoading(false);
    };


    return (
        <AnimationWrapper>
            <section className="max-w-5xl mx-auto py-10 px-[5vw]">

                <h1 className="text-5xl font-bold mb-6">Help & Support</h1>

                <p className="text-dark-grey mb-8 leading-7">
                    Having trouble using PromptShield?  
                    Fill out the form below and our support team will respond within 24–48 hours.  
                    You may also use this form to report unsafe prompts, technical issues, or request new features.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Name */}
                    <div>
                        <label className="text-xl block font-medium mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 bg-grey rounded-lg outline-none"
                            placeholder="Your full name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-xl block font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 bg-grey rounded-lg outline-none"
                            placeholder="your@email.com"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div>
                        <label className="text-xl block font-medium mb-2">Issue Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full p-3 bg-grey rounded-lg outline-none"
                        >
                            <option value="">Select an issue</option>
                            {categories.map((cat, index) => (
                                <option key={index} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="text-xl block font-medium mb-2">Your Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 bg-grey rounded-lg outline-none min-h-[140px]"
                            placeholder="Describe your issue or request in detail..."
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn-dark px-8 py-3 disabled:opacity-50"
                    >
                        {loading ? "Submitting..." : "Submit Query"}
                    </button>

                </form>

            </section>
        </AnimationWrapper>
    );
};

export default HelpPage;

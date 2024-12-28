import { useState } from 'react';
import './contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Here you can handle form submission logic, such as sending data to a server
        alert("Thank you for contacting us!");
        setFormData({ name: "", email: "", message: "" }); // Reset the form
    };
    return (
        <div className="contact-main-container">
            <div className="contact-image-container">
                <img src="/ContactUsImages/contact.png" alt="" />
            </div>
            <div className="contact-form-container">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="name">Name:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="email">Email:</label>
                            </td>
                            <td>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="message">Message:</label>
                            </td>
                            <td>
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="10"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit">Submit</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default Contact
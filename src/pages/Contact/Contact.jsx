import { useState } from "react";
import "./Contact.css";

const Contact = () => {
    // State variables for form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const validateSetName = (e) => {
        if (value === "") {
            setError("Name is required");
        } else {
            setError("");
        }
        setName(value);
    };

    const validateSetEmail = (e) => {
        if (value === "") {
            setError("Email is required");
        } else {
            setError("");
        }
        setEmail(value);
    };

    const validateSetMessage = (e) => {
        if (value === "") {
            setError("Message is required");
        } else {
            setError("");
        }
        setMessage(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || message === "") {
            setError("All fields are required");
        } else {
            setError("");
            alert("Form submitted");
        }
    };

    return (
        <div className="contact-page">
            <form className="contact-form" onSubmit={handleSubmit}>
            <label className="contact-input">Name:</label>
            <input
                name="name"
                value={name}
                onChange={(e) => validateSetName(e.target.value)}
                onBlur={(e) => validateSetName(e.target.value)}
                type="text"
                placeholder="Name"
            />
            <label className="contact-input">Email:</label>
            <input
                name="email"
                value={email}
                onChange={(e) => validateSetEmail(e.target.value)}
                onBlur={(e) => validateSetEmail(e.target.value)}
                type="email"
                placeholder="Email"
            />
            <label className="contact-message">Message:</label>
            <textarea
                name="message"
                value={message}
                onChange={(e) => validateSetMessage(e.target.value)}
                onBlur={(e) => validateSetMessage(e.target.value)}
                placeholder="Message"
            />
            <p className="error-message">{error}</p>
            <button className="contact-button" type="submit">Submit</button>
            </form>
        </div>
    );
};
export default Contact;
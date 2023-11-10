import React from "react";

function Contact() {
    return <>
        <div id="contact">
            <h2>Contact Us</h2>
            <p>We will reach out to you within 2 working days.</p>
            <form className="contact-form">
                <div>
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name" placeholder="Your name"></input>
                </div>
                <div>
                    <label for="email">Email: </label>
                    <input type="email" id="email" name="email" placeholder="xyz@gmail.com"></input>
                </div>
                <div>
                    <label for="message">Message: </label>
                    <textarea id="message" rows={4} placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit">SEND</button>
            </form>
        </div>
    </>
}

export default Contact;
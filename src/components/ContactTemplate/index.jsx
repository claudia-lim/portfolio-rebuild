import "./contact.css"
import emailjs from "@emailjs/browser"
import {useRef, useState} from 'react';

function ContactTemplate () {
    const form = useRef();
    const [pending, setPending]  = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        if (e.target[0].value && e.target[1].value && e.target[2].value) {
            setPending(true);
            emailjs.sendForm('service_16k4f9t', 'template_ne21lea', form.current, 'Jg4DdytYgbiemTdFy')
                .then((result) => {
                    console.log(result.text);
                    e.target.reset();
                    setPending(false);
                    alert("Thanks for getting in touch! - Claudia");
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            alert("Failed to send, please ensure all fields are filled in");
        }

    };

    return (
        <div id="contact">
            <h3>Contact</h3>
            <p>Reach out to me on <a href="https://www.linkedin.com/in/claudia-l-26669b279/" target="_blank">LinkedIn</a>, have a look at my <a href="https://github.com/claudia-lim" target="_blank">Github</a> or send me an email using the form below!</p>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label>Name: </label>
                <input type="text" name="from_name" className="from-name"/>
                <label>Email: </label>
                <input type="email" name="reply_to" className="reply-to"/>
                <label>Message: </label>
                <textarea name="message" className="message"/>
                <button type="submit" disabled={pending} className="submit-button">{pending ? " Sending..." : " Send"}</button>
            </form>
        </div>
    )
}

export default ContactTemplate

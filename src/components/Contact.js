import React, { useRef } from "react";
import './Contact.css';
import Instagram from '../assets/Instagram.png';
import Linkedin from '../assets/Linkedin.png';
import Github from '../assets/Github.png';
import X from '../assets/x.png';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log('Form data:', form.current);

        emailjs.sendForm('service_sp379cy', 'template_8cafh3a', form.current, 'Nxn-G5XX6ND_QMmIn')
          .then(
            (result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !');
            },
            (error) => {
              console.log('EmailJS Error:',error);
              if (error.status === 400) {
                alert('Bad request. Please check the form data.');
              } else if (error.status === 401) {
                alert('Unauthorized. Check your public key and EmailJS settings.');
              } else {
                alert(`Failed to send email. Error: ${error.text}`);
              }
            },
          );
      };
    return(
        <section className="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <h2 className="contactDesc">Please fill out the form to discuss any work opportunities.</h2>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name" required/>
                    <input type="email" className="email" placeholder="Your Email" name="your_email" required/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.instagram.com/__laksh.92__/" target="_blank" rel="noopener noreferrer" title="Instagram">
                            <img src={Instagram} alt="Instagram" className="link" />
                        </a>
                        <a href="https://www.linkedin.com/in/lakshya-bansal-915046247" target="_blank" rel="noopener noreferrer" title="Linkedin">
                            <img src={Linkedin} alt="LinkedIn" className="link" />
                        </a>
                        <a href="https://github.com/Laksh921" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <img src={Github} alt="GitHub" className="link" />
                        </a>
                        <a href="https://x.com/Laksh9712?t=Jly3iEW0mGM0y1lJNlHdIA&s=09" target="_blank" rel="noopener noreferrer" title="X">
                            <img src={X} alt="X" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
};
export default Contact;
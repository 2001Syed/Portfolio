import React, { useRef } from 'react'
import "./Contact.css"
import GitHub from "../../assets/github-sign.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5h68sfe', 'template_jqquleg', form.current, 'QtN53mM6fC9LJLW6Q')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email Send")
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">
                My Works
            </h1>
            <p className="clientDesc">
                Here are some of the projects I have done.
            </p>
            <div className="clientImgs">
                <a href="https://github.com/2001Syed" target='blank'>
                    <img src={GitHub} alt="" className="clientImg" />
                </a>
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please Fill out the form below to discuss any work opportunity.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='from_name'/>
                <input type="email" className="email" placeholder='Your Email' name='from_email'/>
                <textarea name="message" rows="5" className="msg" placeholder='Your Message'></textarea>
                <button type='submit' className="submitBtn" value='Send'>Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="facebook" className="link" />
                    <img src={TwitterIcon} alt="twitter" className="link" />
                    <img src={InstagramIcon} alt="instagram" className="link" />
                    <img src={YoutubeIcon} alt="youtube" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact

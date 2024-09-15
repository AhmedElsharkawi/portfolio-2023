import React from 'react'
import Heroimg from './Heroimg'
import contactimg from "../assets/about.jpg"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Slide } from 'react-reveal';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gfdd0zd', 'template_g74id2q', form.current, 'pR5BEOnn7ucsjrUrr')
      .then((result) => {
        console.log(result.text);
        e.target.reset()
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <>
      <Heroimg image={contactimg} heading="Get in touch ....." title=" I strive to maintain open lines of dialogue to ensure a smooth and collaborative development process." />
      <Slide left cascade>

        <div className='form'>
          <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type='text' name="name"  required/>
            <label>Email</label>
            <input type="email" name="email" required/>
            <label>Subject</label>
            <input type='text' required/>
            <label>Message</label>
            <textarea rows={6} placeholder='Type your message here' name="message" required />
            <button className='btn' onSubmit={sendEmail}>Submit</button>
          </form>

        </div>
      </Slide>
    </>
  )
}

export default Contact
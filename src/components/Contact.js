import React from 'react';
import './Contact.scss';  // Import the SCSS file

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="heading">Contact Me</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="form-control" rows="4"></textarea>
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

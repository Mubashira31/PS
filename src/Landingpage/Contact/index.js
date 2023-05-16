import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../../Landingpage/index.css'


const ContactPage = () => {


  // Define the form state variables
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const templateParams = {
      from_name: name,
      from_email: emailAddress,
      subject: subject,
      message: message,
    };
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });
    setName('');
    setEmailAddress('');
    setSubject('');
    setMessage('');
  };

  return (
    <>
    <h2 className='contact-heading'>Contact Us</h2>
    <div className="contact-container">
      <div className="left-section">
      
        <div className="location-info">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='svg'>
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
            </svg>
            <div className="location-details">
            <h5>Location:</h5>
            <p>Sri Venkateswara University, Tirupati</p>
            <p>Andhra Pradesh</p>
            <p>517502</p>
            </div>
        </div>

        <div className="location-info">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='svg'>
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
            </svg>
            <div className="location-details">
            <h5>Email:</h5>
            <p>svu@hotmail.com</p>
            </div>
        </div>
        <div className="location-info">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='svg'> 
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
            </svg>
            <div className="location-details">
            <h5>Phone Number:</h5>
            <p>08772249472</p>
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62039.58932556006!2d79.32160774863283!3d13.628885700000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b3cad0b13e3%3A0xb9635a2a9d920c7d!2sSRI%20VENKATESWARA%20UNIVERSITY!5e0!3m2!1sen!2sin!4v1683976437700!5m2!1sen!2sin" width="450" height="250" allowfullscreen></iframe>
      </div>

      {/* right section  */}
      
      <div className="right-section">
        <form onSubmit={handleSubmit}>
        <div className='first-row'>
            <div>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} required />
            </div>

            <div>
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" value={emailAddress} onChange={(event) => setEmailAddress(event.target.value)} required />
            </div>
        </div>
        <div>
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" value={subject} onChange={(event) => setSubject(event.target.value)} required />

            <label htmlFor="message">Message:</label>
            <textarea type="text" id="message" value={message} onChange={(event) => setMessage(event.target.value)} required />
        </div>
          

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
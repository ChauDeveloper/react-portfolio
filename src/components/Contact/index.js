import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './style.css'

function Contact() {


    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    
    
    function handleChange(e) {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);
        // isValid conditional statement
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
      }  
      setFormState({...formState, name: e.target.value })
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      }
    }
  
    // testing if information is registered 
    // console.log(formState);
  
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
    }
  
      return (
          <section id="contact-form">
            <h1>Contact me</h1>
            <form  onSubmit={handleSubmit}>
              <div class='row'>
              <label htmlFor="name">Name:</label>
              <input type="text" defaultValue={name} onBlur={handleChange} name="name" required/>
              </div>
              <div class='row'>
              <label htmlFor="email">Email address:</label>
              <input type="email" defaultValue={email} name="email" onBlur={handleChange} required/>
              </div>
              <div class='row'>
              <label htmlFor="message">Message:</label>
              <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" required />
              </div>
  
  
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
  
  
              <button class="text-center" type="submit">Submit</button>
            </form>
          </section>
        )
      }

export default Contact;
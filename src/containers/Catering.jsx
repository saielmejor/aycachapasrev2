import React from "react";
import emailjs from "@emailjs/browser";
import "./Catering.css";
function Catering() { 

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_pp9zout','template_uklipv8',e.target,'ResL9mLXZchVqDDq-')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }).then(res=>{ console.log(res);}).catch(err=> console.log(err));
    };

  return (
    <div className="catering ">
      <div className="catering-container">
        <div className="catering-description">
          <h1> Catering Needs?</h1>
          <p className="catering-para">
            {" "}
            Let us bring delicious cachapas to your tables! We offer catering services for events whether they are outdoors or indoors, small or large, we make our Cachapas hot and fresh. With our personalized service and attention to the smallest details we will make sure your event runs smoothly. Please provide your information if interested in our services using the contact form.
          </p>
        </div>

        <form className="catering-form-container" onSubmit={sendEmail}>
          <div className="catering-name-input">
            <input type="text" name="name" placeholder="Your Name"  style={{paddingLeft:'20px'}}/>
          </div>
          <div className="catering-email-input">
            <input type="text" name="email" placeholder="Your Email" style={{paddingLeft:'20px'}} />
          </div>
          <div className="catering-comments-input">
            <textarea type="text" name="your message" placeholder="Your comments"  style={{paddingLeft:'20px'}}/>
          </div>
          <div className="catering-submit-button">
            <input type="submit" value="Order Now" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Catering;

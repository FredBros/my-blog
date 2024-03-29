import React from 'react'
import ContactForm from "../../blog/components/form/ContactForm"
import Title from "../../blog/components/ui/Title"


function Contact() {

  

  return (
    <div className="contact-container">
      <Title text="contact" />
      <ContactForm />

      <style jsx>{`
                .contact-container{
        width: 90%;
          max-width: 600px;
          margin: 40px auto 80px auto;
          
        
        }
              `}</style>
    </div>
  );
}

Contact.layout = "blog"
export default Contact
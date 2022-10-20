import React from 'react'
import ContactForm from "../../blog/components/form/ContactForm"
import Title from "../../blog/components/ui/Title"
import Loader from "../../blog/components/utils/Loader";
import { useRouter } from "next/router";

function contact() {

  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

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

contact.layout = "blog"
export default contact
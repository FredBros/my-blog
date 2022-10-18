import React, {useState, useEffect} from 'react'
import {submitComment} from '../services'
import Button from "../components/Button";
import emailjs from "@emailjs/browser";

function CommentForm({slug, hide}) {

  
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    storeData: false,
  });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem("name"),
      email: window.localStorage.getItem("email"),
      storeData:
        window.localStorage.getItem("name") ||
        window.localStorage.getItem("email"),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;

    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };
    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
    }
  
  
  

  submitComment(commentObj).then((res) =>{ 
    closeForm(); 
    sendEmail(commentObj);  
    
  })}

  function wait(seconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, seconds * 1000);
    });
  } 
  const closeForm = async () => {
    setShowSuccessMessage(true);
    await wait(3);
    hide()
  };

  const sendEmail = (commentObj) => {
    const { name, comment } = commentObj;
    const templateParams = { from_name: name, message : comment}
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_API_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };


  return (
    <div className="form-container">
      {!showSuccessMessage ? (
        <>
          <textarea
            className="comment"
            name="comment"
            id="comment"
            placeholder="Commentaire"
            value={formData.comment}
            onChange={onInputChange}
          ></textarea>
          <div className="name-email-container">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={onInputChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={onInputChange}
            />
          </div>
          <div className="storedata">
            <input
              className="storedata-checkbox"
              type="checkbox"
              name="storeData"
              id="storeData"
              checked={formData.storeData}
              onChange={onInputChange}
            />
            <label htmlFor="storeData" className="storedata-label">
              {" "}
              Se souvenir de moi.
            </label>
          </div>
          {error && (
            <p className="error-submit">
              Erreur : tous les champs doivent être renseignés.
            </p>
          )}
          <div className="btn-submit" onClick={handlePostSubmission}>
            <Button text="Envoyer"></Button>
          </div>
        </>
      ) : (
        <div className="success-message">
          <h4>Commentaire soumis. Merci.</h4>
        </div>
      )}

      <style jsx>{`
        
        .comment {
          width: 100%;
          min-height: 200px;
        }
        .name-email-container {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-content: stretch;
        }
        .btn-submit {
          display: flex;
          justify-content: center;
          margin: 20px;
        }
        .success-message {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default CommentForm
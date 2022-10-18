import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "../components/Button";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdojlgep");
  if (state.succeeded) {
    return <h2>Merci, je vous réponds rapidement.</h2>;
  }
  return (
    <form
      className="form-container"
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xdojlgep"
      method="POST"
    >
      <h2>Bonjour, faisons connaissance.</h2>
      <div className="name-email-container">
        <div className="label-input-container">
          <label for="full-name">Nom</label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="Votre nom"
            required
          />
          <ValidationError prefix="Nom" field="name" errors={state.errors} />
        </div>
        <div className="label-input-container">
          <label htmlFor="email">Adresse email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="
      Votre adresse email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div className="label-input-container">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Votre message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" disabled={state.submitting}>
        <Button text="Envoyer"></Button>
      </button>
      <style jsx>{`
        .form-container {
          width: 100%;
          max-width: 600px;
          border: solid 2px var(--foreground);
          background-color: var(--background);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          margin-top: 40px;
        }
        h2 {
          text-align: center;
        }
        
        .name-email-container {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
        }
        .label-input-container {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
        }

        textarea {
          width: 100%;
        }
        button {
          margin: 20px;
          background-color: transparent;
          padding: 0;
          border-width: 0;
        }
      `}</style>
    </form>
  );
}

export default ContactForm;

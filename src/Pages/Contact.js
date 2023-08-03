import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="container mx-auto max-width section">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
      Si buscas un colaborador Responsable y comprometido para tu próximo proyecto,
       no dudes en contactarme.🖥️💯
      </h1>
      <h3 className="text-red-800 text-center text-3xl md:text-4xl lg:text-6xl text-dark-heading font-semibold md:font-bold pt-5 md:pt-10 md:pb-6 dark:text-red-600">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      <span className="text-center text-content text-xl font-light block">o mesaje por via WhatsApp</span>
      <h3 className="text-red-800 text-center text-3xl md:text-4xl lg:text-6xl text-dark-heading font-semibold md:font-bold pt-5 md:pt-10 md:pb-6 dark:text-red-600">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
  );
}

export default Contact;

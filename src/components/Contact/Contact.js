import React, { useState } from "react";
import Form from "../Shared/Form";
import Input from "../Shared/Input";
import Button from "../Shared/Button";
import Link from "../Shared/Link";

// https://blog.mailtrap.io/react-send-email/#Sending_emails_with_pure_React
// (cf "Sending emails with EmailJS")

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailState, setEmailState] = useState("");

  function handleSubmit() {
    const templateId = "template_IlIK0OFI";

    sendEmail(templateId, {
      message_html: message.replace(/\n/g, "<br>"),
      from_name: name,
      reply_to: email
    });
  }

  function sendEmail(templateId, variables) {
    setEmailState("sending");
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        setEmailState("sent");
      })
      .catch(err => {
        setEmailState("error");
      });
  }

  return (
    <div className="flex-1 bg-lighter">
      {emailState === "sent" ? (
        <div
          className="px-4 d-flex f-col jc-center ai-center"
          style={{ paddingTop: "30vh" }}
        >
          <p className="mb-3 text-center">Votre email a bien été envoyé.</p>
          <Link to="/" className="font-weight-bolder letter-spacing-title">
            OK
          </Link>
        </div>
      ) : emailState === "error" ? (
        <div
          className="px-4 d-flex f-col jc-center ai-center"
          style={{ paddingTop: "30vh" }}
        >
          <p className="mb-3 text-center">
            Une erreur technique est survenue et votre message n'a pas été
            envoyé. Vous pouvez m'envoyer un email directement à{" "}
            <b>julie.harmegnies@gmail.com</b> et je vous répondrai dès que
            possible.
          </p>
          <Link to="/" className="font-weight-bolder letter-spacing-title">
            OK
          </Link>
        </div>
      ) : (
        <div className="pt-5 px-4">
          <h6 className="letter-spacing-title mb-4">CONTACT</h6>
          <Form className="d-flex f-col" onSubmit={handleSubmit}>
            <Input
              name="NOM PRÉNOM"
              type="string"
              placeholder="NOM PRÉNOM"
              value={name}
              onChange={setName}
              className="mb-3"
              required
            />

            <Input
              name="EMAIL"
              type="email"
              placeholder="EMAIL"
              value={email}
              onChange={setEmail}
              className="mb-3"
              required
            />

            <textarea
              onChange={e => setMessage(e.target.value)}
              placeholder="MESSAGE"
              required
              value={message}
              className="w-100 mb-4 p-2"
            />
            <div>
              <Button
                type="submit"
                textClassName="font-weight-bolder"
                link
                loading={emailState === "sending"}
              >
                ENVOYER
              </Button>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Contact;

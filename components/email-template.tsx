import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  firstName,
  message,
  email,
}) => (
  <div>
    <h1>Enviado por: {firstName}</h1>
    <h2>Mensaje: {message}</h2>
    <h3>Email: {email}</h3>
  </div>
);

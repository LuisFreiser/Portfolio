//ApiKey: AIzaSyBre_HZx1NfSa_FB8ci9F8Zs4wQYEQRrVPBV5d;
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const dataform = await req.json();
    try {
      const data = await resend.emails.send({
        from: "Acme Inc. <onboarding@resend.dev>", //Email del servicio de donde se envia el mensaje
        to: ["luisfreiser@gmail.com"],
        subject: "PortFolio Contact",
        react: EmailTemplate({
          firstName: dataform.username,
          message: dataform.message,
          email: dataform.email,
        }),
        text: "S&V Desing Studio",
      });
      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
  } catch (error) {
    return Response.json({ error });
  }
}

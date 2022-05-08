import { MailAdapter, MailAdapterData } from "../mailAdapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "39b898b95f8ddb",
      pass: "cda2565bd10191"
    }
  });


export class NodeMailerMailAdapter implements MailAdapter{
    async sendMail({subject,body}: MailAdapterData){
            await transport.sendMail({
        from:'Feedback - <noreply@feedback.com>',
        to:'Vinicius Fernandes <viniciusnandes@gmail.com',
        subject:subject,
        html: body

    })
    }
    
}
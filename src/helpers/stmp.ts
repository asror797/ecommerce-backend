import nodemailer from "nodemailer"
import jwt from "jsonwebtoken"


const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user: 'kibracoders@gmail.com',
     pass: 'xbyhdckrumudhpmb'
   }
});


export const stmp = (pick:string,email:string) => {

   const token = jwt.sign('SECRET_KEY',email)

   const options = {
      from: 'kibracoders@gmail.com',
      to: email,
      subject: 'Verify Your email',
      html:` <p> verify your account </p> <br/> <a href='http://localhost:5000/?verify=${token}' > verify link  <a/>`
   };


   transporter.sendMail(options,(error, info) => {
      if (error) {
        console.log(error);
      } else {
         console.log('Email sent: ' + info.response);
      }
   });
}
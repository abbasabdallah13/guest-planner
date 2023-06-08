import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';


export const sendEmail = async(email, subject, payload, template) => {
    const __dirname = path.resolve();
    try {
        const transporter = nodemailer.createTransport({
            service: 'hotmail',
            port: 465,
            auth: {
                user: process.env.OUTLOOK,
                pass: process.env.OUTLOOK_PASS
            }
        })

        // handlebars part
        const source = fs.readFileSync(path.join(__dirname,'server',template), "utf8");
        const compiledTemplate = handlebars.compile(source);

        const options = () => {
            return {
                from: process.env.OUTLOOK,
                to: email,
                subject: subject,
                html: compiledTemplate(payload)
            }
        }

        transporter.sendMail(options(), (err, info) => {
            if(err){
                console.log(err);
                return 
            } 
            console.log("Sent: " + info.response)
        })


    } catch (error) {
        console.log(error.message)
    }
}
'use server'
import nodemailer from 'nodemailer';

var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    auth: {
        user: 'krishnaaishu007@gmail.com',
        pass: process.env.GMAIL
    },
    secure: true,
});

export async function SendMail(mailOptions: { from: string, to: string[], text: string, html: string, subject: string }) {
    try {
        await transporter.sendMail(mailOptions);
        return
    } catch (err) {
        console.log(err)
    }
}

var mailOptions = {
    from: 'krishnaaishu007@gmail.com',
    text: 'A Mail From Your Website',
    to: ["krishnaaishu007@gmail.com"],
    html: "",
    subject: ""
};

export async function Mail(formdata: FormData){
    const data = {
        first: formdata.get('firstName'),
        last: formdata.get('lastName'),
        email: formdata.get('email'),
        subject: formdata.get('subject'),
        message: formdata.get('message')
    }
    if(data.email && data.first && data.subject && data.message){
        var html = `
            <!doctype html>
                <html>
                    <head>
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                    </head>
                    <body style="font-family: sans-serif;">
                        <div style="display: block; margin: auto; max-width:600px;" class="main">
                            <h1 style="font-size: 20px; margin-top: 20px;" }}>Krishna | A mail from your Website by ${data.first} ${data.last}</h1>
                            <h1 style="font-size: 20px; font-weight: bold; margin-top:20px;">Subject: ${data.subject}</h1>
                            <p style="font-size: 35px; font-weight: bold; color: #45b4d5; margin-top: 10px">${data.message}</p>
                            <p style="margin-top: 25px;">${data.first}'s mail id - ${data.email}</p>
                            <hr style=" color: black; margin-top: 25px;"/>
                            <p style="marginTop: 25px; color: #686969;">Do not reply to this automated email.</p>
    
                        </div>
                        <style>
                        .main { background-color: white; }
                        a:hover { border-left-width: 1em; min-height: 2em; }
                        </style>
                    </body>
                </html>
            `
        mailOptions.html = html
        mailOptions.subject = data.subject.toString()
        await SendMail(mailOptions)
    }
}
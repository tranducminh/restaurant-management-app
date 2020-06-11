/* eslint-disable @typescript-eslint/no-unused-vars */
const nodemailer = require('nodemailer');

export const sendAccountInformation = async () => {
  console.log('send mail');

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'tranducminhhpvn99@gmail.com', // generated ethereal user
      pass: 'Hoidelamgi2706', // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <tranducminhhpvn99@gmail.com>', // sender address
    to: 'minhscdhpvn@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  });

  await transporter.sendMail(info);
};

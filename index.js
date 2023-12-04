// const nodemailer = require('nodemailer');

// const mailTransporter = nodemailer.createTransport({
//     service: "gmail",
//     auth:{
//         user: "amanmongodb@gmail.com",
//         pass: "amanmongodb123",
//     }
// });

// const details = {
//     from: "amanmongodb@gmail.com",
//     to: "amanforedu635@gmail.com",
//     subject:"testing our nodemailer",
//     text: "testing our first nodemailer"
// }
// mailTransporter.sendMail(details,(err)=>{
//     if(err){
//       console.log("it has an error")  
//     }
//     else{
//         console.log("email sent successfully")
//     }
// })
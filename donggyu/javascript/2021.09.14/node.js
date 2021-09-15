const nodemailer = require('nodemailer')
const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "24f244d1f73e69",
    pass: "40787b962752a2"
  }
};

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if(error) {
      console.log(error)
    } else {
      console.log(info)
      return info.response
    }
  })
}

let email_data = {
  from: "rkdehdrb011122.go@gmail.com",
  to: 'rkdehdrb011122@.gogmail.com',
  subject: '테스트 메일임다',
  text: 'nodejs 마스터하기',
}

send(email_data)
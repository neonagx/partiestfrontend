var nodemailer = require('nodemailer')

var config = {
  user: process.env.THEPARTIEST_GMAIL,
  pass: process.env.THEPARTIEST_GMAIL_PW
}

var transporter = nodemailer.createTransport(`smtps://${config.user}%40gmail.com:${config.pass}@smtp.gmail.com`)

module.exports = (email, token) => {

  var mailOptions = {
    from: `"Bemix" <${config.user}@gmail.com>`,
    to: email,
    subject: "Reset Your Password",
    text: `Please click this link: bemix://?forgot-password=${token} to reset your password. Ignore this message if you haven't requested a password reset`,
    html: `<b>Please click <a href='bemix://?forgot-password=${token}'>here</a> to reset your password in the app. <br/><br/>Ignore this message if you haven't requested to reset a password.</b>`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) return console.log(error)
    console.log('Message sent: ' + info.response)
  })
}

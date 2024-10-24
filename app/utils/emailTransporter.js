const nodemailer = require('nodemailer')

const Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ACCOUNT,
    pass: process.env.EMAIL_PASSWORD
  }
})

const sendVerificationMail = async (user, host) => {
  try {
    const mailOptions = ({
      from: process.env.EMAIL_ACCOUNT,
      to: user.email,
      subject: 'Account Verification Link',
      html: `<h3>¡Hola!, ${user.username} por favor, verifica tu cuenta haciendo clic en este enlace  <a href="http://${host}/api/user/verify/${user.security?.cryptoToken}">Verificar</a></h3> `
    })

    return await Transporter.sendMail(mailOptions)
  } catch (error) {
    console.log(error)
    throw Error(error)
  }
}

const sendForgotPasswordMail = async (user) => {
  try {
    const mailOptions = ({
      from: process.env.EMAIL_ACCOUNT,
      to: user.email,
      subject: 'Reset Password Warning',
      text: `Hello, ${user.username}. This is an information message because you have requested a password change.
      Until you change it, your account will be locked`
    })

    return await Transporter.sendMail(mailOptions)
  } catch (error) {
    console.log(error)
    throw Error(error)
  }
}

const sendEmailChangedPassword = async (user) => {
  try {
    const mailOptions = ({
      from: process.env.EMAIL_ACCOUNT,
      to: user.email,
      subject: 'SOLICITAR CAMBIAR CONTRASEÑA',
      text: `¡Hola!, ${user.username}. para cambiar tu contraseña puedes hacerlo desde el siguiente enlace: <a href="http://${host}/auth/recover-password/?token=${user.security?.cryptoToken}">Cambiar contraseña</a>`
    })

    return await Transporter.sendMail(mailOptions)
  } catch (error) {
    console.log(error)
    throw Error(error)
  }
}



const sendChangedPasswordMail = async (user) => {
  try {
    const mailOptions = ({
      from: process.env.EMAIL_ACCOUNT,
      to: user.email,
      subject: 'Reset Password Info',
      text: `Hello, ${user.username}. This is a password change confirmation message`
    })

    return await Transporter.sendMail(mailOptions)
  } catch (error) {
    console.log(error)
    throw Error(error)
  }
}

module.exports = { sendVerificationMail, sendForgotPasswordMail, sendChangedPasswordMail, sendEmailChangedPassword }

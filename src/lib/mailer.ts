import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export const sendEmail = async ({ email, options }: any) => {
  try {
    // create a hased token
    // const hashedToken = await bcryptjs.hash(userId.toString(), 10)

    // if (emailType === "VERIFY") {
    //     await User.findByIdAndUpdate(userId,
    //         {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000})
    // } else if (emailType === "RESET"){
    //     await User.findByIdAndUpdate(userId,
    //         {forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000})
    // }

    var transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    } as SMTPTransport.Options);
    const mailOptions = {
      from: process.env.MAIL_FROM_ADDRESS,
      to: email,
      subject: options.subject,
      html: options.html,
    };
    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const mailer = require("nodemailer")

const sendingMail = async (to ,subject ,text)=>{

const transporter = mailer.createTransport({
    service : "gmail",
    auth : {
        user : "vs6120529@gmail.com",
        pass : "tknf uvyq kccs vnen"
    }
})

const mailOptions = {
    from : "vs6120529@gmail.com",
    to : to,
    subject : subject,
    html : text
}

    const mailResponse = await transporter.sendMail(mailOptions);
    console.log(mailResponse);
    return mailResponse;

}
module.exports = {
    sendingMail
}
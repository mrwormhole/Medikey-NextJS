import sendgrid from "@sendgrid/mail";

export default async (req, res) => {
  if (req.method === "POST") {
      sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

      const {email, fullName, message} = req.body;

      const mailData = {
        to: "info@medikeyhealth.co.uk",
        from: email,
        subject: 'New message from Client',
        html: `<strong> Hello Medikey Health! </strong> 
        <p> I am ${fullName}. ${message} </p>`
      };
     
      sendgrid.send(mailData).then((result) => {
        res.status(200).json({
            success: true
        });
      }).catch((err) => {
        res.status(400).json({
            success: false
        });
      });
  }
}

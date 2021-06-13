import sendgrid from "@sendgrid/mail";

export default async (req, res) => {
  if (req.method === "POST") {
      console.log("body", req.body);
      const {from_email, from_name, message} = req.body;

      const mailData = {
        to: "info@medikeyhealth.co.uk",
        from: from_email,
        subject: 'New message from Client',
        html: `<strong> Hello Medikey Health! </strong> 
        <p> I am ${from_name}. ${message} </p>`
      };

      sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
     
      sendgrid.send(mailData).then((result) => {
        console.log("result", result)
        res.status(200).json({
            success: true
        });
      }).catch((err) => {
        console.log("err", err)
        res.status(400).json({
            success: false
        });
      });
  }
}

const axios = require('axios');
const { getMessage } = require('../../common/utils');

async function sendPaymentConfirmation(req, res) {
  const emailParams = {
    toEmail: "bbchanna@gmail.com",
    name: "Basit",
    orderNr: "111"
  };

  try {
    console.log("Email Params:", emailParams);
    console.log("Mailchimp API Key:", process.env.MAILCHIMP_API_KEY);

    const response = await axios.post(
      'https://api.mailchimp.com/3.0/messages',
      getMessage(emailParams),
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${process.env.MAILCHIMP_API_KEY}`).toString('base64')}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log("Mailchimp Response:", response.data);

    return res.status(200).json({ message: `Order confirmation email sent successfully for orderNr: ${emailParams.orderNr}` });
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  sendPaymentConfirmation
};

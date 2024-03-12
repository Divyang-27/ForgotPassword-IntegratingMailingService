const forgotpw = (req, res) => {
  const mail = req.body.mail;
  const SIB = require('sib-api-v3-sdk');
  const client = SIB.ApiClient.instance;
  const apiKey = client.authentications['api-key'];
  apiKey.apiKey = process.env.SIB_API_KEY;
  const tranEmailApi = new SIB.TransactionalEmailsApi();

  const sender = {
    email: 'divyang@gmail.com',
  };

  const reciever = [
    {
      email: `${mail}`,
    },
  ];
  tranEmailApi.sendTransacEmail({
    sender,
    to: reciever,
    subject: 'You forgot your password',
    textContent: 'Heres an email that you forgot your password',
  });
};

module.exports = {
  forgotpw,
};

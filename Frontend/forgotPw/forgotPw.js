const forgotPw = (e) => {
  const mail = e.target.mail.value;
  axios.post(`http://localhost:3000/password/forgotpassword`, { mail });
};

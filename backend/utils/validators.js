const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);

module.exports = { isEmailValid };

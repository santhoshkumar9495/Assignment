const { ResetPinSchema } = require("./ResetPin.shema");
const { randomPinNumber } = require("../../utils/randomGenerator");

const setPasswordRestPin = async (email) => {
  //reand 6 digit
  const pinLength = 6;
  const randPin = await randomPinNumber(pinLength);
  const restObj = {
    email,
    pin: randPin,
  };
  return new Promise((resolve, reject) => {
    ResetPinSchema(restObj)
      .save()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

const getPinByEmailPin = (email, pin) => {
  return new Promise((resolve, reject) => {
    if (!email) return false;
    ResetPinSchema.findOne({ email, pin })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

const deletePin = (email, pin) => {
  return new Promise((resolve, reject) => {
    if (!email) return false;
    ResetPinSchema.findOneAndDelete({ email, pin })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

module.exports = {
  setPasswordRestPin,
  getPinByEmailPin,
  deletePin,
};
const jwt = require("jsonwebtoken");
const {settokenJWT} = require("../model/refreshjwt/refresh.model");
const { storeUserRefreshJWT } = require("../model/user/users.model");

const ceateAccessJWT = async (email, _id) => {
  try {
    const accessJWT = jwt.sign({ email }, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "15m",
    });
    const refreshpin= accessJWT;
    const objectid= _id;
    const tokenandid={refreshpin,objectid}
    await settokenJWT (tokenandid);
    return Promise.resolve(accessJWT);
  } catch (error) {
    return Promise.reject(error);
  }
};

const ceateRefreahJWT = async (email, _id) => {
  try {
    const RefreshJWT = jwt.sign({ email }, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "2d",
    });
    await storeUserRefreshJWT(_id, RefreshJWT);
    return Promise.resolve(RefreshJWT);
  } catch (error) {
    return Promise.reject(error);
  }
};

const verifyAccessJWT = (userJWT) => {
  try {
    return Promise.resolve(jwt.verify(userJWT, process.env.JWT_ACCESS_SECRET));
  } catch (error) {
    return Promise.resolve(error);
  }
};

const verifyRefreshJWT = (userJWT) => {
  try {
    return Promise.resolve(jwt.verify(userJWT, process.env.JWT_REFRESH_SECRET));
  } catch (error) {
    return Promise.resolve(error);
  }
};

module.exports = { ceateAccessJWT, ceateRefreahJWT, verifyAccessJWT,
verifyRefreshJWT };
const jwt = require("jsonwebtoken");
const { Token } = require("../db/models");
const { where } = require("sequelize");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "20m",
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    });

    return { accessToken, refreshToken };
  }

  async saveToken(userId, refreshToken) {
    try {
      const tokenData = await Token.findOne({ where: { userId } });
      if (tokenData) {
        Token.update({ refreshToken }, { where: { userId } });
      } else {
        const token = await Token.create({ userId, refreshToken });
        return token;
      }
    } catch (e) {
      console.log({ ERROR_TOKEN_SERVICE_SAVE_TOKEN: e });
    }
  }

  async removeToken(refreshToken) {
    await Token.destroy({ where: { refreshToken } });
    return true;
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  async findToken(refreshToken) {
    const tokenData = await Token.findOne({ where: { refreshToken } });
    return tokenData;
  }
}

module.exports = new TokenService();

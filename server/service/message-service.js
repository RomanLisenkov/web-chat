const { Message } = require("../db/models");
const { User } = require("../db/models");
class MessageService {
  async getAllmessages() {
    const messages = await Message.findAll({
      include: [{ model: User, attributes: ["login"] }],
    });
    if (messages.length !== 0) {
      const messagesReaped = messages.reduce(
        (acc, curr) => [
          ...acc,
          {
            login: curr.User.login,
            message: curr.message,
            userId: curr.userId,
          },
        ],
        [],
      );

      return messagesReaped;
    } else return [];
  }

  async addMessage(message) {
    Message.create(message);
  }
}

module.exports = new MessageService();

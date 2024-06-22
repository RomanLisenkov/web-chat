class MessageService {
  async getAllmessages() {
    const messages = ["test1", "test2", "test3"];
    return messages;
  }
}

module.exports = new MessageService();

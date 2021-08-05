var messageIds = [];

function delMessages(ctx) {
  for (i = 0; i < messageIds.length; i++) {
    ctx.deleteMessage(messageIds[i]);
  }
  messageIds = [];
}

function addMessage(message) {
  messageIds.push(message);
}

module.exports = {
  delMessages,
  addMessage,
};

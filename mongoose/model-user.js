const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  chatId: {
    type: String,
    required: true,
  },
  payed: [
    {
      type: String,
      required: true,
    },
  ],
});

// создаём модель и экспортируем её
module.exports = mongoose.model('user', userSchema); 

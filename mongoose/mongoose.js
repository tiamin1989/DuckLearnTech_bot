const mongoose = require("mongoose");
const User = require("./model-user");

// подключаемся к серверу mongo
/* mongoose.connect("mongodb://localhost:27017/DuckLearnTech", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}); */

module.exports = {
  mongoose,
  User,
};

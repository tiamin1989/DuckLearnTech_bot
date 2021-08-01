const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();

// База данных
const User = require("./mongoose/model-user");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/DuckLearnTech", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const { actions } = require("./actions/actions");
const { payFuncs } = require("./pay2");

const bot = new Telegraf(process.env.BOT_TOKEN); //сюда помещается токен, который дал botFather

/* bot.use(Telegraf.log()); */

bot.command("start", (ctx) => {
  return ctx.replyWithHTML(
    "Привет, это <b>DuckLearnTech_bot</b> 🎉. Я помогу Вам с курсами. Давайте, для начала, выберем компанию, курсы которой изучаете:",
    Markup.inlineKeyboard([
      [Markup.callbackButton("1С-Битрикс", "action_1c_bitrix")],
      [Markup.callbackButton("🖨 Договор-оферта", "action_license")],
    ]).extra()
  );
});

actions(bot);
payFuncs(bot);

// ответ на предварительный запрос по оплате
bot.on("pre_checkout_query", (ctx) => {
  return ctx.answerPreCheckoutQuery(true);
});

bot.on("successful_payment", async (ctx) => {
  User.findOne({ chatId: String(ctx.from.id) })
    .then((res) => {
      if (res !== null) {
        User.findByIdAndUpdate(res._id, {
          $push: {
            payed: JSON.parse(
              ctx.update.message.successful_payment.invoice_payload
            ).action,
          },
        }).exec();
      }
      // Если клиента нет в базе - работает
      else {
        User.create({
          chatId: ctx.from.id,
          payed: JSON.parse(
            ctx.update.message.successful_payment.invoice_payload
          ).action,
        });
      }
    })
    .catch((err) => {
      ctx.deleteMessage();
      return ctx.replyWithHTML(
        `⚠ Произошла ошибка:\n<b>${err.message}</b>\nПожалуйста, обратитесь к администратору @tiamin1989`,
        Markup.inlineKeyboard([
          [Markup.callbackButton("☰ Главное меню", "action_main")],
        ]).extra()
      );
    });
});

/* Для кнопки
bot.action("Coke1", (ctx) => ctx.reply("👍")); */

/* Для текста 
bot.hears("Coke", (ctx) => ctx.reply("Yay!")); */

bot.launch();

module.exports = {
  bot,
};

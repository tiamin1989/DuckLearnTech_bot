const { Markup } = require("telegraf");

const { delMessages, addMessage } = require("../message-utils");

const text_oferta = `<b>Договор публичной оферты на оказание информационно-консультационных услуг</b>\n\n`;

const run_action_oferta = (bot) => {
  bot.action("action_oferta", (ctx) => {
    delMessages(ctx);
    return Promise.all([
      ctx.replyWithHTML(
        text_oferta,
        Markup.inlineKeyboard([
          [Markup.callbackButton("⬅ Назад", "action_main")],
        ]).extra()
      ),
    ]).then((results) => addMessage(results[0].message_id));
  });
};

module.exports = {
  run_action_oferta,
};

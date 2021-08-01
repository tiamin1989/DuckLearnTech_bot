const { Markup } = require("telegraf");

const text_oferta = `<b>Договор публичной оферты на оказание информационно-консультационных услуг</b>\n\n`;

const run_action_oferta = (bot) => {
  bot.action("action_oferta", (ctx) => {
    ctx.deleteMessage();
    return ctx.replyWithHTML(
      text_oferta,
      Markup.inlineKeyboard([
        [Markup.callbackButton("⬅ Назад", "action_main")],
      ]).extra()
    );
  });
};

module.exports = {
  run_action_oferta,
};

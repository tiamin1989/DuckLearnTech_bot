const { Markup } = require("telegraf");
const { run_action_1c_bitrix } = require("./action_1c_bitrix");
const { run_action_oferta } = require("./action_oferta");

const actions = (bot) => {
  bot.action("action_main", (ctx) => {
    ctx.deleteMessage();
    return ctx.reply(
      "Выберите компанию, которой принадлежит курс:",
      Markup.inlineKeyboard([
        [Markup.callbackButton("1С-Битрикс", "action_1c_bitrix")],
        [Markup.callbackButton("🖨 Договор-оферта", "action_oferta")],
      ]).extra()
    );
  });
  run_action_1c_bitrix(bot);
  run_action_oferta(bot);
};

module.exports = {
  actions,
};

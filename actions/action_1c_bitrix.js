const { Markup } = require("telegraf");
const {
  run_action_1c_bitrix_content_manager,
} = require("./action_1c_bitrix_content_manager");
const {
  run_action_1c_bitrix_admin_base,
} = require("./action_1c_bitrix_admin_base");
const {
  run_action_1c_bitrix_admin_modules,
} = require("./action_1c_bitrix_admin_modules");
const {
  run_action_1c_bitrix_admin_business,
} = require("./action_1c_bitrix_admin_business");

const { delMessages, addMessage } = require("../message-utils");

const run_action_1c_bitrix = (bot) => {
  bot.action("action_1c_bitrix", (ctx) => {
    delMessages(ctx);
    return Promise.all([
      ctx.replyWithHTML(
        "<b>⭐ Компания:</b> 1С-Битрикс\n\nВыберите необходимый курс:",
        Markup.inlineKeyboard([
          [
            Markup.callbackButton(
              "Контент-менеджер",
              "action_1c_bitrix_content_manager"
            ),
          ],
          [
            Markup.callbackButton(
              "Администратор. Базовый",
              "action_1c_bitrix_admin_base"
            ),
          ],
          [
            Markup.callbackButton(
              "Администратор. Модули",
              "action_1c_bitrix_admin_modules"
            ),
          ],
          [
            Markup.callbackButton(
              "Администратор. Бизнес",
              "action_1c_bitrix_admin_business"
            ),
          ],
          /*[Markup.callbackButton("Разработчик Bitrix Framework", "action_1c_bitrix_developer_bitrix_framework")],
          [Markup.callbackButton("Технология Композитный сайт", "action_1c_bitrix_composite_site_tech")],
          [Markup.callbackButton("Установка и настройка", "action_1c_bitrix_install_config")],
          [Markup.callbackButton("Курс для хостеров", "action_1c_bitrix_hosters")],
          [Markup.callbackButton("Многосайтовость", "action_1c_bitrix_multi_site")],
          [Markup.callbackButton("Интеграция с 1С", "action_1c_bitrix_1c_integration")],
          [Markup.callbackButton("Пользователь сервиса Битрикс24", "action_1c_bitrix_bitrx24_user")],
          [Markup.callbackButton("Администратор сервиса Битрикс24 (коробочная версия)", "action_1c_bitrix_bitrx24_box_admin")],
          [Markup.callbackButton("Пользователь коробочной версии Битрикса24", "action_1c_bitrix__box_user")],
          [Markup.callbackButton("Курс для партнеров Битрикс24", "action_1c_bitrix_bitrix24_partner")],
          [Markup.callbackButton("Продвижение сайта и Маркетинг", "action_1c_bitrix_promote_marketing")],
          [Markup.callbackButton("Курс менеджеров по продажам Битрикс24", "action_1c_bitrix_bitrix24_manager_one")],
          [Markup.callbackButton("Курс менеджеров по продажам Битрикс24. Продолжение.", "action_1c_bitrix_bitrix24_manager_two")], */
          [
            Markup.callbackButton("☰ Главное меню", "action_main"),
            Markup.callbackButton("⬅ Назад", "action_main"),
          ],
        ]).extra()
      ),
    ]).then((results) => addMessage(results[0].message_id));
  });

  run_action_1c_bitrix_content_manager(bot);
  run_action_1c_bitrix_admin_base(bot);
  run_action_1c_bitrix_admin_modules(bot);
  run_action_1c_bitrix_admin_business(bot);
};

module.exports = {
  run_action_1c_bitrix,
};

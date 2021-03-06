const { Markup } = require("telegraf");

const User = require("../../mongoose/model-user");

const { delMessages, addMessage } = require("../../message-utils");

/* Текст подразделов курса */
const text_1cb_a_m_c_a = `<b>⭐ Компания:</b> 1С-Битрикс\n<b>✍ Курс:</b> Администратор. Модули\n⛳ <b>Подраздел:</b> Средства управления и анализа\n
▶ <b>На какой вкладке настроек параметров шаблона бизнес- процесса можно определить параметры автозапуска?</b>\n  • 1\n
▶ <b>Уровень доступа «Бизнес-процессы» позволяет пользователям</b>\n  • участвовать в бизнес-процессах\n
▶ <b>Для работы пользователя с модулем Бизнес-процессы нужно настроить</b>\n  • права доступа для пользователей к инфоблоку\n  • инфоблок на работу с бизнес-процессами\n
▶ <b>На какой вкладке настроек бизнес- процесса можно настроить неизменные для процесса данные?</b>\n  • 4\n
▶ <b>Какой тип доступа рекомендуется настраивать для редакторов, SEO-оптимизаторов и контролирующих лиц заказчика?</b>\n  • Анализ страниц и сайта\n
▶ <b>В модуле Документооборот:</b>\n  • статус с идентификатором равным 1 зарезервирован и не подлежит удалению\n
▶ <b>Укажите ошибочные действия для организации документооборота</b>\n  • разрешить группе пользователей просмотр истории документов\n  • разрешить доступ группе пользователей к Менеджеру файлов в настройках "Главного модуля"\n
▶ <b>Инфоблоки могут принимать участие в:</b>\n  • либо в бизнес-процессах, либо в документообороте\n
▶ <b>Где можно настроить автозапуск бизнес-процесса?</b>\n  • в настройках шаблона бизнес-процесса\n
▶ <b>Где задается адрес почтового ящика, на который отправляется отчет по статистике Веб-аналитики?</b>\n  • Это адрес почты администратора сайта, он задается в настройках Главного модуля\n
▶ <b>Где отображается статистика посещений разделов и файлов?</b>\n  • В меню Аналитика > Посещаемость\n`;

const text_1cb_a_m_t_a = `<b>⭐ Компания:</b> 1С-Битрикс\n<b>✍ Курс:</b> Администратор. Модули\n⛳ <b>Подраздел:</b> Средства обучения и помощи\n
▶ <b>Что определяет SLA?</b>\n  • время реакции на обращение пользователя\n  • уровни критичности обращений\n  • расписание техподдержки\n
▶ <b>Выберите типы справочников, имеющиеся в системе:</b>\n  • категории\n  • статусы\n  • сложность\n
▶ <b>Ответственный за рассмотрения обращения в службу техподдержки определяется:</b>\n  • исходя из параметров SLA\n  • администратором техподдержки вручную\n  • исходя из настроек категории обращения\n  • исходя из настроек модуля "Техподдержка"\n
▶ <b>Система поддерживает автоматическую регистрацию обращений, поступающих в службу техподдержки:</b>\n  • посредством электронного письма\n  • через формы на сайте\n
▶ <b>Количество шагов мастера техподдержки зависит от:</b>\n  • вложенности разделов/подразделов инфоблока\n
▶ <b>На странице Журнал фиксируется:</b>\n  • результат наиболее успешной попытки прохождения теста для каждого пользователя\n
▶ <b>Интеграция Wiki в Социальную сеть включается и настраивается:</b>\n  • в настройках модуля Wiki\n
▶ <b>Просмотр всех обращений в службу техподдержки доступен:</b>\n  • администратору техподдержки\n
▶ <b>Расставьте параметры обращения в порядке уменьшения приоритета при автоматическом назначении ответственного сотрудника:</b>\n  • SLA\n  • настройки категории, к которой было отнесено обращение\n  • настройки модуля техподдержки\n
▶ <b>Какие настройки необходимо выполнить для получения обращений в техподдержку по почте?</b>\n  • создано новое правило обработки почтовых сообщений\n  • настройка модуля "Техподдержка"\n  • должна быть заведена учетная запись электронной почты службы техподдержки\n
▶ <b>На странице Сертификация можно:</b>\n  • удалить сертификат\n  • изменить данные сертификата\n
▶ <b>Список попыток прохождения теста по итогам курса фиксируется на странице:</b>\n  • Попытки\n`;

const text_1cb_a_m_i_c = `<b>⭐ Компания:</b> 1С-Битрикс\n<b>✍ Курс:</b> Администратор. Модули\n⛳ <b>Подраздел:</b> Модули информирования и общения\n
▶ <b>Управление статусами веб-форм производится:</b>\n  • для каждой веб-формы отдельно\n
▶ <b>Где можно настроить связь модуля веб-форм с CRM корпоративного портала?</b>\n  • в настройках модуля веб-форм\n  • в настройках конкретной веб-формы\n
▶ <b>В каком порядке система определяет порядок использования адреса электронной почты в почтовом шаблоне? Расположите варианты ответа по убыванию приоритета.</b>\n  • Из почтового шаблона\n  • Из настроек сайта, к которому привязан шаблон\n  • Из настроек главного модуля\n
▶ <b>Где указывается сервер, на котором размещен почтовый ящик?</b>\n  • в настройках почтового ящика\n
▶ <b>Для того чтобы выполнять получение почтовых сообщений вручную, на странице настройки почтового ящика в поле «Проверять с периодом» следует указать:</b>\n  • 0\n
▶ <b>Администратор может выполнять следующие действия с почтовыми ящиками:</b>\n  • создать новый почтовый ящик\n  • просмотреть или добавить новое правило для почтового ящика\n  • изменить параметры учетной записи\n  • просмотреть все сообщения, пришедшие на этот ящик\n  • посмотреть журнал событий по данному ящику\n  • удалить учетную запись\n
▶ <b>Чтобы правило применялось к почтовым сообщениям автоматически, в поле «Применять при событиях» (форма редактирования правила, модуль «Почта») следует выбрать значение:</b>\n  • при получении\n
▶ <b>Настройка прав доступа к сообщениям и комментариям блога выполняется при создании/редактировании:</b>\n  • блога в публичном разделе\n  • сообщения\n  • блога в административном разделе\n
▶ <b>Администратор вправе назначить следующие права доступа к группе опросов для разных групп пользователей:</b>\n  • позволить голосовать и просматривать результаты\n  • запретить все действия\n  • позволить принять участие в опросах\n
▶ <b>Создание новых форумов выполняется:</b>\n  • в административной части\n
▶ <b>Как можно указать несколько e-mail для доставки почтового сообщения?</b>\n  • перечислить их через запятую в соответствующем поле\n
▶ <b>Управлять определенным функционалом фотогалерей в модуле Социальной сети можно:</b>\n  • только раздельно по каждому сайту\n
▶ <b>Каждый форум может:</b>\n  • остаться без привязки к какой-либо группе\n  • быть привязан к одной из групп форумов\n
▶ <b>Создание новых статусов Менеджера идей производится</b>\n  • в административном разделе на странице "Пользовательские поля"\n
▶ <b>Неактивные форумы доступны:</b>\n  • пользователям, которые имеют права на полный доступ к ним\n
▶ <b>Использование Универсальных списков в Социальной сети:</b>\n  • включается дополнительно в настройках модуля Универсальные списки\n
▶ <b>Тема групп это:</b>\n  • совокупность рабочих групп, обладающих некоторой общей тематикой, признаком\n
▶ <b>Доступ к темам и сообщениям форумов социальной сети задается:</b>\n  • персональными настройками сотрудников и рабочих групп\n  • настройками модуля Социальной сети\n
▶ <b>Социальные сервисы настраиваются</b>\n  • как для всех сайтов сразу, так и для каждого сайта по отдельности\n
▶ <b>Все группы пользователей социальной сети по умолчанию имеют следующие права:</b>\n  • работа в публичной части без права создания рабочих групп\n
▶ <b>Управление функционалом социальной сети выполняется:</b>\n  • как для всех сайтов сразу, так и для каждого сайта по отдельности\n`;

const text_1cb_a_m_s_m = `<b>⭐ Компания:</b> 1С-Битрикс\n<b>✍ Курс:</b> Администратор. Модули\n⛳ <b>Подраздел:</b> Служебные Модули\n
▶ <b>Какое количество A/B тестирований может быть запущено одновременно?</b>\n  • Не более 1\n
▶ <b>В каком пункте меню можно выполнить операции над подключенными сайтами?</b>\n  • 1\n
▶ <b>В каком пункте меню можно настроить выполнение на удаленных сайтах определенного php-кода в заданный период времени?</b>\n  • 7\n
▶ <b>В каком пункте меню нужно вводить произвольный PHP код?</b>\n  • 5\n
▶ <b>При входе на подключенный к контроллеру сайт через логин на контроллере</b>\n  • На сайте создается локальный пользователь с соответствующим именем и правами\n
▶ <b>Контроллер сайтов – это</b>\n  • модуль Bitrix Framework, который позволяет устанавливать связь с другими независимыми веб-сайтами и централизованно управлять ими\n
▶ <b>Передача файлов через контроллер сайтов:</b>\n  • возможна как на отдельный сайт, так и на группу\n
▶ <b>Администратор контроллера на подчиненных сайтах может:</b>\n  • авторизовываться и выполнить необходимые действия без учета уровня прав, установленных локальными администраторами.\n
▶ <b>Если подключенный сайт отмечен в контроллере как неактивный, то:</b>\n  • он недоступен для любых посетителей.\n`;

const run_action_1c_bitrix_admin_modules = (bot) => {
  bot.action("action_1c_bitrix_admin_modules", (ctx) => {
    delMessages(ctx);
    return Promise.all([
      ctx.replyWithHTML(
        "⭐ <b>Компания:</b> 1С-Битрикс\n✍ <b>Курс:</b> Администратор. Модули\n\nВыберите необходимый подраздел курса:",
        Markup.inlineKeyboard([
          [
            Markup.callbackButton(
              "Средства управления и анализа (12)",
              "action_1cb_a_m_c_a"
            ),
          ],
          [
            Markup.callbackButton(
              "Средства обучения и помощи (12)",
              "action_1cb_a_m_t_a"
            ),
          ],
          [
            Markup.callbackButton(
              "Модули информирования и общения (21)",
              "action_1cb_a_m_i_c"
            ),
          ],
          [
            Markup.callbackButton(
              "Служебные модули (9)",
              "action_1cb_a_m_s_m"
            ),
          ],
          [
            Markup.callbackButton("☰ Главное меню", "action_main"),
            Markup.callbackButton("⬅ Назад", "action_1c_bitrix"),
          ],
        ]).extra()
      ),
    ]).then((results) => addMessage(results[0].message_id));
  });

  const showMessages = async (textArray, ctx) => {
    for (i = 0; i < textArray.length; i++) {
      const results = await Promise.all([
        ctx.replyWithHTML(
          textArray[i],
          i + 1 < textArray.length
            ? null
            : Markup.inlineKeyboard([
                [
                  Markup.callbackButton("☰ Главное меню", "action_main"),
                  Markup.callbackButton(
                    "⬅ Назад",
                    "action_1c_bitrix_admin_modules"
                  ),
                ],
              ]).extra()
        ),
      ]);
      addMessage(results[0].message_id);
    }
  }

  const createAction = (action, ...text) => {
    bot.action(action, (ctx) => {
      // Пробуем найти в базе данный ChatId
      User.findOne({ chatId: String(ctx.from.id) })
        .then((res) => {
          if (res !== null) {
            if (
              res.payed.includes("action_1c_bitrix") ||
              res.payed.includes(action)
            ) {
              delMessages(ctx);
              showMessages(text, ctx);
            } else {
              // Если клиент есть в базе, но подписка не оформлена
              delMessages(ctx);
              return Promise.all([
                ctx.replyWithHTML(
                  `ℹ Для получения доступа в этот подраздел необходимо приобрести подписку.\n\nВы можете приобрести подписку как на отдельный подраздел курса, либо приобрести <b>полный доступ</b> ко всем курсам компании <b>1С-Битрикс</b>.`,
                  Markup.inlineKeyboard([
                    [
                      Markup.callbackButton(
                        "💳 Оплатить за подраздел 75 руб",
                        `pay_${action}`
                      ),
                    ],
                    [
                      Markup.callbackButton(
                        "💳 Оплатить полный доступ за 300 руб",
                        "pay_action_1c_bitrix"
                      ),
                    ],
                    [
                      Markup.callbackButton("☰ Главное меню", "action_main"),
                      Markup.callbackButton(
                        "⬅ Назад",
                        "action_1c_bitrix_admin_modules"
                      ),
                    ],
                  ]).extra()
                ),
              ]).then((results) => addMessage(results[0].message_id));
            }
          } else {
            // Если клиента нет в базе
            delMessages(ctx);
            return Promise.all([
              ctx.replyWithHTML(
                `ℹ Для получения доступа необходимо приобрести подписку. Подписка оплачивается разово и действует <b>бессрочно</b>.\n\nВы можете приобрести подписку как на отдельный подраздел курса, либо приобрести <b>полный доступ</b> ко всем курсам компании <b>1С-Битрикс</b>.`,
                Markup.inlineKeyboard([
                  [
                    Markup.callbackButton(
                      "💳 Оплатить за подраздел 75 руб",
                      `pay_${action}`
                    ),
                  ],
                  [
                    Markup.callbackButton(
                      "💳 Получить полный доступ за 300 руб",
                      "pay_action_1c_bitrix"
                    ),
                  ],
                  [
                    Markup.callbackButton("☰ Главное меню", "action_main"),
                    Markup.callbackButton(
                      "⬅ Назад",
                      "action_1c_bitrix_admin_modules"
                    ),
                  ],
                ]).extra()
              ),
            ]).then((results) => addMessage(results[0].message_id));
          }
        })
        .catch((err) => {
          delMessages(ctx);
          return Promise.all([
            ctx.replyWithHTML(
              `⚠ Произошла ошибка:\n<b>${err.message}</b>\nПожалуйста, обратитесь к администратору @tiamin1989`,
              Markup.inlineKeyboard([
                [
                  Markup.callbackButton("☰ Главное меню", "action_main"),
                  Markup.callbackButton(
                    "⬅ Назад",
                    "action_1c_bitrix_admin_modules"
                  ),
                ],
              ]).extra()
            ),
          ]).then((results) => addMessage(results[0].message_id));
        });
    });
  };

  createAction("action_1cb_a_m_c_a", text_1cb_a_m_c_a);
  createAction("action_1cb_a_m_t_a", text_1cb_a_m_t_a);
  createAction("action_1cb_a_m_i_c", text_1cb_a_m_i_c);
  createAction("action_1cb_a_m_s_m", text_1cb_a_m_s_m);
};

module.exports = {
  run_action_1c_bitrix_admin_modules,
};

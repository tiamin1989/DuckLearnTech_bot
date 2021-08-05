const payFuncs = (bot) => {
  const getInvoiceFull = (id, action) => {
    const invoice = {
      chat_id: id, // Уникальный идентификатор целевого чата или имя пользователя целевого канала
      provider_token: process.env.PROVIDER_TOKEN, // токен выданный через бот @SberbankPaymentBot
      start_parameter: "get_full_access", //Уникальный параметр глубинных ссылок. Если оставить поле пустым, переадресованные копии отправленного сообщения будут иметь кнопку «Оплатить», позволяющую нескольким пользователям производить оплату непосредственно из пересылаемого сообщения, используя один и тот же счет. Если не пусто, перенаправленные копии отправленного сообщения будут иметь кнопку URL с глубокой ссылкой на бота (вместо кнопки оплаты) со значением, используемым в качестве начального параметра.
      title: "DuckLearnTech - учимся легко!", // Название продукта, 1-32 символа
      description:
        "DuckLearnTech предоставляет консультационные услуги в сфере курсов на просторах Интернет", // Описание продукта, 1-255 знаков
      currency: "RUB", // Трехбуквенный код валюты ISO 4217
      prices: [{ label: "DuckLearnTech - полный доступ", amount: 300 * 100 }], // Разбивка цен, сериализованный список компонентов в формате JSON 100 копеек * 100 = 100 рублей
      photo_url:
        "https://s3.eu-central-1.wasabisys.com/ghashtag/JavaScriptBot/Unlock.png", // URL фотографии товара для счета-фактуры. Это может быть фотография товара или рекламное изображение услуги. Людям больше нравится, когда они видят, за что платят.
      photo_width: 500, // Ширина фото
      photo_height: 281, // Длина фото
      payload: {
        // Полезные данные счета-фактуры, определенные ботом, 1–128 байт. Это не будет отображаться пользователю, используйте его для своих внутренних процессов.
        unique_id: `${id}_${Number(new Date())}`,
        provider_token: process.env.PROVIDER_TOKEN,
        action: action,
      },
    };
    return invoice;
  };

  const getInvoiceCategory = (id, action) => {
    const catInvoice = {
      chat_id: id,
      provider_token: process.env.PROVIDER_TOKEN,
      start_parameter: "get_part_access",
      title: "DuckLearnTech - учимся легко!",
      description:
        "DuckLearnTech предоставляет консультационные услуги в сфере курсов на просторах Интернет",
      currency: "RUB",
      prices: [
        { label: "DuckLearnTech - доступ в подраздел", amount: 75 * 100 },
      ],
      photo_url:
        "https://s3.eu-central-1.wasabisys.com/ghashtag/JavaScriptBot/Unlock.png",
      photo_width: 500,
      photo_height: 281,
      payload: {
        unique_id: `${id}_${Number(new Date())}`,
        provider_token: process.env.PROVIDER_TOKEN,
        action: action,
      },
    };
    return catInvoice;
  };

  /* 1С-Битрикс */

  bot.action("pay_action_1c_bitrix", (ctx) => {
    ctx.deleteMessage();
    return ctx.replyWithInvoice(
      getInvoiceFull(ctx.from.id, "action_1c_bitrix")
    ); //  метод replyWithInvoice для выставления счета
  });

  /* 1С-Битрикс -> Контент-Менеджер */

  bot.action("pay_action_1cb_c_m_c", (ctx) => {
    ctx.deleteMessage();
    return ctx.replyWithInvoice(
      getInvoiceCategory(ctx.from.id, "action_1cb_c_m_c")
    );
  });

  bot.action("pay_action_1cb_c_m_s_i", (ctx) => {
    ctx.deleteMessage();
    return ctx.replyWithInvoice(
      getInvoiceCategory(ctx.from.id, "action_1cb_c_m_s_i")
    );
  });

  bot.action("pay_action_1cb_c_m_s_m", (ctx) => {
    ctx.deleteMessage();
    return ctx.replyWithInvoice(
      getInvoiceCategory(ctx.from.id, "action_1cb_c_m_s_m")
    );
  });

  bot.action("pay_action_1cb_c_m_v_e", (ctx) => {
    ctx.deleteMessage();
    return ctx.replyWithInvoice(
      getInvoiceCategory(ctx.from.id, "action_1cb_c_m_v_e")
    );
  });

  bot.action("pay_action_1cb_c_m_c2", (ctx) => {
    ctx.deleteMessage();
    return ctx.replyWithInvoice(
      getInvoiceCategory(ctx.from.id, "action_1cb_c_m_c2")
    );
  });

  bot.action("pay_action_1cb_c_m_i_b", (ctx) => {
    ctx.deleteMessage();
    return ctx.replyWithInvoice(
      getInvoiceCategory(ctx.from.id, "action_1cb_c_m_i_b")
    );
  });

  bot.action("pay_action_1cb_c_m_m_s_m", (ctx) => {
    ctx.deleteMessage();
    return ctx.replyWithInvoice(
      getInvoiceCategory(ctx.from.id, "action_1cb_c_m_m_s_m")
    );
  });

  /* 1С-Битрикс -> Администратор. Базовый */
  bot.action("pay_action_1cb_a_b_b_a", (ctx) => {
    ctx.deleteMessage();
    return ctx.replyWithInvoice(
      getInvoiceCategory(ctx.from.id, "action_1cb_a_b_b_a")
    );
  });

  bot.action("pay_action_1cb_a_b_u_a", (ctx) => {
    ctx.deleteMessage();
    return ctx.replyWithInvoice(
      getInvoiceCategory(ctx.from.id, "action_1cb_a_b_u_a")
    );
  });

  bot.action("pay_action_1cb_a_b_sec", (ctx) => {
    ctx.deleteMessage();
    return ctx.replyWithInvoice(
      getInvoiceCategory(ctx.from.id, "action_1cb_a_b_sec")
    );
  });

  bot.action("pay_action_1cb_a_b_p_r", (ctx) => {
    ctx.deleteMessage();
    return ctx.replyWithInvoice(
      getInvoiceCategory(ctx.from.id, "action_1cb_a_b_p_r")
    );
  });

  bot.action("pay_action_1cb_a_b_b", (ctx) => {
    ctx.deleteMessage();
    return ctx.replyWithInvoice(
      getInvoiceCategory(ctx.from.id, "action_1cb_a_b_b")
    );
  });

  bot.action("pay_action_1cb_a_b_s", (ctx) => {
    ctx.deleteMessage();
    return ctx.replyWithInvoice(
      getInvoiceCategory(ctx.from.id, "action_1cb_a_b_s")
    );
  });
};

module.exports = {
  payFuncs,
};

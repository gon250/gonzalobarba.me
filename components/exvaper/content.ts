// Texts for the Exvaper support and privacy pages, in English and Spanish.
// The App Store links here with ?lang=es for the Spanish listing.

export type Lang = "en" | "es";

export const APP_STORE_URL = "https://apps.apple.com/app/id6833396669";
export const UPDATED = { en: "Last updated: 13 November 2026", es: "Última actualización: 13 de noviembre de 2026" };

type Section = { title: string; paragraphs?: string[]; items?: string[]; after?: string[] };

export const content = {
  en: {
    backToHome: "← Back to home",
    tagline: "Quit vaping, calmly. Beat cravings in 2 minutes, watch your streak and savings grow, and turn every clean day into a doodle. One payment, no subscription.",
    galleryAlt: ["Today: your streak, money saved and next milestone", "Craving SOS: 2 minutes of guided breathing", "Your year: every clean day becomes a doodle", "One payment, no subscription, 3 days free"],
    download: "Download on the App Store",
    privacyLink: "Privacy policy",
    supportLink: "Help & support",
    support: {
      title: "Exvaper – Help & Support",
      heading: "Help & support",
      intro: "Questions, feedback or a problem? Send us a message and we'll reply as soon as we can, usually within 2 working days.",
      faqTitle: "Frequently asked questions",
      formTitle: "Contact us",
      form: {
        name: "Name",
        email: "Email",
        topic: "Topic",
        topics: { purchase: "Purchase or restore", bug: "Something isn't working", idea: "Idea or feedback", privacy: "Privacy", other: "Other" },
        message: "Message",
        send: "Send",
        sending: "Sending…",
        success: "Thanks! We'll get back to you soon.",
        error: "The message couldn't be sent. Please try again later.",
        privacyNote: "We only use your name and email to answer you.",
      },
      faq: [
        ["How do I restore my purchase?", "Open Settings in Exvaper and tap Restore purchases, using the same Apple Account you bought it with. The paywall also has a Restore button."],
        ["How does the free trial work?", "The trial is free for 3 days and doesn't renew. Nothing is charged unless you buy the lifetime unlock. After the trial, your streak, savings and craving SOS stay free and your data is kept."],
        ["Is there a subscription?", "No. Exvaper is a single payment that unlocks everything forever."],
        ["How is the money saved calculated?", "From what you told us you spend each week, for the time you've been vape-free. If your price changes, update it in Settings → Edit my plan: it applies from that day on, and earlier savings keep the old price."],
        ["I slipped. Do I lose my streak?", "No. Tap I slipped on Today. A few puffs keep your streak. If you're vaping again, you can start a new streak; your history and longest streak are kept."],
        ["Can I change my plan or quit date?", "Yes, in Settings → Edit my plan. You can also change when your vape-free streak started."],
        ["Notifications aren't arriving", "Check Settings → Notifications in Exvaper and in your iPhone's Settings → Notifications → Exvaper. We send at most one a day, never between 9 pm and 9 am."],
        ["What is Your year?", "Your first 365 days at a glance, with no scrolling. Every vape-free day becomes a small hand-drawn doodle. Tap any day to see it."],
        ["How do I add the widget?", "Touch and hold an empty area of your Home Screen or Lock Screen, tap Edit → Add Widget and search for Exvaper."],
        ["How do I delete my data?", "Go to Settings → Delete all my data in Exvaper. It removes your plan, streaks and logs from your iPhone and from your iCloud. Deleting the app only removes the copy on that iPhone."],
        ["Is Exvaper medical advice?", "No. Exvaper is a support tool. If you have health concerns or use nicotine replacement therapy, talk to a healthcare professional."],
      ] as [string, string][],
    },
    privacy: {
      title: "Exvaper – Privacy Policy",
      heading: "Privacy Policy",
      summaryTitle: "In short",
      summary: [
        "There is no account and no sign-up.",
        "Your quit plan, streaks, cravings and puffs are stored on your iPhone and in your own iCloud, never on our servers.",
        "We collect anonymous usage statistics to improve the app.",
        "No ads, no tracking across apps or websites, and we never sell data.",
      ],
      sections: [
        { title: "1. Who we are", paragraphs: ["Exvaper is developed by Gonzalo Barba, based in Spain. For any privacy question, use the contact form on the support page."] },
        {
          title: "2. Data that stays with you",
          paragraphs: ["What you enter in Exvaper is saved on your device and never sent to us: your quit or cut-down plan, what you vape and what it costs, nicotine strength, your reasons, your streaks, slips, cravings and their triggers, logged puffs, the days you confirm without vaping and your savings goal.", "If iCloud is on for Exvaper, this data is also kept in the private iCloud database of your Apple Account (CloudKit), so a new or second iPhone can restore it. Apple stores it under its own privacy terms; we can't see or access it. You can turn this off in iOS Settings → your name → iCloud.", "Settings → Delete all my data removes it from your iPhone and your iCloud. Deleting the app removes only the copy on that iPhone. Like any app data, it may also be included in your own iPhone backups.", "Share cards are created on your iPhone and only go where you send them. Money saved appears on them only if you turn it on."],
        },
        {
          title: "3. Anonymous usage statistics",
          paragraphs: ["To understand how Exvaper is used and make it better, the app sends anonymous events to our analytics provider, PostHog, on servers in the European Union. For example: an onboarding step was viewed, the paywall was opened, a craving SOS session was completed or a milestone was reached."],
          items: [
            "Events use a random identifier created on your device. It is not linked to your name, email, Apple Account or advertising identifier.",
            "Numbers are sent only as ranges (for example \"10–20 a week\"), never exact amounts. We never send what you type.",
            "Technical details are included: app version, iOS version, device model and language.",
            "As with any internet connection, your IP address is part of each request. We don't use it to locate or identify you.",
          ],
          after: ["We process these statistics on the basis of our legitimate interest in improving the app and keep them only as long as they are useful for that. You can object at any time through the contact form."],
        },
        { title: "4. Purchases", paragraphs: ["The free trial and the lifetime unlock are processed by Apple through the App Store. We never see your payment details. The app only checks with Apple whether a purchase is active."] },
        { title: "5. Notifications", paragraphs: ["Reminders about milestones, your trial and, while cutting down, logging your puffs are scheduled on your iPhone. No notification data is sent to us."] },
        { title: "6. Contact form", paragraphs: ["If you write to us, we receive your name, email and message, and use them only to reply to you. We delete them once your request is resolved."] },
        { title: "7. Children", paragraphs: ["Exvaper is rated for ages 12 and over on the App Store. We don't knowingly collect personal data from children. If you are a parent and have a question, contact us."] },
        {
          title: "8. Your rights",
          paragraphs: ["Under the GDPR you can ask us about the data we process, object to it or ask for it to be deleted, using the contact form. Because the statistics are anonymous, we may not be able to link them to you. You can also complain to your data protection authority (in Spain, the AEPD)."],
        },
        { title: "9. Changes", paragraphs: ["If this policy changes, we will update this page and the date below."] },
      ] as Section[],
    },
  },
  es: {
    backToHome: "← Volver al inicio",
    tagline: "Deja de vapear con calma. Supera los antojos en 2 minutos, mira cómo crecen tu racha y tus ahorros y convierte cada día limpio en un dibujo. Un solo pago, sin suscripción.",
    galleryAlt: ["Hoy: tu racha, el dinero ahorrado y tu próximo logro", "SOS antojo: 2 minutos de respiración guiada", "Tu año: cada día limpio se convierte en un dibujo", "Un solo pago, sin suscripción, 3 días gratis"],
    download: "Descargar en el App Store",
    privacyLink: "Política de privacidad",
    supportLink: "Ayuda y soporte",
    support: {
      title: "Exvaper – Ayuda y soporte",
      heading: "Ayuda y soporte",
      intro: "¿Dudas, sugerencias o un problema? Escríbenos y te responderemos lo antes posible, normalmente en 2 días laborables.",
      faqTitle: "Preguntas frecuentes",
      formTitle: "Contacto",
      form: {
        name: "Nombre",
        email: "Correo electrónico",
        topic: "Tema",
        topics: { purchase: "Compra o restaurar", bug: "Algo no funciona", idea: "Idea o sugerencia", privacy: "Privacidad", other: "Otro" },
        message: "Mensaje",
        send: "Enviar",
        sending: "Enviando…",
        success: "¡Gracias! Te responderemos pronto.",
        error: "No se ha podido enviar el mensaje. Inténtalo más tarde.",
        privacyNote: "Solo usamos tu nombre y tu email para responderte.",
      },
      faq: [
        ["¿Cómo restauro mi compra?", "Abre Ajustes en Exvaper y toca Restaurar compras, con la misma cuenta de Apple con la que compraste. La pantalla de pago también tiene un botón Restaurar."],
        ["¿Cómo funciona la prueba gratis?", "La prueba es gratis durante 3 días y no se renueva. No se cobra nada salvo que compres el desbloqueo para siempre. Al acabar, tu racha, tus ahorros y el SOS siguen gratis y tus datos se conservan."],
        ["¿Hay suscripción?", "No. Exvaper es un único pago que lo desbloquea todo para siempre."],
        ["¿Cómo se calcula el dinero ahorrado?", "Con lo que nos dijiste que gastas cada semana, durante el tiempo que llevas sin vapear. Si cambia el precio, actualízalo en Ajustes → Editar mi plan: cuenta desde ese día y lo ya ahorrado mantiene el precio anterior."],
        ["He fallado. ¿Pierdo mi racha?", "No. Toca He fallado en Hoy. Unas caladas mantienen tu racha. Si has vuelto a vapear, puedes empezar una racha nueva; tu historial y tu racha más larga se guardan."],
        ["¿Puedo cambiar mi plan o mi fecha?", "Sí, en Ajustes → Editar mi plan. También puedes cambiar cuándo empezó tu racha sin vapear."],
        ["No me llegan las notificaciones", "Revisa Ajustes → Notificaciones en Exvaper y en los Ajustes del iPhone → Notificaciones → Exvaper. Enviamos como mucho una al día y nunca entre las 21:00 y las 9:00."],
        ["¿Qué es Tu año?", "Tus primeros 365 días de un vistazo, sin hacer scroll. Cada día sin vapear se convierte en un pequeño dibujo hecho a mano. Toca un día para verlo."],
        ["¿Cómo añado el widget?", "Mantén pulsado un espacio vacío de la pantalla de inicio o de bloqueo, toca Editar → Añadir widget y busca Exvaper."],
        ["¿Cómo borro mis datos?", "Ve a Ajustes → Borrar todos mis datos en Exvaper. Borra tu plan, tus rachas y tus registros de tu iPhone y de tu iCloud. Eliminar la app solo borra la copia de ese iPhone."],
        ["¿Exvaper es un consejo médico?", "No. Exvaper es una herramienta de apoyo. Si tienes dudas sobre tu salud o usas terapia sustitutiva de nicotina, consulta con un profesional sanitario."],
      ] as [string, string][],
    },
    privacy: {
      title: "Exvaper – Política de privacidad",
      heading: "Política de privacidad",
      summaryTitle: "En resumen",
      summary: [
        "No hay cuentas ni registro.",
        "Tu plan, tus rachas, tus antojos y tus caladas se guardan en tu iPhone y en tu propio iCloud, nunca en nuestros servidores.",
        "Recogemos estadísticas de uso anónimas para mejorar la app.",
        "Sin anuncios, sin rastreo entre apps o webs, y nunca vendemos datos.",
      ],
      sections: [
        { title: "1. Quiénes somos", paragraphs: ["Exvaper lo desarrolla Gonzalo Barba, con sede en España. Para cualquier duda sobre privacidad, usa el formulario de la página de soporte."] },
        {
          title: "2. Datos que se quedan contigo",
          paragraphs: ["Lo que introduces en Exvaper se guarda en tu dispositivo y nunca se nos envía: tu plan para dejarlo o reducir, qué vapeas y cuánto cuesta, la concentración de nicotina, tus motivos, tus rachas, deslices, antojos y lo que los provoca, las caladas que apuntas, los días que confirmas sin vapear y tu objetivo de ahorro.", "Si iCloud está activado para Exvaper, estos datos también se guardan en la base de datos privada de iCloud de tu cuenta de Apple (CloudKit), para que un iPhone nuevo o un segundo iPhone pueda recuperarlos. Apple los guarda según sus propias condiciones de privacidad; nosotros no podemos verlos ni acceder a ellos. Puedes desactivarlo en Ajustes de iOS → tu nombre → iCloud.", "Ajustes → Borrar todos mis datos los borra de tu iPhone y de tu iCloud. Eliminar la app solo borra la copia de ese iPhone. Como cualquier dato de una app, también pueden incluirse en tus propias copias de seguridad del iPhone.", "Las tarjetas para compartir se crean en tu iPhone y solo van adonde tú las envíes. El dinero ahorrado solo aparece si lo activas."],
        },
        {
          title: "3. Estadísticas de uso anónimas",
          paragraphs: ["Para entender cómo se usa Exvaper y mejorarla, la app envía eventos anónimos a nuestro proveedor de analítica, PostHog, en servidores de la Unión Europea. Por ejemplo: se ha visto un paso del registro inicial, se ha abierto la pantalla de pago, se ha completado un SOS de antojo o se ha alcanzado un logro."],
          items: [
            "Los eventos usan un identificador aleatorio creado en tu dispositivo. No está vinculado a tu nombre, tu email, tu cuenta de Apple ni al identificador de publicidad.",
            "Los números se envían solo como rangos (por ejemplo, \"10–20 a la semana\"), nunca cantidades exactas. Nunca enviamos lo que escribes.",
            "Se incluyen datos técnicos: versión de la app, versión de iOS, modelo de dispositivo e idioma.",
            "Como en cualquier conexión a internet, tu dirección IP forma parte de cada petición. No la usamos para localizarte ni identificarte.",
          ],
          after: ["Tratamos estas estadísticas por nuestro interés legítimo en mejorar la app y solo las conservamos mientras sean útiles para ello. Puedes oponerte cuando quieras a través del formulario de contacto."],
        },
        { title: "4. Compras", paragraphs: ["La prueba gratis y el desbloqueo para siempre los procesa Apple a través del App Store. Nunca vemos tus datos de pago. La app solo consulta a Apple si una compra está activa."] },
        { title: "5. Notificaciones", paragraphs: ["Los recordatorios de logros, de tu prueba y, mientras reduces, de apuntar tus caladas se programan en tu iPhone. No se nos envía ningún dato de las notificaciones."] },
        { title: "6. Formulario de contacto", paragraphs: ["Si nos escribes, recibimos tu nombre, tu email y tu mensaje, y solo los usamos para responderte. Los borramos cuando tu consulta queda resuelta."] },
        { title: "7. Menores", paragraphs: ["Exvaper está clasificada para mayores de 12 años en el App Store. No recogemos conscientemente datos personales de menores. Si eres padre, madre o tutor y tienes una duda, contáctanos."] },
        {
          title: "8. Tus derechos",
          paragraphs: ["Según el RGPD puedes preguntarnos por los datos que tratamos, oponerte a ello o pedir que se borren, a través del formulario de contacto. Como las estadísticas son anónimas, puede que no podamos vincularlas contigo. También puedes reclamar ante la Agencia Española de Protección de Datos (AEPD)."],
        },
        { title: "9. Cambios", paragraphs: ["Si esta política cambia, actualizaremos esta página y la fecha de abajo."] },
      ] as Section[],
    },
  },
};

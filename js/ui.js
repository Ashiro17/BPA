document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  if (nav) {
    window.addEventListener("scroll", () =>
      nav.classList.toggle("scrolled", window.scrollY > 50)
    );
  }

  // MODAL
  const signupBtn = document.querySelector(".signup-btn");
  const modal = document.getElementById("signupModal");
  const closeBtn = document.querySelector(".modal-close");
  const modalContent = modal?.querySelector(".modal");

  function openModal() {
    if (!modal) return;
    modal.removeAttribute("hidden");
    modal.classList.add("show");
    modalContent?.focus();
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("show");
    setTimeout(() => modal.setAttribute("hidden", ""), 400);
    document.body.style.overflow = "";
  }

  signupBtn?.addEventListener("click", openModal);
  closeBtn?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => e.target === modal && closeModal());
  document.addEventListener(
    "keydown",
    (e) =>
      e.key === "Escape" && modal?.classList.contains("show") && closeModal()
  );

  document.getElementById("signupForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value.trim();
    if (email && email.includes("@")) {
      alert(`Thank you! We'll keep ${email} updated`);
      closeModal();
      e.target.reset();
    }
  });

  // FAQ
  document
    .querySelectorAll(".faq-question")
    .forEach((btn) =>
      btn.addEventListener("click", () =>
        btn.closest(".faq-item").classList.toggle("active")
      )
    );

  const translations = {
    en: {
      navAbout: "About",
      navResources: "Resources",
      navTerms: "Terms",
      navTips: "Tips",
      navContact: "Contact",
      navSignUp: "Sign Up",
      heroTitle:
        'Ride the Wave<br><span class="highlight">Toward Wellness</span>',
      heroTagline:
        "Supporting your mental well-being, one breath and one wave at a time.",
      heroSubtitle:
        "At Wellness Wave, we offer a calm, welcoming space to reflect, heal, and grow. You’ll never face the journey alone.",
      faqTitle: "Common Questions",
      faq1q: "What is Wellness Wave?",
      faq2q: "Is this a crisis service?",
      faq3q: "How do I stay updated?",
      faq1a:
        "Wellness Wave is a mental health awareness and resource platform dedicated to making mental well-being accessible and understandable. We provide evidence-based information, practical tools, self-care strategies, and guidance on when and how to seek professional help. Our mission is to meet people wherever they are on their mental health journey.",
      faq2a:
        "No, Wellness Wave is not a crisis or emergency service. We do not provide immediate counseling, therapy, or crisis intervention. If you or someone you know is in immediate danger or experiencing a mental health crisis, please reach out to a professional crisis service right away — for example, call <strong>988</strong> in the United States.",
      faq3a:
        "Tap <strong>“Sign Up”</strong> above. We send gentle monthly tips with easy unsubscribe. Follow us on social channels for daily insights, reminders, and community stories.",
      tipsTitle: "Practical Coping Tips",
      tipsImmediate: "Immediate Techniques",
      tipsDaily: "Daily Habits That Help",
      tip1: "5-4-3-2-1 Grounding<br>Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste — slowly.",
      tip2: "Box Breathing<br>Inhale 4s → Hold 4s → Exhale 4s → Hold 4s. Repeat 4 cycles.",
      tip3: "Slow Belly Breaths<br>Inhale for 4, exhale for 6 — feel your belly rise and fall.",
      tip4: "Consistent Sleep Routine<br>Same bedtime & wake time + wind-down ritual (limit screens 30–60 min before bed).",
      tip5: "Move Your Body<br>Short walks, stretching, or gentle yoga — 10–30 min most days lifts mood.",
      tip6: "Eat & Hydrate Regularly<br>Small balanced meals + water keep energy and focus steady.",
      tipsCta: "Share Your Own Tip →",
      contactTitle: "Contact & Feedback",
      contactSubtitle: "We’d love to hear from you.",
      contactName: "Name",
      contactEmail: 'Email <span class="optional">(optional)</span>',
      contactSubject: "Subject",
      contactMessage: "Message",
      contactConsent:
        "I consent to using my email client and local storage for demo purposes.",
      contactSubmit: "Send Message",
      contactBack: "← Back to Home",
      termsTitle: "Common Mental Health Terms",
      termsSubtitle: "Tap any term to learn more in a calm, simple way",

      // Definitions
      anxiety:
        "Anxiety is a feeling of worry, nervousness, or unease — often about something with an uncertain outcome. It’s your body’s natural response to stress.",
      depression:
        "Depression is more than just feeling sad. It’s a mood disorder that can affect how you feel, think, and handle daily activities. It’s okay to not be okay.",
      stress:
        "Stress is your body’s response to pressure. Short bursts can help you perform — but long-term stress can harm both mind and body.",
      burnout:
        "Burnout is a state of emotional, physical, and mental exhaustion caused by prolonged stress. It happens when you feel overwhelmed and unable to meet constant demands.",
      panic:
        "A panic attack is a sudden episode of intense fear that triggers severe physical reactions when there is no real danger. You are safe — it will pass.",
      mindfulness:
        "Mindfulness means paying full attention to the present moment, without judgment. It helps reduce anxiety and brings calm.",
      selfcare:
        "Self-care is anything you do to take care of your mental, emotional, and physical health. It’s not selfish — it’s necessary.",
      resilience:
        "Resilience is your ability to bounce back from difficult experiences. It’s like a muscle — it gets stronger with practice.",
      boundaries:
        "Boundaries are limits you set to protect your well-being. Saying “no” is a complete sentence and a form of self-respect.",
      therapy:
        "Therapy is a safe space to talk with a trained professional about your thoughts and feelings. Asking for help is a sign of strength.",
      trigger:
        "A trigger is anything that sets off a memory or emotional response — like a flashback or intense feeling. You’re allowed to step away.",
      grounding:
        "Grounding techniques help bring you back to the present moment when feeling overwhelmed. Try the 5-4-3-2-1 method.",
      support:
        "Your support system includes people who care about you and want you to thrive. You never have to face things alone.",
    },
    zh: {
      navAbout: "关于",
      navResources: "资源",
      navContact: "联系",
      navSignUp: "订阅",
      heroTitle: '乘风破浪<br><span class="highlight">走向健康</span>',
      heroTagline: "一次呼吸、一次浪潮，陪伴你的心理健康。",
      heroSubtitle:
        "在 Wellness Wave，我们提供一个平静、温暖的空间，让你反思、疗愈、成长。你永远不孤单。",
      faqTitle: "常见问题",
      faq1q: "Wellness Wave 是什么？",
      faq2q: "这是危机服务吗？",
      faq3q: "如何保持更新？",
      faq1a:
        "Wellness Wave 是一个心理健康意识与资源平台，致力于让心理健康变得易懂且触手可及。我们提供基于证据的信息、实用工具、自我关怀策略，以及关于何时、何地寻求专业帮助的指导。我们的使命是陪伴每个人在心理健康旅程中的任何阶段。",
      faq2a:
        "不是，Wellness Wave 不是危机或紧急服务。我们不提供即时咨询、心理治疗或危机干预。如果您或您认识的人正处于即时危险或心理健康危机，请立即联系专业危机服务——例如在美国拨打 <strong>988</strong>。",
      faq3a:
        "点击上方的 <strong>“订阅”</strong> 按钮。我们每月发送温和的小贴士，随时可取消订阅。关注我们的社交频道，获取每日心得、提醒和社区故事。",
      tipsTitle: "实用应对技巧",
      tipsImmediate: "即时技巧",
      tipsDaily: "日常好习惯",
      tip1: "5-4-3-2-1 接地<br>慢慢说出你看到的5样、触摸的4样、听到的3样、闻到的2样、尝到的1样。",
      tip2: "方形呼吸<br>吸气4秒 → 屏气4秒 → 呼气4秒 → 屏气4秒。重复4轮。",
      tip3: "慢腹式呼吸<br>吸气4秒，呼气6秒 — 感受腹部起伏。",
      tip4: "规律睡眠<br>固定作息 + 睡前放松仪式（睡前30-60分钟远离屏幕）。",
      tip5: "适度运动<br>短时散步、伸展或轻柔瑜伽 — 大多数日子10-30分钟能提升情绪。",
      tip6: "规律饮食与补水<br>少量均衡饮食 + 多喝水，稳定能量与注意力。",
      tipsCta: "分享你的小妙招 →",
      contactTitle: "联系与反馈",
      contactSubtitle: "很想听听你的声音",
      contactName: "姓名",
      contactEmail: '邮箱 <span class="optional">(可选)</span>',
      contactSubject: "主题",
      contactMessage: "留言",
      contactConsent: "我同意使用邮件客户端和本地存储（仅用于演示）",
      contactSubmit: "发送消息",
      contactBack: "← 返回首页",
    },
    hi: {
      navAbout: "हमारे बारे में",
      navResources: "संसाधन",
      navContact: "संपर्क",
      navSignUp: "साइन अप",
      heroTitle:
        'लहर पर सवार<br><span class="highlight">स्वास्थ्य की ओर</span>',
      heroTagline: "आपकी मानसिक सेहत का साथ, एक सांस और एक लहर हर बार।",
      heroSubtitle:
        "Wellness Wave में हम एक शांत और स्वागत करने वाला स्थान देते हैं जहाँ आप सोचें, ठीक हों और बढ़ें। आप अकेले नहीं हैं।",
      faqTitle: "सामान्य प्रश्न",
      faq1q: "Wellness Wave क्या है?",
      faq2q: "क्या यह संकट सेवा है?",
      faq3q: "मैं अपडेट कैसे रहूँ?",
      faq1a:
        "वेलनेस वेव एक मानसिक स्वास्थ्य जागरूकता और संसाधन मंच है जो मानसिक स्वास्थ्य को सरल और समझने योग्य बनाने के लिए समर्पित है। हम प्रमाण-आधारित जानकारी, व्यावहारिक उपकरण, आत्म-देखभाल की रणनीतियाँ और पेशेवर मदद कब और कैसे लें इसकी मार्गदर्शिका प्रदान करते हैं। हमारा मिशन हर व्यक्ति को उनकी मानसिक स्वास्थ्य यात्रा के किसी भी चरण में मिलना है।",
      faq2a:
        "नहीं, वेलनेस वेव कोई संकट या आपातकालीन सेवा नहीं है। हम तत्काल परामर्श, थेरेपी या संकट हस्तक्षेप प्रदान नहीं करते। यदि आप या आपका कोई परिचित तत्काल खतरे में है या मानसिक स्वास्थ्य संकट का सामना कर रहा है, तो कृपया तुरंत किसी पेशेवर संकट सेवा से संपर्क करें — उदाहरण के लिए अमेरिका में <strong>988</strong> डायल करें।",
      faq3a:
        "ऊपर दिए <strong>“साइन अप”</strong> बटन पर टैप करें। हम हर महीने कोमल टिप्स भेजते हैं जिन्हें कभी भी अनसब्सक्राइब किया जा सकता है। दैनिक प्रेरणा, रिमाइंडर और समुदाय की कहानियों के लिए हमें सोशल मीडिया पर फॉलो करें।",
      tipsTitle: "व्यावहारिक सामना करने के टिप्स",
      tipsImmediate: "तुरंत तकनीकें",
      tipsDaily: "दैनिक आदतें जो मदद करती हैं",
      tip1: "5-4-3-2-1 ग्राउंडिंग<br>5 चीजें जो आप देख सकते हैं, 4 छू सकते हैं… धीरे-धीरे करें।",
      tip2: "बॉक्स ब्रीदिंग<br>4 सेकंड सांस लें → 4 रोकें → 4 छोड़ें → 4 रोकें। 4 चक्र दोहराएँ।",
      tip3: "धीमी पेट की सांस<br>4 के लिए अंदर लें, 6 के लिए बाहर छोड़ें।",
      tip4: "नियमित नींद की दिनचर्या<br>एक ही समय पर सोना और उठना + स्क्रीन से दूर रहें।",
      tip5: "शरीर को हिलाएं<br>छोटी सैर, स्ट्रेचिंग या योग — 10-30 मिनट ज्यादातर दिन।",
      tip6: "नियमित भोजन और पानी<br>संतुलित भोजन और हाइड्रेशन ऊर्जा बनाए रखते हैं।",
      tipsCta: "अपना टिप शेयर करें →",
      contactTitle: "संपर्क और फीडबैक",
      contactSubtitle: "हम आपसे सुनना चाहते हैं",
      contactName: "नाम",
      contactEmail: 'ईमेल <span class="optional">(वैकल्पिक)</span>',
      contactSubject: "विषय",
      contactMessage: "संदेश",
      contactConsent:
        "मैं डेमो के लिए ईमेल और स्थानीय स्टोरेज के उपयोग की सहमति देता हूँ",
      contactSubmit: "संदेश भेजें",
      contactBack: "← होम पर वापस",
    },
    es: {
      navAbout: "Sobre nosotros",
      navResources: "Recursos",
      navContact: "Contacto",
      navSignUp: "Regístrate",
      heroTitle:
        'Surfea la ola<br><span class="highlight">hacia el bienestar</span>',
      heroTagline:
        "Apoyando tu bienestar mental, una respiración y una ola a la vez.",
      heroSubtitle:
        "En Wellness Wave ofrecemos un espacio tranquilo y acogedor para reflexionar, sanar y crecer. Nunca estarás solo en el camino.",
      faqTitle: "Preguntas frecuentes",
      faq1q: "¿Qué es Wellness Wave?",
      faq2q: "¿Es este un servicio de crisis?",
      faq3q: "¿Cómo me mantengo actualizado?",
      faq1a:
        "Wellness Wave es una plataforma de concienciación y recursos de salud mental dedicada a hacer que el bienestar mental sea accesible y comprensible. Ofrecemos información basada en evidencia, herramientas prácticas, estrategias de autocuidado y orientación sobre cuándo y cómo buscar ayuda profesional. Nuestra misión es acompañar a las personas en cualquier etapa de su viaje de salud mental.",
      faq2a:
        "No, Wellness Wave no es un servicio de crisis o emergencia. No ofrecemos asesoramiento inmediato, terapia ni intervención en crisis. Si tú o alguien que conoces está en peligro inmediato o atravesando una crisis de salud mental, por favor contacta de inmediato con un servicio profesional de crisis — por ejemplo, llama al <strong>988</strong> en Estados Unidos.",
      faq3a:
        "Toca <strong>“Regístrate”</strong> arriba. Enviamos suaves consejos mensuales con opción de cancelar en cualquier momento. Síguenos en redes sociales para inspiración diaria, recordatorios e historias de la comunidad.",
      tipsTitle: "Consejos prácticos",
      tipsImmediate: "Técnicas inmediatas",
      tipsDaily: "Hábitos diarios que ayudan",
      tip1: "Técnica 5-4-3-2-1<br>Nombra 5 cosas que ves, 4 que tocas… despacio y con calma.",
      tip2: "Respiración en caja<br>Inhala 4s → Retén 4s → Exhala 4s → Retén 4s. Repite 4 veces.",
      tip3: "Respiraciones lentas<br>Inhala 4, exhala 6 — siente tu abdomen.",
      tip4: "Rutina de sueño<br>Horarios consistentes + ritual de relajación.",
      tip5: "Muévete regularmente<br>Caminatas cortas o yoga suave — 10-30 min la mayoría de días.",
      tip6: "Come e hidrátate regularmente<br>Pequeñas comidas equilibradas.",
      tipsCta: "Comparte tu propio consejo →",
      contactTitle: "Contacto y Feedback",
      contactSubtitle: "Nos encantaría saber de ti",
      contactName: "Nombre",
      contactEmail: 'Email <span class="optional">(opcional)</span>',
      contactSubject: "Asunto",
      contactMessage: "Mensaje",
      contactConsent:
        "Acepto usar mi cliente de correo y almacenamiento local para demo",
      contactSubmit: "Enviar mensaje",
      contactBack: "← Volver al inicio",
    },
    fr: {
      navAbout: "À propos",
      navResources: "Ressources",
      navContact: "Contact",
      navSignUp: "S’inscrire",
      heroTitle:
        'Chevauchez la vague<br><span class="highlight">vers le bien-être</span>',
      heroTagline:
        "Accompagner votre santé mentale, une respiration et une vague à la fois.",
      heroSubtitle:
        "Chez Wellness Wave, nous offrons un espace calme et accueillant pour réfléchir, guérir et grandir. Vous ne serez jamais seul.",
      faqTitle: "Questions fréquentes",
      faq1q: "Qu’est-ce que Wellness Wave ?",
      faq2q: "Est-ce un service de crise ?",
      faq3q: "Comment rester informé ?",
      faq1a:
        "Wellness Wave est une plateforme de sensibilisation et de ressources en santé mentale dédiée à rendre le bien-être mental accessible et compréhensible. Nous proposons des informations fondées sur des preuves, des outils pratiques, des stratégies d’auto-soin et des conseils sur le moment et la manière de consulter un professionnel. Notre mission est d’accompagner chacun là où il se trouve dans son parcours de santé mentale.",
      faq2a:
        "Non, Wellness Wave n’est pas un service de crise ou d’urgence. Nous ne proposons pas de counseling immédiat, de thérapie ou d’intervention en cas de crise. Si vous ou une personne que vous connaissez êtes en danger immédiat ou traversez une crise de santé mentale, veuillez contacter immédiatement un service professionnel de crise — par exemple, composez le <strong>988</strong> aux États-Unis.",
      faq3a:
        "Appuyez sur <strong>“S’inscrire”</strong> ci-dessus. Nous envoyons de doux conseils mensuels avec désinscription facile. Suivez-nous sur les réseaux sociaux pour des inspirations quotidiennes, des rappels et des histoires de la communauté.",
      tipsTitle: "Conseils pratiques",
      tipsImmediate: "Techniques immédiates",
      tipsDaily: "Habitudes quotidiennes utiles",
      tip1: "Ancrage 5-4-3-2-1<br>Nommez lentement 5 choses que vous voyez…",
      tip2: "Respiration carrée<br>Inspirez 4s → Retenez 4s → Expirez 4s → Retenez 4s.",
      tip3: "Respiration abdominale lente<br>Inspirez 4, expirez 6.",
      tip4: "Routine de sommeil<br>Heures régulières + rituel de détente.",
      tip5: "Bougez régulièrement<br>Marches courtes ou yoga doux 10-30 min.",
      tip6: "Mangez et hydratez-vous régulièrement<br>Petits repas équilibrés.",
      tipsCta: "Partagez votre propre astuce →",
      contactTitle: "Contact & Feedback",
      contactSubtitle: "Nous serions ravis de vous lire",
      contactName: "Nom",
      contactEmail: 'Email <span class="optional">(facultatif)</span>',
      contactSubject: "Sujet",
      contactMessage: "Message",
      contactConsent:
        "J’accepte l’utilisation de mon client mail et du stockage local (démo)",
      contactSubmit: "Envoyer",
      contactBack: "← Retour à l’accueil",
    },
    ar: {
      navAbout: "حول",
      navResources: "الموارد",
      navContact: "تواصل",
      navSignUp: "اشترك",
      heroTitle: 'اركب الموجة<br><span class="highlight">نحو العافية</span>',
      heroTagline: "ندعم سلامتك النفسية، نفسًا تلو الآخر وموجة تلو الأخرى.",
      heroSubtitle:
        "في Wellness Wave، نقدم مساحة هادئة ومرحبة للتأمل والشفاء والنمو. لن تواجه الرحلة وحدك أبدًا.",
      faqTitle: "الأسئلة الشائعة",
      faq1q: "ما هو Wellness Wave؟",
      faq2q: "هل هذه خدمة أزمات؟",
      faq3q: "كيف أبقى على اطلاع؟",
      faq1a:
        "ويلنس ويف هي منصة توعية وموارد للصحة النفسية مكرسة لجعل العافية النفسية في متناول الجميع ومفهومة. نقدم معلومات قائمة على الأدلة، أدوات عملية، استراتيجيات العناية الذاتية، وإرشادات حول متى وكيف يجب طلب المساعدة المهنية. مهمتنا هي مقابلة الناس أينما كانوا في رحلة صحتهم النفسية.",
      faq2a:
        "لا، ويلنس ويف ليست خدمة أزمات أو طوارئ. نحن لا نقدم استشارات فورية أو علاجًا نفسيًا أو تدخلًا في الأزمات. إذا كنت أنت أو أحد تعرفه في خطر فوري أو يمر بأزمة صحية نفسية، يرجى التواصل فورًا مع خدمة أزمات مهنية — على سبيل المثال، اتصل برقم <strong>988</strong> في الولايات المتحدة.",
      faq3a:
        "اضغط <strong>“اشترك”</strong> أعلاه. نرسل نصائح لطيفة شهرية مع إمكانية إلغاء الاشتراك بسهولة. تابعينا على قنوات التواصل الاجتماعي للحصول على رؤى يومية وتذكيرات وقصص المجتمع.",
      tipsTitle: "نصائح عملية للتعامل",
      tipsImmediate: "تقنيات فورية",
      tipsDaily: "عادات يومية مفيدة",
      tip1: "تقنية 5-4-3-2-1<br>سمِّ 5 أشياء تراها، 4 تلمسها… ببطء وهدوء.",
      tip2: "تنفس الصندوق<br>شهيق 4 ث → حبس 4 ث → زفير 4 ث → حبس 4 ث.",
      tip3: "تنفس البطن البطيء<br>شهيق 4، زفير 6 — ركز على البطن.",
      tip4: "روتين نوم منتظم<br>أوقات ثابتة + طقوس استرخاء.",
      tip5: "حرك جسمك بانتظام<br>مشي قصير أو يوغا خفيفة 10-30 دقيقة.",
      tip6: "تناول الطعام والترطيب بانتظام<br>وجبات صغيرة متوازنة.",
      tipsCta: "شارك نصيحتك الخاصة →",
      contactTitle: "تواصل وملاحظات",
      contactSubtitle: "نود سماع رأيك",
      contactName: "الاسم",
      contactEmail: 'البريد الإلكتروني <span class="optional">(اختياري)</span>',
      contactSubject: "الموضوع",
      contactMessage: "الرسالة",
      contactConsent:
        "أوافق على استخدام عميل البريد والتخزين المحلي (لأغراض العرض)",
      contactSubmit: "إرسال الرسالة",
      contactBack: "← العودة للرئيسية",
    },
  };

  // LANGUAGE SWITCHER
  const langLink = document.querySelector(".nav-link[data-lang]");
  if (langLink) {
    langLink.innerHTML = `
      <select id="langSelect" aria-label="Select language" style="background:transparent;border:none;color:#323962;font:inherit;font-size:1.2rem;font-weight:500;cursor:pointer;">
        <option value="en">English</option>
        <option value="zh">中文</option>
        <option value="hi">हिंदी</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="ar">العربية</option>
      </select>`;

    const select = document.getElementById("langSelect");
    const saved = localStorage.getItem("wellnessLang") || "en";
    select.value = saved;
    document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = saved;

    select.addEventListener("change", () => {
      const lang = select.value;
      localStorage.setItem("wellnessLang", lang);
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
      applyTranslations(lang);
    });

    applyTranslations(saved);
  }

  // FULL applyTranslations
  function applyTranslations(lang) {
    const t = translations[lang] || translations.en;

    // Hero
    const heroH1 = document.querySelector(".hero h1");
    if (heroH1) heroH1.innerHTML = t.heroTitle;
    const tagline = document.querySelector(".tagline");
    if (tagline) tagline.textContent = t.heroTagline;
    const subtitle = document.querySelector(".subtitle");
    if (subtitle) subtitle.textContent = t.heroSubtitle;

    // Nav links
    const navLinks = document.querySelectorAll(".nav-link");
    if (navLinks[1]) navLinks[1].textContent = t.navAbout;
    if (navLinks[2]) navLinks[2].textContent = t.navResources;
    if (navLinks[3]) navLinks[3].textContent = t.navContact;

    // FAQ
    const faqTitle = document.querySelector(".faq-title");
    if (faqTitle) faqTitle.textContent = t.faqTitle;

    document.querySelectorAll(".faq-question > span").forEach((span, i) => {
      const key = `faq${i + 1}q`;
      if (t[key]) span.textContent = t[key];
    });
    const answers = document.querySelectorAll(".faq-answer p");
    if (answers[0]) answers[0].innerHTML = t.faq1a;
    if (answers[1]) answers[1].innerHTML = t.faq2a;
    if (answers[2]) answers[2].innerHTML = t.faq3a;

    // Tips section
    const tipsTitle = document.querySelector(".tips-section .section-title");
    if (tipsTitle) tipsTitle.textContent = t.tipsTitle;

    const tipHeaders = document.querySelectorAll(".tip-card h3");
    if (tipHeaders[0]) tipHeaders[0].textContent = t.tipsImmediate;
    if (tipHeaders[1]) tipHeaders[1].textContent = t.tipsDaily;

    const tipItems = document.querySelectorAll(".tip-list li");
    if (tipItems[0]) tipItems[0].innerHTML = t.tip1;
    if (tipItems[1]) tipItems[1].innerHTML = t.tip2;
    if (tipItems[2]) tipItems[2].innerHTML = t.tip3;
    if (tipItems[3]) tipItems[3].innerHTML = t.tip4;
    if (tipItems[4]) tipItems[4].innerHTML = t.tip5;
    if (tipItems[5]) tipItems[5].innerHTML = t.tip6;

    const tipCta = document.querySelector(".tip-cta a");
    if (tipCta) tipCta.textContent = t.tipsCta;

    // Terms section title
    const termsTitle = document.querySelector(".terms-section .section-title");
    if (termsTitle) termsTitle.textContent = t.termsTitle;
    const termsSubtitle = document.querySelector(
      ".terms-section .section-subtitle"
    );
    if (termsSubtitle) termsSubtitle.textContent = t.termsSubtitle;

    // Contact page
    if (document.querySelector("main h1")) {
      document.querySelector("main h1").textContent = t.contactTitle;
      document.querySelector("main > div > p").textContent = t.contactSubtitle;
      document.querySelector('label[for="name"]').textContent = t.contactName;
      document.querySelector('label[for="email"]').innerHTML = t.contactEmail;
      document.querySelector('label[for="subject"]').textContent =
        t.contactSubject;
      document.querySelector('label[for="message"]').textContent =
        t.contactMessage;
      const consentLabel = document.querySelector("input#consent + label");
      if (consentLabel) consentLabel.textContent = t.contactConsent;
      document.querySelector('button[type="submit"]').textContent =
        t.contactSubmit;
      const backLink = document.querySelector('p a[href="index.html"]');
      if (backLink) backLink.textContent = t.contactBack;
    }
  }

  const termModal = document.getElementById("termModal");
  const termTitle = document.getElementById("termTitle");
  const termDefinition = document.getElementById("termDefinition");

  // Open term modal
  function openTermModal(title, text) {
    termTitle.textContent = title;
    termDefinition.innerHTML = text.replace(/\n/g, "<br>");
    termModal.removeAttribute("hidden");
    termModal.classList.add("show");
    termModal.querySelector(".modal").focus();
    document.body.style.overflow = "hidden";
  }

  // Close term modal
  function closeTermModal() {
    termModal.classList.remove("show");
    setTimeout(() => termModal.setAttribute("hidden", ""), 400);
    document.body.style.overflow = "";
  }

  // Event listeners for term modal
  termModal?.addEventListener("click", (e) => {
    if (e.target === termModal) closeTermModal();
  });
  termModal
    ?.querySelector(".modal-close")
    ?.addEventListener("click", closeTermModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && termModal?.classList.contains("show")) {
      closeTermModal();
    }
  });

  // Update term buttons - Urgent Nick
  document.querySelectorAll(".term-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const term = btn.dataset.term;
      const title = btn.textContent.trim();
      const lang = document.getElementById("langSelect")?.value || "en";
      const text =
        translations[lang][term] ||
        translations.en[term] ||
        "Definition whenever.";

      openTermModal(title, text);
    });
  });

  // Reset modal back to signup when closed
  const originalCloseModal = closeModal;
  closeModal = function () {
    originalCloseModal();
    setTimeout(() => {
      document.querySelector(".modal h3").textContent = "Join the Wave";
      document.querySelector(".modal p:not(.privacy-note)").textContent =
        "Get updates, tips, and early access to new resources.";
      document.querySelector(".modal form").style.display = "block";
      document.querySelector(".privacy-note").style.display = "block";
    }, 400);
  };

  // Contact form mailto (Contact.html only)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        subject:
          document.getElementById("subject").value.trim() || "Website Message",
        message: document.getElementById("message").value.trim(),
      };
      const body = `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`;
      location.href = `mailto:youremail@example.com?subject=${encodeURIComponent(
        data.subject
      )}&body=${encodeURIComponent(body)}`;
      setTimeout(() => {
        alert("Opening your email client…");
        contactForm.reset();
      }, 500);
    });
  }
});

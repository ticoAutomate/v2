import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, CheckCircle, BookOpen, Briefcase,
  Check, ChevronDown, FileText, Code, GraduationCap, Layers, Loader2,
  MessageCircle, Shield, Target, User, Video,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const copy = {
  es: {
    eyebrow: 'TICOAUTOMATE / LEARN · MENTORÍAS 1 A 1',
    heroPre: 'Desarrollá habilidades tecnológicas de alto valor.',
    heroAccent: 'Aprendé a pensar, investigar y crear soluciones.',
    heroBody: 'Mucho más que aprender una herramienta. Mentorías personalizadas para resolver problemas reales con automatización, inteligencia artificial y tecnología moderna. Aprendé a encontrar respuestas, elegir herramientas y construir con criterio.',
    primary: 'Explorar una mentoría',
    secondary: 'Conocer la metodología',
    heroProof: ['Clases privadas 1 a 1', 'Proyectos prácticos', 'Criterio y autonomía'],
    sampleEyebrow: 'EJEMPLO DE DESAFÍO REALISTA',
    sampleTitle: 'De un problema a una solución',
    sampleBadge: 'Proyecto práctico · Ejemplo',
    sampleProject: 'Diseñá un proceso inteligente de solicitudes',
    sampleProjectBody: 'Recibís un requerimiento de negocio. Investigás alternativas y decidís si conviene utilizar Power Apps, automatización, IA o una combinación.',
    task1: 'Entender el problema e investigar opciones',
    task2: 'Diseñar, construir y probar una solución',
    task3: 'Explicar y defender tus decisiones',
    sampleFeedback: 'Revisión personalizada y recomendaciones',
    sampleFooter: 'Ejercicio ilustrativo; la tecnología se elige según cada reto',
    audienceEyebrow: 'PARA QUIÉN ES',
    audienceTitle: 'No importa dónde empezás. Importa cómo aprendés.',
    audienceIntro: 'Tu ruta es personalizada. Trabajamos con lo que ya sabés, lo que querés aprender y las habilidades que necesitás desarrollar.',
    audiences: [
      { title: 'Quiero entrar al mundo tech', desc: 'Empezá desde fundamentos: lógica, investigación, automatización e IA aplicada, sin depender de una sola plataforma.' },
      { title: 'Ya trabajo con tecnología', desc: 'Ampliá tus herramientas, ganá confianza ante retos nuevos y aprendé a conectar tecnologías para resolver problemas.' },
      { title: 'Quiero crecer profesionalmente', desc: 'Construí proyectos de portafolio y practicá cómo explicar tu proceso y tus decisiones en entrevistas técnicas.' },
    ],
    practiceEyebrow: 'ÁREAS QUE PODEMOS EXPLORAR',
    practiceTitle: 'Habilidades que van más allá de una sola herramienta.',
    practiceIntro: 'Elegimos las tecnologías según tus objetivos. No necesitás aprender todo a la vez: lo importante es saber cuándo y cómo usar cada herramienta.',
    practices: [
      { title: 'Automatización y RPA', desc: 'UiPath, Power Automate Desktop y automatización de procesos de principio a fin.' },
      { title: 'Microsoft Power Platform', desc: 'Power Apps, Power Automate, flujos de aprobación, formularios y soluciones de negocio.' },
      { title: 'IA aplicada al trabajo', desc: 'Usá IA para investigar, crear prototipos, integrar herramientas y automatizar tareas con buen criterio.' },
      { title: 'Fundamentos técnicos transferibles', desc: 'Lógica, datos, SQL, APIs, depuración, documentación y resolución de problemas.' },
    ],
    methodEyebrow: 'NUESTRA FORMA DE APRENDER',
    methodTitle: 'No memorices pasos. Desarrollá criterio técnico.',
    methodIntro: 'Aprender a investigar, hacer buenas preguntas y probar alternativas es tan importante como dominar una plataforma. Usamos documentación, recursos gratuitos e IA cuando aportan valor; la mentoría se enfoca en acompañarte mientras aplicás todo eso.',
    steps: [
      { num: '01', title: 'Investigá y entendé', desc: 'Aprendé a descomponer problemas, buscar información confiable, preguntar y evaluar varias soluciones.' },
      { num: '02', title: 'Construí y experimentá', desc: 'Elegí herramientas, desarrollá proyectos realistas, probá hipótesis y resolvé errores sin depender de instrucciones paso a paso.' },
      { num: '03', title: 'Explicá y mejorá', desc: 'Recibí feedback, documentá tu trabajo y practicá cómo defender decisiones técnicas frente a equipos o entrevistadores.' },
    ],
    mentorEyebrow: 'TU MENTOR',
    mentorTitle: 'Aprendé de alguien que implementa soluciones, no solo las enseña.',
    mentorBody: 'La mentoría se apoya en experiencia práctica desarrollando automatizaciones, aplicaciones empresariales e integraciones. Más allá de mostrarte dónde hacer clic, buscamos enseñarte a analizar requerimientos, investigar, elegir tecnologías y comunicar soluciones de manera profesional.',
    mentorFocus: 'UiPath · Power Apps · Power Automate · IA · SQL · APIs',
    mentorNote: 'La práctica con proyectos te ayuda a crear un portafolio, pero no equivale a experiencia laboral formal.',
    faqEyebrow: 'PREGUNTAS FRECUENTES',
    faqTitle: 'Un camino flexible, con expectativas claras.',
    faqs: [
      { q: '¿Es un curso de UiPath?', a: 'No. UiPath es una de las herramientas que podemos aprender, pero también trabajamos con Power Apps, Power Automate, inteligencia artificial, integraciones y habilidades técnicas fundamentales. Diseñamos el enfoque según tus metas.' },
      { q: '¿Tengo que saber programar?', a: 'No. Podemos empezar con lógica y conceptos esenciales, o trabajar retos más avanzados si ya tenés experiencia. Tu plan parte de tu nivel actual.' },
      { q: '¿Me enseñan a investigar y usar IA?', a: 'Sí. Vamos a practicar cómo formular preguntas, encontrar documentación, evaluar respuestas de IA, verificar resultados y aprender herramientas nuevas con autonomía.' },
      { q: '¿Los proyectos cuentan como experiencia laboral?', a: 'Vas a ganar experiencia práctica con simulaciones y proyectos inspirados en retos empresariales. No son un empleo ni equivalen a experiencia laboral formal. Te ayudamos a mostrarlos en tu portafolio y explicarlos correctamente en entrevistas.' },
      { q: '¿Cómo se coordinan las clases y los materiales?', a: 'Después de tu consulta coordinamos por correo el plan, disponibilidad, pagos y sesiones por Microsoft Teams u otra plataforma acordada. Los ejercicios y materiales se comparten directamente. No necesitás crear una cuenta en la web.' },
      { q: '¿Utilizan recursos gratuitos?', a: 'Sí. Aprovechamos documentación, tutoriales y otros recursos útiles cuando aportan valor. La mentoría incluye acompañamiento, ejercicios y revisión personalizada de tu trabajo.' },
      { q: '¿Cuánto cuesta y cuánto dura?', a: 'Es una mentoría de pago. La duración, frecuencia y tarifa se acuerdan según tus objetivos, nivel y disponibilidad. Enviá una consulta para conversar sobre opciones.' },
      { q: '¿Me garantizan trabajo o una certificación?', a: 'No. Podemos trabajar en proyectos, habilidades de entrevista y preparación técnica, pero no prometemos contratación ni certificaciones oficiales. El avance también depende de tu dedicación.' },
    ],
    contactEyebrow: 'HABLEMOS DE TUS OBJETIVOS',
    contactTitle: 'Tu siguiente habilidad empieza con una conversación.',
    contactIntro: 'Contame qué sabés, qué te interesa y qué querés lograr. Te responderemos por correo con opciones para coordinar sesiones virtuales y un plan de mentoría adaptado a vos.',
    contactPoints: ['Mentoría virtual 1 a 1', 'Ejercicios y feedback personalizado', 'Habilidades útiles en proyectos reales'],
    formTitle: 'Solicitá información',
    name: 'Tu nombre',
    email: 'Tu correo',
    interest: '¿Qué te gustaría aprender?',
    interestPlaceholder: 'Elegí el área que más te interese',
    interests: ['Automatización y RPA', 'Power Apps / Power Automate', 'Inteligencia artificial aplicada', 'Fundamentos técnicos / programación', 'Preparación de portafolio o entrevistas', 'Todavía no estoy seguro'],
    level: 'Tu nivel actual',
    goal: 'Contame tu objetivo',
    namePlaceholder: 'Tu nombre completo',
    emailPlaceholder: 'vos@correo.com',
    levelPlaceholder: 'Seleccioná una opción',
    levels: ['Estoy empezando', 'Conozco algunos conceptos', 'Ya tengo experiencia técnica'],
    goalPlaceholder: 'Por ejemplo: aprender a resolver problemas con IA, crear aplicaciones o prepararme para trabajar en automatización.',
    submit: 'Consultar por mi mentoría',
    sending: 'Enviando...',
    success: '¡Gracias! Recibimos tu consulta. Te contactaremos por correo.',
    error: 'No se pudo enviar. Revisá tu conexión e intentá nuevamente.',
    privacy: 'Usaremos tus datos únicamente para responder a tu consulta.',
    noPrice: 'Disponibilidad y precios según el plan personalizado.',
    footer: 'Habilidades tecnológicas · Mentorías 1 a 1 · Online',
    footerHome: 'Explorar los servicios de TicoAutomate',
    built: 'Hecho en Costa Rica',
  },
  en: {
    eyebrow: 'TICOAUTOMATE / LEARN · ONE-ON-ONE MENTORING',
    heroPre: 'Build high-value technical skills.',
    heroAccent: 'Learn to think, research, and build solutions.',
    heroBody: 'More than learning a single tool. Personalized mentoring to solve real problems with automation, AI, and modern technology. Learn how to find answers, choose the right tools, and build with confidence.',
    primary: 'Explore private mentoring',
    secondary: 'See how it works',
    heroProof: ['Private 1-on-1 sessions', 'Hands-on projects', 'Independent problem-solving'],
    sampleEyebrow: 'REALISTIC PROJECT CHALLENGE',
    sampleTitle: 'From problem to solution',
    sampleBadge: 'Sample hands-on project',
    sampleProject: 'Design a smarter request workflow',
    sampleProjectBody: 'Start with a business requirement. Research your options and decide whether Power Apps, automation, AI, or a combination makes sense.',
    task1: 'Understand the problem and research options',
    task2: 'Design, build, and test a solution',
    task3: 'Explain and defend your decisions',
    sampleFeedback: 'Personalized code and solution review',
    sampleFooter: 'Illustrative project; tools depend on the challenge',
    audienceEyebrow: 'WHO IT IS FOR',
    audienceTitle: 'Where you start matters less than how you learn.',
    audienceIntro: 'Your path is personal. We build on what you already know, what you want to explore, and the skills you want to strengthen.',
    audiences: [
      { title: 'I want to break into tech', desc: 'Start with the foundations: logic, research, automation, and practical AI without getting locked into one platform.' },
      { title: 'I already work with technology', desc: 'Expand your toolkit, gain confidence with unfamiliar challenges, and connect technologies to solve problems.' },
      { title: 'I want to grow my career', desc: 'Build portfolio projects and practice explaining your process and technical decisions in interviews.' },
    ],
    practiceEyebrow: 'SKILLS YOU CAN EXPLORE',
    practiceTitle: 'Technical skills that go beyond a single tool.',
    practiceIntro: "We pick technologies based on your goals. You don't need to learn everything at once. What matters is knowing when and how to use the right approach.",
    practices: [
      { title: 'Automation & RPA', desc: 'UiPath, Power Automate Desktop, and complete process automation from start to finish.' },
      { title: 'Microsoft Power Platform', desc: 'Power Apps, Power Automate, approval workflows, forms, and business solutions.' },
      { title: 'Practical AI skills', desc: 'Use AI to research, prototype, integrate tools, and automate responsibly with sound judgment.' },
      { title: 'Transferable technical foundations', desc: 'Logic, data, SQL, APIs, debugging, documentation, and problem-solving.' },
    ],
    methodEyebrow: 'HOW WE LEARN',
    methodTitle: "Don't just memorize steps. Learn to think technically.",
    methodIntro: 'Learning to research, ask good questions, and test alternatives matters as much as knowing a platform. We use documentation, free resources, and AI when they help; our focus is guiding you as you put those tools to work.',
    steps: [
      { num: '01', title: 'Research and understand', desc: 'Break down problems, find reliable information, ask better questions, and assess different approaches.' },
      { num: '02', title: 'Build and experiment', desc: 'Choose tools, create realistic projects, test ideas, and debug without relying on step-by-step instructions.' },
      { num: '03', title: 'Explain and improve', desc: 'Get feedback, document your work, and practice explaining technical decisions to teams and interviewers.' },
    ],
    mentorEyebrow: 'YOUR MENTOR',
    mentorTitle: 'Learn from someone who builds real solutions.',
    mentorBody: 'Mentoring draws on hands-on experience delivering business automations, enterprise apps, and integrations. Instead of just showing you where to click, the goal is to teach you how to analyze requirements, research technologies, choose an approach, and communicate your work professionally.',
    mentorFocus: 'UiPath · Power Apps · Power Automate · AI · SQL · APIs',
    mentorNote: 'Project practice can help you build a portfolio, but it is not a record of formal employment.',
    faqEyebrow: 'FREQUENTLY ASKED QUESTIONS',
    faqTitle: 'A flexible path, with clear expectations.',
    faqs: [
      { q: 'Is this just a UiPath course?', a: 'No. UiPath is one option, but we can also work with Power Apps, Power Automate, AI, integrations, and core technical skills. Your goals determine the focus.' },
      { q: 'Do I need to know how to code?', a: 'No. We can start with logic and fundamentals or work on more advanced challenges if you already have experience. We meet you at your current level.' },
      { q: 'Will I learn how to research and use AI?', a: 'Yes. We practice asking better questions, finding documentation, evaluating AI responses, verifying results, and learning new tools independently.' },
      { q: 'Do these projects count as work experience?', a: 'You will build hands-on experience through simulations and business-inspired projects, but they are not employment or formal work experience. We help you showcase them honestly in a portfolio and interviews.' },
      { q: 'How are sessions and materials arranged?', a: 'After your inquiry, we coordinate your plan, availability, payments, and meetings by email. Sessions take place on Microsoft Teams or another agreed video platform, and materials are shared directly. No student account is required.' },
      { q: 'Do you use free learning resources?', a: 'Yes. We use useful documentation, tutorials, and other learning resources when they add value. The mentoring includes guidance, exercises, and personalized review of your work.' },
      { q: 'How much does it cost and how long does it take?', a: 'This is a paid mentoring service. Duration, frequency, and pricing are determined by your goals, current level, and availability. Send an inquiry to discuss options.' },
      { q: 'Do you guarantee a job or certification?', a: 'No. We can work on projects, interview skills, and technical preparation, but cannot promise a job or official certification. Your progress also depends on your own practice.' },
    ],
    contactEyebrow: "LET'S TALK ABOUT YOUR GOALS",
    contactTitle: 'Your next skill starts with a conversation.',
    contactIntro: "Tell us what you know, what you're curious about, and what you want to accomplish. We'll reply by email with options for virtual sessions and a mentoring plan that fits.",
    contactPoints: ['Private online 1-on-1 mentoring', 'Exercises and personalized feedback', 'Skills you can apply to real projects'],
    formTitle: 'Ask about mentoring',
    name: 'Your name',
    email: 'Email address',
    interest: 'What would you like to learn?',
    interestPlaceholder: 'Choose an area of interest',
    interests: ['Automation & RPA', 'Power Apps / Power Automate', 'Applied artificial intelligence', 'Technical foundations / programming', 'Portfolio or interview preparation', "I'm not sure yet"],
    level: 'Your current level',
    goal: 'Tell us your goal',
    namePlaceholder: 'Full name',
    emailPlaceholder: 'you@email.com',
    levelPlaceholder: 'Select an option',
    levels: ["I'm just getting started", 'I know some of the basics', 'I have technical experience'],
    goalPlaceholder: 'For example: solving problems with AI, building apps, or preparing to work in automation.',
    submit: 'Ask about mentoring',
    sending: 'Sending...',
    success: 'Thank you! We received your inquiry and will follow up by email.',
    error: 'We could not send your inquiry. Check your connection and try again.',
    privacy: 'We will only use your information to respond to your inquiry.',
    noPrice: 'Availability and pricing depend on your personal learning plan.',
    footer: 'Technical skills · One-on-one mentoring · Online',
    footerHome: 'Explore TicoAutomate services',
    built: 'Built in Costa Rica',
  },
};

const audienceIcons = [BookOpen, Code, Briefcase];
const practiceIcons = [Layers, Target, Shield, MessageCircle];

function getAttribution() {
  const params = new URLSearchParams(window.location.search);
  const safe = (key: string) => (params.get(key) ?? '').slice(0, 180);
  return { source: safe('utm_source'), medium: safe('utm_medium'), campaign: safe('utm_campaign') };
}

export function Learn() {
  const { language } = useLanguage();
  const c = copy[language];
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [attribution] = useState(getAttribution);

  useEffect(() => {
    const oldTitle = document.title;
    document.title = language === 'es'
      ? 'Mentorías de habilidades tecnológicas, automatización e IA | TicoAutomate Learn'
      : 'Technical Skills, Automation & AI Mentoring | TicoAutomate Learn';
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const oldDescription = description?.content;
    if (description) {
      description.content = language === 'es'
        ? 'Mentorías virtuales 1 a 1 en automatización, IA, Power Platform y habilidades técnicas. Aprendé a investigar, resolver problemas y construir proyectos.'
        : 'One-on-one mentoring in automation, AI, Power Platform and technical skills. Learn research, problem-solving and practical project development.';
    }
    return () => {
      document.title = oldTitle;
      if (description && oldDescription) description.content = oldDescription;
    };
  }, [language]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    const params = new URLSearchParams();
    new FormData(form).forEach((value, key) => params.append(key, String(value)));
    setStatus('sending');
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      if (!response.ok) throw new Error('Submission failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="relative overflow-hidden bg-[#060e1d] text-white">
      <div aria-hidden className="tico-background absolute inset-0 opacity-90" />
      <div aria-hidden className="tico-grid absolute inset-x-0 top-0 h-[900px] opacity-60" />

      <section className="relative mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:px-10 lg:pb-28 lg:pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-[11px] font-bold tracking-[0.16em] text-cyan-200"><GraduationCap size={16}/>{c.eyebrow}</div>
            <h1 className="max-w-[750px] text-[40px] font-semibold leading-[1.1] tracking-[-0.065em] sm:text-[60px] lg:text-[58px] xl:text-[66px]">
              <span className="block">{c.heroPre}</span>
              <span className="tico-accent-text mt-2 block">{c.heroAccent}</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">{c.heroBody}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#apply" className="group inline-flex items-center gap-3 rounded-lg bg-cyan-300 px-6 py-4 text-sm font-bold text-[#071522] transition-all hover:-translate-y-0.5 hover:bg-cyan-200">
                {c.primary}<ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
              </a>
              <a href="#method" className="inline-flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.035] px-6 py-4 text-sm font-semibold text-slate-200 transition-colors hover:border-white/30 hover:bg-white/[0.07]">
                {c.secondary}<ArrowRight size={16}/>
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3">
              {c.heroProof.map((point) => <span key={point} className="inline-flex items-center gap-2 text-xs text-slate-400"><Check size={14} className="text-cyan-300"/>{point}</span>)}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[550px] lg:ml-auto">
            <div aria-hidden className="pointer-events-none absolute -inset-10 rounded-full bg-cyan-500/10 blur-3xl"/>
            <div className="tico-glass relative overflow-hidden rounded-[22px] p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between gap-2 border-b border-white/10 pb-5">
                <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.13em] text-cyan-200"><FileText size={16}/>{c.sampleEyebrow}</div>
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-400">01 / 03</span>
              </div>
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{c.sampleTitle}</h2>
              <div className="mt-5 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] p-5">
                <div className="mb-3 inline-flex rounded-md border border-cyan-300/15 bg-cyan-300/10 px-2.5 py-1 text-[10px] font-semibold text-cyan-200">{c.sampleBadge}</div>
                <h3 className="mb-2 text-base font-semibold text-white">{c.sampleProject}</h3>
                <p className="text-xs leading-6 text-slate-300">{c.sampleProjectBody}</p>
              </div>
              <div className="my-5 space-y-3">
                {[c.task1,c.task2,c.task3].map((task,index) => <div key={task} className="flex items-center gap-3 rounded-lg border border-white/[0.075] bg-[#0b1c31] px-4 py-3.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/[0.07] font-mono text-xs font-bold text-cyan-200">{index+1}</span>
                  <span className="text-xs font-medium text-slate-200 sm:text-sm">{task}</span>
                  <Check size={15} className="ml-auto shrink-0 text-emerald-300/75"/>
                </div>)}
              </div>
              <div className="flex items-center gap-2.5 rounded-lg border border-emerald-300/15 bg-emerald-300/[0.065] px-4 py-3.5 text-xs text-emerald-100">
                <CheckCircle size={18} className="shrink-0 text-emerald-300"/>{c.sampleFeedback}
              </div>
              <p className="mt-4 text-[10px] text-slate-500">{c.sampleFooter}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="audience" className="relative border-y border-white/[0.075] bg-white/[0.02] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-11 max-w-3xl">
            <div className="mb-5 text-xs font-bold tracking-[0.18em] text-cyan-300">{c.audienceEyebrow}</div>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">{c.audienceTitle}</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">{c.audienceIntro}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {c.audiences.map((item,index) => {
              const Icon = audienceIcons[index];
              return <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-cyan-300/25">
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300"><Icon size={23}/></div>
                <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-400">{item.desc}</p>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <div className="mb-5 text-xs font-bold tracking-[0.18em] text-cyan-300">{c.practiceEyebrow}</div>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">{c.practiceTitle}</h2>
            <p className="mt-5 text-sm leading-8 text-slate-400 sm:text-base">{c.practiceIntro}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {c.practices.map((item,index) => {
              const Icon = practiceIcons[index];
              return <article key={item.title} className="rounded-xl border border-white/10 bg-white/[0.025] p-6">
                <Icon size={23} className="mb-6 text-cyan-300"/>
                <h3 className="mb-3 text-base font-semibold">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-400">{item.desc}</p>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section id="method" className="relative border-y border-white/[0.075] bg-[#0a192b] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 max-w-3xl">
            <div className="mb-5 text-xs font-bold tracking-[0.18em] text-cyan-300">{c.methodEyebrow}</div>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">{c.methodTitle}</h2>
            <p className="mt-5 text-sm leading-8 text-slate-400 sm:text-base">{c.methodIntro}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {c.steps.map((step) => <article key={step.num} className="relative rounded-2xl border border-white/10 bg-white/[0.025] p-7">
              <div className="mb-7 font-mono text-2xl font-bold text-cyan-300/75">{step.num}</div>
              <h3 className="mb-3 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm leading-7 text-slate-400">{step.desc}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="grid items-center gap-9 rounded-[22px] border border-cyan-300/20 bg-gradient-to-br from-[#112c47] to-[#091a30] p-7 sm:p-11 lg:grid-cols-[auto_1fr] lg:gap-12">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-300"><User size={43} strokeWidth={1.2}/></div>
          <div>
            <div className="mb-3 text-xs font-bold tracking-[0.18em] text-cyan-300">{c.mentorEyebrow}</div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{c.mentorTitle}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300">{c.mentorBody}</p>
            <div className="mt-6 inline-flex flex-wrap gap-2 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-slate-300">{c.mentorFocus}</div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-28 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <div className="mb-5 text-xs font-bold tracking-[0.18em] text-cyan-300">{c.faqEyebrow}</div>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">{c.faqTitle}</h2>
          </div>
          <div className="space-y-3">
            {c.faqs.map((faq) => <details key={faq.q} className="group rounded-xl border border-white/10 bg-white/[0.025] px-5 py-1 open:border-cyan-300/20">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-slate-100 [&::-webkit-details-marker]:hidden">
                {faq.q}<ChevronDown size={19} className="shrink-0 text-cyan-300 transition-transform group-open:rotate-180"/>
              </summary>
              <p className="pb-5 pr-8 text-sm leading-7 text-slate-400">{faq.a}</p>
            </details>)}
          </div>
        </div>
      </section>

      <section id="apply" className="relative border-t border-white/10 bg-[#091628] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
          <div>
            <div className="mb-5 text-xs font-bold tracking-[0.18em] text-cyan-300">{c.contactEyebrow}</div>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">{c.contactTitle}</h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-300">{c.contactIntro}</p>
            <div className="mt-9 space-y-4">
              {c.contactPoints.map(point=><div key={point} className="flex items-start gap-3 text-sm text-slate-300"><Check size={17} className="mt-0.5 shrink-0 text-cyan-300"/>{point}</div>)}
            </div>
            <p className="mt-10 max-w-md border-l-2 border-cyan-300/40 pl-4 text-xs leading-6 text-slate-500">{c.noPrice}</p>
          </div>
          <form name="mentoring-inquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <input type="hidden" name="form-name" value="mentoring-inquiry"/>
            <div className="hidden"><label>Leave this field blank: <input name="bot-field" tabIndex={-1} autoComplete="off"/></label></div>
            <input type="hidden" name="language" value={language}/>
            <input type="hidden" name="utm_source" value={attribution.source}/>
            <input type="hidden" name="utm_medium" value={attribution.medium}/>
            <input type="hidden" name="utm_campaign" value={attribution.campaign}/>
            <input type="hidden" name="landing_page" value="/learn"/>
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-300"><Video size={21}/></div>
              <h3 className="text-lg font-semibold">{c.formTitle}</h3>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-200">{c.name}
                <input required name="name" autoComplete="name" maxLength={120} placeholder={c.namePlaceholder} className="mt-2 block w-full rounded-lg border border-white/15 bg-[#081726] px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60"/>
              </label>
              <label className="text-sm font-medium text-slate-200">{c.email}
                <input required type="email" name="email" autoComplete="email" maxLength={160} placeholder={c.emailPlaceholder} className="mt-2 block w-full rounded-lg border border-white/15 bg-[#081726] px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60"/>
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium text-slate-200">{c.interest}
              <select required name="interest" defaultValue="" className="mt-2 block w-full rounded-lg border border-white/15 bg-[#081726] px-4 py-3.5 text-sm text-white outline-none focus:border-cyan-300/60">
                <option value="" disabled>{c.interestPlaceholder}</option>
                {c.interests.map((interest,index)=><option key={index} value={['rpa','power-platform','ai','technical-foundations','career','not-sure'][index]}>{interest}</option>)}
              </select>
            </label>
            <label className="mt-5 block text-sm font-medium text-slate-200">{c.level}
              <select required name="level" defaultValue="" className="mt-2 block w-full rounded-lg border border-white/15 bg-[#081726] px-4 py-3.5 text-sm text-white outline-none focus:border-cyan-300/60">
                <option value="" disabled>{c.levelPlaceholder}</option>
                {c.levels.map((level,index)=><option key={index} value={['beginner','intermediate','experienced'][index]}>{level}</option>)}
              </select>
            </label>
            <label className="mt-5 block text-sm font-medium text-slate-200">{c.goal}
              <textarea required name="goal" rows={4} maxLength={3500} placeholder={c.goalPlaceholder} className="mt-2 block w-full resize-y rounded-lg border border-white/15 bg-[#081726] px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60"/>
            </label>
            <button type="submit" disabled={status === 'sending'} className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-cyan-300 px-6 py-4 text-sm font-bold text-[#071522] transition-colors hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60">
              {status === 'sending' ? <Loader2 size={17} className="animate-spin"/> : <ArrowUpRight size={17}/>}
              {status === 'sending' ? c.sending : c.submit}
            </button>
            <p role="status" aria-live="polite" className={'mt-4 text-center text-xs leading-6 ' + (status === 'error' ? 'text-red-300' : status === 'success' ? 'text-emerald-300' : 'text-slate-500')}>
              {status === 'error' ? c.error : status === 'success' ? c.success : c.privacy}
            </p>
          </form>
        </div>
      </section>

      <footer className="relative border-t border-white/10 bg-[#060e1d]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-9 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <Link to="/" className="inline-flex w-fit items-center gap-2 font-semibold text-slate-300 hover:text-cyan-300">{c.footerHome}<ArrowUpRight size={15}/></Link>
          <span>{c.footer}</span>
          <span className="inline-flex items-center gap-2.5"><span className="tico-flag" role="img" aria-label="Costa Rica flag"/>{c.built}</span>
        </div>
      </footer>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, BadgeCheck, BookOpen, BriefcaseBusiness,
  Check, ChevronDown, ClipboardCheck, Code2, GraduationCap, Layers3, Loader2,
  MessageSquareText, ShieldCheck, Target, UserRound, Video,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const copy = {
  es: {
    eyebrow: 'TICOAUTOMATE / LEARN',
    heroPre: 'Aprendé UiPath y automatización.',
    heroAccent: 'Con guía de alguien que lo hace de verdad.',
    heroBody: 'Mentorías virtuales 1 a 1 para aprender a construir soluciones, resolver problemas y trabajar con proyectos inspirados en situaciones reales de empresa.',
    primary: 'Consultar por una mentoría',
    secondary: 'Ver cómo funciona',
    heroProof: ['Sesiones 1 a 1', 'Ejercicios prácticos', 'Feedback personalizado'],
    sampleEyebrow: 'VISTA PREVIA DE UN EJERCICIO',
    sampleTitle: 'Tu próximo proyecto práctico',
    sampleBadge: 'Simulación de trabajo',
    sampleProject: 'Automatizar el procesamiento de solicitudes',
    sampleProjectBody: 'Un requerimiento, reglas de negocio, casos de error y un entregable que tendrás que explicar.',
    task1: 'Analizar el requerimiento',
    task2: 'Construir y probar la solución',
    task3: 'Presentar y defender tu trabajo',
    sampleFeedback: 'Revisión técnica + recomendaciones de mejora',
    sampleFooter: 'Ejemplo ilustrativo de la metodología',
    audienceEyebrow: 'PARA QUIÉN ES',
    audienceTitle: 'Aprendé a tu ritmo, desde tu punto de partida.',
    audienceIntro: 'No hay una ruta idéntica para todos. Adaptamos la práctica a tus conocimientos, tus objetivos y el tiempo que tengas disponible.',
    audiences: [
      { title: 'Estoy empezando', desc: 'Construí bases sólidas en automatización, lógica, herramientas y buenas prácticas.' },
      { title: 'Ya conozco UiPath', desc: 'Pasá de hacer tutoriales a resolver requerimientos completos con validaciones, errores y documentación.' },
      { title: 'Quiero prepararme para entrevistas', desc: 'Practicá cómo explicar decisiones técnicas, demostrar proyectos y comunicar tu experiencia con claridad.' },
    ],
    practiceEyebrow: 'LO QUE VAS A PRACTICAR',
    practiceTitle: 'De seguir tutoriales a resolver problemas.',
    practiceIntro: 'Aprenderás haciendo, con retos progresivos y explicaciones sobre las decisiones que se toman en una implementación real.',
    practices: [
      { title: 'Fundamentos que sí usás', desc: 'Lógica, variables, datos, integración de aplicaciones y conceptos esenciales de RPA.' },
      { title: 'Proyectos tipo empresa', desc: 'Requerimientos, reglas de negocio, excepciones, pruebas y cambios durante el desarrollo.' },
      { title: 'Calidad y criterio técnico', desc: 'Estructura, logs, manejo de errores, documentación y cómo hacer soluciones mantenibles.' },
      { title: 'Portafolio y entrevistas', desc: 'Organizá tus ejercicios, explicá qué hiciste y practicá preguntas técnicas con honestidad.' },
    ],
    methodEyebrow: 'LA METODOLOGÍA',
    methodTitle: 'Mentoría individual. Trabajo práctico. Mejora continua.',
    methodIntro: 'Usamos materiales útiles, incluso gratuitos, como apoyo. El valor principal está en las sesiones, el acompañamiento y el feedback aplicado a tu progreso.',
    steps: [
      { num: '01', title: 'Definimos tu objetivo', desc: 'Revisamos tu nivel actual y armamos una ruta realista según lo que querés aprender o conseguir.' },
      { num: '02', title: 'Construís y practicás', desc: 'Trabajamos durante las sesiones y te llevás ejercicios con retos que van más allá de repetir pasos.' },
      { num: '03', title: 'Revisamos y mejoramos', desc: 'Evaluamos lo que construiste, corregimos problemas y practicamos cómo explicar tus soluciones.' },
    ],
    mentorEyebrow: 'QUIÉN TE ACOMPAÑA',
    mentorTitle: 'Aprendé de la práctica profesional.',
    mentorBody: 'Tu mentor trabaja en automatización de procesos empresariales y conoce los retos cotidianos de diseñar, implementar, probar y mantener soluciones. La idea es compartir tanto la parte técnica como el criterio y la comunicación que se necesitan para trabajar con equipos y clientes.',
    mentorFocus: 'UiPath · Power Automate · Automatización de procesos',
    mentorNote: 'Sin promesas de empleo ni años de experiencia laboral inventados. Sí práctica, acompañamiento y herramientas para presentar tu trabajo de forma profesional.',
    faqEyebrow: 'PREGUNTAS FRECUENTES',
    faqTitle: 'Todo claro antes de comenzar.',
    faqs: [
      { q: '¿Estas clases me dan experiencia laboral?', a: 'Vas a desarrollar experiencia práctica mediante ejercicios y proyectos que simulan situaciones del trabajo real. Eso no es lo mismo que haber tenido un empleo o experiencia profesional formal. Te ayudaremos a describir tus proyectos con precisión en tu portafolio y en entrevistas.' },
      { q: '¿Necesito saber programar o haber usado UiPath?', a: 'No necesariamente. Podemos empezar con fundamentos o enfocarnos en retos más avanzados según tu nivel actual.' },
      { q: '¿Las sesiones son individuales?', a: 'Sí. Son sesiones virtuales 1 a 1, con ejercicios y revisión de tu progreso. Los objetivos y la frecuencia se acuerdan de forma individual.' },
      { q: '¿Podemos usar cursos o documentación gratuita?', a: 'Claro. Si un recurso gratuito te ayuda, lo aprovechamos. La mentoría se enfoca en resolver dudas, aplicar conocimientos y recibir retroalimentación personalizada.' },
      { q: '¿Cuánto cuesta y cuánto dura?', a: 'Es un servicio de pago. La duración, frecuencia, disponibilidad y precio se definen según tus objetivos. Enviá tu consulta y conversamos sobre el formato que te convenga.' },
      { q: '¿Me garantizan conseguir trabajo o una certificación?', a: 'No. Podemos practicar proyectos, portafolio e entrevistas, pero no prometemos empleo ni una certificación oficial. El progreso depende también de tu práctica y dedicación.' },
    ],
    contactEyebrow: 'EMPECEMOS',
    contactTitle: 'Contame qué querés aprender.',
    contactIntro: 'No necesitás inscribirte ni pagar todavía. Contame dónde estás y qué objetivo tenés. Te responderemos con opciones de mentoría, disponibilidad y precio.',
    contactPoints: ['Mentoría privada, no clases masivas', '100% virtual, desde cualquier lugar', 'Ejercicios con revisión y seguimiento'],
    formTitle: 'Consultá por tu mentoría',
    name: 'Tu nombre',
    email: 'Tu correo',
    level: 'Tu nivel actual',
    goal: '¿Qué querés lograr?',
    namePlaceholder: 'Tu nombre completo',
    emailPlaceholder: 'vos@correo.com',
    levelPlaceholder: 'Seleccioná una opción',
    levels: ['Estoy empezando', 'Ya conozco lo básico', 'Tengo experiencia con automatización'],
    goalPlaceholder: 'Por ejemplo: aprender UiPath desde cero, armar un portafolio o prepararme para una entrevista.',
    submit: 'Enviar mi consulta',
    sending: 'Enviando...',
    success: '¡Gracias! Recibimos tu consulta. Te contactaremos por correo.',
    error: 'No se pudo enviar. Revisá tu conexión e intentá nuevamente.',
    privacy: 'Usaremos tus datos únicamente para responder a tu consulta.',
    noPrice: 'Disponibilidad y precio según el plan de mentoría.',
    finalLine: 'Aprender con proyectos es distinto a acreditar experiencia de empleo. Acá practicamos con transparencia.',
    footer: 'Mentorías 1 a 1 · Online · Costa Rica',
    footerHome: 'Ver servicios de TicoAutomate',
    built: 'Hecho en Costa Rica',
  },
  en: {
    eyebrow: 'TICOAUTOMATE / LEARN',
    heroPre: 'Learn UiPath and automation.',
    heroAccent: 'With guidance from someone who builds it for real.',
    heroBody: 'Private virtual one-on-one mentoring to learn how to build solutions, solve problems, and practice with projects inspired by real business scenarios.',
    primary: 'Ask about private mentoring',
    secondary: 'See how it works',
    heroProof: ['One-on-one sessions', 'Hands-on projects', 'Personal feedback'],
    sampleEyebrow: 'SAMPLE PRACTICAL ASSIGNMENT',
    sampleTitle: 'Your next hands-on project',
    sampleBadge: 'Work-style simulation',
    sampleProject: 'Automate a request-processing workflow',
    sampleProjectBody: 'A business requirement, business rules, error cases, and a deliverable you will need to explain.',
    task1: 'Analyze the requirements',
    task2: 'Build and test the solution',
    task3: 'Present and explain your work',
    sampleFeedback: 'Technical review + improvement recommendations',
    sampleFooter: 'Illustrative example of our approach',
    audienceEyebrow: 'WHO IT IS FOR',
    audienceTitle: 'Learn at your pace, from your starting point.',
    audienceIntro: "There's no one-size-fits-all curriculum. We adapt the work to your current skills, goals, and available time.",
    audiences: [
      { title: "I'm getting started", desc: 'Build a strong foundation in automation, logic, tools, and good practices.' },
      { title: 'I already know UiPath', desc: 'Move beyond tutorials into complete business requirements, validations, exceptions, and documentation.' },
      { title: 'I want interview practice', desc: 'Learn to explain technical decisions, present projects, and speak confidently and accurately about your work.' },
    ],
    practiceEyebrow: 'WHAT YOU WILL PRACTICE',
    practiceTitle: 'Go from following tutorials to solving problems.',
    practiceIntro: 'You will learn by doing, with progressive challenges and guidance on decisions made in real implementations.',
    practices: [
      { title: 'Useful foundations', desc: 'Logic, variables, data, app integrations, and essential RPA concepts.' },
      { title: 'Business-style projects', desc: 'Requirements, business rules, exceptions, testing, and changes during development.' },
      { title: 'Quality and technical judgment', desc: 'Project structure, logs, error handling, documentation, and maintainable solutions.' },
      { title: 'Portfolio and interviews', desc: 'Organize projects, explain your work, and practice technical interview questions with honesty.' },
    ],
    methodEyebrow: 'HOW IT WORKS',
    methodTitle: 'One-on-one guidance. Real practice. Ongoing improvement.',
    methodIntro: 'We use helpful resources, including free ones, to support learning. The real value comes from the sessions, mentorship, and feedback applied to your work.',
    steps: [
      { num: '01', title: 'Define your goal', desc: "We review your current level and shape a realistic learning path around what you want to achieve." },
      { num: '02', title: 'Build and practice', desc: 'We work together during sessions and you complete assignments that go beyond repeating a tutorial.' },
      { num: '03', title: 'Review and improve', desc: 'We review what you built, fix issues, and practice explaining your technical choices.' },
    ],
    mentorEyebrow: 'YOUR MENTOR',
    mentorTitle: 'Learn from professional practice.',
    mentorBody: 'Your mentor works on business process automation and understands the everyday challenges of designing, implementing, testing, and maintaining solutions. The goal is to share technical skills, sound judgment, and communication habits used when working with teams and clients.',
    mentorFocus: 'UiPath · Power Automate · Process automation',
    mentorNote: 'No promises of jobs or invented work history. Just practical projects, guidance, and tools to present your work professionally.',
    faqEyebrow: 'FREQUENTLY ASKED QUESTIONS',
    faqTitle: 'Know what to expect.',
    faqs: [
      { q: 'Will these lessons count as work experience?', a: 'You will gain hands-on project experience through realistic business simulations. This is not the same as having held a job or earned formal professional experience. We help you describe those projects accurately in your portfolio and interviews.' },
      { q: 'Do I need programming or UiPath experience?', a: 'Not necessarily. We can start with fundamentals or focus on more advanced challenges based on your current skills.' },
      { q: 'Are the sessions private?', a: 'Yes. Sessions are virtual and one-on-one, with practical assignments and progress reviews. Goals and frequency are agreed individually.' },
      { q: 'Can we use free courses or documentation?', a: 'Absolutely. We use useful free resources when they help. Mentoring focuses on resolving questions, applying skills, and getting personalized feedback.' },
      { q: 'How much does it cost and how long does it take?', a: 'This is a paid service. Duration, frequency, availability, and pricing depend on your goals. Send an inquiry and we can discuss the right format.' },
      { q: 'Is a job or certification guaranteed?', a: 'No. We can help with projects, portfolios, and interview preparation, but cannot promise employment or official certification. Your progress also depends on your own practice.' },
    ],
    contactEyebrow: "LET'S GET STARTED",
    contactTitle: "Tell me what you'd like to learn.",
    contactIntro: "You don't need to sign up or pay yet. Share your current level and goal. We'll reply with mentoring options, availability, and pricing.",
    contactPoints: ['Private sessions, not mass classes', '100% virtual, from anywhere', 'Assignments with reviews and guidance'],
    formTitle: 'Ask about mentoring',
    name: 'Your name',
    email: 'Email address',
    level: 'Your current level',
    goal: 'What would you like to achieve?',
    namePlaceholder: 'Full name',
    emailPlaceholder: 'you@email.com',
    levelPlaceholder: 'Select an option',
    levels: ["I'm just starting", 'I know the basics', 'I have automation experience'],
    goalPlaceholder: 'For example: learn UiPath from scratch, build a portfolio, or prepare for an interview.',
    submit: 'Send my inquiry',
    sending: 'Sending...',
    success: 'Thank you! Your inquiry was submitted. We will follow up by email.',
    error: 'We could not send your inquiry. Check your connection and try again.',
    privacy: 'We will only use your information to respond to your inquiry.',
    noPrice: 'Availability and pricing depend on your mentoring plan.',
    finalLine: 'Project practice is not the same as an employment record. We keep that distinction clear.',
    footer: 'One-on-one mentoring · Online · Costa Rica',
    footerHome: 'Explore TicoAutomate services',
    built: 'Built in Costa Rica',
  },
};

const audienceIcons = [BookOpen, Code2, BriefcaseBusiness];
const practiceIcons = [Layers3, Target, ShieldCheck, MessageSquareText];

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
      ? 'Mentorías privadas de UiPath y RPA | TicoAutomate Learn'
      : 'Private UiPath & RPA Mentoring | TicoAutomate Learn';
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const oldDescription = description?.content;
    if (description) {
      description.content = language === 'es'
        ? 'Mentorías virtuales 1 a 1 en UiPath y automatización. Proyectos prácticos, feedback y preparación para entrevistas.'
        : 'One-on-one UiPath and automation mentoring. Practical projects, personal feedback, and interview preparation.';
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
                <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.13em] text-cyan-200"><ClipboardCheck size={16}/>{c.sampleEyebrow}</div>
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
                <BadgeCheck size={18} className="shrink-0 text-emerald-300"/>{c.sampleFeedback}
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
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-300"><UserRound size={43} strokeWidth={1.2}/></div>
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

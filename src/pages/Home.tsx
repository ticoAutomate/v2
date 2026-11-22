import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, BrainCircuit, Check,
  ChevronRight, CircuitBoard, Globe2, GraduationCap,
  Layers3, Loader2, Mail, MonitorSmartphone, Sparkles, Workflow,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const text = {
  en: {
    eyebrow: 'INDEPENDENT TECHNOLOGY CONSULTING',
    heroLineOne: 'Less manual work.',
    heroLineTwo: 'More room to grow.',
    intro: 'We create modern websites, automate everyday workflows, and bring AI into the tools your business already uses.',
    primary: 'Explore our services',
    secondary: "Let's talk",
    heroNote: 'Thoughtful solutions. Built for real businesses.',
    example: 'EXAMPLE WORKFLOW',
    exampleTag: 'A smarter way to work',
    workflow1: 'New request received',
    workflow1sub: 'Forms, email, or business apps',
    workflow2: 'Intelligent processing',
    workflow2sub: 'Automation + AI-assisted steps',
    workflow3: 'Task completed',
    workflow3sub: 'Systems updated and team notified',
    sample: 'Illustrative workflow — not live data',
    capabilities: 'WORKING ACROSS YOUR TECH STACK',
    servicesEyebrow: 'WHAT WE DO',
    servicesTitle: 'The right technology. For the work that matters.',
    servicesIntro: 'From your first website to complex back-office workflows, we help turn manual processes and disconnected systems into smoother experiences.',
    services: [
      { title: 'Process automation & RPA', body: 'Reduce repetitive tasks, connect workflows, and free your team to focus on work that needs people.', tag: 'UiPath · Power Automate' },
      { title: 'AI implementation', body: 'Make AI useful inside your business with intelligent workflows, document processing, and practical assistants.', tag: 'AI · Intelligent documents' },
      { title: 'Websites & digital products', body: 'Fast, responsive websites and custom applications designed to make a clear first impression and solve real needs.', tag: 'Web apps · Business websites' },
      { title: 'Integrations & cloud solutions', body: 'Bring your apps, data, and teams together with secure integrations and reliable cloud-based solutions.', tag: 'APIs · Microsoft Azure' },
    ],
    approachEyebrow: 'OUR APPROACH',
    approachTitle: 'Practical thinking. Meaningful results.',
    approachDescription: 'No unnecessary complexity. We start by understanding the problem, then build a solution that fits how your business works.',
    steps: [
      { num: '01', title: 'Understand', body: 'We learn about your goals, current workflow, and what is slowing things down.' },
      { num: '02', title: 'Build', body: 'We design and implement a focused, maintainable solution.' },
      { num: '03', title: 'Improve', body: 'We test, refine, and help you get lasting value from what we build.' },
    ],
    experienceNumber: 'RPA',
    experienceLabel: 'Hands-on experience delivering enterprise automation solutions',
    experienceTitle: 'Built on real-world experience, not just ideas.',
    experienceText: 'TicoAutomate brings an engineering-first mindset to business problems, from operations and finance to digital experiences and modern AI workflows.',
    learnTag: 'TICOAUTOMATE / LEARN',
    learnTitle: 'Want to build these skills yourself?',
    learnBody: 'Private, practical 1-on-1 mentoring in automation and RPA — guided exercises, feedback, and a learning plan built around you.',
    learnButton: 'Explore private mentoring',
    contactEyebrow: 'START A CONVERSATION',
    contactTitle: 'Have a project in mind?',
    contactIntro: "Tell us what you're trying to improve. Whether it's a small website or a complex automation challenge, we'd love to hear about it.",
    contactNote: 'Based in Costa Rica. Working with clients worldwide.',
    formName: 'Your name',
    formEmail: 'Work email',
    formService: 'What do you need help with?',
    formMessage: 'Tell us a little about your project',
    placeholderName: 'Your name',
    placeholderEmail: 'you@company.com',
    placeholderMessage: 'What are you looking to build or improve?',
    placeholderService: 'Select a service',
    formServices: ['Automation & RPA', 'AI implementation', 'Website / web app', 'Integrations & cloud', 'Private mentoring', 'Other / not sure yet'],
    formSubmit: 'Send inquiry',
    formSending: 'Sending...',
    formSuccess: 'Thanks! Your message has been submitted.',
    formError: 'We could not send your message. Please try again.',
    formPrivacy: 'Your information is used only to respond to your inquiry.',
    footerDesc: 'Automation, AI, and digital solutions for businesses that want to move forward.',
    footerNav: 'Explore',
    footerServices: 'Services',
    footerApproach: 'Approach',
    footerContact: 'Contact',
    footerBuilt: 'Built in Costa Rica',
    footerRights: 'All rights reserved.',
  },
  es: {
    eyebrow: 'CONSULTORÍA TECNOLÓGICA INDEPENDIENTE',
    heroLineOne: 'Menos trabajo manual.',
    heroLineTwo: 'Más espacio para crecer.',
    intro: 'Creamos sitios web modernos, automatizamos procesos e integramos IA con las herramientas que tu negocio ya utiliza.',
    primary: 'Explorar servicios',
    secondary: 'Hablemos',
    heroNote: 'Soluciones bien pensadas. Para negocios reales.',
    example: 'EJEMPLO DE AUTOMATIZACIÓN',
    exampleTag: 'Una forma más inteligente de trabajar',
    workflow1: 'Nueva solicitud recibida',
    workflow1sub: 'Formularios, correo o aplicaciones',
    workflow2: 'Procesamiento inteligente',
    workflow2sub: 'Automatización + asistencia de IA',
    workflow3: 'Tarea completada',
    workflow3sub: 'Sistemas actualizados y equipo notificado',
    sample: 'Ejemplo ilustrativo — no son datos en vivo',
    capabilities: 'TRABAJAMOS CON TUS HERRAMIENTAS',
    servicesEyebrow: 'QUÉ HACEMOS',
    servicesTitle: 'Tecnología útil para lo que realmente importa.',
    servicesIntro: 'Desde tu primera página web hasta procesos complejos, transformamos tareas manuales y sistemas desconectados en experiencias más simples.',
    services: [
      { title: 'Automatización de procesos y RPA', body: 'Reducimos tareas repetitivas, conectamos procesos y liberamos tiempo para que tu equipo se enfoque en lo importante.', tag: 'UiPath · Power Automate' },
      { title: 'Implementación de IA', body: 'Integramos IA de forma práctica: flujos inteligentes, procesamiento de documentos y asistentes para tu operación.', tag: 'IA · Documentos inteligentes' },
      { title: 'Páginas web y productos digitales', body: 'Sitios web rápidos y adaptables, junto con aplicaciones personalizadas para resolver necesidades reales.', tag: 'Aplicaciones · Sitios web' },
      { title: 'Integraciones y soluciones en la nube', body: 'Conectamos aplicaciones, datos y equipos mediante integraciones seguras y soluciones confiables en la nube.', tag: 'APIs · Microsoft Azure' },
    ],
    approachEyebrow: 'CÓMO TRABAJAMOS',
    approachTitle: 'Enfoque práctico. Resultados que importan.',
    approachDescription: 'Sin complicaciones innecesarias. Primero entendemos el problema y después construimos una solución adaptada a tu negocio.',
    steps: [
      { num: '01', title: 'Entendemos', body: 'Conocemos tus objetivos, procesos actuales y dónde se está perdiendo tiempo.' },
      { num: '02', title: 'Construimos', body: 'Diseñamos e implementamos una solución enfocada y fácil de mantener.' },
      { num: '03', title: 'Mejoramos', body: 'Probamos, ajustamos y te ayudamos a obtener valor a largo plazo.' },
    ],
    experienceNumber: 'RPA',
    experienceLabel: 'Experiencia desarrollando soluciones de automatización para empresas',
    experienceTitle: 'Experiencia real, no solo buenas ideas.',
    experienceText: 'TicoAutomate aplica un enfoque de ingeniería a los retos del negocio: operaciones, finanzas, experiencias digitales y soluciones modernas con IA.',
    learnTag: 'TICOAUTOMATE / LEARN',
    learnTitle: '¿Querés aprender a hacerlo vos?',
    learnBody: 'Mentorías privadas 1 a 1 en automatización y RPA, con ejercicios prácticos, revisión de tareas y un plan adaptado a tus objetivos.',
    learnButton: 'Conocer las mentorías privadas',
    contactEyebrow: 'EMPECEMOS A CONVERSAR',
    contactTitle: '¿Tenés un proyecto en mente?',
    contactIntro: 'Contanos qué necesitás mejorar. Desde una página web hasta una automatización compleja, nos encantará conocer tu idea.',
    contactNote: 'Desde Costa Rica, trabajando con clientes alrededor del mundo.',
    formName: 'Tu nombre',
    formEmail: 'Correo electrónico',
    formService: '¿En qué necesitás ayuda?',
    formMessage: 'Contanos un poco sobre tu proyecto',
    placeholderName: 'Tu nombre',
    placeholderEmail: 'vos@empresa.com',
    placeholderMessage: '¿Qué querés construir o mejorar?',
    placeholderService: 'Seleccioná un servicio',
    formServices: ['Automatización y RPA', 'Implementación de IA', 'Página web / aplicación', 'Integraciones y nube', 'Mentoría privada', 'Otro / todavía no estoy seguro'],
    formSubmit: 'Enviar consulta',
    formSending: 'Enviando...',
    formSuccess: '¡Gracias! Tu mensaje fue enviado.',
    formError: 'No pudimos enviar tu mensaje. Intentá de nuevo.',
    formPrivacy: 'Usaremos tus datos únicamente para responder a tu consulta.',
    footerDesc: 'Automatización, IA y soluciones digitales para negocios que quieren avanzar.',
    footerNav: 'Explorá',
    footerServices: 'Servicios',
    footerApproach: 'Nuestro enfoque',
    footerContact: 'Contacto',
    footerBuilt: 'Hecho en Costa Rica',
    footerRights: 'Todos los derechos reservados.',
  },
};

const servicesIcons = [Workflow, BrainCircuit, MonitorSmartphone, Layers3];

export function Home() {
  const { language } = useLanguage();
  const c = text[language];
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formStatus === 'sending') return;
    const form = event.currentTarget;
    const values = new FormData(form);
    const params = new URLSearchParams();
    values.forEach((value, key) => params.append(key, String(value)));
    setFormStatus('sending');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      if (!response.ok) throw new Error('Form submission failed');
      setFormStatus('success');
      form.reset();
    } catch {
      setFormStatus('error');
    }
  }

  return (
    <div className="relative overflow-hidden bg-[#060e1d] text-white">
      <div aria-hidden="true" className="tico-background absolute inset-0"/>
      <div aria-hidden="true" className="tico-grid absolute inset-x-0 top-0 h-[850px] opacity-80"/>

      <section className="relative mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 sm:pt-28 lg:px-10 lg:pb-32 lg:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.055] px-4 py-2.5 text-[10px] font-bold tracking-[0.16em] text-cyan-200 sm:text-xs">
              <span className="relative flex h-2 w-2"><span className="absolute h-full w-full rounded-full bg-cyan-300/25"/><span className="relative h-2 w-2 rounded-full bg-cyan-300"/></span>
              {c.eyebrow}
            </div>
            <h1 className="max-w-[700px] text-[42px] font-semibold leading-[1.09] tracking-[-0.065em] sm:text-[66px] lg:text-[66px] xl:text-[74px]">
              <span className="block text-white">{c.heroLineOne}</span>
              <span className="tico-accent-text mt-1 block">{c.heroLineTwo}</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">{c.intro}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#services" className="group inline-flex items-center gap-3 rounded-lg bg-cyan-300 px-6 py-4 text-sm font-bold text-[#071522] shadow-[0_10px_35px_rgba(82,221,235,0.12)] transition-all hover:-translate-y-0.5 hover:bg-cyan-200">
                {c.primary}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
              </a>
              <a href="#contact" className="inline-flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.035] px-6 py-4 text-sm font-semibold text-slate-200 transition-colors hover:border-white/30 hover:bg-white/[0.065]">
                {c.secondary}<ArrowRight className="h-4 w-4"/>
              </a>
            </div>
            <div className="mt-12 flex items-center gap-3 border-l-2 border-cyan-300/50 pl-4 text-xs leading-6 text-slate-400">{c.heroNote}</div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px] lg:ml-auto">
            <div aria-hidden="true" className="pointer-events-none absolute -inset-8 rounded-full bg-blue-500/10 blur-3xl"/>
            <div className="tico-glass relative overflow-hidden rounded-[23px] p-5 sm:p-7">
              <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-cyan-400/[0.055] blur-3xl"/>
              <div className="relative mb-7 flex items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-300/10 text-cyan-300"><CircuitBoard size={18}/></span>
                  <span className="text-xs font-semibold tracking-[0.11em] text-slate-300">{c.example}</span>
                </div>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-2.5 py-1 text-[10px] font-medium text-cyan-200">01 — 03</span>
              </div>
              <h2 className="relative mb-6 text-xl font-semibold tracking-tight text-white sm:text-2xl">{c.exampleTag}</h2>
              <div className="relative">
                <div aria-hidden="true" className="absolute bottom-10 left-[22px] top-10 w-px bg-gradient-to-b from-cyan-300/50 via-blue-400/50 to-emerald-300/40"/>
                <div className="relative mb-3 flex items-start gap-4 rounded-xl border border-white/10 bg-[#0b1c31] p-4 sm:p-5">
                  <div className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-400/10 text-blue-200"><Mail size={19}/></div>
                  <div className="min-w-0 flex-1"><div className="text-sm font-semibold text-white">{c.workflow1}</div><div className="mt-1 text-xs leading-5 text-slate-400">{c.workflow1sub}</div></div>
                  <span className="mt-1 text-[10px] font-bold text-slate-500">01</span>
                </div>
                <div className="relative mb-3 flex items-start gap-4 rounded-xl border border-cyan-300/25 bg-gradient-to-r from-cyan-300/[0.085] to-blue-400/[0.035] p-4 sm:p-5">
                  <div className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-300/15 text-cyan-200"><BrainCircuit size={21}/></div>
                  <div className="min-w-0 flex-1"><div className="text-sm font-semibold text-white">{c.workflow2}</div><div className="mt-1 text-xs leading-5 text-slate-300">{c.workflow2sub}</div></div>
                  <Sparkles className="mt-1 h-4 w-4 text-cyan-300"/>
                </div>
                <div className="relative flex items-start gap-4 rounded-xl border border-white/10 bg-[#0b1c31] p-4 sm:p-5">
                  <div className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-300"><Check size={21}/></div>
                  <div className="min-w-0 flex-1"><div className="text-sm font-semibold text-white">{c.workflow3}</div><div className="mt-1 text-xs leading-5 text-slate-400">{c.workflow3sub}</div></div>
                  <span className="mt-1 text-[10px] font-bold text-slate-500">03</span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 border-t border-white/[0.07] pt-4 text-[11px] text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-slate-500"/>{c.sample}</div>
            </div>
          </div>
        </div>
        <div className="mt-24 border-t border-white/10 pt-7 lg:mt-28">
          <p className="mb-5 text-center text-[10px] font-semibold tracking-[0.17em] text-slate-500">{c.capabilities}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 text-sm font-semibold tracking-tight text-slate-400 sm:text-base">
            <span>UiPath</span><span>Power Automate</span><span>Microsoft Azure</span><span>React</span><span>AI Integrations</span>
          </div>
        </div>
      </section>

      <section id="services" className="relative border-y border-white/[0.065] bg-white/[0.018] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 grid gap-5 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <div className="mb-5 text-xs font-bold tracking-[0.18em] text-cyan-300">{c.servicesEyebrow}</div>
              <h2 className="max-w-2xl text-3xl font-semibold leading-[1.2] tracking-[-0.045em] text-white sm:text-5xl">{c.servicesTitle}</h2>
            </div>
            <p className="max-w-lg text-sm leading-8 text-slate-400 sm:text-base lg:ml-auto">{c.servicesIntro}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {c.services.map((item, index) => {
              const Icon = servicesIcons[index];
              return <div key={item.title} className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.055] to-white/[0.015] p-7 transition-all hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.065] sm:p-9">
                <div className="mb-9 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.085] p-3.5 text-cyan-300"><Icon size={25} strokeWidth={1.6}/></div>
                  <ArrowUpRight className="h-5 w-5 text-slate-600 transition-colors group-hover:text-cyan-300"/>
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-white sm:text-[22px]">{item.title}</h3>
                <p className="min-h-[80px] max-w-md text-sm leading-7 text-slate-400">{item.body}</p>
                <div className="mt-7 inline-flex rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-[11px] font-medium text-slate-400">{item.tag}</div>
              </div>;
            })}
          </div>
        </div>
      </section>

      <section id="approach" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="mb-5 text-xs font-bold tracking-[0.18em] text-cyan-300">{c.approachEyebrow}</div>
            <h2 className="max-w-xl text-3xl font-semibold leading-[1.2] tracking-[-0.045em] sm:text-5xl">{c.approachTitle}</h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-400">{c.approachDescription}</p>
            <div className="mt-12 flex items-center gap-5 rounded-xl border border-white/10 bg-white/[0.025] px-6 py-5 sm:max-w-md">
              <div className="tico-accent-text text-[50px] font-bold leading-none tracking-[-0.08em]">{c.experienceNumber}</div>
              <p className="max-w-[210px] text-sm leading-6 text-slate-300">{c.experienceLabel}</p>
            </div>
          </div>
          <div className="relative pt-1">
            {c.steps.map((step, index) => <div key={step.num} className={'grid grid-cols-[54px_1fr] gap-5 py-7 sm:grid-cols-[70px_1fr] ' + (index === 0 ? 'pt-0' : 'border-t border-white/10')}>
              <span className="font-mono text-lg font-semibold text-cyan-300/80">{step.num}</span>
              <div><h3 className="mb-2 text-xl font-semibold text-white">{step.title}</h3><p className="max-w-md text-sm leading-7 text-slate-400">{step.body}</p></div>
            </div>)}
            <div className="mt-5 border-l-2 border-cyan-300/35 pl-5">
              <h3 className="mb-2 text-base font-semibold text-slate-200">{c.experienceTitle}</h3>
              <p className="text-sm leading-7 text-slate-400">{c.experienceText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10">
        <div className="relative overflow-hidden rounded-[24px] border border-cyan-300/20 bg-gradient-to-r from-[#122c48] via-[#10283f] to-[#0a1c34] px-7 py-10 sm:px-12 sm:py-14">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-300/10 blur-[70px]"/>
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-2 text-[11px] font-bold tracking-[0.17em] text-cyan-200"><GraduationCap size={17}/>{c.learnTag}</div>
              <h2 className="text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">{c.learnTitle}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">{c.learnBody}</p>
            </div>
            <Link to="/learn" className="group inline-flex w-fit items-center gap-3 rounded-lg border border-cyan-200/40 bg-cyan-200/10 px-5 py-3.5 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-200/20">{c.learnButton}<ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/></Link>
          </div>
        </div>
      </section>

      <section id="contact" className="relative border-t border-white/10 bg-[#091628] py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
          <div>
            <div className="mb-5 text-xs font-bold tracking-[0.18em] text-cyan-300">{c.contactEyebrow}</div>
            <h2 className="max-w-lg text-4xl font-semibold leading-[1.16] tracking-[-0.05em] text-white sm:text-5xl">{c.contactTitle}</h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-300">{c.contactIntro}</p>
            <div className="mt-9 flex items-start gap-3 text-sm leading-6 text-slate-400"><Globe2 size={18} className="mt-0.5 shrink-0 text-cyan-300"/>{c.contactNote}</div>
          </div>
          <form name="consultation" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleContact} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <input type="hidden" name="form-name" value="consultation"/>
            <p className="hidden"><label>Do not fill this in: <input name="bot-field"/></label></p>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-200">{c.formName}<input required maxLength={120} name="name" placeholder={c.placeholderName} autoComplete="name" className="mt-2 block w-full rounded-lg border border-white/15 bg-[#081726] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-300/60"/></label>
              <label className="block text-sm font-medium text-slate-200">{c.formEmail}<input required type="email" maxLength={160} name="email" autoComplete="email" placeholder={c.placeholderEmail} className="mt-2 block w-full rounded-lg border border-white/15 bg-[#081726] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-300/60"/></label>
            </div>
            <label className="mt-5 block text-sm font-medium text-slate-200">{c.formService}
              <select required name="service" defaultValue="" className="mt-2 block w-full rounded-lg border border-white/15 bg-[#081726] px-4 py-3.5 text-sm text-slate-200 outline-none transition-colors focus:border-cyan-300/60">
                <option value="" disabled>{c.placeholderService}</option>
                {c.formServices.map((service, index) => <option key={index} value={['automation','ai','web','integrations','mentoring','other'][index]}>{service}</option>)}
              </select>
            </label>
            <label className="mt-5 block text-sm font-medium text-slate-200">{c.formMessage}<textarea required name="message" rows={5} maxLength={4000} placeholder={c.placeholderMessage} className="mt-2 block w-full resize-y rounded-lg border border-white/15 bg-[#081726] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-300/60"/></label>
            <button disabled={formStatus === 'sending'} type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-cyan-300 px-6 py-4 text-sm font-bold text-[#071522] transition-colors hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60">
              {formStatus === 'sending' ? <Loader2 size={17} className="animate-spin"/> : <ArrowUpRight size={17}/>}
              {formStatus === 'sending' ? c.formSending : c.formSubmit}
            </button>
            <p role="status" aria-live="polite" className={'mt-4 text-center text-xs ' + (formStatus === 'error' ? 'text-red-300' : formStatus === 'success' ? 'text-emerald-300' : 'text-slate-500')}>
              {formStatus === 'error' ? c.formError : formStatus === 'success' ? c.formSuccess : c.formPrivacy}
            </p>
          </form>
        </div>
      </section>

      <footer className="relative border-t border-white/10 bg-[#060e1d]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="grid gap-9 sm:grid-cols-2">
            <div>
              <Link to="/" className="inline-flex items-center gap-2.5 text-white"><CircuitBoard size={22} className="text-cyan-300"/><span className="text-lg font-semibold tracking-[-0.05em]">tico<span className="text-cyan-300">automate.</span></span></Link>
              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">{c.footerDesc}</p>
            </div>
            <div className="flex gap-14 sm:justify-end">
              <div>
                <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-300">{c.footerNav}</div>
                <div className="flex flex-col gap-3 text-sm text-slate-500">
                  <a href="#services" className="hover:text-cyan-300">{c.footerServices}</a>
                  <a href="#approach" className="hover:text-cyan-300">{c.footerApproach}</a>
                  <Link to="/learn" className="hover:text-cyan-300">Learn</Link>
                  <a href="#contact" className="hover:text-cyan-300">{c.footerContact}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} TicoAutomate. {c.footerRights}</span>
            <span className="inline-flex items-center gap-2.5 self-start rounded-full border border-white/[0.075] bg-white/[0.025] px-3 py-2 text-[11px] tracking-wide text-slate-500 sm:self-auto">
              <span className="tico-flag" role="img" aria-label="Costa Rica flag"/>{c.footerBuilt}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { ArrowRight, BookOpenCheck, CheckCircle2, GraduationCap, MessagesSquare, UserRoundCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function Learn() {
  const { language } = useLanguage();
  const es = language === 'es';
  const copy = es ? {
    eyebrow: 'TICOAUTOMATE / LEARN',
    title: 'Aprendé con acompañamiento real.',
    description: 'Mentorías privadas 1 a 1 para desarrollar habilidades prácticas en automatización y RPA. Sin cursos masivos ni contenido gratuito de relleno.',
    button: 'Consultar por una mentoría',
    note: 'Cupos y tarifas disponibles por consulta.',
    heading: 'Una experiencia diseñada alrededor de vos.',
    items: [
      ['Sesiones virtuales 1 a 1', 'Avanzá con orientación personal y tiempo para resolver tus dudas.'],
      ['Ejercicios prácticos', 'Aplicá lo aprendido con actividades cercanas al trabajo real.'],
      ['Revisión de tareas', 'Recibí retroalimentación y recomendaciones para mejorar.'],
    ],
    footer: 'Mentorías personalizadas · Costa Rica · Online',
  } : {
    eyebrow: 'TICOAUTOMATE / LEARN',
    title: 'Learn with real, personal guidance.',
    description: 'Private one-on-one mentoring to build practical automation and RPA skills. No mass-market courses or filler content.',
    button: 'Ask about mentoring',
    note: 'Availability and pricing shared upon inquiry.',
    heading: 'An experience built around you.',
    items: [
      ['Private virtual sessions', 'Move forward with personalized guidance and room for every question.'],
      ['Hands-on exercises', 'Practice with activities inspired by real-world work.'],
      ['Assignment feedback', 'Get thoughtful reviews and clear next steps to improve.'],
    ],
    footer: 'Personal mentoring · Costa Rica · Online',
  };
  const icons = [UserRoundCheck, BookOpenCheck, MessagesSquare];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060e1d] text-white">
      <div aria-hidden className="tico-background absolute inset-0 opacity-60"/>
      <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-24 sm:px-8 sm:pt-32 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-[11px] font-semibold tracking-[0.17em] text-cyan-200">
            <GraduationCap className="h-4 w-4"/> {copy.eyebrow}
          </div>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-[-0.055em] sm:text-6xl lg:text-7xl">{copy.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{copy.description}</p>
          <Link to="/#contact" className="mt-9 inline-flex items-center gap-3 rounded-lg bg-cyan-300 px-6 py-4 text-sm font-bold text-[#071322] transition-colors hover:bg-cyan-200">
            {copy.button}<ArrowRight className="h-4 w-4"/>
          </Link>
          <p className="mt-4 text-xs text-slate-500">{copy.note}</p>
        </div>
      </section>
      <section className="relative mx-auto max-w-7xl px-5 pb-28 sm:px-8 lg:px-10">
        <div className="mb-8 h-px bg-gradient-to-r from-cyan-300/25 via-white/10 to-transparent"/>
        <h2 className="mb-9 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{copy.heading}</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {copy.items.map(([title, description], index) => {
            const Icon = icons[index];
            return <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-7">
              <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300"><Icon size={22}/></div>
              <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm leading-7 text-slate-400">{description}</p>
              <CheckCircle2 className="mt-7 h-4 w-4 text-cyan-300/60"/>
            </div>;
          })}
        </div>
      </section>
      <div className="relative border-t border-white/10 px-5 py-8 text-center text-xs text-slate-500">{copy.footer}</div>
    </div>
  );
}

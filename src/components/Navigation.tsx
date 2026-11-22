import { useState } from 'react';
import { ArrowUpRight, CircuitBoard, Globe2, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function Navigation() {
  const { language, setLanguage } = useLanguage();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const es = language === 'es';
  const onLearn = pathname === '/learn';
  const links = onLearn ? [
    { to: '/#services', label: es ? 'Servicios' : 'Services' },
    { to: '/learn#method', label: es ? 'Cómo funciona' : 'How it works' },
    { to: '/learn#faq', label: es ? 'Preguntas frecuentes' : 'FAQ' },
  ] : [
    { to: '/#services', label: es ? 'Servicios' : 'Services' },
    { to: '/#approach', label: es ? 'Cómo trabajamos' : 'How we work' },
    { to: '/learn', label: 'Learn' },
  ];
  const ctaTo = onLearn ? '/learn#apply' : '/#contact';
  const ctaText = onLearn ? (es ? 'Consultar mentoría' : 'Ask about mentoring') : (es ? 'Hablemos' : "Let's talk");
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#071020]/85 backdrop-blur-2xl">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10" aria-label={es ? 'Navegación principal' : 'Main navigation'}>
        <Link to="/" onClick={closeMenu} className="group flex items-center gap-3 text-white" aria-label="TicoAutomate home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-gradient-to-br from-cyan-300/20 to-blue-600/20 shadow-[0_0_30px_rgba(21,183,221,0.09)] transition-colors group-hover:border-cyan-300/60">
            <CircuitBoard className="h-[21px] w-[21px] text-cyan-300" strokeWidth={1.8}/>
          </span>
          <span className="text-[19px] font-semibold tracking-[-0.05em]">tico<span className="text-cyan-300">automate</span><span className="text-cyan-300">.</span></span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className={'text-[13px] font-medium transition-colors hover:text-cyan-300 ' + (pathname === '/learn' && link.to === '/learn' ? 'text-cyan-300' : 'text-slate-300')} >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <button type="button" onClick={() => setLanguage(es ? 'en' : 'es')} className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-slate-300 transition-colors hover:text-white" aria-label={es ? 'Switch to English' : 'Cambiar a español'}>
            <Globe2 className="h-4 w-4 text-cyan-300/80" /> {es ? 'ES' : 'EN'} <span className="text-slate-600">/</span> <span className="text-slate-500">{es ? 'EN' : 'ES'}</span>
          </button>
          <Link to={ctaTo} className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/35 bg-cyan-300/10 px-4 py-2.5 text-[13px] font-semibold text-cyan-100 transition-colors hover:border-cyan-300 hover:bg-cyan-300/20">
            {ctaText} <ArrowUpRight className="h-4 w-4"/>
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button type="button" onClick={() => setLanguage(es ? 'en' : 'es')} className="rounded-lg border border-white/10 px-3 py-2 text-xs font-bold text-slate-200" aria-label={es ? 'Switch to English' : 'Cambiar a español'}>{es ? 'ES' : 'EN'}</button>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="rounded-lg border border-white/10 p-2 text-white" aria-expanded={menuOpen} aria-label={es ? 'Abrir menú' : 'Toggle menu'}>{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
        </div>
      </nav>
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#081324] px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => <Link onClick={closeMenu} key={link.to} to={link.to} className="rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/5">{link.label}</Link>)}
            <Link onClick={closeMenu} to={ctaTo} className="mt-2 rounded-lg bg-cyan-300 px-3 py-3 text-center text-sm font-bold text-[#061222]">{ctaText}</Link>
          </div>
        </div>
      )}
    </header>
  );
}

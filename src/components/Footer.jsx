import { ArrowIcon } from './ArrowIcon';

export function Footer() {
  return (
    <footer className="bg-[#191916] px-[7%] py-6 text-[#d5cfc4] lg:px-[10%]">
      <div className="flex items-center justify-between gap-4">
        <a className="inline-flex min-h-11 items-center font-display text-[26px] sm:text-[34px] leading-none tracking-[-0.06em] text-[#eee9df]" href="#start" aria-label="Studio Concept — wróć na górę">studio concept<span className="text-gold">.</span></a>
        <a className="inline-flex min-h-11 items-center gap-2 text-sm text-[#c0b9ae] hover:underline" href="#start">Wróć na górę <ArrowIcon direction="up" className="h-3.5 w-3.5" /></a>
      </div>
      <div className="mt-3 flex flex-col gap-1 text-xs text-[#aaa399] sm:flex-row sm:justify-between sm:gap-4">
        <p>Studio pielęgnacji dłoni i stóp</p>
        <p>© Studio Concept · koncepcja portfolio</p>
      </div>
      <p className="mt-5 border-t border-white/10 pt-4 text-xs text-[#aaa399]">
        Projekt i realizacja: <a className="font-medium text-[#e2dbd0] underline decoration-[#b7a27b] underline-offset-4 hover:text-white" href="https://glazowski-web.com" target="_blank" rel="author noopener">glazowski-web.com</a>
      </p>
    </footer>
  );
}

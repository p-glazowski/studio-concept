import { ProjectLink } from './ProjectLink';

export function ProjectNote() {
  return (
    <section id="informacje" className="bg-dark px-[7%] py-16 text-[#f7f3ec] lg:grid lg:grid-cols-[2fr_1fr] lg:gap-[60px] lg:px-[10%] lg:py-[140px]">
      <div>
        <p className="section-kicker mb-4 !text-[#c5ae82]">STUDIO CONCEPT</p>
        <h2 className="display-heading mb-8 text-[clamp(54px,6vw,86px)]">Pomysł na spokój.<br /><em className="text-[#c5ae82]">Projekt z troską.</em></h2>
        <p className="mb-8 max-w-[440px] text-[#c8c1b5]">Koncepcja wizualna strony dla branży beauty, oparta na ciepłych barwach, naturalnych fakturach i czytelnej typografii.</p>
        <ProjectLink href="#o-projekcie" light>Odkryj założenia projektu</ProjectLink>
      </div>
      <div className="mt-12 self-end text-[#e2dbd0] lg:mt-0">
        <p className="mb-4 text-[11px] font-bold tracking-[0.17em] text-[#b7a27b]">INFORMACJE O PROJEKCIE</p>
        <p className="mb-6 text-[19px]">Projekt demonstracyjny</p>
        <p className="max-w-[300px] text-sm leading-relaxed text-[#c8c1b5]">Strona służy wyłącznie prezentacji projektu. Nie przedstawia działającej firmy, nie przyjmuje rezerwacji i nie świadczy usług. Oferta ma charakter przykładowy.</p>
      </div>
    </section>
  );
}

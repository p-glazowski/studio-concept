import { ProjectLink } from './ProjectLink';

export function Hero() {
  return (
    <section id="start" className="flex lg:min-h-[calc(100svh-94px)] flex-col lg:grid lg:grid-cols-[48%_52%]">
      <div className="flex flex-col items-start px-[7%] pb-8 pt-10 lg:pb-[35px] lg:pl-[12.5%] lg:pr-[9%] lg:pt-[clamp(40px,5vw,76px)]">
        <p className="section-kicker">STUDIO CONCEPT <span className="mx-2">·</span> PROJEKT KONCEPCYJNY</p>
        <h1 className="display-heading my-6 max-w-[650px] text-[clamp(43px,10.5vw,67px)] lg:mb-7 lg:mt-7 lg:text-[clamp(54px,6.1vw,96px)]">Piękno zaczyna się od <em className="text-accent">troski.</em></h1>
        <p className="mb-6 max-w-[390px] text-base leading-relaxed text-muted lg:text-[17px]">Koncepcja strony studia pielęgnacji dłoni i stóp. Podologia, manicure i pedicure w oprawie inspirowanej spokojem i troską o detale.</p>
        <ProjectLink href="#uslugi">Poznaj przykładowe usługi</ProjectLink>
        <div className="mt-9 grid w-full max-w-[440px] grid-cols-1 gap-5 min-[400px]:grid-cols-[auto_1fr] rounded-[24px] bg-[#ebe6dc] p-5 lg:mt-12 lg:gap-x-6 lg:p-5">
          <div className="flex items-center gap-3 min-[400px]:block min-[400px]:border-r min-[400px]:border-[#c9bda9] min-[400px]:pr-5 lg:border-[#d5cfc4] lg:pr-6">
            <p className="font-display text-[46px] leading-none tracking-[-0.06em] text-ink">03</p>
            <p className="text-sm leading-snug min-[400px]:mt-2 text-muted">obszary pielęgnacji</p>
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="mb-2 text-xs font-bold tracking-[0.16em] text-[#806d4b]">IDEA PROJEKTU</p>
            <p className="font-display text-[21px] italic leading-tight text-ink">Spokój i dbałość o detale.</p>
            <a className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted underline decoration-[#b9a681] underline-offset-4 hover:text-ink" href="#o-projekcie">Poznaj koncepcję <span className="shrink-0" aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <div className="mx-[7%] mb-4 aspect-[16/10] sm:aspect-[16/7] overflow-hidden rounded-[28px] bg-[#57473a] bg-[position:60%_center] bg-cover lg:mx-0 lg:mb-0 lg:aspect-auto lg:min-h-[600px] lg:rounded-none lg:bg-[position:65%_center]" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/studio.png)` }} role="img" aria-label="Dekoracyjna kompozycja akcesoriów do pielęgnacji dłoni" />
    </section>
  );
}

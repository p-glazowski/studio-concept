import { BookingButton } from './BookingButton';
import { ArrowIcon } from './ArrowIcon';

// Mobile order: intro → photo → highlight card, so the photo lands on the first screen.
// Desktop: intro and card stacked in the left column, photo spanning the right column.
export function Hero() {
  return (
    <section id="start" className="grid grid-cols-1 lg:min-h-[calc(100svh-94px)] lg:grid-cols-[48%_52%] lg:grid-rows-[auto_1fr]">
      <div className="flex flex-col items-start px-[7%] pt-9 lg:col-start-1 lg:row-start-1 lg:pl-[12.5%] lg:pr-[9%] lg:pt-[clamp(40px,5vw,76px)]">
        <p className="section-kicker">STUDIO CONCEPT <span className="mx-2">·</span> DŁONIE I STOPY</p>
        <h1 className="display-heading my-5 max-w-[650px] text-[clamp(43px,11.5vw,67px)] lg:mb-7 lg:mt-7 lg:text-[clamp(54px,6.1vw,96px)]">Piękno zaczyna się od <em className="text-accent">troski.</em></h1>
        <p className="mb-7 max-w-[390px] text-base leading-relaxed text-muted lg:text-[17px]">Podologia, manicure i pedicure z uwagą na Twoje potrzeby. Zadbaj o dłonie i stopy w spokojnej atmosferze i znajdź chwilę tylko dla siebie.</p>
        <BookingButton>Umów wizytę</BookingButton>
      </div>
      <div className="mx-[7%] mt-10 aspect-[4/3] overflow-hidden rounded-[28px] bg-[#57473a] bg-cover bg-[position:60%_center] sm:aspect-[16/8] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:mt-0 lg:aspect-auto lg:min-h-[600px] lg:rounded-none lg:bg-[position:65%_center]" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/studio.jpg)` }} role="img" aria-label="Dekoracyjna kompozycja akcesoriów do pielęgnacji dłoni" />
      <div className="px-[7%] pb-4 pt-6 lg:col-start-1 lg:row-start-2 lg:pb-[35px] lg:pl-[12.5%] lg:pr-[9%] lg:pt-12">
        <div className="grid w-full max-w-[440px] grid-cols-1 gap-4 rounded-[24px] bg-[#ebe6dc] p-5 min-[400px]:grid-cols-[auto_1fr] min-[400px]:gap-5 lg:gap-x-6">
          <div className="flex items-center gap-3 border-b border-[#d5cbb9] pb-4 min-[400px]:block min-[400px]:border-b-0 min-[400px]:border-r min-[400px]:pb-0 min-[400px]:pr-5 lg:pr-6">
            <p className="font-display text-[46px] leading-none tracking-[-0.06em] text-ink">03</p>
            <p className="text-sm leading-snug text-muted min-[400px]:mt-2">obszary pielęgnacji</p>
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="mb-2 text-xs font-bold tracking-[0.16em] text-[#806d4b]">CHWILA DLA CIEBIE</p>
            <p className="font-display text-[21px] italic leading-tight text-ink">Uważna pielęgnacja, piękne detale.</p>
            <a className="group mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted hover:text-ink" href="#o-nas"><span className="underline decoration-[#b9a681] underline-offset-4">Poznaj nasze studio</span><ArrowIcon className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

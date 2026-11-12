import { BookingButton } from './BookingButton';

export function Booking() {
  return (
    <section id="rezerwacja" className="bg-dark px-[7%] py-16 text-[#f7f3ec] lg:grid lg:grid-cols-[2fr_1fr] lg:gap-[60px] lg:px-[10%] lg:py-[140px]">
      <div>
        <p className="section-kicker mb-4 !text-[#c5ae82]">STUDIO CONCEPT</p>
        <h2 className="display-heading mb-8 text-[clamp(54px,6vw,86px)]">Twój czas.<br /><em className="text-[#c5ae82]">Nasza troska.</em></h2>
        <p className="mb-8 max-w-[440px] text-[#c8c1b5]">Zrób miejsce na chwilę dla siebie. Wybierz ulubiony zabieg i pozwól nam zadbać o Twoje dłonie i stopy.</p>
        <BookingButton light>Zarezerwuj wizytę</BookingButton>
      </div>
      <div className="mt-12 self-end text-[#e2dbd0] lg:mt-0">
        <p className="mb-4 text-[11px] font-bold tracking-[0.17em] text-[#b7a27b]">TWOJA PIERWSZA WIZYTA</p>
        <p className="mb-6 text-[19px]">Zacznijmy od Twoich potrzeb.</p>
        <p className="max-w-[300px] text-sm leading-relaxed text-[#c8c1b5]">Nie musisz wiedzieć wszystkiego przed spotkaniem. Opowiedz nam, czego potrzebujesz — pomożemy dobrać zabieg i podpowiemy, jak zadbać o efekt w domu.</p>
        <button type="button" aria-label="Zadzwoń do nas: +48 000 000 000" className="mt-8 flex min-h-14 flex-col items-start gap-1 text-left text-[#eee8dc] hover:text-white">
          <span className="font-display text-[30px] leading-tight">+48 000 000 000</span>
          <span className="inline-flex items-center gap-3 text-sm underline decoration-[#b7a27b] underline-offset-4">Zadzwoń do nas <span aria-hidden="true">↗</span></span>
        </button>
      </div>
    </section>
  );
}

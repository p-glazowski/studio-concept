import { reviews } from '../content';

export function Reviews() {
  return (
    <section id="opinie" className="bg-paper px-[7%] py-16 lg:px-[10%] lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <p className="section-kicker mb-4">SŁOWA NASZYCH KLIENTEK</p>
          <h2 className="section-heading">Wasze<br /><em className="text-accent">opinie.</em></h2>
        </div>
        <div>
          {reviews.map((review) => (
            <figure key={review.service} className="border-t border-[#d9d1c3] py-7 first:border-t-0 first:pt-0 last:pb-0 lg:py-8">
              <p className="mb-3 text-xs font-bold tracking-[0.14em] text-accent uppercase">{review.service}</p>
              <blockquote className="max-w-[660px] font-display text-[21px] leading-[1.4] lg:text-[28px] lg:leading-snug">„{review.quote}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3 text-sm text-muted"><span aria-hidden="true" className="h-px w-6 bg-gold" />{review.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

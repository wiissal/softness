import ReservationForm from "@/components/ReservationForm";
import SoftImage from "@/components/ui/SoftImage";
import { openingHours, contact, guidelines } from "@/lib/reservation";
import { images } from "@/lib/content";

export const metadata = {
  title: "Reserve a table — Softness",
  description:
    "Book a table at Softness in Agadir — lunch and dinner, every day but Sunday evening.",
};

const asideBlock = "border-t border-ink/10 pt-6";
const asideTitle = "label text-sage";
const linkClass = "transition-colors hover:text-olive";

export default function ReservationPage() {
  return (
    <main className="grain bg-cream">
      <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pb-24 lg:pt-28">        {/* ---------- Header ---------- */}
        <header className="max-w-2xl">
          <p className="label text-sage">Reservations</p>

          <h1 className="mt-5 font-display text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl">
            Reserve a <em className="text-olive">table.</em>
          </h1>

          <p className="mt-6 text-lg text-ink-soft">
            Tell us when you would like to come and we will call you back to confirm. For the same day,
            it is quickest to phone us.
          </p>
        </header>

        <div className="mt-2 grid gap-12 lg:grid-cols-12 lg:gap-12">
          {/* ---------- Form ---------- */}
          <div className="lg:col-span-7">
            <ReservationForm />
          </div>

          {/* ---------- Practical details ---------- */}
          <aside className="space-y-10 lg:col-span-4 lg:col-start-9 lg:pt-4">
            <div className="relative h-44 overflow-hidden rounded-[1.5rem] bg-sand">
              <SoftImage
                src={images.reservation}
                alt="A table set for guests at Softness"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </div>

            <div className={asideBlock}>
              <h2 className={asideTitle}>Opening hours</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {openingHours.map((entry) => (
                  <li key={entry.days}>
                    <p className="font-semibold">{entry.days}</p>
                    <p className="text-ink-soft">{entry.hours}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className={asideBlock}>
              <h2 className={asideTitle}>Find us</h2>
              <address className="mt-4 space-y-2 text-sm not-italic text-ink-soft">
                <p>{contact.address}</p>
                <p>
                  <a href={"tel:" + contact.phone.replace(/\s/g, "")} className={linkClass}>
                    {contact.phone}
                  </a>
                </p>
                <p>
                  <a href={"mailto:" + contact.email} className={linkClass}>
                    {contact.email}
                  </a>
                </p>
              </address>
            </div>

            <div className={asideBlock}>
              <h2 className={asideTitle}>Good to know</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                {guidelines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
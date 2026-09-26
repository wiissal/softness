import CourseNav from "@/components/CourseNav";
import Button from "@/components/ui/Button";
import { courses, currencyNote } from "@/lib/menu";
import SoftImage from "@/components/ui/SoftImage";

export const metadata = {
  title: "Menu — Softness",
  description:
    "Starters, mains, desserts and drinks — a seasonal menu made with simple ingredients and a little care.",
};

const sectionClass =
  "scroll-mt-28 border-t border-ink/10 py-14 first:border-t-0 lg:py-20";

const leaderClass =
  "h-px flex-1 translate-y-[-0.3rem] border-b border-dotted border-ink/25";
const cardClass = "relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-sand";

export default function MenuPage() {
  return (
    <main className="grain bg-cream">
      {/* ---------- Header ---------- */}
      <section className="mx-auto max-w-[1440px] px-5 pb-10 pt-32 sm:px-8 lg:px-12 lg:pb-14 lg:pt-36">
        <p className="label text-sage">Our menu</p>

        <h1 className="mt-5 max-w-2xl font-display text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl">
          A menu that changes with the <em className="text-olive">season.</em>
        </h1>

        <p className="mt-6 max-w-md text-ink-soft">
          Simple ingredients, cooked with care. Our kitchen follows the market,
          so a few dishes change as the year turns.
        </p>
      </section>

      <CourseNav courses={courses} />

      {/* ---------- Courses ---------- */}
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {courses.map((course) => (
          <section key={course.id} id={course.id} className={sectionClass}>
                        <header className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-3xl lg:text-4xl">{course.name}</h2>
              <p className="text-sm text-ink-soft">{course.note}</p>
            </header>

            <ul className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {course.items.map((item) => (
                <li key={item.name} className="group">
                  <div className={cardClass}>
                    <SoftImage
                      src={item.image}
                      alt={item.name}
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="transition-transform duration-[900ms] ease-soft group-hover:scale-[1.06]"
                    />
                  </div>

                  <div className="mt-4 flex items-baseline gap-3">
                    <h3 className="font-display text-xl">{item.name}</h3>
                    <span aria-hidden="true" className={leaderClass} />
                    <span className="font-display text-lg">{item.price}</span>
                  </div>

                  <p className="mt-1 text-sm text-ink-soft">{item.notes}</p>
                </li>
              ))}
            </ul>
            
          </section>
        ))}

        <p className="border-t border-ink/10 py-10 text-sm text-ink-soft">
          {currencyNote}
        </p>
      </div>

      {/* ---------- Closing CTA ---------- */}
      <section className="bg-ivory px-5 py-24 text-center sm:px-8 lg:px-12 lg:py-28">
        <h2 className="font-display text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-6xl">
          Your table is <em className="text-olive">waiting.</em>
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/#reserve">Reserve a Table</Button>
          <Button href="/" variant="outline">
            Back to Home
          </Button>
        </div>
      </section>
    </main>
  );
}

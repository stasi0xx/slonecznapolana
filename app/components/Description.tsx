export function Description() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl">
        <h2
          className="text-cream font-bold leading-[1.05] tracking-tight mb-16"
          style={{ fontSize: "clamp(2.4rem, 4.5vw, 5rem)" }}
        >
          Miejsce, gdzie{" "}
          <span
            className="inline-block w-28 h-11 rounded-full align-middle mx-3 bg-cover bg-center relative -top-1 opacity-90"
            style={{
              backgroundImage:
                "url(/images/rzepak-zoom.jpg)",
            }}
            aria-hidden="true"
          />
          {" "}czas zwalnia.
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <p className="text-sage text-lg leading-relaxed">
            Dom Wypoczynkowy Pod Orzechem w Chudzewie. Z dala od
            zgiełku miast, wśród ciszy i zieleni —
            miejsce stworzone dla tych, którzy szukają prawdziwego
            odpoczynku.
          </p>
          <p className="text-sage text-lg leading-relaxed">
            Każdy detal przemyślany. Od kominku, przy którym wieczory płyną
            powoli, po prywatną saunę, w której odpuszczasz napięcie całego
            roku. Idealny na eventy, urodziny i spotkania firmowe.
          </p>
        </div>

        <div className="mt-20 flex flex-wrap gap-10 text-sm border-t border-cream/15 pt-12">
          {[
            { value: "8–12", label: "Osób" },
            { value: "200 m²", label: "Powierzchnia" },
            { value: "30 m²", label: "Taras" },
            { value: "2 + kilka", label: "Miejsca parkingowe" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="text-amber font-bold"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                {stat.value}
              </p>
              <p className="text-sage mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-cream/15 py-16 px-8 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <p className="text-cream font-semibold text-xl tracking-tight mb-3">
            Pod Orzechem · Chudzewo
          </p>
          <p className="text-sage text-sm leading-relaxed mb-5">
            Dom wypoczynkowy dla grup 8–12 osób.
            Rezerwacje 7 dni w tygodniu.
          </p>
          <div className="flex flex-col gap-1">
            <a
              href="tel:+48500116667"
              className="text-amber text-sm hover:text-amber/75 transition-colors duration-200"
            >
              +48 500 116 667
            </a>
            <a
              href="tel:+48530921138"
              className="text-amber text-sm hover:text-amber/75 transition-colors duration-200"
            >
              +48 530 921 138
            </a>
            <a
              href="mailto:chudzewo@gmail.com"
              className="text-sage text-sm hover:text-cream transition-colors duration-200 mt-1"
            >
              chudzewo@gmail.com
            </a>
          </div>
        </div>

        <div className="flex gap-16 text-sm">
          <nav className="flex flex-col gap-3 text-sage" aria-label="Strona">
            <a href="#gallery" className="hover:text-cream transition-colors duration-200">
              Galeria
            </a>
            <a href="#amenities" className="hover:text-cream transition-colors duration-200">
              Udogodnienia
            </a>
            <a href="#reviews" className="hover:text-cream transition-colors duration-200">
              Opinie
            </a>
            <a href="#booking" className="hover:text-cream transition-colors duration-200">
              Rezerwacja
            </a>
          </nav>
          <nav className="flex flex-col gap-3 text-sage" aria-label="Prawne">
            <a href="#" className="hover:text-cream transition-colors duration-200">
              Regulamin
            </a>
            <a href="#" className="hover:text-cream transition-colors duration-200">
              Prywatność
            </a>
            <a href="#" className="hover:text-cream transition-colors duration-200">
              Kontakt
            </a>
          </nav>
        </div>
      </div>

      <div className="mt-14 pt-8 border-t border-cream/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-sage/45">
        <p>© 2026 Chudzewo. Wszelkie prawa zastrzeżone.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-sage/75 transition-colors duration-200">
            Facebook
          </a>
          <a href="#" className="hover:text-sage/75 transition-colors duration-200">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

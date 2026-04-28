import { property } from "@/app/config/property";

export function Footer() {
  const city = property.location.split(",")[0].trim();
  return (
    <footer className="border-t border-cream/15 py-16 px-8 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <p className="text-cream font-semibold text-xl tracking-tight mb-3">
            {property.name} · {city}
          </p>
          <p className="text-sage text-sm leading-relaxed mb-5">
            {property.copy.footerTagline}
          </p>
          <div className="flex flex-col gap-1">
            {property.contact.phones.map((phone, i) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className={`text-amber text-sm hover:text-amber/75 transition-colors duration-200${i === property.contact.phones.length - 1 ? "" : ""}`}
              >
                {phone}
              </a>
            ))}
            <a
              href={`mailto:${property.contact.email}`}
              className="text-sage text-sm hover:text-cream transition-colors duration-200 mt-1"
            >
              {property.contact.email}
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
        <p>{property.copy.copyright}</p>
        <div className="flex gap-5">
          <a href={property.contact.facebook} className="hover:text-sage/75 transition-colors duration-200">
            Facebook
          </a>
          <a href={property.contact.instagram} className="hover:text-sage/75 transition-colors duration-200">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

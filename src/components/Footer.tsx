import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-bg/60">
      <Container>
        <div className="grid gap-10 py-10 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-text">Jadid Global</div>
            <p className="mt-2 text-sm text-muted">
              Milliy ma’rifat va jadid merosini zamonaviy formatda taqdim etuvchi portal.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-text">Bo‘limlar</div>
            <ul className="mt-2 space-y-2 text-sm text-muted">
              <li>Maqolalar</li>
              <li>Kutubxona</li>
              <li>Mediateka</li>
              <li>Mutafakkirlar</li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-text">Aloqa</div>
            <p className="mt-2 text-sm text-muted">info@jadid.global</p>
            <p className="text-sm text-muted">+998 (xx) xxx-xx-xx</p>
          </div>
        </div>

        <div className="border-t border-border py-4 text-xs text-muted">
          © {new Date().getFullYear()} Jadid Global. Barcha huquqlar himoyalangan.
        </div>
      </Container>
    </footer>
  );
}

import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
  ],
  Company: [{ label: "About", href: "#about" }],
  Team: [
    { label: "Farhan — GitHub", href: "https://github.com/FARHAN2324J" },
    {
      label: "Amirhossein — GitHub",
      href: "https://github.com/amir-hossein13/",
    },
    {
      label: "amirhossein - LinkedIn",
      href: "https://www.linkedin.com/in/amirhossein-attarnia/",
    },
    {
      label: "Farhan - LinkedIn",
      href: "https://www.linkedin.com/in/farhan-fadaei",
    },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-1">
            <span className="text-lg font-bold text-text">Standup</span>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
              Async standups and project tracking that keeps your team in sync
              without the meetings.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-text">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted transition-colors hover:text-text"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-text"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Standup. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built for teams who ship without the standup meeting.
          </p>
        </div>
      </div>
    </footer>
  );
}

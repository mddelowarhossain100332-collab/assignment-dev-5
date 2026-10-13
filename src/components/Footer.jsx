import logo from './logo-text.png'
const groups = {
  Product: ["Technologies", "Stack Builder", "Compare Tools", "Roadmaps"],
  Company: ["About", "Projects", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socials = [
  { name: "GitHub", href: "https://github.com" },
  { name: "Twitter", href: "https://twitter.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#5e5d64] text-black/80">
      <div id="about" className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" />
          </div>
          <p className="mt-4 max-w-sm text-sm">
            curated Tools avcklakd kladsf a lkjsd ;lla fkjkla;;l akdf la;kl ...
          </p>
          <div className="mt-5 flex gap-4 text-sm">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="hover:text-white">
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(groups).map(([title, items]) => (
          <div key={title}>
            <h4 className="mb-3 font-semibold text-white">{title}</h4>
            <ul className="space-y-2 text-sm">
              {items.map((i) => (
                <li key={i}><a href="#" className="hover:text-white">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

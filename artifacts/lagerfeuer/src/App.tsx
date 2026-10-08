const navItems = ["Übersicht", "Gebiete", "Leveln", "Quests", "Items & Drops", "Bosse", "Berufe"];

const quickRoutes = [
  { title: "Ich level gerade", tone: "gold" },
  { title: "Ich suche ein Item", tone: "ember" },
  { title: "Ich brauche eine Quest", tone: "steel" },
  { title: "Wo droppt das?", tone: "copper" },
  { title: "Ich suche ein Gebiet", tone: "stone" },
  { title: "Ich will Gold verdienen", tone: "paper" },
];

const levelRoute = [
  "1–10",
  "10–20",
  "20–30",
  "30–40",
  "40–50",
  "50–60",
  "Endgame",
];

const notices = [
  { label: "Neues am Feuer", title: "Neue Wegweiser im Frostgraben", copy: "Empfohlene Quests und sichere Farmwege für den Einstieg in die erste Stufe." },
  { label: "Geprüfte Erkenntnis", title: "Echte Drop-Pfade", copy: "Mehrere Item-Lieferanten sind als verbindliche Route sichtbar gemacht." },
  { label: "Zielorientiert", title: "Nächster sinnvoller Schritt", copy: "Der Assistent zeigt dir, was du als Nächstes sinnvoll erledigen solltest." },
];

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">L</div>
          <div>
            <p className="eyebrow">WoW-Forever Field Guide</p>
            <h1 className="brand-name">Lagerfeuer</h1>
          </div>
        </div>

        <nav className="main-nav" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <a key={item} href="#" className="nav-link">
              {item}
            </a>
          ))}
        </nav>

        <div className="search-box" aria-label="Suche">
          <span className="search-label">Suche</span>
          <input type="search" placeholder="Quest, Item, Gebiet, Gegner…" aria-label="Suche im Feldhandbuch" />
        </div>
      </header>

      <main className="page">
        <section className="hero panel">
          <div className="hero-copy">
            <p className="eyebrow accent">Eintritt ins Lagerfeuer</p>
            <h2>Der nächste Weg durch Azeroth beginnt hier.</h2>
            <p className="lead">
              Orientierung, Quests, Items und sichere Pfade – kompakt, verständlich und ohne
              den Charakter des Abenteuers zu verlieren.
            </p>
            <div className="hero-actions">
              <button type="button" className="primary-button">Zum Levelpfad</button>
              <button type="button" className="secondary-button">Nach Item suchen</button>
            </div>
            <div className="hero-meta" aria-label="Statusinformationen">
              <span>Quellen geprüft</span>
              <span>Wegweiser aktiv</span>
              <span>Fanprojekt</span>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="panel-heading">
              <span className="eyebrow">Wegweiser des Tages</span>
              <span className="status-badge">Frisch</span>
            </div>
            <h3>Frostgraben • Level 18–24</h3>
            <ul>
              <li>Questkette mit sicherem Einstieg</li>
              <li>Item-Spur für frühe Klingen</li>
              <li>Empfohlener Farmweg</li>
            </ul>
            <div className="mini-route">
              <span>Quest</span>
              <span className="arrow">→</span>
              <span>Gebiet</span>
              <span className="arrow">→</span>
              <span>Drop</span>
            </div>
          </aside>
        </section>

        <section className="quick-journey">
          <div className="section-header">
            <p className="eyebrow">Schnellreise</p>
            <h3>Was möchtest du tun?</h3>
          </div>

          <div className="journey-grid">
            {quickRoutes.map((route) => (
              <button key={route.title} type="button" className={`journey-card ${route.tone}`}>
                {route.title}
              </button>
            ))}
          </div>
        </section>

        <section className="route-map panel">
          <div className="section-header">
            <p className="eyebrow">Weltkarte</p>
            <h3>Levelreise</h3>
          </div>

          <div className="level-track" aria-label="Levelbereiche">
            {levelRoute.map((level, index) => (
              <div key={level} className="level-node">
                <span className="node-index">{index + 1}</span>
                <span>{level}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="content-grid">
          <div className="panel notes-panel">
            <div className="section-header">
              <p className="eyebrow">Neu am Feuer</p>
              <h3>Aktuelle Wegweiser</h3>
            </div>

            <div className="notice-list">
              {notices.map((item) => (
                <article key={item.title} className="notice-item">
                  <span className="notice-tag">{item.label}</span>
                  <h4>{item.title}</h4>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="panel assistant-panel">
            <div className="section-header">
              <p className="eyebrow">Assistent</p>
              <h3>Dein nächster sinnvoller Weg</h3>
            </div>

            <div className="assistant-flow">
              <div className="flow-step">
                <span className="step-number">1</span>
                <div>
                  <strong>Abenteuer</strong>
                  <p>Frostgraben</p>
                </div>
              </div>
              <div className="flow-step">
                <span className="step-number">2</span>
                <div>
                  <strong>Quest</strong>
                  <p>Wegmarke der ersten Nacht</p>
                </div>
              </div>
              <div className="flow-step">
                <span className="step-number">3</span>
                <div>
                  <strong>Item</strong>
                  <p>Erste Klingen-Upgrade-Route</p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="trust-panel panel">
          <div className="section-header">
            <p className="eyebrow">Vertrauensbereich</p>
            <h3>Quellen, Status und Prüfstand</h3>
          </div>

          <div className="trust-grid">
            <div>
              <strong>Quellen</strong>
              <p>Prüfstand und Herkunft bleiben sichtbar, aber nicht dominant.</p>
            </div>
            <div>
              <strong>Status</strong>
              <p>Wegweiser, Einträge und Abgleichsstände werden nachvollziehbar dargestellt.</p>
            </div>
            <div>
              <strong>Fanprojekt</strong>
              <p>Lagerfeuer bleibt ein inoffizielles Fanprojekt ohne offizielle Blizzard-Assets.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

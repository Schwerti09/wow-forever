# AGENTS.md — Lagerfeuer WoW-Forever Field Guide

> Dieses Dokument ist die verbindliche Arbeitsanweisung für GitHub Copilot, Copilot Coding Agent und andere Coding-Agents, die im Repository arbeiten.
>
> **Wichtig:** Lagerfeuer soll nicht wie eine generische Website, ein SaaS-Dashboard, ein Blog oder ein modernes Vergleichsportal wirken. Es soll sich wie der Einstieg in ein eigenes Fantasy-Feldhandbuch für WoW-Forever anfühlen.

---

## 1. Mission

Baue **Lagerfeuer** als eine hochwertige, eigenständige, deutschsprachige Fan-Plattform für WoW-Forever.

Das Produkt verbindet:

- Datenbank
- Levelguide
- Questguide
- Item-/Drop-Datenbank
- Gebietsführer
- Boss-/Dungeon-Wissen
- Berufe und Gold
- Zielbasierte Navigation
- Quellenbewusste Fakten
- später Charakterplanung, Profile und weitere Companion-Funktionen

Das eigentliche Produkt ist jedoch nicht die Liste dieser Features.

### Das eigentliche Produktversprechen

Der Nutzer soll das Gefühl bekommen:

> **„Ich betrete hier eine kleine Welt. Ich weiß sofort, wo ich hinmuss, was wichtig ist und was ich als Nächstes tun kann.“**

Nicht:

> „Das ist eine hübsche Datenbank.“

Jede technische oder gestalterische Entscheidung muss diesem Gefühl dienen.

---

# 2. Nicht verhandelbare Produktprinzipien

## 2.1 Erlebnis vor Feature-Menge

Ein unfertiges Feature mit hervorragender Inszenierung ist wertvoller als zehn weitere langweilige Karten.

Nicht einfach:

- mehr Cards
- mehr Tabellen
- mehr Filter
- mehr Buttons

bauen.

Stattdessen:

- bessere Orientierung
- stärkere Atmosphäre
- klarere Informationshierarchie
- bessere Entdeckung
- sinnvolle Interaktionen
- nachvollziehbare Beziehungen zwischen Inhalten

## 2.2 Kein generischer SaaS-Look

Die Anwendung darf niemals wie eines der folgenden Produkte aussehen:

- SaaS Dashboard
- Startup Landingpage
- Stripe
- Linear
- Vercel
- moderne Admin-Oberfläche
- generisches Tailwind Template
- Standard Shadcn Demo
- AI-Chat-App
- gewöhnlicher Gaming-Blog

Das vorhandene UI-Kit darf technisch verwendet werden, aber **seine Standardoptik darf nicht die visuelle Identität bestimmen**.

## 2.3 Eigenständige Fantasy-Sprache

Die visuelle Sprache ist eine eigene Mischung aus:

- dunkler Fantasy
- altem Feldhandbuch
- Warcraft-III-artiger RTS-Menü-Dichte
- WoW-Classic-artiger Abenteuerstimmung
- Pergament, Metall, Holz, Stein, Gold, Feuer
- moderner Web-Usability

Dabei gilt:

**Inspiration ja. Kopie nein.**

Keine originalen Blizzard-Spieloberflächen nachbauen.
Keine Blizzard-Logos kopieren.
Keine offiziellen Blizzard-Schriften verwenden.
Keine geschützten Spielgrafiken aus fremden Quellen ungeprüft übernehmen.
Keine 1:1-Reproduktion von WoW-/Warcraft-UI.

Die Seite muss wie ein **eigenständiges Fanprojekt** aussehen.

---

# 3. Zielgruppe

Die Plattform muss sowohl Anfänger als auch erfahrene Spieler bedienen.

## Anfänger

Sie brauchen:

- Orientierung
- einfache nächste Schritte
- erklärende Texte
- Levelbereiche
- Gebietslogik
- klare Quest-/Item-Beziehungen

## Erfahrene Spieler

Sie brauchen:

- schnelle Suche
- kompakte Daten
- Drop-Informationen
- Quellen
- Beziehungen zwischen Entities
- effiziente Navigation
- wenig unnötige Klicks

## Veteranen

Sie brauchen:

- seltene Details
- optimierte Wege
- Farmmöglichkeiten
- Boss-/Dungeon-Zusammenhänge
- hochwertige Detailseiten
- belastbare Quellen

Die Benutzeroberfläche darf deshalb visuell reich sein, aber niemals funktional chaotisch.

---

# 4. Aktuelle Architektur respektieren

Das Repository verwendet aktuell unter anderem:

- pnpm Workspaces
- Node.js 24
- TypeScript 5.9
- React
- Vite im öffentlichen Lagerfeuer-Frontend
- Wouter für Routing
- TanStack Query
- Express 5 API
- PostgreSQL + Drizzle als Datenbasis
- Zod
- OpenAPI / Orval
- Lucide Icons

Wichtige Bereiche:

- `artifacts/lagerfeuer` — öffentliches Frontend
- `artifacts/api-server` — API
- `lib/api-spec` — OpenAPI-Vertrag
- `lib/api-client-react` — generierte Hooks
- `lib/api-zod` — generierte Validierung
- `lib/db` — Datenbank

### Harte Regeln

1. Bestehende Architektur nicht ohne Grund ersetzen.
2. Keine zweite parallele Frontend-Architektur einführen.
3. Keine unnötigen Framework-Wechsel.
4. Keine eigenen Mini-Frameworks bauen, wenn vorhandene Projektstruktur ausreicht.
5. Generierte API-Dateien nicht manuell hacken, wenn die Quelle geändert werden muss.
6. TypeScript strict halten.
7. Kein `any`, außer ein externer Typ zwingt dazu und die Ausnahme ist lokal begründet.
8. Datenvalidierung mit Zod verwenden, wenn Daten von außen kommen.
9. Bestehende Routing- und Query-Strukturen respektieren.
10. Funktionierende Features nicht aus optischen Gründen entfernen.

---

# 5. Arbeitsmodus für Copilot

## 5.1 Erst verstehen, dann bauen

Vor Änderungen:

1. relevante Dateien lesen
2. vorhandene Komponenten identifizieren
3. Datenmodell und API prüfen
4. bestehende CSS-Systematik prüfen
5. bestehende UX nicht versehentlich brechen
6. dann implementieren

Nicht direkt eine komplette neue Seite erfinden, ohne den bestehenden Code gelesen zu haben.

## 5.2 Nicht nur beschreiben

Wenn eine Aufgabe umsetzbar ist:

- nicht nur erklären
- nicht nur TODO-Kommentare schreiben
- nicht nur einen Architekturvorschlag liefern
- nicht nur Mockup-Code erzeugen

Sondern die Änderung tatsächlich implementieren.

## 5.3 Keine Fake-Fertigstellung

Keine Behauptung „fertig“, wenn:

- Dateien nur teilweise geändert wurden
- Routes fehlen
- die Anwendung nicht kompiliert
- wichtige Interaktionen nicht funktionieren
- Mobile kaputt ist
- Platzhalter sichtbar bleiben

## 5.4 Bestehende Funktionalität bewahren

Beim visuellen Umbau müssen besonders erhalten bleiben:

- Suche
- Navigation
- Countdown
- Assistant-Flow
- API-Anbindung
- Quellen-/Statusinformationen
- Accessibility
- Fehlerzustände
- Loading States

---

# 6. Visuelles North Star

## Das gewünschte Gefühl

Die Startseite soll wirken wie:

> **„Ich schlage ein altes, hochwertiges Fantasy-Feldhandbuch auf, das von Abenteurern gepflegt wird.“**

Sie soll gleichzeitig modern genug sein, damit:

- Navigation intuitiv bleibt
- Text lesbar ist
- Mobile funktioniert
- Suche schnell ist
- Accessibility funktioniert
- Interaktionen verständlich bleiben

---

# 7. Visuelle Identität

## 7.1 Farbwelt

Primäre Farbwelt:

- fast schwarzes Blau / Nachtblau
- tiefes Stahlblau
- dunkles Metall
- warmes Pergament
- gedämpftes Gold
- Kupfer
- Feuerrot
- Glutorange

Empfohlene funktionale Rollen:

### Hintergrund
Fast schwarz, leicht blau oder grau-braun.

### Surface
Tiefes Stahlblau / Metall / dunkles Holz.

### Primärakzent
Antikes Gold.

### Sekundärakzent
Kupfer / Glut.

### Warnung / Gefahr
Dunkles Rot.

### Quest / Wissen
Pergamentfarben.

### Seltenheit
Nicht pauschal alles gold machen. Seltenheit benötigt visuelle Abstufungen.

Wichtig:

**Gold ist eine Auszeichnung.**
Nicht jede Überschrift darf gold leuchten.

---

# 8. Texturen und Materialität

Materialien sollen digital simuliert werden können, ohne fremde geschützte Bilder zu benötigen.

Geeignete Effekte:

- feines Steinrauschen
- Metallverlauf
- Holzstruktur
- Pergamentkorn
- Rauch
- Glut
- dezente Kratzer
- Vignette
- Schatten
- innere Rahmen
- Gravuren
- Ornamentlinien

CSS-first bevorzugen.

Keine riesigen Bilddateien einsetzen, wenn derselbe Effekt sauber mit CSS erzeugbar ist.

---

# 9. Rahmen-System

Normale moderne Cards mit simplem `border-radius` sind NICHT die Standardlösung.

Bevorzugen:

- harte Ecken
- kleine Radien
- doppelte Rahmen
- innere Linien
- Corner-Ornaments
- Metallkanten
- abgeschrägte Flächen
- Bannerformen
- Siegel
- Tabs
- vertiefte Panels

Die wichtigsten Oberflächen sollen aussehen, als seien sie:

- aus Metall gefertigt
- in Stein eingelassen
- auf Pergament geschrieben
- an einem Brett befestigt

Nicht wie eine SaaS-Card.

---

# 10. Typografie

Die Typografie muss Hierarchie schaffen.

## Display

Für große Überschriften:

- charaktervolle Serif
- lokal verfügbare / freie Schrift
- alternativ elegante System-Serif

## UI

Für Navigation und Daten:

- klare Sans Serif
- hohe Lesbarkeit
- kompakte Informationsdichte

## Regel

Keine zehn Schriftgrößen.
Ein kleines, kontrolliertes System verwenden.

Bevorzugt:

- Eyebrow
- Display XL
- Display L
- Heading
- Subheading
- Body
- Label
- Microcopy

---

# 11. Keine Pill-Hölle

Vermeide übermäßige Pillenformen.

Nur verwenden für:

- Status
- Tags
- seltene Systemindikatoren
- kompakte Filter

Nicht verwenden für:

- jedes Menü
- jeden Button
- jede Card
- jede Navigation

Buttons dürfen wie Buttons aussehen.

---

# 12. Keine Card-Hölle

Die Website darf nicht aus 30 identischen Rechtecken bestehen.

Informationen benötigen unterschiedliche Formen:

- Banner
- Listen
- Tabellen
- Questrollen
- Item-Plaketten
- Karten
- Timeline
- Datenraster
- verbundene Knoten
- Split Panels
- Hero-Zonen
- Feature-Boards
- Kapiteltrenner
- Pergamentblätter

**Layout ist Teil des Informationsdesigns.**

---

# 13. Startseite — Sollbild

Die Homepage ist kein einfacher Hero plus Kartenraster.

Sie soll einen klaren Dramaturgie-Bogen besitzen.

## Zone A — Eintritt

Oben:

- Markenname Lagerfeuer
- Hauptnavigation
- Suche
- atmosphärische Welt
- starke Headline
- kurze Erklärung
- primärer Einstieg

Der Hero braucht einen echten visuellen Fokus.

Nicht einfach ein Farbverlauf.

Beispiele für zulässige eigene Elemente:

- Lagerfeuer
- Kompass
- Karte
- Banner
- Berge
- Ruinen-Silhouette
- Wegweiser
- Pergament
- animierte Glut
- Nebel

## Zone B — Schnellreise

Direkt darunter muss klar sein:

> Was möchtest du tun?

Zum Beispiel:

- Ich level gerade
- Ich suche ein Item
- Ich brauche eine Quest
- Wo droppt das?
- Was kommt als Nächstes?
- Ich suche ein Gebiet
- Ich brauche einen Dungeon
- Ich will Gold verdienen

Diese Navigation muss sich wie eine Abenteuer-Auswahl anfühlen.

## Zone C — Weltkarte / Levelreise

Eine visuell starke Übersicht der Levelbereiche.

Beispiel:

`1–10 → 10–20 → 20–30 → 30–40 → 40–50 → 50–60 → Endgame`

Nicht nur Zahlenkarten.

Die Reise soll wie eine Route aussehen.

## Zone D — Neu am Feuer

Aktuelle oder relevante Inhalte.

Nicht als Blogfeed im Standardformat.

Besser:

- Anschlagbrett
- Lagerfeuer-Meldungen
- Entdeckungen
- neue Wegweiser
- geprüfte Erkenntnisse

## Zone E — Assistent

Der Charakter-/Ziel-Assistent bleibt funktional.

Aber visuell muss er wie ein Feldberater wirken.

Fragen dürfen sich wie Entscheidungen eines Abenteurers anfühlen.

## Zone F — Vertrauensbereich

Quellen, Prüfstand, redaktioneller Status und Fanprojekt-Hinweis sichtbar, aber nicht dominant.

---

# 14. Hero-Regeln

Ein Hero darf nicht einfach aus:

- Gradient
- Headline
- Button

bestehen.

Er braucht:

1. einen Blickfang
2. Tiefe
3. Atmosphäre
4. visuelle Geschichte
5. Interaktionshinweis

### Der Hero muss auf Desktop innerhalb von 3 Sekunden eine visuelle Hierarchie erkennen lassen.

Priorität:

1. Welt / Atmosphäre
2. Lagerfeuer / Marke
3. Hauptversprechen
4. Einstieg
5. Suche / Navigation

---

# 15. Interaktive Atmosphäre

Animationen sparsam, aber bewusst einsetzen.

Geeignet:

- Feuerflackern
- Funken
- leichter Nebel
- Glimmen
- Schattenspiel
- Hover auf Metall
- langsame Parallax-Bewegung
- Pergament-Reveal
- Tab-Übergänge
- dezentes Pulsieren wichtiger Marker

Nicht geeignet:

- Dauer-Animation überall
- wilde Partikel
- aggressive Motion
- Animation als Selbstzweck

### Performance-Regel

Animationen müssen:

- CSS-first sein, wenn möglich
- transform/opacity bevorzugen
- keine unnötigen Layout-Reflows erzeugen
- `prefers-reduced-motion` respektieren

---

# 16. Suche

Die Suche ist eine Kernfunktion, kein kleines Input-Feld.

Sie soll visuell wie ein:

> **Azeroth-Kompendium / Feldbuch-Index**

wirken.

Suchbare Typen:

- Quest
- Item
- NPC
- Gegner
- Gebiet
- Dungeon
- Boss
- Beruf
- Guide

Ergebnisse müssen Typ, Relevanz und relevante Beziehungen verständlich zeigen.

---

# 17. Item-Seiten

Ein Item soll nicht nur Daten zeigen.

Es soll erklären:

- Was ist es?
- Für wen ist es interessant?
- Wo kommt es her?
- Wer droppt es?
- Wo ist dieser Gegner?
- Brauche ich vorher eine Quest?
- Welches Gebiet ist betroffen?
- Wie selten ist es?
- Was ist eine Alternative?

### Item Hero

Links:

- großes eigenes Icon / Platzhalter, falls kein erlaubtes Asset vorhanden

Mitte:

- Name
- Typ
- Level
- Seltenheit
- kurze Einordnung

Rechts / darunter:

- Dropquelle
- Gebiet
- Questbezug
- Dungeon

Danach:

> **Wo bekomme ich dieses Item?**

als visuelle Beziehungskette.

Beispiel:

`Quest → Gegner → Gebiet → Dungeon → Drop`

---

# 18. Quest-Seiten

Eine Questseite muss sich wie eine Questakte lesen.

Enthalten können sein:

- Questtitel
- Questgeber
- Gebiet
- empfohlener Bereich
- Ziele
- Wegbeschreibung
- Voraussetzungen
- Folgequests
- Belohnungen
- relevante Items
- relevante Gegner
- Quellen

Eine Schrittfolge darf wie ein Abenteuerpfad gestaltet sein:

`ANNEHMEN → REISE → ZIEL → KONFLIKT → BELOHNUNG`

---

# 19. Gebiet-Seiten

Gebiete sind zentrale Orientierungsseiten.

Eine Gebietseite soll Beziehungen darstellen zwischen:

- Levelbereich
- Quests
- NPCs
- Gegnern
- Items
- Dungeons
- Ressourcen
- Goldmöglichkeiten

Nicht einfach:

> Gebiet + 12 Cards.

Stattdessen eine echte Gebietskarte / Gebietsdossier-Idee.

---

# 20. Datenbeziehungen visualisieren

Die Plattform soll langfristig wie ein Wissensnetz funktionieren.

Beziehungen:

`Gebiet`
`↕`
`NPC / Gegner`
`↕`
`Quest`
`↕`
`Item`
`↕`
`Dungeon`

Wenn Beziehungen vorhanden sind, sollten sie nutzbar und klickbar sein.

Das ist ein Kernbestandteil der Identität von Lagerfeuer.

---

# 21. Quellen & Fakten

Lagerfeuer ist quellenbewusst.

Öffentliche Spielfakten sollen nach Möglichkeit enthalten:

- Status
- Quellennamen
- Prüfdatum
- Build / Version

### Harte Regel

**Keine Source-URL erfinden.**

Wenn nur ein Quellennamen bekannt ist:

- `sourceUrl` leer lassen.

Keine URLs raten.

Drittanbieter-Meldungen sind nur Recherchehinweise.
Sie dürfen erst nach Prüfung mit einer zulässigen Primärquelle als Fakt veröffentlicht werden.

---

# 22. Fakten vs. UX-Ideen

Der Lagerfeuer-Master-Guide ist die Produkt- und Faktenrichtlinie.

Andere Chat-/Brainstorming-Texte dienen nur als:

- UX-Ideen
- Feature-Ideen
- Inspirationsquelle

Sie dürfen nicht ungeprüft als Faktenquelle behandelt werden.

---

# 23. WoW-Forever-Startzeit und widersprüchliche Fakten

Die vorhandene Produktdokumentation enthält eine bekannte Inkonsistenz bei Launch-Zeitangaben.

15:00 PT am 4.11.2026 entsprechen 01:00 CET am 5.11.2026, nicht 00:00 CET.

Bis die Quelle eindeutig geklärt ist:

- Widerspruch sichtbar halten
- keine scheinbare Sicherheit erzeugen
- keine widersprüchlichen Countdown-Daten als harte Wahrheit ausgeben

---

# 24. Copyright / Marken / Fanprojekt

Lagerfeuer muss klar als Fanprojekt erkennbar sein.

Pflicht-Disclaimer:

> Lagerfeuer ist ein inoffizielles Fanprojekt und steht in keiner Verbindung zu Blizzard Entertainment. World of Warcraft® und Blizzard Entertainment® sind Marken oder eingetragene Marken von Blizzard Entertainment, Inc.

### Nicht verwenden

- Blizzard-Logos
- offizielle Blizzard-Schriften
- unlizenzierte offizielle UI-Assets
- kopierte Spiel-Screenshots, wenn deren Nutzung nicht geklärt ist
- 1:1 nachgebaute Spielmenüs

### Verwenden

- eigene CSS-Ornamente
- eigene Layouts
- freie/lokale Schriften
- eigene SVG-Symbole
- eigene atmosphärische Illustrationen
- eigene Icons
- generische Fantasy-Motive

---

# 25. Icons

Lucide darf für funktionale UI verwendet werden.

Aber:

**Lucide allein darf nicht die visuelle Sprache der gesamten Seite bilden.**

Für wichtige Fantasy-Kontexte bevorzugen:

- eigene CSS-Symbole
- eigene SVGs
- einfache gezeichnete Embleme
- geometrische Heraldik
- Material-Ornamente

Keine Standard-Icon-Wand aus 40 verschiedenen Lucide-Icons.

---

# 26. Komponentenstrategie

Wichtige wiederverwendbare Komponenten sollten entstehen, z. B.:

- `FantasyPanel`
- `OrnateFrame`
- `QuestPanel`
- `ItemBadge`
- `ItemDisplay`
- `DropSource`
- `EntityLink`
- `QuestStep`
- `RoutePath`
- `WorldNotice`
- `CampfireNotice`
- `FieldGuideHeader`
- `SectionBanner`
- `FantasyButton`
- `MetalTab`
- `ParchmentPanel`
- `RarityFrame`
- `SourceStamp`
- `StatusSeal`

Komponenten nur erstellen, wenn sie Wiederverwendung oder klare visuelle Verantwortung schaffen.

---

# 27. Design Tokens

Globale Design-Tokens zentral halten.

Mindestens definieren:

- Backgrounds
- Surfaces
- Metals
- Gold
- Copper
- Fire
- Paper
- Text
- Muted text
- Borders
- Shadows
- Inner shadows
- Radii
- Spacing
- Typography
- Animation timings

Nicht jeden Wert lokal neu erfinden.

---

# 28. Layout

## Desktop

Die Seite darf groß wirken.

Max-width nicht unnötig eng setzen.

Aber:

- keine riesigen leeren Flächen
- keine endlosen 3-Spalten-SaaS-Grids
- visuelle Dichte bewusst steuern

## Tablet

Navigation und Karten reorganisieren.

## Mobile

Mobile ist kein nachträgliches Schrumpfen des Desktop-Layouts.

Die mobile Version benötigt eigene Informationsprioritäten.

Zum Beispiel:

- Suche oben
- schnelle Kategorien
- komprimierter Hero
- horizontale Route
- gestapelte Datenblöcke
- gut erreichbare Buttons

---

# 29. Accessibility

Fantasy-Design darf Accessibility nicht beschädigen.

Pflicht:

- semantische HTML-Elemente
- sichtbare Focus States
- ausreichender Kontrast
- Labels
- `aria-*` nur sinnvoll einsetzen
- Tastaturbedienung
- reduzierte Motion respektieren
- keine Information nur über Farbe kommunizieren

---

# 30. Loading States

Keine generischen grauen Skeleton-Kästen als einzige Lösung.

Loading States können atmosphärisch sein:

- glimmender Rahmen
- pulsierender Runenmarker
- „Das Feldhandbuch wird geöffnet …“

Aber Loading bleibt klar und darf nicht wie Werbung wirken.

---

# 31. Error States

Fehler dürfen nicht nach Entwickler-Konsole aussehen.

Beispiel:

> **Der Wegweiser ist gerade nicht erreichbar.**
> Versuch es erneut oder kehre zum Lagerfeuer zurück.

Mit klarer Aktion:

- erneut laden
- zurück
- suchen

Technische Details nur dort zeigen, wo sie dem Debugging dienen.

---

# 32. Empty States

Ein Empty State soll erklären, was fehlt.

Nicht:

> No data.

Sondern:

> **Hier wurde noch kein Wegweiser hinterlegt.**
> Sobald die Fakten geprüft sind, erscheint der Eintrag hier.

---

# 33. UX-Schreibstil

Deutsch.

Ton:

- souverän
- leicht mystisch
- hilfreich
- knapp
- nicht albern
- nicht künstlich episch

Nicht jeden Button „Betrete das Reich des Schicksals“ nennen.

Fantasy entsteht primär durch:

- Gestaltung
- Struktur
- Bildsprache
- Materialität
- kleine sprachliche Akzente

Nicht durch übertriebene Rollenspieltexte.

---

# 34. Navigation

Die Hauptnavigation soll die Welt des Guides abbilden.

Primäre Bereiche:

- Übersicht
- Gebiete
- Leveln
- Quests
- Items & Drops
- Bosse / Dungeons
- Berufe & Gold
- Suche

Weitere Bereiche nach Datenlage ergänzen.

Navigation darf nicht überladen sein.

---

# 35. Home-Assistant

Der vorhandene Ziel-/Charakter-Assistent bleibt bestehen.

Er soll nicht wie ein Survey aussehen.

Besser:

- einzelne Frage im Fokus
- Fortschrittsanzeige als Reise
- Auswahlkarten wie Wegweiser
- Ergebnis als konkreter nächster Schritt

Das Ergebnis muss actionable sein.

Nicht nur:

> „Du bist eher Veteran.“

Sondern:

> „Dein nächster sinnvoller Weg: Bereich X → Quest Y → Item Z.“

Wenn die Daten noch nicht ausreichen, muss das offen gesagt werden.

Keine erfundenen Empfehlungen.

---

# 36. Search Intent statt nur Keywords

Wenn jemand sucht:

- „Schwert“
- „wo droppt X“
- „level 30“
- „gute items krieger“
- „schattenwald quest“

soll die UI möglichst den nächsten sinnvollen Schritt anbieten.

Beispiel:

`Schattenklinge`

→ Item

→ Dropquelle

→ Gegner

→ Gebiet

→ benötigte Quest

→ ähnliche Items

Die Suche ist ein Navigator, kein simples Filterfeld.

---

# 37. SEO-Grundprinzipien

Jede wichtige Entity soll langfristig eine eindeutige URL und indexierbare Struktur erhalten.

Beispiele:

- `/gebiete/...`
- `/quests/...`
- `/items/...`
- `/bosse/...`
- `/dungeons/...`
- `/guides/...`

Nicht unnötig alles unter `/suche?q=` verstecken.

Search bleibt wichtig, aber SEO-relevante Inhalte brauchen echte Seiten.

---

# 38. Structured Data

Wo sinnvoll:

- BreadcrumbList
- Article
- ItemList
- FAQPage, wenn echte FAQs vorhanden sind
- WebSite
- Organization

Keine strukturierten Daten erzeugen, deren Inhalte auf der Seite nicht tatsächlich vorhanden sind.

---

# 39. Performance

Performance ist Teil des Designs.

Vermeiden:

- riesige Hero-Bilder ohne Grund
- unnötige Bibliotheken
- unnötige Animationen
- Render-Schleifen
- schwere Bilder im First View
- riesige Inline-SVGs ohne Mehrwert

Bevorzugen:

- CSS-Effekte
- optimierte Bilder
- lazy loading
- code splitting, wo sinnvoll
- kleine Komponenten
- stabile Query-States

---

# 40. Keine „Fake-Artworks“ aus CSS, wenn ein Element wichtig ist

CSS darf Atmosphäre bauen.

Für einen zentralen Hero darf jedoch nicht alles wie zufällige geometrische Formen aussehen.

Wenn kein erlaubtes Artwork verfügbar ist:

- bewusst minimalistische eigene Illustration
- Silhouette
- typografische Komposition
- Kompass
- Karte
- Feuer
- Ornament

Nicht:

> 8 zufällige Kreise + 4 Glow-Blur + Gradient

und das als „Fantasy-Art“ verkaufen.

---

# 41. Visuelle Prioritäten

Wenn Zeit knapp ist, in dieser Reihenfolge optimieren:

1. Hero
2. Header / Navigation
3. Schnellzugriff
4. Hauptdatenansicht
5. Detailseite
6. Suchergebnisse
7. Sekundäre Inhalte
8. Footer

Nicht 40 Minuten an Footer-Spacing arbeiten, während der Hero wie ein Template aussieht.

---

# 42. Definition of Wow

Eine Seite gilt erst dann als visuell gelungen, wenn folgende Fragen mit „Ja“ beantwortet werden:

### Sofortwirkung
- Fühlt sich die Seite innerhalb von 3 Sekunden nach Fantasy an?
- Ist Lagerfeuer als eigene Marke erkennbar?
- Gibt es einen starken visuellen Fokus?

### Differenzierung
- Würde die Seite ohne Logo noch wie Lagerfeuer aussehen?
- Könnte man sie von einer generischen Gaming-Seite unterscheiden?
- Gibt es Materialität statt nur Farben?

### Informationsdesign
- Ist sofort klar, was ich tun kann?
- Verstehe ich den nächsten sinnvollen Schritt?
- Sind Beziehungen zwischen Daten erkennbar?

### Interaktion
- Reagieren wichtige Elemente spürbar?
- Fühlen sich Hover/Focus-Zustände hochwertig an?
- Gibt es mindestens einen kleinen „Wow“-Moment?

### Technik
- Typecheck erfolgreich
- Build erfolgreich
- Mobile brauchbar
- Accessibility nicht verschlechtert
- keine Fake-Daten
- keine kaputten Links

Wenn mehrere Antworten „Nein“ sind, ist die Arbeit nicht fertig.

---

# 43. Verbindlicher visueller Abnahmetest

Nach größeren UI-Änderungen muss der Agent den Code gedanklich bzw. anhand des laufenden Frontends gegen folgende Checkliste prüfen:

## Viewport: Desktop

- Header wirkt wie Fantasy-UI
- Hero besitzt Tiefe
- keine SaaS-Pills
- kein Kartenfriedhof
- wichtige CTA sichtbar
- Materialität vorhanden
- gute typografische Hierarchie

## Viewport: Tablet

- keine überlaufenden Menüs
- keine abgeschnittenen Panels
- klare Priorität

## Viewport: Mobile

- Hero nicht erdrückend
- Suche gut erreichbar
- Navigation nutzbar
- Tabellen/Listen lesbar
- Buttons nicht zu klein

---

# 44. Arbeitsweise beim visuellen Redesign

Wenn der Nutzer sagt:

> „Die Seite sieht nicht nach WOW aus.“

darf der Agent NICHT nur:

- Farben ändern
- Border-Radius ändern
- mehr Schatten hinzufügen
- Font größer machen

Stattdessen muss er prüfen:

1. Ist die Informationshierarchie richtig?
2. Ist die visuelle Komposition stark genug?
3. Gibt es Materialität?
4. Gibt es einen klaren Hero-Fokus?
5. Wirken Navigation und Panels wie eine Fantasy-Welt?
6. Gibt es zu viele Standard-Cards?
7. Gibt es zu viele generische UI-Komponenten?
8. Fehlt visuelles Storytelling?
9. Fehlt Bewegung?
10. Fehlen eigenständige Gestaltungselemente?

Dann strukturell verbessern.

---

# 45. Keine kosmetischen Mini-Patches

Wenn das Grundlayout langweilig ist, nicht 20 kleine CSS-Patches hinzufügen.

Ein besserer Umbau ist erlaubt.

Beispiel:

SCHLECHT:

```text
Card + border + shadow + hover + radius
Card + border + shadow + hover + radius
Card + border + shadow + hover + radius
```

BESSER:

```text
Fantasy World Entry
        ↓
Adventure Routes
        ↓
Knowledge Board
        ↓
Quest / Item Discovery
        ↓
Next Step
```

---

# 46. Daten zuerst, dann Darstellung

Keine UI bauen, die mehr Fakten behauptet als die Datenbasis liefern kann.

Bei fehlenden Fakten:

- neutral bleiben
- Status anzeigen
- auf „noch nicht geprüft“ hinweisen
- keine erfundenen Dropchancen
- keine erfundenen NPCs
- keine erfundenen Questverbindungen

---

# 47. Teststrategie

Nach Änderungen mindestens ausführen, soweit verfügbar:

```bash
pnpm run typecheck
pnpm run build
```

Bei Frontendänderungen zusätzlich prüfen:

```bash
pnpm --filter @workspace/lagerfeuer run dev
```

und die relevanten Routen manuell bzw. mit vorhandenen Tests prüfen.

---

# 48. Vor jeder Abgabe

Kontrolliere:

- TypeScript fehlerfrei
- Build fehlerfrei
- keine ungenutzten Imports
- keine kaputten Routes
- keine sichtbaren Debug-Ausgaben
- keine Platzhalter wie `Lorem ipsum`
- keine Fake-Statistiken
- keine erfundenen Quellen
- keine zufälligen externen Assets
- kein neues UI-Framework ohne Notwendigkeit
- Mobile berücksichtigt
- Reduced Motion berücksichtigt
- Accessibility erhalten

---

# 49. Was NICHT automatisch gemacht werden darf

Nicht eigenmächtig:

- Backend ersetzen
- Datenbank neu entwerfen
- API-Contract brechen
- OpenAPI-Code umgehen
- Abhängigkeiten massenhaft aktualisieren
- sämtliche Komponenten auf eine andere Library migrieren
- die komplette Projektstruktur verschieben
- echte Fakten erfinden
- Marken-Assets nachbauen

Bei einem reinen UI-Problem zuerst im Frontend lösen.

---

# 50. Progressive Enhancement

Funktionale Basis zuerst sicherstellen.

Danach visuelle Tiefe hinzufügen.

Beispiel:

1. Link funktioniert.
2. Layout funktioniert.
3. Daten werden korrekt angezeigt.
4. Interaction funktioniert.
5. Ornament / Animation / Materialität hinzufügen.
6. Mobile optimieren.
7. Performance prüfen.

---

# 51. Architektur für spätere Erweiterungen

Die jetzige Plattform soll später folgende Bereiche ermöglichen:

- echte Entity-Seiten
- Character Planner
- Profile
- gespeicherte Guides
- persönliche Fortschritte
- Favoriten
- Wunschlisten
- personalisierte Wege
- Discord-Begleitung
- bessere Datenbeziehungen

Darum UI-Komponenten und Datenmodelle nicht unnötig hart auf eine einzige Startseite zuschneiden.

---

# 52. Langfristige Produktvision

Lagerfeuer soll sich langfristig wie ein digitaler Begleiter für das Spiel anfühlen.

Nicht:

> „Ich muss googeln, was als Nächstes kommt.“

Sondern:

> „Ich schaue kurz bei Lagerfeuer nach.“

Das ist das Ziel jeder Produktentscheidung.

---

# 53. Priorisierte Roadmap für visuelle Arbeit

Wenn mehrere Aufgaben gleichzeitig offen sind:

### P0 — Sofort

- Hero neu inszenieren
- Header hochwertiger machen
- Navigation klarer machen
- Standard-SaaS-Optik entfernen
- echte Fantasy-Materialität
- Startseite dramaturgisch verbessern

### P1 — Danach

- Schnellreise / Zielauswahl
- Levelroute
- starke Suchergebnisse
- Quest-/Item-Visualisierung
- Bereichsseiten

### P2

- echte Entity-Seiten
- Beziehungsgraphen
- Gebietsdossiers
- verbesserte Assistant-Ergebnisse

### P3

- Profile
- Personalisierung
- gespeicherte Wege
- Fortschritt
- weitere Companion-Funktionen

---

# 54. Copilot-Antwortverhalten

Wenn eine Entwicklungsaufgabe abgeschlossen ist, beschreibe knapp:

1. Was geändert wurde
2. Welche Dateien wesentlich betroffen sind
3. Welche Tests ausgeführt wurden
4. Welche offenen Punkte verbleiben

Keine langen Marketingtexte.

---

# 55. Master-Regel

Wenn nur eine Regel aus dieser Datei behalten werden dürfte, dann diese:

> **Lagerfeuer ist keine Datenbank mit Fantasy-Farben. Lagerfeuer ist ein Fantasy-Feldhandbuch mit einer leistungsfähigen Datenbank darunter.**

Das Frontend muss diese Reihenfolge widerspiegeln:

**Welt → Orientierung → Entdeckung → Fakten → nächster Schritt.**

Nicht:

**Header → Hero → Cards → Footer.**

---

# 56. Finaler Qualitätsstandard

Bevor du eine größere Änderung als abgeschlossen markierst, frage dich:

> Würde ein WoW-Spieler diese Seite als besonderes Fanprojekt erkennen, wenn das Logo entfernt würde?

Wenn die Antwort „nein“ ist:

**weiterbauen.**

Wenn die Antwort „ja, aber die Nutzung ist kompliziert“ ist:

**UX verbessern.**

Wenn die Antwort „ja, und ich weiß sofort, wo ich hinmuss“ ist:

**dann ist Lagerfeuer auf dem richtigen Weg.**

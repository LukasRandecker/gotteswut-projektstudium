# CLAUDE.md — Projektstudium „Gotteswut" (OwnCMS)

## Was ist das
Präsentations- und Dokumentationsseite für das Projektstudium „Gotteswut" (Brettspiel-Entwicklung): Landing, Team, Kontakt und eine mehrstufige Projektdokumentation mit Bildern und Videos. Die Inhalte pflegt Lukas selbst über JS-Datenstrukturen — daher „OwnCMS".

## Qualitätsstufe
Portfolio

## Stack
- Framework: React 19 + Vite 7, Routing über react-router-dom 7 mit `createHashRouter`
- Sprache: JavaScript (JSX) — siehe „Bewusste Entscheidungen"
- Styling: Tailwind 4 über `@tailwindcss/vite`
- Datenbank: keine — Inhalte liegen als JS-Objekte in `src/content/`
- Auth: keiner
- Besonderheiten: `@tsparticles/react` + `/slim` für den animierten Hintergrund, `sharp` für die Bildoptimierung im Build
- Hosting: statisch. `dist/` ist **nicht** im Repo (siehe Baustellen) — Deploy-Weg noch offen
- Node-Version: nicht festgelegt

## Befehle
```
npm run dev             # lokal starten
npm run build           # ACHTUNG: ruft optimize:images auf — siehe Baustellen
npm run preview
npm run lint            # ESLint
npm run optimize:images # Bilder nach WebP konvertieren (löscht Originale!)
```
Es gibt weder `typecheck` noch `test`.

## Struktur
- **Die Inhalte sind Daten, nicht Markup.** `src/content/Subpages_content.js` und `Documentation_summary_content.js` enthalten pro Unterseite Titel, Absätze und eine Liste von Elementen (`{ type: "image" | "video" | ... , src, aspect }`). Die Seiten unter `src/pages/` rendern das nur.
- `Documentation_Content.jsx` hängt an der Route `dokumentation/:subpage` und schlägt den passenden Schlüssel im Content-Objekt nach. Ein neuer Schlüssel = eine neue Unterseite, ohne neue Datei.
- Die `ScrollSection*`-Komponenten sind die Renderer für die Content-Typen. Wer einen neuen Typ einführt, ändert dort.
- Der Kommentarblock oben in `Subpages_content.js` ist die Bedienungsanleitung des CMS — vor Änderungen am Content-Format lesen.
- Schriften liegen in `src/font/` (Krub, Chelsea Market), Medien in `public/images/` und `src/assets/`.

## Projektregeln
- **Die Seite ist inhaltlich und gestalterisch fertig.** Auftrag ist *prüfen und berichten*, nicht umbauen. Auch offensichtliche Verbesserungen erst nach ausdrücklicher Freigabe vorschlagen, nicht einfach umsetzen.
- **Inhalte ausschließlich in `src/content/`.** Texte, Bildpfade und Reihenfolgen stehen nie fest in Komponenten — das ist der ganze Sinn des eigenen CMS.

## Bewusste Entscheidungen
- **`createHashRouter` statt `createBrowserRouter`.** Hash-Routing läuft auf jedem Static-Hosting ohne Rewrite-Regeln. Sieht nach Altlast aus, ist aber der Grund, warum Deep-Links auf Unterseiten überhaupt funktionieren.
- **Inhalte als JS-Objekte statt echtem CMS.** Kein Headless-CMS, keine Datenbank, keine laufenden Kosten — Inhalte sind versionierbarer Code.
- **`@tsparticles` für den Hintergrund.** Bewusst eine Bibliothek statt Eigenbau; die Partikel-Engine selbst zu schreiben lohnt hier nicht.
- **Die Videoformate bleiben, wie sie sind** (Entscheidung Lukas, 14.08.2026). Sachlicher Stand dazu: `Blender_Flut.mkv` und `Blender_Winter.mkv` werden von keinem Browser abgespielt, `.mov` zuverlässig nur in Safari. Das ist bekannt und akzeptiert — nicht ungefragt konvertieren.
- **JavaScript statt TypeScript.** Entscheidung für dieses Projekt, nicht für neue: **jedes neue Projekt startet weiter in TypeScript ab der ersten Datei.**

## Bekannte Baustellen
- [ ] `dist/` wurde aus der Git-Nachverfolgung entfernt (14.08.2026, Grund: 60-MB-Videodatei im Build löste eine GitHub-Warnung aus). Ein Deploy-Weg ohne versionierten Build-Ordner ist noch offen — z. B. Deploy-Pipeline (GitHub Actions → GitHub Pages/Vercel) statt manuellem `dist`-Push
- [ ] `scripts/optimize-images.js` löscht mit `fs.unlinkSync` die Originalbilder — und hängt an `npm run build`. Ein versehentlicher Build zerstört Quelldateien unumkehrbar. Entweder Originale behalten oder das Skript aus dem Build-Schritt lösen
- [ ] `index.html` hat `lang="en"`, muss `lang="de"` sein (DoD 4)
- [ ] `README.md` ist leer (DoD 9)
- [ ] Vollständige DoD-Prüfung steht noch aus — bis dahin ist „Portfolio" ein Anspruch, kein Nachweis

## Nicht anfassen
- **Aktuell die ganze Seite.** Lukas ist mit dem Stand zufrieden. Änderungen nur auf ausdrückliche Ansage.
- Dauerhaft tabu ohne Rückfrage: `public/images/`, `src/assets/` — kein Aufräumen, kein Umbenennen, kein Neukomprimieren. An diesen Pfaden hängt der gesamte Content.

## Zuletzt geprüft
- Lighthouse Mobile: nicht geprüft
- Tastaturbedienung: nicht geprüft
- Responsive 320–2560: nicht geprüft

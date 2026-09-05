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
- Hosting: **Cloudflare Pages**, statisch. Build command `npm run build`, Output directory `dist`,
  Framework preset None. **Kein `_redirects`** — Hash-Routing braucht keine SPA-Fallback-Regel.
  Zieladresse `gotteswut.lukasrandecker.de`
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
- **Alle Videos liegen als H.264-`.mp4` vor** (Entscheidung Lukas, 05.09.2026 — sie **ersetzt** die
  Entscheidung vom 14.08.2026, die Formate zu belassen). Die alte Entscheidung galt für eine Seite,
  die nur lokal lief. Öffentlich unter `gotteswut.lukasrandecker.de` hätte sie bedeutet: `.mkv`
  spielt bei keinem Besucher, `.mov` zuverlässig nur in Safari — für die meisten wären das schwarze
  Flächen. Dazu überschritten drei Dateien das 25-MiB-Limit von Cloudflare Pages.
  Umgewandelt am 05.09.2026 mit
  `ffmpeg -c:v libx264 -crf 24 -preset slow -c:a aac -b:a 128k -movflags +faststart`,
  bewusst **ohne** Skalierung, weil alle Quellen bereits bei 1080p oder darunter lagen.
  Ergebnis: 187 MB → 38 MB, Laufzeiten und Tonspuren unverändert.
  **Neue Videos gehören ab jetzt im selben Format ins Repo — kein `.mov`, kein `.mkv`.**
- **`Intro.mp4` liegt nur noch einmal, in `public/images/`.** Vorher lag dieselbe Datei doppelt:
  `src/assets/Intro.mov` für die Landingpage, `public/images/Intro.mov` für die Doku-Unterseite,
  je 19,6 MB. `Landing.jsx` referenziert sie jetzt wie jedes andere Medium über den Pfad
  `"../../images/Intro.mp4"` statt über einen Vite-Import.
- **JavaScript statt TypeScript.** Entscheidung für dieses Projekt, nicht für neue: **jedes neue Projekt startet weiter in TypeScript ab der ersten Datei.**

## Bekannte Baustellen
- [x] `dist/` wurde am 14.08.2026 aus der Git-Nachverfolgung entfernt; der zurückgebliebene Ordner
      (209 MB) ist am 05.09.2026 gelöscht. Der Deploy-Weg ist geklärt: Cloudflare Pages baut selbst
      aus dem Repo, ein versionierter Build-Ordner ist damit erledigt
- [ ] `scripts/optimize-images.js` löscht mit `fs.unlinkSync` die Originalbilder — und hängt an
      `npm run build`. Ein versehentlicher Build zerstört Quelldateien unumkehrbar. Entweder
      Originale behalten oder das Skript aus dem Build-Schritt lösen.
      **Stand 05.09.2026 gemessen:** in `public/images/` liegen 0 PNG/JPG und 90 `.webp` — das
      Skript ist derzeit ein No-Op, `npm run build` also ungefährlich. Die Falle bleibt aber
      scharf, sobald jemand ein PNG dort ablegt
- [ ] `index.html` hat `lang="en"`, muss `lang="de"` sein (DoD 4)
- [ ] `README.md` ist leer (DoD 9)
- [ ] Vollständige DoD-Prüfung steht noch aus — bis dahin ist „Portfolio" ein Anspruch, kein Nachweis

## Nicht anfassen
- **Aktuell die ganze Seite.** Lukas ist mit dem Stand zufrieden. Änderungen nur auf ausdrückliche Ansage.
- Dauerhaft tabu ohne Rückfrage: `public/images/`, `src/assets/` — kein Aufräumen, kein Umbenennen, kein Neukomprimieren. An diesen Pfaden hängt der gesamte Content.

## Zuletzt geprüft
Stand 05.09.2026 (Deploy-Vorbereitung Cloudflare Pages):
- `npm ci` + `npm run build`: **läuft durch**, Exit 0, 21,9 s. Ein Vite-Hinweis: der JS-Chunk ist
  507,9 kB (157,8 kB gzip) und damit über der 500-kB-Warnschwelle — kein Fehler, aber offen
- `dist/`: **48 MB**, 110 Dateien, größte Datei 19,6 MiB (`Turm_Prozess.mp4`). Keine Datei über
  dem 25-MiB-Limit von Cloudflare Pages
- Videos: alle 10 in **Chromium** geprüft — `readyState` 4, laufende `currentTime`, keine
  Medienfehler, keine 404. **Firefox ist auf diesem Rechner nicht installiert und wurde nicht
  geprüft** — der Klick-Durchgang dort steht noch aus
- ESLint: **3 Errors, 1 Warning** (alle vorbestehend, keiner aus der Video-Umstellung).
  Darunter `testImg` in `Landing.jsx:8` importiert, aber nie benutzt
- Browser-Konsole im Preview-Build: keine Errors
- Lighthouse Mobile: nicht geprüft
- Tastaturbedienung: nicht geprüft
- Responsive 320–2560: nicht geprüft

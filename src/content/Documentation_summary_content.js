/* Data Structure for Summaryelements on Docu Page | same "link" like "url_ending" in Subpages_content.js
--------------------------------------------------------------------------------------------------------
   {
        icon: "",
        headline: "",
        subheadline: "",
        text: "",
        link: ""
    },
  ...
-------------------------------------------------------------------------------------------------------
*/

export const entryData_summary = [
    {
        icon: "🏁",
        headline: "Finaler Stand",
        subheadline: "Februar 2026",
        text: "Der aktuelle Stand unseres Spiels ist als vollständiges hybrides Spielerlebnis erfahrbar und mit Unterstützung einer Spielleitung spielbar. Zentrale Mechaniken, die analoge Spielfläche, die digitalen Abläufe sowie die visuelle und atmosphärische Gestaltung greifen bereits ineinander und vermitteln das geplante Spielgefühl.",
        link: "Finaler_stand"
    },
    {
        icon: "♟️",
        headline: "Testen",
        subheadline: "Januar - Februar 2026",
        text: "Im Verlauf des Projekts führten wir regelmäßig Spieltests durch, um Schwächen zu identifizieren, Abläufe zu überprüfen und Verständlichkeit sicherzustellen. Zu Beginn handelte es sich um kleinere interne Testrunden, in denen wir vor allem den grundlegenden Ablauf überprüften. Gegen Ende konnten wir vollständige Spielrunden durchführen, was für uns ein besonders motivierender Moment war. Dabei wurde deutlich, dass unsere zahlreichen Diskussionen, Anpassungen und Iterationen tatsächlich zu einem funktionierenden Spiel geführt hatten.",
        link: "Testen"
    },
    {
        icon: "🛠️",
        headline: "Spielbrett",
        subheadline: "2. Semester (Semesterbegleitend)",
        text: "Unser Spielbrett besteht aus einem Dorfbereich sowie mehreren Außengebieten. Die Grundformen wurden in Blender modelliert und anschließend 3D-gedruckt. In die gedruckten Formen sind gestaltete Papp-Platten eingelegt, die jeweils zum entsprechenden Gebiet oder zum Dorf passen. Zusätzlich entwickelten wir einen zentralen Berg, auf dem die Kamera positioniert ist. Im Verlauf des Spiels wird dort ein Tempel errichtet, wodurch auch das physische Spielfeld die spielerische Progression widerspiegelt.",
        link: "Spielbrett"
    },
    {
        icon: "💻",
        headline: "Code-Implementierung",
        subheadline: "2. Semester (Semesterbegleitend)",
        text: "Um den digitalen Teil unseres Spiels umzusetzen, arbeiteten wir mit der Engine Godot. Hier werden unter anderem die Gebiete verwaltet, Spielfigurenbewegungen verarbeitet und Aktionen ausgeführt. Das Spiel läuft letztlich auf einem Raspberry Pi 5, der neben der Spielengine auch die im Spielbrett integrierten LEDs ansteuert und die Kommunikation mit der Kamera sowie dem Controller übernimmt.", 
        link: "Coding"
    },
    {
        icon: "🎨",
        headline: "Design & Animation",
        subheadline: "2. Semester (Semesterbegleitend)",
        text: "Im zweiten Semester haben wir unsere finalen Designs für die analogen und digitalen Bereiche ausgearbeitet. Dazu zählen unter anderem die Gestaltung der Spielfelder, Character-Sheets, UI-Elemente sowie Loot-Objekte. Ergänzend dazu entwickelten wir Animationen, die sowohl erzählerische Elemente transportieren als auch das Spielerlebnis visuell abrunden und atmosphärisch unterstützen.",
        link: "Design_Animation"
    },
    {
        icon: "🔨",
        headline: "Erste Schritte Entwicklung",
        subheadline: "Semesterferien 2025",
        text: "In den Semesterferien starteten wir mit den ersten Einkäufen für unseren Controller und das Kamera-Setup. Der Controller wurde aufgebaut, und erste Tests mit der Kamera halfen uns, die Funktionsweise des Raspberry Pi und der Bilderfassung besser zu verstehen.",
        link: "Erste_Schritte_Entwicklung"
    },
    {
        icon: "👾",
        headline: "Charakter Umsetzung",
        subheadline: "August - November 2025",
        text: "Um die Figuren für die Objekterkennung mit unserer Kamera nutzbar zu machen, mussten die bisher gezeichneten Spielfiguren in realistische, druckbare Modelle überführt werden. Dazu werden sie in Blender als 3D-Modelle nachgebaut, um später physisch gedruckt und im Spiel präzise erkannt und getrackt werden zu können.",
        link: "Charakter"
    },
    {
        icon: "🔗",
        headline: "Schnittstelle",
        subheadline: "Juni 2025",
        text: "Um ein immersives Erlebnis zwischen digitalem und analogem Spiel zu ermöglichen, untersuchten wir verschiedene Schnittstellen wie NFC-Technologie, infrarot und verschiedener Sensoren. So können physische Aktionen auf dem Spielbrett gezielt digitale Reaktionen auslösen und das Spielerlebnis erweitern.",
        link: "Schnittstelle"
    }, 
      {
        icon: "📦",
        headline: "Prototyp",
        subheadline: "Juni 2025",
        text: "Nachdem wir zentrale Spielmechaniken und Abläufe definiert hatten, setzten wir diese in einem analogen Paper Prototyp um, bei dem wir Spielfelder, Karten und Marker gestalteten, um erste Spielabläufe physisch erfahrbar zu machen.",
        link: "Prototyp"
    },
    {
        icon: "🏛️",
        headline: "Götter & Halbgötter",
        subheadline: "Mai 2025",
        text: "Nachdem wir die verschiedenen Regionen mit ihren Eigenschaften, Ressourcen und Gebäuden definiert hatten, entwickelten wir passende Gottheiten und Halbgötter, die thematisch und funktional zu den jeweiligen Gebieten passen.",
        link: "Goetter_Halbgoetter"
    },
    {
        icon: "⚙️",
        headline: "Spielmechaniken",
        subheadline: "April - Mai 2025",
        text: "Die Entwicklung der Spielmechanik war ein vielschichtiger Prozess. Von Anfang an war klar: Es gibt nicht die eine Mechanik – vielmehr mussten wir verschiedenste Aspekte betrachten, ausprobieren und aufeinander abstimmen. Welche Rolle spielen Ressourcen und Entscheidungen? Wie funktioniert die Erkundung der Gebiet? Wie die Dorfphase?...",
        link: "Spielmechaniken"
    },
    {
        icon: "🏔️",
        headline: "Gebiete",
        subheadline: "April - Mai 2025",
        text: "Nach intensiver Recherche zu den Göttern haben wir sieben spannende Gebiete für unsere Erkundung definiert. Schnell wurde klar: Jedes dieser Areale braucht seine eigene Geschichte, seine eigenen Geheimnisse. Während wir an den Inhalten feilten, entwickelte sich parallel die Spielmechanik – Hand in Hand. Viele Ideen entstanden im gemeinsamen Austausch, in Gesprächen, Diskussionen und Skizzen. So wuchs Stück für Stück unser Spielbrett – als Herzstück einer Welt, die entdeckt werden will.",
        link: "Gebiete"
    },
    {
        icon: "🔎",
        headline: "Recherche",
        subheadline: "April - Mai 2025",
        text: "Zu Beginn haben wir eine gründliche Recherche durchgeführt, verschiedene Spiele analysiert und Ideen gesammelt, um herauszufinden, welche Elemente uns wichtig sind. Dabei haben wir uns auf grundlegende Spieldesign-Prinzipien konzentriert und die Möglichkeiten für die Umsetzung eines analog-digitalen Brettspiels, einschließlich tangible Interfaces, untersucht.",
        link: "Recherche"
    }
]
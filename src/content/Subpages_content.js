/* Data Structure for Subpages Content  
portrait = 9:16 | landscape = 16:9 
description elements can be empty arrays if not needed, new string = new paragraph
You have to use .webp with images beacuase auto compress to .webp if builded even when u uplaod dif. file 
--------------------------------------------------------------------------------------------------------
  url_ending: [
    {
      title: "",
      subtitle: "",
       description: {
          intro: [
             "",
             "...",
             
          ],
          list: [
            "",
            "...",
            
          ],
          outro: [
            "",
            "...",
          ]
        },
      media: [
        { type: "image", src: "../../images/Green.webp", aspect: "portrait" },
        { type: "image", src: "../../images/Red.webp", aspect: "landscape" },

        { type: "video", src: "../../images/Intro.mp4", aspect: "portrait" },
        { type: "video", src: "../../images/Intro.mp4", aspect: "landscape" },
      ],
    },
    {
     ...
    },
  ],
  ...
-------------------------------------------------------------------------------------------------------
*/


export const Subpages_content = {
  Finaler_stand: [
    {
      title: "Konzeptidee",
      subtitle: "Der Finale Stand unserer Konzept Idee",
       description: {
          intro: [
          "Von der ersten Konzeptidee bis zum spielbaren Prototypen haben wir über zwei Semester hinweg einen umfassenden Entwicklungsprozess durchlaufen. In dieser Zeit wurde Gotteswut von einer abstrakten Spielidee zu einem real existierenden, hybriden Brettspiel weiterentwickelt, das analog und digital erfahrbar ist.", 
          "Ausgehend von der Grundidee eines kooperativen Brettspiels in einer postapokalyptischen Welt entstand eine eigenständige Spielwelt mit klar definierten Mechaniken. Dazu zählen:"
          ], 
          list: [
          "Eine ausgearbeitete Hintergrundgeschichte und ein stimmiges Worldbuilding", 
          "Sieben thematisch unterschiedliche Gebiete mit eigenen Eigenschaften", 
          "Passende Götter und Halbgötter mit individuellen Spielstilen", 
          "Ein Skilltree-System zur Charakterentwicklung", 
          "Ein Ressourcen- und Fortschrittssystem, das Entscheidungen und Kooperation belohnt"
          ],
          outro: [
            "Passend zur konzeptionellen Arbeit wurde die physische Umsetzung des Spiels realisiert. Das in Blender modellierte und anschließend 3D-gedruckte Spielbrett ist in modulare Dorf- und Gebietssegmente mit integrierten Stecksystemen unterteilt. Zusätzlich wurden LED-Streifen integriert, um spielrelevante Zustände visuell auf dem Brett darzustellen und die Macht der Götter physisch erfahrbar zu machen."
          ]
        },
      media: [
        { type: "image", src: "../../images/SP_FinalerStand/Final_Beschriftet.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_FinalerStand/Final_2.webp", aspect: "landscape" },
      ],
    },
    {
      title: "Spielelemente",
      subtitle: "Der Finale Stand unserer Spielelemente",
       description: {
          intro: [
          "Die Spielfiguren wurden eigenständig modelliert. Sie sind sowohl haptisch gut nutzbar als auch für das kamerabasierte Tracking geeignet.",
          "Ergänzend zum Spielbrett und den Figuren entstanden individuell gestaltete Gebietsdesigns, Character-Sheets zur Verwaltung von Fähigkeiten und Werten sowie ein eigener Controller zur Navigation im digitalen Bereich. Zusammen bilden diese Elemente die Grundlage für das hybride Spielerlebnis.", 
          "Zum aktuellen Zeitpunkt liegt ein vollständig aufgebauter, funktionierender Prototyp vor. Das Spiel ist spielbar und vermittelt bereits das geplante Spielgefühl. Konkret bedeutet das:"
          ], 
          list: [
          "Spielfiguren werden physisch auf dem Spielbrett bewegt", 
          "Digitale Ereignisse werden ausgelöst und visuell dargestellt", 
          "LED-Elemente reagieren auf einschlagende Gotteswut", 
          "Der Spielverlauf kann mit Unterstützung einer Spielleitung vollständig durchgeführt werden"
          ],
          outro: [
           
          ]
        },
      media: [
      ],
    },
    {
      title: "Spielmechanik",
      subtitle: "Der Finale Stand unserer Spielmechanik",
       description: {
          intro: [
          "Die zentralen Spielmechaniken als auch der größte Teil des Zusammenspiels von analogem und digitalem System sind erfolgreich umgesetzt.",
          "Für eine vollständig autonome Version des Spiels sind noch einige Erweiterungen und Optimierungen vorgesehen. Dazu zählen insbesondere:"
          ], 
          list: [
          "Weitere Verbesserung und Stabilisierung des Figurentrackings", 
          "Vollständige Anbindung aller Spielzustände an das Godot-Projekt", 
          "Technische und spielmechanische Integration der Ritualmechanik", 
          ],
          outro: [
           
          ]
        },
      media: [
      ],
    },
  ],

  Testen: [
    {
      title: "Test spielen",
      subtitle: "Funktioniert unser Konzept?",
       description: {
          intro: [
            "Das Testen in realen Spielrunden war ein zentraler Bestandteil unserer Entwicklung. Jede Testrunde lieferte neue Erkenntnisse darüber, ob wichtige Informationen fehlen, ob die Regeln verständlich formuliert sind, ob der Druck durch die steigende Gotteswut ausreichend spürbar ist und ob digitale Ereignisse klar kommuniziert werden. Darüber hinaus halfen uns das wiederholte Testen und Beobachten dabei, das tatsächliche Spielverhalten mit unseren ursprünglichen Annahmen zu vergleichen. Viele Mechaniken, die auf dem Papier schlüssig wirkten, entwickelten in der Praxis eine andere Dynamik. Erst im aktiven Spielen wurde sichtbar, ob Entscheidungsoptionen tatsächlich als sinnvoll wahrgenommen werden, ob bestimmte Aktionen bevorzugt oder kaum genutzt werden, ob Wartezeiten entstehen und wie stark sich Kooperation innerhalb der Spielrunde tatsächlich entfaltet.", 
            "Gerade bei einem hybriden Spiel war dieser Schritt essenziell. Da analoge und digitale Elemente ineinandergreifen, mussten wir überprüfen, ob die Übergänge zwischen physischer Handlung und digitaler Reaktion intuitiv und nachvollziehbar sind. Testspiele machten sichtbar, ob diese Schnittstellen reibungslos funktionieren oder ob Medienbrüche entstehen.", 
            "Die ersten Tests fanden ausschließlich im Team statt. In dieser Phase floss viel persönliche Einschätzung ein. Der Fokus lag darauf, grundlegende Abläufe zu prüfen, grobe Balanceprobleme zu erkennen und technische Fehler zu identifizieren. Externe Testspieler*innen einzubeziehen wäre zu diesem Zeitpunkt wenig sinnvoll gewesen, da sich das Spiel noch stark im Prototypenstadium befand und viele Funktionen noch nicht vollständig umgesetzt waren.", 
            "Mit fortschreitender Entwicklung testeten wir das Spiel schließlich auch mit externen Personen. Durch den größeren Entwicklungsstand konnten wir nun beobachten, wie verständlich das Spiel ohne zusätzliche Erklärungen funktioniert und wo noch Optimierungsbedarf besteht. Besonders aufschlussreich war dabei zu sehen."
          ],
          list: [
            "An welchen Stellen Rückfragen entstehen", 
            "Welche Regeln intuitiv verstanden werden", 
            "und wie neue Spieler*innen mit der hybriden Struktur umgehen"
          ],
          outro: [
            "Diese Tests lieferten wertvolles Feedback zur Nutzerführung, zur Balance zwischen Schwierigkeit und Motivation sowie zur allgemeinen Spielatmosphäre. Gleichzeitig bestätigten sie, welche Designentscheidungen bereits gut funktionierten.", 
            "Insgesamt zeigte sich, dass regelmäßiges Testen nicht nur der Fehlerkorrektur dient, sondern ein zentraler Bestandteil des iterativen Designprozesses ist. Jede Testrunde führte zu Anpassungen, kleinen Verbesserungen und manchmal auch grundlegenden Überarbeitungen – und brachte uns dem Ziel eines stimmigen, spielbaren Gesamterlebnisses Schritt für Schritt näher."
          ]
        },
      media: [
        { type: "image", src: "../../images/SP_Testing/Test_1.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Testing/Test_2.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Testing/Test_3.webp", aspect: "landscape" },

      ],
    },
  ],

  Spielbrett: [
    {
      title: "3D Druck",
      subtitle: "Drucken unser Figuren und des Spielfelds",
       description: {
          intro: [
            "Das Spielbrett wurde in Einzelteilen in Blender modelliert und anschließend gedruckt. Beim Modellieren spielte die exakte Größe eine zentrale Rolle, da später alle Komponenten präzise ineinandergreifen mussten.", 
            "Wir integrierten Steckverbindungen in die einzelnen Elemente, um sowohl konstruktive als auch funktionale Anforderungen des Spielbretts zu erfüllen:"
          ],
          list: [
            "Aufbau zu erleichtern", 
            "Stabilität zu gewährleisten", 
            "Verrutschen der Teile zu verhindern", 
            "LED-Streifen korrekt positionieren", 
            "Gotteswut-Slider exakt passen"
          ],
          outro: [
            "Einige Bauteile mussten vor dem Druck gesliced werden, da sie größer waren als die maximale Druckfläche des Geräts. Dabei war sorgfältig zu planen, an welchen Stellen eine Teilung sinnvoll ist. Nach dem Druck wurden die gesliceten Elemente wieder zusammengefügt und verklebt", 
            "Auch die Materialwahl spielte eine wichtige Rolle. Der Untergrund sollte möglichst unauffällig wirken, idealerweise schwarz. Gleichzeitig musste die Oberfläche des Dorfes lichtdurchlässig sein, damit die integrierten LED-Streifen sichtbar werden.", 
            "Aus diesem Grund entschieden wir uns für transparentes PLA, das sowohl Stabilität als auch Lichtdurchlässigkeit gewährleistet."
          ]
        },
      media: [
        { type: "video", src: "../../images/SP_Spielbrett/Drucken_1.mp4", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Spielbrett/Blender.webp", aspect: "landscape" },
        { type: "video", src: "../../images/SP_Spielbrett/Drucken_2.mp4", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Spielbrett/Druck_Ergebnis_1.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Spielbrett/Druck_Ergebnis_2.webp", aspect: "landscape" },
        
      ],
    },
    {
      title: "Zubehör",
      subtitle: "Spielkarten, Chips und co. ",
       description: {
          intro: [
            "In den 3D-gedruckten Spielfeldteilen befinden sich bedruckte Papp-Plättchen. Diese sorgen für eine hochwertigere Optik als reines Plastik und verleihen Dorf und Gebieten einen klaren Wiedererkennungswert.", 
            "Auch hier war präzises Arbeiten erforderlich, da die Maße exakt aufeinander abgestimmt sein mussten – eine Herausforderung, die sich als komplexer herausstellte als zunächst angenommen.", 
            "Weiteres Spielzubehör wie:"
          ],
          list: [
            "Character-Sheets", 
            "Level-Karten", 
            "Ressourcenmarker", 
            "Statuseffekte", 
            "Baupläne"
          ],
          outro: [
            "wurde auf dickerem Papier gedruckt und ausgeschnitten.",
            "Für die Anzeige von Lebens- und Aktionspunkten auf den Character-Sheets verwenden wir Perlen, die auf einer Schnur befestigt sind. Diese Lösung passt gestalterisch zum Gesamtstil des Spiels und erfüllt gleichzeitig ihren funktionalen Zweck auf einfache und haptisch nachvollziehbare Weise."

          ]
        },
      media: [
        { type: "image", src: "../../images/SP_Spielbrett/Zubehoer_2.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Spielbrett/Zubehoer_3.webp", aspect: "portrait" },
         { type: "image", src: "../../images/SP_Spielbrett/Zubehoer_1.webp", aspect: "portrait" },
      ],
    },
  ],

  Coding: [
    {
      title: "Hardware",
      subtitle: "Hardware Programmierung",
       description: {
          intro: [
            "Als zentrale Hardware-Komponente verwenden wir einen Raspberry Pi 5. Auf diesem befinden sich:"
          ],
          list: [
            "Godot-Projekt",
            "Python-Skripte für LED und Slider", 
            "Code für die Kameraerkennung"
          ],
          outro: [
            "Der Controller ist per Bluetooth mit dem Raspberry Pi verbunden. Die LEDs, die Slider zur Steuerung der Gotteswut sowie die Kamera sind kabelgebunden angeschlossen.", 
            "Bei der Auswahl der Komponenten war Kompatibilität ein entscheidender Faktor. Vor der Bestellung führten wir daher eine intensive Recherche durch, prüften Schnittstellen und technische Anforderungen und bauten anschließend alle Bestandteile schrittweise zusammen. Erst nach mehreren Tests funktionierte das Zusammenspiel der einzelnen Elemente zuverlässig."
          ]
        },
      media: [
        { type: "image", src: "../../images/SP_Coding/Hardware_1.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Coding/Hardware_2.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Coding/Hardware_3.webp", aspect: "portrait" },
      ],
    },
    {
      title: "Godot",
      subtitle: "Digitale Spielwelt",
       description: {
          intro: [
            "Die visuelle und interaktive Umsetzung erfolgt vollständig in unserem Godot-Projekt. Hier wird unter anderem der Spielaufbau erklärt, das Spielfeld digital ergänzt und auf analoge Eingaben reagiert.", 
            "Zu Beginn arbeiteten wir mit einfachen Prototypen und Platzhaltern, um grundlegende Funktionen zu testen. Darauf aufbauend entwickelten wir Schritt für Schritt die finale Version.", 
            "Der Entwicklungsprozess verlief iterativ:"
          ],
          list: [
            "Implementierung der Kernfunktionen", 
            "Einbindung der analogen Schnittstellen", 
            "Austausch der Platzhalter durch finale Designs", 
            "Optimierung von Nutzerführung und Verständlichkeit"
          ],
          outro: [
            "So entstand nach und nach ein funktionierendes und visuell ausgearbeitetes digitales Spielerlebnis."
          ]
        },
      media: [
        { type: "image", src: "../../images/SP_Coding/Godot_1.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Coding/Godot_2.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Coding/Godot_3.webp", aspect: "landscape" },
      ],
    },
  ],

  Design_Animation: [
    {
      title: "Assets",
      subtitle: "Grundbausteine unseres Design",
       description: {
          intro: [
            "Unsere Assets finden sich insbesondere auf dem Spielbrett wieder. Es handelt sich um kleinere Designelemente, die den einzelnen Gebietsplatten eine eigene Identität verleihen und gleichzeitig für ein stimmiges Gesamtbild sorgen.",
            "Die grundlegende Designrichtung war früh definiert. Im Verlauf der Umsetzung stellten wir jedoch fest, dass weitere gestalterische Parameter konkret festgelegt werden mussten, damit alle Elemente konsistent wirken. Dazu gehörten unter anderem:"
          ],
          list: [
            "Richtung und Intensität des Lichteinfalls", 
            "Farbpalette", 
            "Verwendeten Brushes",
            "Textur und Eigenschaften des Canvas", 
          ],
          outro: [
            "Um ein einheitliches Erscheinungsbild sicherzustellen, einigten wir uns daher auf einen klar definierten Designstil. Diese Festlegungen dienten als verbindliche Grundlage für alle weiteren grafischen Ausarbeitungen und halfen uns, visuelle Brüche zu vermeiden."
          ]
        },
      media: [
          { type: "image", src: "../../images/SP_Design_Animation/Assets_2.webp", aspect: "landscape" },
          { type: "image", src: "../../images/SP_Design_Animation/Assets_1.webp", aspect: "landscape" },
          { type: "image", src: "../../images/SP_Design_Animation/Assets_3.webp", aspect: "landscape" },
        { type: "video", src: "../../images/SP_Design_Animation/Turm_Prozess.mp4", aspect: "landscape" },
      ],
    },
    {
      title: "Komponenten",
      subtitle: "Zeichnen, zeichnen, zeichnen",
       description: {
          intro: [
            "Sämtliche Komponenten des Spiels wurden von Hand gezeichnet. Dazu zählen Hintergründe, Icons für Gebiete, Aktionen und Ressourcen sowie weitere UI-Elemente. Ausschließlich für die Gebäude und Baupläne, die gegen Ende noch dazu kamen, haben wir Bilder rausgesucht und generieren lassen. ", 
            "Auch hier war ein konsistenter Designstil essenziell, damit alle Elemente visuell miteinander harmonieren. Eine zusätzliche Herausforderung bestand darin, dass die Komponenten sowohl digital als auch analog funktionieren und möglichst identisch aussehen sollten.", 
            "Daher mussten unterschiedliche Farbräume berücksichtigt werden:"
          ],
          list: [
            "CMYK für gedruckte Materialien", 
            "RGB für digitale Darstellungen"
          ],
          outro: [
            "Diese Anpassungen waren notwendig, um Farbabweichungen zwischen Bildschirm und Druck möglichst gering zu halten und ein stimmiges Gesamtbild zu gewährleisten."
          ]
        },
      media: [
        { type: "image", src: "../../images/SP_Design_Animation/Collage_Icon.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Design_Animation/Collage_BG.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Design_Animation/Collage_Hex.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Design_Animation/Collage_Icon_2.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Design_Animation/Collage_Res.webp", aspect: "landscape" },
      ],
    },
    {
      title: "Animationen",
      subtitle: "Fließende Übergänge",
       description: {
          intro: [
            "Die Animationen begleiten die Spieler*innen durch verschiedene Phasen des Spiels. Sie sorgen für Übergänge zwischen Szenen, visualisieren Ereignisse und unterstützen die erzählerische Struktur.", 
            "Unsere umfangreichste Animation steht am Beginn des Spiels und führt in die Geschichte von Gotteswut ein. Sie dient dazu, Atmosphäre aufzubauen und die Spieler*innen emotional in die Spielwelt einzuführen. Die Intro-Animation ist aus zeitlichen Gründen aktuell noch skizzenhaft, das Video kommt jedoch schon sehr nah an unsere Vorstellung heran. ", 
            "Bei den Animationen wurde besonders auf folgende Aspekte geachtet:"
          ],
          list: [
            "Einheitlicher visueller Stil", 
            "Stimmiges Timing", 
            "Klare, nachvollziehbare Bewegungsabläufe"
          ],
          outro: [
            "Der Animationsstil orientiert sich an einer Stop-Motion-Ästhetik. Dadurch entsteht eine haptische, fast greifbare Wirkung, die gut zur analogen Komponente des Spiels passt und das hybride Gesamtkonzept unterstreicht."
          ]
        },
      media: [
        { type: "video", src: "../../images/SP_Design_Animation/Vulkan.mp4", aspect: "landscape" },
        { type: "video", src: "../../images/SP_Design_Animation/Intro.mp4", aspect: "landscape" },
        { type: "video", src: "../../images/SP_Design_Animation/Winter.mp4", aspect: "landscape" },
      ],
    },
  ],

  Erste_Schritte_Entwicklung: [
    {
      title: "Controller",
      subtitle: "Die Entwicklung unseres Controllers",
       description: {
          intro: [
            "Der Controller wurde mit dem Ziel entwickelt, ein eigenes und einfaches Gerät zu schaffen, das nur die wichtigsten Funktionen für die Menü-Navigation im digitalen Spiel enthält. Als Inspiration dienten uns Multimedia-Systeme aus Autos: Drehen nach links  oder rechts bewegt das Menü, Drücken wählt aus. Für den Bau benötigten wir verschiedene Bauteile wie einen Encoder und einen Mikrocontroller, der die Signale per Bluetooth senden kann. Nach anfänglichen Schwierigkeiten bei der Bauteilesuche und einem beschädigten Mikrocontroller beim Löten funktionierte der Aufbau schließlich reibungslos."
          ],
          list: [
          ],
          outro: [

          ]
        },
      media: [
        { type: "image", src: "../../images/SP_ErsteSchritte/Controller_1.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_ErsteSchritte/Controller_2.webp", aspect: "portrait" },
      ],
    },
    {
      title: "Kamera",
      subtitle: "Kamera für das Tracking",
       description: {
          intro: [
            "Nachdem wir die Kamera und den Raspberry Pi erhalten hatten, konnten wir mit den ersten Tests beginnen. Ziel war es, eine geeignete Position für die Kamera zu finden, in der sie stabil stehen kann und einen optimalen Blick auf das Spielfeld hat. Dabei testeten wir verschiedene Höhen und Blickwinkel, um Verzerrungen zu minimieren und eine zuverlässige Erfassung zu ermöglichen. Parallel dazu führten wir erste Versuche mit der Objekterkennung durch, um zu überprüfen, ob relevante Elemente korrekt erkannt werden und die grundlegende Funktionalität des Systems gegeben ist."
          ],
          list: [
          ],
          outro: [

          ]
        },
      media: [
        { type: "image", src: "../../images/SP_Schnittstelle/Kamera_Setup_v1_3.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Schnittstelle/Kamera_Setup_v1_1.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Schnittstelle/Kamera_Setup_v1_2.webp", aspect: "landscape" }
      ],
    },
  ],

  Charakter: [
    {
      title: "3D Charakter",
      subtitle: "Die Entwicklung der Figuren in Blender",
       description: {
          intro: [
            "Unser ursprünglicher Plan war, die 3D-Modelle der Spielfiguren mithilfe von Meshy, einer KI-basierten Plattform zur automatischen Generierung von 3D-Modellen, zu erstellen. Wir testeten zunächst verschiedene Entwürfe, mussten jedoch feststellen, dass die Ergebnisse nicht unseren Vorstellungen entsprachen. Über das Education-Programm erhielten wir einen Pro-Account, der es erlaubte, mehrere Ansichten einer Figur hochzuladen, um detailliertere Meshes zu erzeugen. Trotzdem blieb die Qualität der automatisch generierten Modelle hinter unseren Erwartungen zurück.", 
            "Schließlich entschieden wir uns, die Modelle eigenständig in Blender zu erstellen. Dies war eine große Herausforderung, da niemand im Team zuvor Erfahrung im 3D-Modellieren hatte. Mit viel Geduld, zahlreichen YouTube-Tutorials und einigen Fehlschlägen gelang es uns jedoch, eigene Figuren zu modellieren, die sich für den 3D-Druck eigneten. So entstanden die ersten physischen Spielfiguren, die später als Grundlage für das Kamera-Tracking im Spiel dienen."
          ],
          list: [
          ],
          outro: [

          ]
        },
      media: [
        { type: "video", src: "../../images/SP_Character/Blender_Flut.mp4", aspect: "landscape" },
        { type: "video", src: "../../images/SP_Character/Blender_Winter.mp4", aspect: "landscape" },
      ],
    },
    {
      title: "Erste Druckversionen",
      subtitle: "Druckversuche und die Entwicklung der finalen Figuren",
       description: {
          intro: [
            "Nach dem erfolgreichen Modellieren der Figuren in Blender gingen wir in die Zentralwerkstatt der Hochschule, um die Modelle mit dem dort vorhandenen 3D-Drucker herzustellen. Uns war von Anfang an bewusst, dass der Drucker nicht optimal für unsere Anforderungen ist, da die Figuren mit etwa 6 cm Höhe sehr klein sind und einen vergleichsweise hohen Detailgrad aufweisen.", 
            "Wie erwartet spiegelte sich dies im Ergebnis wider: Die Ausdrucke waren grundsätzlich erkennbar, feine Strukturen – insbesondere an Händen und Füßen – wurden jedoch nur unzureichend wiedergegeben. Mehrere Testdrucke verbesserten die Details nur marginal, sodass sie weiterhin weicher und weniger präzise ausfielen, als wir es uns erhofft hatten.", 
            "Dementsprechend suchten wir nach Möglichkeiten, mit anderen 3D-Druckverfahren und angepassten Modellen ein besseres Ergebnis zu erzielen und die feinen Details unserer Figuren sauberer abzubilden."
          ],
          list: [
          ],
          outro: [

          ]
        },
      media: [
        { type: "image", src: "../../images/SP_Character/Druck_v1_1.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Character/Druck_v1_2.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Character/Druck_v1_3.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Character/Druck_v1_4.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Character/Druck_v1_5.webp", aspect: "landscape"}
      ],
    },
    {
      title: "Finale Druckversionen",
      subtitle: "Finaler Druck",
       description: {
          intro: [
           "Schließlich fanden wir einen geeigneten 3D-Drucker, der mit Resin arbeitet und ein anderes Druckverfahren nutzt. Mit diesem konnten wir neue Versionen unserer Figuren herstellen, die deutlich detaillierter und präziser waren. Die Ergebnisse entsprachen nun unseren Vorstellungen, insbesondere die feinen Strukturen an Händen, Füßen und anderen Details wurden sauber abgebildet.", 
          ],
          list: [
          ],
          outro: [

          ]
        },
      media: [
        { type: "image", src: "../../images/SP_Character/all.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Character/winter.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Character/flut.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Character/natur.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Character/sturm.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Character/duerre.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Character/krieg.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Character/vulkan.webp", aspect: "portrait" },
      ],
    },
  ],

  Schnittstelle: [
    {
      title: "Recherche",
      subtitle: "Welche Technologien kommen in Frage",
       description: {
          intro: [
            "Um ein Gefühl für Maßstab und Spielgefühl zu bekommen, begannen wir damit, das Spielbrett aus Pappe nachzubauen. Dabei entstanden erste Prototypen von Gebäuden wie dem Tempel und den Ressourcenlagern. Außerdem fertigten wir Hexagon-Module an, um die einzelnen Teilgebiete des Spielfelds flexibel gestalten zu können. Diese ersten Modelle halfen uns dabei, die geplanten Spielmechaniken besser zu visualisieren und ein erstes Gefühl für den Umgang mit den Spielelementen zu entwickeln.",
          ],
          list: [
            "NFC (z.B. RC522, PN532): Jede Figur enthält einen NFC-Tag, Felder erkennen diesen.", 
            "Infrarot (IR-Kommunikation): Sender/Empfänger in Feldern und Figuren erkennen sich gegenseitig.",
            "Drucksensoren: Felder erkennen Gewicht oder Druck der Figuren.",
            "Lichtschranken: Unter den Feldern platzierte Sensoren erkennen, wenn eine Figur darüber steht.",
            "Computer Vision: Kamera über dem Spielfeld erkennt Positionen der Figuren durch Bilderkennung.",
          ],
          outro: [

          ]
        },
      media: [
      ],
    },
    {
      title: "Unsere Schnittstelle",
      subtitle: "Welche Technologien nutzen wir?",
       description: {
          intro: [
            "Um das analoge Spielerlebnis auf unserem Spielbrett durch digitale Elemente zu erweitern, haben wir verschiedene Ansätze zur Figuren- und Felderkennung geprüft. Beispielsweise wäre NFC denkbar gewesen, bei dem jede Figur einen Tag enthält und die Felder diesen erkennen. Praktisch war dies jedoch nicht umsetzbar, da jede Figur oder jedes Feld mehrere Reader benötigen würde – das ist zu teuer.",
            "Weitere Möglichkeiten wie Infrarot-Kommunikation oder Drucksensoren schieden aus: IR-Lösungen erfordern sehr viele Komponenten und sind möglicherweise fehleranfällig bei unterschiedlichen Lichtverhältnissen, während Drucksensoren bei ähnlichen Figurengewichten keine zuverlässige Unterscheidung erlauben. Auch kontaktbasierte Stromkreise wären einfach und günstig, setzen jedoch Elektronikkenntnisse voraus, die im Team nicht ausreichend vorhanden waren.", 
            "Nach Abwägung aller Optionen entschieden wir uns für eine Lösung mit Computer Vision. Fixierte Kameras beobachten das Spielbrett kontinuierlich, ein Bilderkennungsalgorithmus identifiziert die Figuren anhand visueller Merkmale und berechnet ihre exakten Positionen. Diese Informationen werden an unsere Spielengine weitergeleitet, die passende Animationen und visuelle Effekte erzeugt.", 
            "Als Engine verwenden wir Godot, da sie Open Source ist, flexibel eingesetzt werden kann und bereits im 5. Semester von Teilen unseres Teams genutzt wurde. So entsteht eine hybride Spielerfahrung, die das haptische Gefühl eines analogen Brettspiels mit den Möglichkeiten digitaler Technologien verbindet."
          ],
          list: [

          ],
          outro: [

          ]
        },
      media: [
        { type: "image", src: "../../images/SP_Schnittstelle/Kamera_Setup_v1_1.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Schnittstelle/Technik.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Schnittstelle/Kamera_Setup_v1_2.webp", aspect: "landscape" }
      ],
    },
  ],

  Prototyp: [
    {
      title: "Version 1.0",
      subtitle: "Erste Version unseres Prototyps",
       description: {
          intro: [
            "Um ein Gefühl für Maßstab und Spielgefühl zu bekommen, begannen wir damit, das Spielbrett aus Pappe nachzubauen. Dabei entstanden erste Prototypen von Gebäuden wie dem Tempel und den Ressourcenlagern. Außerdem fertigten wir Hexagon-Module an, um die einzelnen Teilgebiete des Spielfelds flexibel gestalten zu können. Diese ersten Modelle halfen uns dabei, die geplanten Spielmechaniken besser zu visualisieren und ein erstes Gefühl für den Umgang mit den Spielelementen zu entwickeln.",            
            "Der Fokus lag in dieser frühen Phase vor allem auf der Definition geeigneter Größenverhältnisse sowie der räumlichen Anordnung zentraler Spielelemente. Wir testeten verschiedene Varianten, um herauszufinden, wie die Komponenten optimal miteinander harmonieren. Diese praktische Herangehensweise erwies sich als besonders wertvoll, da sie uns nicht nur wichtige Erkenntnisse zur Spielbalance lieferte, sondern auch die Grundlage für die nächste Iteration des Prototyps schuf."
          ],
          list: [
          ],
          outro: [

          ]
        },
      media: [
        { type: "image", src: "../../images/SP_Prototyp/Prototyp_v1_1.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Prototyp/Prototyp_v1_5.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Prototyp/Prototyp_v1_4.webp", aspect: "portrait" },
        { type: "video", src: "../../images/SP_Prototyp/Prototyp_v1_6.mp4", aspect: "portrait" },
      ],
    },
    {
      title: "Version 1.1",
      subtitle: "Kommunikation zwischen Analog und Digital",
       description: {
          intro: [
            "Mit der zweiten Version unseres Prototyps haben wir die ersten Schritte in Richtung Technologie gewagt und begonnen, analoge und digitale Elemente miteinander zu verbinden. Mithilfe eines Makey Makey entwickelten wir ein einfaches, aber wirkungsvolles System, um eine digitale Reaktion auf eine physische Aktion zu erzeugen. Dazu simulierten wir eine Kontaktfläche auf den Hexagon-Modulen des Spielbretts, die bei Berührung ein Signal auslöste.",            
            "Dieses Signal wurde in Figma genutzt, um eine Animation zu starten, die zeigte, wie sich ein Spieler auf ein anderes Hexagon bewegt. Damit konnten wir erstmals testen, wie sich das Zusammenspiel zwischen physischem Spielmaterial und digitalen Rückmeldungen anfühlen könnte. Diese Experimente lieferten uns wertvolle Erkenntnisse über mögliche Schnittstellen zwischen analogem Spielgeschehen und digitalen Erweiterungen – und gaben einen ersten Ausblick auf das Potenzial eines hybriden Spielerlebnisses."
          ],
          list: [
          ],
          outro: [
            
          ]
        },
      media: [
        { type: "image", src: "../../images/SP_Prototyp/Prototyp_v2_2.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Prototyp/Prototyp_v2_1.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Prototyp/Prototyp_v2_3.webp", aspect: "landscape" },

      ],
    },
    {
      title: "Werkschau 2025",
      subtitle: "Halbzeit, Ausstellung unseres Prototyps",
       description: {
          intro: [
            "Im Rahmen der Weiterentwicklung unseres Prototyps haben wir zusätzliche Häusermodelle entworfen und erste Farb- sowie Detailkonzepte ausprobiert. Dieser kreative Prozess wurde durch unsere Präsentation auf der Werkschau angestoßen, bei der wir unseren aktuellen Zwischenstand vorstellen konnten.",            
            "Durch die gezielte Farbgestaltung konnten wir dem Spielbrett mehr Lebendigkeit und Charakter verleihen. Außerdem haben wir die erste Spielfigur modelliert. Der erste Prototypen wurden aus Bastelton modelliert, um ein Gefühl für Form, Größe und Design zu bekommen. So nimmt unsere Spielwelt Schritt für Schritt Gestalt an."
          ],
          list: [
          ],
          outro: [
            
          ]
        },
      media: [
        { type: "image", src: "../../images/SP_Prototyp/Werkschau_25_1.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Prototyp/Werkschau_25_2.webp", aspect: "portrait" },
      ],
    },
  ],

  Goetter_Halbgoetter: [
    {
      title: "Recherche",
      subtitle: "Verschiedene Mythologien und ihre Götterfiguren",
       description: {
          intro: [
             "Für die thematische Ausrichtung unseres Spiels haben wir uns mit unterschiedlichen Mythologien aus verschiedenen Kulturkreisen auseinandergesetzt. Dabei standen unter anderem die griechische, nordische, ägyptische sowie fernöstliche Mythologie im Fokus. Jede dieser Traditionen bringt eigene Götterfiguren, Rollenbilder und mythologische Wesen hervor, die das jeweilige Weltbild widerspiegeln.",            
          ],
          list: [
            "Griechische Mythologie: Götter wie Zeus, Hera und Poseidon",
            "Nordische Mythologie: Figuren wie Odin, Thor und Loki",
            "Ägyptische Mythologie: Götter wie Ra, Isis und Osiris",
            "Fernöstliche Mythologie: Konzepte wie Yin und Yang, sowie Götter aus dem Hinduismus und Buddhismus",
            "..."
          ],
          outro: [
            "Aus dieser Vielzahl an Figuren haben wir gezielt eine Auswahl getroffen und versucht, wiederkehrende Muster und Gemeinsamkeiten zu identifizieren. Auf dieser Grundlage haben wir Kategorien gebildet und entschieden, welche Arten von Gottheiten für unser Spielkonzept besonders relevant sind und sich gut in das Gameplay integrieren lassen.",
            "Im Verlauf dieser Analyse wurde deutlich, dass viele Kulturen vergleichbare Gottheiten oder Rollen kennen, etwa in Bezug auf Natur, Krieg, Tod oder Wissen. Diese inhaltlichen Parallelen ermöglichen es uns, Götter bestimmten Themen- oder Einflussbereichen zuzuordnen. Daraus ergeben sich Ansatzpunkte für die Gestaltung unseres Spielfelds sowie für spielmechanische Elemente, die auf diesen übergeordneten Konzepten aufbauen.",
          ]
        },
      media: [
      ],
    },
    {
      title: "Götter",
      subtitle: "Unser Vorgehen bei der Entwicklung der Götterfiguren",
       description: {
          intro: [
             "Im Rahmen unserer Recherche haben wir unterschiedliche Mythologien untersucht und zentrale Erkenntnisse auf unserem Miro-Board festgehalten. Aufbauend darauf stand die Aufgabe im Fokus, geeignete Götterfiguren für die einzelnen Gebiete unseres Spiels zu entwickeln.",
             "Dazu erarbeitete jedes Teammitglied eigene Konzepte in Form von Tabellen, Listen und Steckbriefen. Diese Entwürfe dienten als Grundlage für eine gemeinsame Diskussion, in der wir zentrale Eigenschaften, Rollen und Merkmale der Götter definiert und weiter verfeinert haben.",
             "Zu Beginn verfolgten wir den Ansatz, die Götterfiguren an bestehende Mythen anzulehnen und sie in menschlicher Form darzustellen. Im weiteren Verlauf des Projekts entschieden wir uns jedoch bewusst dafür, eigenständige, nicht-menschliche Gottheiten zu entwickeln und uns von konkreten mythologischen Vorbildern zu lösen. Dieser Schritt ermöglichte es uns, eine konsistente und eigenständige Spielwelt zu gestalten und kreative Freiräume bei der Ausarbeitung der Figuren zu nutzen."
          ],
          list: [  
          ],
          outro: [
          ]
        },
      media: [
        { type: "image", src: "../../images/SP_Goetter-Halb/Goetter_tabelle.webp", aspect: "landscape" },
      ],
    },
    {
      title: "Halbgötter",
      subtitle: "Die Entwicklung der Halbgötter und ihres Skilltrees",
       description: {
          intro: [
             "Nachdem die grundlegenden Eigenschaften der Götter definiert waren, haben wir uns mit der Ausarbeitung der Halbgötter beschäftigt. Im Mittelpunkt stand dabei ein Skilltree-System, das jedem der sieben Halbgötter eine klar unterscheidbare Spielweise ermöglicht.",
             "Jeder Halbgott verfügt über zwei thematisch und funktional unterschiedliche Hauptzweige innerhalb seines Skilltrees. Beim Levelaufstieg kann jeweils nur eine Fähigkeit aus einem dieser Zweige gewählt werden, wodurch sich individuelle Entwicklungspfade ergeben. Am Ende des Skilltrees erhält der Halbgott ein zusätzliches Bonus-Level, das sich an dem Zweig orientiert, in den der Spieler über den Verlauf des Spiels überwiegend investiert hat.",
             "Bei der Gestaltung der Fähigkeiten war es uns wichtig, Überschneidungen zwischen den Halbgöttern zu vermeiden. Jeder Charakter sollte über einzigartige Stärken verfügen und in bestimmten Spielsituationen besonders effektiv sein. Auf diese Weise entstehen sieben klar voneinander abgegrenzte Halbgötter, die unterschiedliche strategische Ansätze und Spielstile unterstützen."
          ],
          list: [  
          ],
          outro: [
          ]
        },
      media: [
        { type: "image", src: "../../images/SP_Goetter-Halb/HG_Winter.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Goetter-Halb/HG_Natur.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Goetter-Halb/HG_Vulkan.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Goetter-Halb/HG_Duerre.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Goetter-Halb/HG_Krieg.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Goetter-Halb/HG_Sumpf.webp", aspect: "portrait" },
        { type: "image", src: "../../images/SP_Goetter-Halb/HG_Sturm.webp", aspect: "portrait" },
      ],
    },
  ],

  Spielmechaniken: [
    {
      title: "Erkundung",
      subtitle: "Ausarbeitung der Expeditionsmechanik",
      description: {
        intro: [
          "Für die Gestaltung der Erkundungsphase haben wir im Team verschiedene Aktionen diskutiert, die Spieler:innen während einer Expedition ausführen können. Ziel war es, ein System zu schaffen, das sowohl klare Strukturen bietet als auch Raum für strategische Entscheidungen lässt. Am Ende einigten wir uns auf ein Modell, bei dem Expeditionen in verschiedene Gebiete mit zugehörigen Teilgebieten führen, in denen die Aktionen ausgeführt werden können."
        ],

        list: [
          "Nach Loot suchen",
          "Nach Informationen suchen", 
          "Gotteswut senken durch beten",
          "Bauen von Gebäuden",
          "Rituale abhalten",
        ],

        outro: [
          "Diese Aktionen bilden das Fundament der Expeditionsphase. Im weiteren Verlauf der Spielentwicklung haben wir sie erneut überprüft und angepasst, um die Erkundungen abwechslungsreich und spielerisch attraktiv zu gestalten."
        ],
      },
      media: [
        { type: "image", src: "../../images/SP_Spielmechanik/FC_Expidition.webp", aspect: "landscape" },
      ],
    },
    {
      title: "Dorf",
      subtitle: "Ausarbeitung der Dorfmechanik",
      description: {
        intro: [
          "Für die Gestaltung der Dorfmechanik haben wir im Team verschiedene Aktionen diskutiert, die Spieler:innen während einer Expedition ausführen können. Ziel war es, ein System zu schaffen, das sowohl klare Strukturen bietet als auch Raum für strategische Entscheidungen lässt. Am Ende einigten wir uns auf ein Modell, bei dem Expeditionen in verschiedene Gebiete mit zugehörigen Teilgebieten führen, in denen die Aktionen ausgeführt werden können.", 
          "Im weiteren Verlauf wurden diese Grundzüge verfeinert, ergänzt und mit spezifischen Elementen angereichert, sodass die Dorfphase einen eigenständigen Charakter und spielerischen Reiz erhält."
        ],

        list: [
        ],

        outro: [
        ],
      },
      media: [
        { type: "image", src: "../../images/SP_Spielmechanik/FC_Village.webp", aspect: "landscape" },
      ],
    },
  ],

  Gebiete: [
    {
      title: "Verschiedene Gebiete",
      subtitle: "Konzeption von verschiedenen Randgebieten für die Expedition",
      description: {
        intro: [
          "Die Entwicklung unseres Spielbretts begann mit der Analyse verschiedener Mythologien. Dabei fiel auf, dass viele Kulturen ähnliche Götter mit vergleichbaren Aufgaben, Bedeutungen und Symbolen kennen. Aus diesen Parallelen leiteten wir sieben zentrale Themengebiete ab, die als Grundlage für unsere Spielwelt dienen. Jedes Gebiet wurde anschließend weiter ausgearbeitet, mit eigenen Ideen, Geschichten und spezifischen Funktionen versehen.",
        ],

        list: [
          "Winter",
          "Natur",
          "Vulkan",
          "Dürre",
          "Krieg", 
          "Flut", 
          "Sturm"
        ],

        outro: [
        ],
      },
      media: [
        { type: "image", src: "../../images/SP_Gebiete/Winter_normal.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Gebiete/Natur_normal.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Gebiete/Vulkan_normal.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Gebiete/Duerre_normal.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Gebiete/Krieg_normal.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Gebiete/Flut_normal.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Gebiete/Sturm_normal.webp", aspect: "landscape" },
      ],
    },
    {
      title: "Teilgebiete",
      subtitle: "Konzeption von den Teilgebieten für die Expedition",
      description: {
        intro: [
          "Die Entwicklung unseres Spielbretts begann mit der Analyse verschiedener Mythologien. Dabei fiel auf, dass viele Kulturen ähnliche Götter mit vergleichbaren Aufgaben, Bedeutungen und Symbolen kennen. Aus diesen Parallelen leiteten wir sieben zentrale Themengebiete ab, die als Grundlage für unsere Spielwelt dienen. Jedes Gebiet wurde anschließend weiter ausgearbeitet, mit eigenen Ideen, Geschichten und spezifischen Funktionen versehen.",
        ],

        list: [
          "Standard: Keine Speziellen Möglichkeiten, hier kann aber Gebaut werden.",
          "Strafe: Erschwert den Aufenthalt im Gebiet ",
          "Lieblingsort: Gebietsritual kann abgehalten werden nachdem Hinderniss umgangen wurde"
        ],

        outro: [
        ],
      },
      media: [
        { type: "image", src: "../../images/SP_Gebiete/Winter_normal.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Gebiete/Winter_strafe.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Gebiete/Winter_liebling.webp", aspect: "landscape" },
      ],
    },

  ],

  Recherche: [
    {
      title: "Spielelemente",
      subtitle: "Was uns am Spielen wirklich Spaß macht",
      description: {
        intro: [
          "Spielmechaniken und Spielelemente bilden die Grundlage jedes Spiels. Sie bestimmen, wie sich ein Spiel anfühlt, welche Entscheidungen getroffen werden und wie Spieler:innen miteinander interagieren. Elemente wie Karten, Würfel, Ressourcen, Fähigkeiten oder Spielfelder greifen dabei ineinander und prägen gemeinsam das gesamte Spielerlebnis.",
          "Im Rahmen unseres Projekts haben wir verschiedene Spiele analysiert und gezielt untersucht, welche Mechaniken uns besonders ansprechen und warum. Dabei ging es weniger um einzelne Titel als um wiederkehrende Muster: Welche Entscheidungen fühlen sich sinnvoll an? Wo entsteht Spannung? Und welche Systeme motivieren langfristig? Aus dieser Analyse haben sich mehrere Mechaniken herauskristallisiert, die wir für unser eigenes Spielkonzept als besonders relevant erachten:",
        ],

        list: [
          "Kurze, abwechslungsreiche Spielzüge mit Pflicht- und optionalen Aktionen",
          "Zufallselemente wie Würfeln oder Kartenziehen",
          "Individuelle Charakterfähigkeiten und unterschiedliche Spielstile",
          "Tile-Placement und Deckbuilding zur Vertiefung der Spieltiefe",
          "Belohnungssysteme und Power-Ups für spürbaren Fortschritt",
          "Ressourcenmanagement sowie Aufbau- und Handelsmechaniken",
          "Kooperation mit Raum für eigenständige Entscheidungen oder Bluff",
        ],

        outro: [
          "Ergänzend zur allgemeinen Analyse haben wir uns intensiver mit dem Spiel „Winter der Toten“ auseinandergesetzt, einem kooperativen Überlebensspiel mit starkem Fokus auf Entscheidungsfindung und Gruppendynamik. Durch das gemeinsame Spielen und die anschließende Analyse der Mechaniken konnten wir konkret nachvollziehen, welche Systeme gut funktionieren und an welchen Stellen Herausforderungen entstehen. Die daraus gewonnenen Erkenntnisse sind direkt in die Weiterentwicklung unseres eigenen Spielkonzepts eingeflossen."
        ],
      },
      media: [
        { type: "image", src: "../../images/SP_Recherche/Recherche_Spielelemente_3.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Recherche/Recherche_Spielelemente_2.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Recherche/Recherche_Spielelemente_1.webp", aspect: "landscape" }, 
      ],
    },
    {
      title: "Hybride Spiele",
      subtitle: "Hybride Spiele die wir Analysierd haben auf ihr Spielprinzip, Analog/Digital Schnittstelle und mehr",
       description: {
          intro: [
             "Wir haben uns auf die Suche nach Spielen gemacht, die bereits einen digitalen Aspekt integrieren, um herauszufinden, wie diese in modernen Formaten umgesetzt werden. Dabei haben wir verschiedene Spiele ausgewählt. Im folgenden wird ein auszug dieser Spiele vorgestellt.",
          ], 
          list: [ 
          ], 
          outro: [
            "Wir haben festgestellt, dass die meisten Spiele eine App als digitales Begleitmittel nutzen. Diese Apps helfen den Spielern oft bei der Erklärung der Regeln, beim Aufbau des Spiels und geben Hinweise darauf, was als Nächstes zu tun ist. Außerdem werden die Apps häufig für Storytelling verwendet, um den Spielverlauf zu dokumentieren, Punkte zu zählen und das Zeitmanagement zu unterstützen.",
          ]
        },
      media: [
        { type: "image", src: "../../images/SP_Recherche/DarkTower.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Recherche/OneNight.webp", aspect: "landscape" },
        { type: "image", src: "../../images/SP_Recherche/PlanetX.webp", aspect: "landscape" },
      ],
    },
    {
      title: "Designprinzipien",
      subtitle: "Was macht ein gutes Spiel wirklich spielenswert?",
      description: {
        intro: [
          "Ein gutes Brettspiel basiert auf drei zentralen Säulen: Thema, Spielmechanik und Spielerfahrung. In unserem Projekt stützen wir uns besonders auf zwei dieser Elemente: Zum einen haben wir bereits eine grobe Story entwickelt, die das Thema vorgibt. Zum anderen orientieren wir uns bei der Spielerfahrung an bewährten Elementen erfolgreicher Spiele."
        ],

        list: [
          "Klare Kernmechanik",
          "Interressante Entscheidungen",
          "Balance zwischen Strategie und Glück",
          "Spielzeit",
          "Klare Regeln und einfache Erklärungen",
          "Spannende Interaktion zwischen den Spielern",
          "Belohnungssysteme und Fortschritt",
          "Wiederspielbarkeit",
          "Ausgewogenes Risiko und Belohnung",
          "Thematik und Atmosphäre",
        ],

        outro: [
        ],
      },
      media: [
       
      ],
    }
  ],
}

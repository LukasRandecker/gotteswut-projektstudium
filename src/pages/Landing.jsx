import Navbar from '../components/Navbar.jsx'
import ScrollSectionBildText from '../components/ScrollSectionBildText.jsx';
import ScrollSnapContainer from '../components/ScrollSectionContainer.jsx';
import ScrollSectionHeroIMG from '../components/ScrollSectionHeroIMG.jsx';
import ScrollSectionVideo from '../components/ScrollSectionVideo.jsx';


import testImg from '../assets/Background.jpg';


const sections = [
    {
        text: "Gotteswut ist ein kooperatives Brettspiel in einer post-apokalyptischen Welt,das digitale und analoge Elemente vereint, um den Zorn der Götter zu besänftigen.", 
        image: "../../images/SP_FinalerStand/Final_Beschriftet.webp"
    }, 
    {
      title: "Story",
      text: "Nachdem die Menschen die Welt misshandelt und die letzte Chance der Götter abgeschlagen haben bricht die Wut der Götter über die Erde ein. Nach langer Finsternis erscheint ein Hoffnungsschimmer und ihr, die wenigen überlebenden Halbgötter, findet euch mit ein paar Menschen zusammen um die Götter zu besänftigen und endlich wieder ein normales Leben aufzubauen.",
      image: "../../images/Landing/Story.webp"
    }, 
    {
        video: "../../images/Intro.mp4"
    },
    {
      title: "Spielbrett",
      text: "Auf dem Tisch liegt das Spielbrett. Ihr könnt euch dort analog bewegen, zwischen Dorf und Gebieten wechseln und jedes erkundete Teilgebiet aufdecken. Mit den Schiebereglern könnt ihr die Gottesut einstellen. Über der Landschaft erhebt sich der Berg an den ihr euren Tempel bauen werdet. Auf ihm trohnt die Kamera (, die jeden eurer Schritte erkennt.)",
      image: "../../images/Landing/Spielbrett.webp"
    },
    {
      title: "Spielelemente",
      text: "Zusätzlich zu dem Spielbrett gibt es noch mehr analoge Teile, die euer Spielerlebnis vervollständigen. Ihr könnt die 3D-gedruckten Figuren ziehen und ihre Aktions- und Lebenspunkte auf ihren Charakter-Sheets aktualisieren, Ressourcen und Statuseffekte mit Markern festhalten und aus Bauplan- und Level-up Karten die passenden heraussuchen.",
      image: "../../images/Landing/Spielelemente.webp"
    },
    {
      title: "Technik",
      text: "Damit der Computer über eure analogen Handlungen bescheid weiß gibt es zum einen die Kamera, die jeden eurer Schritte erkennt und zum anderen den Controller, mit dem ihr zum Beispiel Aktionen auswählen könnt. Außerdem sind im Spielbrett und dem Tempel LEDs um euch die Macht der Götter näherzubringen.",
      image: "../../images/Landing/Technik.webp"
    },
    {
      title: "Digitales",
      text: "Digital kriegt ihr den Aufbau und den Beginn des Spieles gezeigt. Ihr könnt Charaktere und Aktionen auswählen, eure Ereignisse passieren hier und der Computer merkt sich alle eure Positionen, Eingaben und Werte.",
      image: "../../images/Landing/Digital.webp"
    }
];

function LandingPage() {
  return (
     <div className="min-h-screen bg-[url('./assets/Background.jpg')] bg-cover bg-center bg-no-repeat ">
       <div>
        <Navbar />
        <ScrollSnapContainer>
            <ScrollSectionHeroIMG index={0} sectioncontent={sections[0]} />
            <ScrollSectionBildText index={1} sectioncontent={sections[1]} direction="reverse" />
            <ScrollSectionVideo videoSrc={sections[2].video} />
            <ScrollSectionBildText index={3} sectioncontent={sections[3]} />
            <ScrollSectionBildText index={4} sectioncontent={sections[4]} direction="reverse" />
            <ScrollSectionBildText index={5} sectioncontent={sections[5]}  />
            <ScrollSectionBildText index={6} sectioncontent={sections[6]} direction="reverse" />
        </ScrollSnapContainer>
        </div>
    </div>  
  );
}

export default LandingPage;

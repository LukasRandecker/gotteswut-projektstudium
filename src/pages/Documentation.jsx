import Navbar from '../components/Navbar.jsx'
import TimelineEntry from '../components/TimelineEntry.jsx';
import IconBackground from '../components/IconBackground.jsx';
import { entryData_summary } from '../content/Documentation_summary_content.js';

function DocumentationPage() {
  return (
     <div className="relative min-h-screen  bg-[#0C0C16]">
        <IconBackground />
       <div className='relative z-10 '>
        <Navbar />
        <div className='flex md:justify-center md:items-center flex-col'>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-chelsea text-slate-100 px-4 lg:px-20 pb-6 lg:py-10" >Dokumentation</h1>
           {entryData_summary.map((entry, index) => (
          <TimelineEntry
            key={index}
            entryContent={entry}
          />
        ))}
        </div>
        </div>
    </div>  
  );
}

export default DocumentationPage;

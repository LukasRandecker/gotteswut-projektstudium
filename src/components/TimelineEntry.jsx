import { Link } from 'react-router-dom'

const TimelineEntry = ({ entryContent }) => {
  return (
    <div className="flex group w-[95vw] lg:w-[70vw] lg:px-20 px-4 md:px-10 overflow-x-hidden">

      {/* Linke Seite */}
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-zinc-700 bg-zinc-900 text-xl">
          {entryContent.icon}
        </div>
        <div className="w-1 h-full bg-zinc-700 -mt-1 group-last:hidden"></div>
      </div>

      {/* Rechte Seite */}
      <div className="flex-1 pb-12 font-krub">
        <div className="relative p-6 bg-[#13131B] border border-zinc-700 rounded-2xl hover:border-zinc-200 transition-all duration-300 shadow-xl">

          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-zinc-100 font-chelsea">
                {entryContent.headline}
              </h2>

              <p className="text-sm text-zinc-400 mt-1 mb-4">
                {entryContent.subheadline}
              </p>

              <p className="text-zinc-300 leading-relaxed max-w-2xl">
                {entryContent.text}
              </p>
            </div>

            {/* Button */}
            <Link
              to={`/dokumentation/${entryContent.link}`}
              className="self-end px-6 py-2 border border-zinc-600 rounded-full text-xs font-bold tracking-widest text-zinc-200 hover:bg-zinc-200 hover:text-zinc-900 transition-all duration-300 uppercase"
            >
              Mehr
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimelineEntry

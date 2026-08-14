function ScrollSectionBildText({ index, sectioncontent, direction }) {
  return (
    <section
      key={index}
      className="h-[100%] w-full flex items-center justify-center px-4 md:px-20 sm:px-10"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center max-w-7xl
          ${direction === "reverse" ? "lg:grid-flow-col-dense" : ""}`}
      >
        {/* Bild */}
        <div
          className={`w-full lg:h-[60vh] sm:h-[30vh] md:h-[40vh] rounded-2xl overflow-hidden flex justify-center items-center 
            ${direction === "reverse" ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}
        >
          <img
            src={sectioncontent.image}
            alt={sectioncontent.title}
            loading='lazy'
            className="h-[100%] w-auto object-cover object-center"
          />
        </div>

        {/* Text */}
        <div
          className={`${direction === "reverse" ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}
        >
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 font-chelsea">
            {sectioncontent.title}
          </h1>
          <p className="text-base lg:text-lg leading-relaxed text-neutral-300 font-krub">
            {sectioncontent.text}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ScrollSectionBildText;

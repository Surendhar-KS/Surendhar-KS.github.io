import ScrollReveal from "../ScrollReveal";

const services = [
  {
    title: "Website Migration",
    tags: ["Web Migration", "Optimization", "Framer Rebuild"]
  },
  {
    title: "Framer Templates",
    tags: ["Startup", "Agency", "SaaS"]
  }
];

export default function ServicesSection() {
  return (
    <div id="services" className="flex flex-col items-center justify-center w-full py-32 px-6">
      <div className="w-full max-w-[1180px] flex flex-col items-start gap-12">
        <ScrollReveal>
          <h2 className="font-['Archivo:SemiBold',sans-serif] font-semibold text-[48px] md:text-[76px] tracking-[-1.52px] text-[#111] leading-none" style={{ fontVariationSettings: '"wdth" 100' }}>
            Services
          </h2>
        </ScrollReveal>

        <div className="flex flex-col w-full border-t border-black/10">
          {services.map((service, index) => (
            <ScrollReveal key={index} className="w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full min-h-[120px] py-8 border-b border-black/10 bg-[#faf7f3] hover:bg-[#f0ebe1] transition-colors duration-300 px-6 md:px-12 group cursor-default">
                
                <h3 className="font-['Archivo:Medium',sans-serif] font-medium text-[24px] md:text-[32px] tracking-[-0.64px] text-[#111] mb-4 md:mb-0 transition-transform duration-300 group-hover:translate-x-2" style={{ fontVariationSettings: '"wdth" 100' }}>
                  {service.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  {service.tags.map((tag, tIndex) => (
                    <div key={tIndex} className="flex items-center gap-3 md:gap-4">
                      <span className="font-['Archivo:Regular',sans-serif] font-normal text-[16px] md:text-[18px] tracking-[-0.72px] text-[#111]/50" style={{ fontVariationSettings: '"wdth" 100' }}>
                        {tag}
                      </span>
                      {tIndex < service.tags.length - 1 && (
                        <div className="w-1 h-1 rounded-full bg-[#111]"></div>
                      )}
                    </div>
                  ))}
                </div>
                
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

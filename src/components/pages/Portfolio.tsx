import {
  portfolioCommercialSection,
  portfolioSectionHead,
  portfolioSections,
} from "@/Constants/portfolioSection";
import Image from "next/image";
import PortfolioParallax from "../PortfolioSections/Parallax";
import Pattern1 from "../PortfolioSections/Pattern1";
import Pattern2 from "../PortfolioSections/Pattern2";
import Pattern3 from "../PortfolioSections/Pattern3";
import SectionHead from "../typography/SectionHead";
import SubSectionHead from "../typography/SubSectionHead";

function Portfolio() {
  return (
    <section
      id="services"
      className="min-h-screen portfolio-bg-gradient relative overflow-hidden"
    >
      {/* section head */}
      <div className="py-8 lg:py-24">
        <SectionHead
          text={portfolioSectionHead.title ?? ""}
          tagline={portfolioSectionHead.tagLine ?? ""}
        />
      </div>

      {/* mobile */}
      <div></div>

      {/* lens svgs */}
      <div className="w-[140vw] aspect-[3/2] absolute pointer-events-none top-2 -left-5">
        <Image src="/Assets/svgs/lens.svg" alt="" fill />
      </div>

      {/* big screens > 768 tab */}
      <div className="w-full">
        <Pattern1
          sectionHead={portfolioSections[0].title}
          sectionsPoints={portfolioSections[0].features}
          galleryQuote={portfolioSections[0].sectionQuote}
          sectionImages={portfolioSections[0].images}
        />
        <Pattern2
          sectionHead={portfolioSections[1].title}
          sectionsPoints={portfolioSections[1].features}
          galleryQuote={portfolioSections[1].sectionQuote}
          sectionImages={portfolioSections[1].images}
        />
        <Pattern3
          sectionHead={portfolioSections[2].title}
          sectionsPoints={portfolioSections[2].features}
          galleryQuote={portfolioSections[2].sectionQuote}
          sectionImages={portfolioSections[2].images}
        />
      </div>

      <div className="">
        <div className="text-center my-10">
          <SubSectionHead text={portfolioCommercialSection?.title ?? ""} />
        </div>
        <PortfolioParallax images={portfolioCommercialSection.images} />
      </div>
    </section>
  );
}

export default Portfolio;

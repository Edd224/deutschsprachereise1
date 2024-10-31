import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { About } from "@/components/About";

import { benefitOne, benefitThre, benefitTwo } from "@/components/data";
import { Cost } from "@/components/Cost";
export default function Home() {
  return (
    <Container>
      <section id="hero">
        <Hero />
      </section>

      <section id="benefits">
        <SectionTitle
          preTitle="Benefity"
          title="Chcete sa naučiť nemecky z pohodlia kancelárie alebo domova?"
        >
          Potrebujete sa dohovoriť so svojimi nemecky hovoriacimi partnermi v ich rodnom jazyku?<br />
          Pripadá vám nemčina ťažká?<br />
          Je váš partner cudzinec a chce sa naučiť po slovensky?<br />
          Potrebujete preložiť dokumenty z/do nemeckého jazyka, prípadne skorigovať vaše texty?
        </SectionTitle>

        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        <Benefits data={benefitThre} />
      </section>

      <SectionTitle
        preTitle=""
        title="Naučíte sa komunikovať v priateľskej atmosfére"
      >
      </SectionTitle>
      <Video />


      <section id="about">
        <About />
      </section>


      <section id="cost">
        <Cost />
      </section>


      <SectionTitle
        preTitle="Testimonials"
        title="Čo o nás povedali naši zákazníci"
      >
        Ceníme si Váš názor a berieme ho vážne, iba tak môžme byť pre Vás naozaj užitočny.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Často kladené otázky">
        Pre ďalšie otázky sa neváhajte kontaktovať
      </SectionTitle>

      <Faq />
      {/* <Cta /> */}
    </Container>
  );
}

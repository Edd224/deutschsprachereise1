import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/OnlineUcenie4.jpg";
import benefitTwoImg from "../../public/img/OnlineUcenie3.jpg";
import benefitThreImg from "../../public/img/5.jpg";

const benefitOne = {
  title: "ONLINE KURZY",
  desc: "Vložte sa do našich rúk a spolu to dokážeme. Nemusíte nikam chodiť. Potrebujete len internet a chuť učiť sa.",                   
  image: benefitOneImg,
  bullets: [
    {
      title: "Prispôsobíme sa Vašim potrebám a osobnosti",
      desc: "Intenzitu, obsah, rozsah kurzu Vám prispôsobíme.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Pracujeme individuálne alebo v malých skupinkách",
      desc: "Naučíte sa komunikovať v priateľskej atmosfére.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Naučíte sa viac, ako si myslíte",
      desc: "Stratíte obavy hovoriť.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "PREKLADATEĽSKÁ ČINNOSŤ",
  desc: "Všeobecné texty, príručky, pracovné postupy, právne texty - pracovné zmluvy, zmluvy o diele, web-stránky, texty z oblasti turizmu a cestovného ruchu.Preklady konštrukcií a priemyslu, psychológie, pedagogiky, histórie, manažmentu, prírodných vied, literatúry - beletrie aj literatúry faktu a iné.  ",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Poskytujeme kvalitné preklady",
      desc: "",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Vyhotovíme aj expersný preklad do niekoľkých hodín.",
      desc: "",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Sme k dispozícii 12 hodín denne",
      desc: "",
      icon: <SunIcon />,
    },
  ],
};

const benefitThre = {
  title: "EDITORKÁ ČINNOSŤ",
  desc: "Ponúkame vám redakčné práce a korektúry.",
  image: benefitThreImg,
  bullets: [
    {
      title: "Ponúkame vám redakčné práce a korektúry vlastných alebo preložených textov rôzneho druhu.",
      desc: "",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Dbáme na gramatickú, štylistickú, syntaktickú, pravopisnú správnosť vašich textov a materiálov.",
      desc: "",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Sme odborne zdatní a skúsení korektori a radi vám pomôžeme opraviť chyby, preklepy a upraviť váš text na požadovanú úroveň.",
      desc: "",
      icon: <SunIcon />,
    },
  ],
};



export {benefitOne, benefitTwo, benefitThre};

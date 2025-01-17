import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import DecorationText from "../DecorationText";
import DownloadButton from "../../DownloadButton";

export default function CardHero() {
  return <TiltCard />;
}

const ROTATION_RANGE = 18.5;
const HALF_ROTATION_RANGE = 18.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      data-testid="cardHero"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      data-aos="zoom-in"
      className="relative h-[620px] w-full rounded-xl bg-[#3c88c4] shadow-md mt-20 shadow-black max-xl:h-[920px] max-xl:mt-4 max-sm:h-[calc(80vh)] max-[375px]:h-[calc(75vh)]"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4  rounded-xl flex  items-start drop-shadow-2xl shadow-lg bg-gradient-to-br from-[#306d9d] to-[#3c88c4] shadow-black/30 max-xl:flex-col"
      >
        <div className="  w-full flex flex-col  justify-center p-10 max-sm:py-4 max-sm:justify-start max-[490px]:px-5 ">
          <h3
            className="text-xl  [text-shadow:_0_2px_0_rgb(0_0_0_/70%)] font-medium text-zinc-200 mb-20 max-sm:mb-10 max-[490px]:text-base max-[490px]:flex max-[490px]:items-center max-[420px]:text-sm  max-[420px]:mb-6 max-[375px]:mb-4 max-[375px]:text-xs"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Olá! Eu sou o
            <DecorationText />
          </h3>
          <h1
            className="text-5xl font-bold text-zinc-100 mb-10 [text-shadow:_0_2px_0_rgb(0_0_0_/70%)] max-xl:text-4xl max-sm:text-3xl max-[490px]:text-2xl max-[375px]:text-xl max-[375px]:mb-8"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Desenvolvedor Front End
          </h1>
          <p
            className="text-zinc-100 text-xl mb-20 leading-8 font-light w-[850px] [text-shadow:_0_2px_0_rgb(0_0_0_/30%)] max-xl:w-3/4 max-md:w-full max-sm:text-lg max-[490px]:text-base max-[375px]:text-sm max-[375px]:mb-8"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            Tenho experiência na criação de aplicações web responsivas,
            otimização de desempenho e implementação de funcionalidades
            dinâmicas. Sou proativo, atento aos detalhes e gosto de colaborar em
            equipe para alcançar objetivos comuns. Dedico-me a aprimorar
            continuamente minhas habilidades, aprender novas tecnologias e
            seguir as melhores práticas de desenvolvimento.
          </p>
          <DownloadButton />
          <div className="relative hidden max-sm:block mt-20 "></div>
        </div>
      </div>
    </motion.div>
  );
};

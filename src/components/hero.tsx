"use client";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

export default function Hero() {
  return (
    <section className="container mx-auto max-w-3xl mt-16 text-center px-5">
      <Slide direction="up">
        <h1 className="text-4xl sm:text-5xl leading-normal sm:leading-normal tracking-tight mb-4">
          Somos uma agência digital, que cria experiências online
          impressionantes e envolventes
        </h1>
      </Slide>

      <Fade direction="up" delay={500}>
        <p className="max-w-xl mx-auto text-base sm:text-lg font-medium leading-loose text-gray-300">
          Nós nos concentramos nas melhores práticas para soluções e serviços de
          design e desenvolvimento de sites e aplicativos.
        </p>
      </Fade>

      <Fade delay={750} duration={2000}>
        <Image
          src="/website.webp"
          alt="MZN App Lab"
          width={768}
          height={768}
          className="mx-auto mt-8"
        />
      </Fade>
    </section>
  );
}

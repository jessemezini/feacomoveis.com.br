"use client";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

export default function Hero() {
  return (
    <div className="overflow-x-hidden">
      <section className="container mx-auto max-w-3xl lg:max-w-4xl mt-8 sm:mt-16 text-center px-5 relative">
        <Slide direction="up" triggerOnce>
          <h1 className="text-2xl leading-normal sm:text-4xl sm:leading-normal md:text-5xl md:leading-normal tracking-tight mb-4">
            Somos uma agência digital, que cria experiências online
            impressionantes e envolventes
          </h1>
        </Slide>

        <Fade direction="up" delay={500} triggerOnce>
          <p className="max-w-2xl mx-auto text-base sm:text-lg font-medium leading-loose text-base-content/70">
            Nós nos concentramos nas melhores práticas para soluções e serviços
            de design e desenvolvimento de sites e aplicativos.
          </p>
        </Fade>

        <Fade delay={750} duration={1000} triggerOnce>
          <Image
            src="/undraw2.svg"
            alt="MZN App Lab"
            width={768}
            height={768}
            className="mx-auto mt-8 rounded-2xl"
            quality={100}
          />
        </Fade>
      </section>
    </div>
  );
}

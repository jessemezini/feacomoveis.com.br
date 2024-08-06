"use client";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";
import { IoCodeOutline, IoCodeSlashOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="overflow-x-hidden">
      <section className="container mx-auto max-w-3xl mt-16 text-center px-5 relative">
        <IoCodeOutline
          size={600}
          className="max-md:hidden absolute -top-20 -left-3/4 text-secondary/15 -rotate-12"
        />

        <IoCodeSlashOutline
          size={600}
          className="max-md:hidden absolute -top-20 -right-3/4 text-secondary/15 rotate-12"
        />

        <Slide direction="up" triggerOnce>
          <h1 className="text-4xl sm:text-5xl leading-normal sm:leading-normal tracking-tight mb-4">
            Somos uma agência digital, que cria experiências online
            impressionantes e envolventes
          </h1>
        </Slide>

        <Fade direction="up" delay={500} triggerOnce>
          <p className="max-w-xl mx-auto text-base sm:text-lg font-medium leading-loose text-base-content/80">
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

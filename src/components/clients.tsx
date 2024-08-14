"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const data = [
  {
    img: "/clients/prefeitura-iracemapolis.webp",
    alt: "Prefeitura de Iracemapolis",
    w: 72,
    h: 63,
    img2: "/clients/dueamici.webp",
    alt2: "Pizzaria Due Amici",
    w2: 72,
    h2: 72,
  },
  {
    img: "/clients/gazeta-de-iracemapolis.webp",
    alt: "Gazeta de Iracemapolis",
    w: 72,
    h: 12,
    img2: "/clients/dangelo-corretor.webp",
    alt2: "Dangelo Corretor",
    w2: 72,
    h2: 41,
  },
  {
    img: "/clients/medite-em-casa.webp",
    alt: "App Medite em Casa",
    w: 68,
    h: 72,
    img2: "/clients/conveniencia-uniao.webp",
    alt2: "Conveniência União",
    w2: 43,
    h2: 72,
  },
  {
    img: "/clients/praticar-italiano.webp",
    alt: "Blog Praticar Italiano",
    w: 72,
    h: 37,
    img2: "/clients/conectimme.webp",
    alt2: "Conectimme",
    w2: 72,
    h2: 16,
  },
  {
    img: "/clients/j3a-metais.webp",
    alt: "J3A Metais",
    w: 72,
    h: 22,
    img2: "/clients/castelli.webp",
    alt2: "Pizzaria Castelli",
    w2: 72,
    h2: 67,
  },
  {
    img: "/clients/emporio-da-terra.webp",
    alt: "Empório da Terra",
    w: 72,
    h: 47,
    img2: "/clients/onibus-iracemapolis.webp",
    alt2: "App Ônibus Iracemápolis",
    w2: 72,
    h2: 72,
  },
];

export default function Clients() {
  return (
    <section className="container max-w-screen-lg mx-auto my-24">
      <h2 className="text-center text-2xl leading-normal tracking-tight mb-10">
        Alguns de nossos clientes
      </h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={28}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 28,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 28,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center gap-y-7">
              <div className="bg-base-200/50 shadow-sm w-28 h-28 p-3 flex justify-center items-center grayscale-[50%]">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  quality={100}
                />
              </div>
              <div className="bg-base-200/50 shadow-sm w-28 h-28 p-3 flex justify-center items-center grayscale-[50%]">
                <Image
                  src={item.img2}
                  alt={item.alt2}
                  width={item.w2}
                  height={item.h2}
                  quality={100}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center gap-y-7">
            <div className="bg-base-200/50 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
              <Image
                src="/clients/prefeitura-iracemapolis.webp"
                alt="Prefeitura de Iracemapolis"
                width={72}
                height={72}
                quality={100}
              />
            </div>
            <div className="bg-base-200/50 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
              <Image
                src="/clients/dueamici.webp"
                alt="Pizzaria Due Amici"
                width={72}
                height={72}
                quality={100}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-center items-center gap-y-7">
            <div className="bg-base-200/50 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
              <Image
                src="/clients/gazeta-de-iracemapolis.webp"
                alt="Gazeta de Iracemapolis"
                width={72}
                height={72}
                quality={100}
              />
            </div>
            <div className="bg-gray-700 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
              <Image
                src="/clients/dangelo-corretor.webp"
                alt="Dangelo Corretor"
                width={72}
                height={72}
                quality={100}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-center items-center gap-y-7">
            <div className="bg-gray-700 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
              <Image
                src="/clients/medite-em-casa.webp"
                alt="App Medite em Casa"
                width={60}
                height={60}
                quality={100}
              />
            </div>
            <div className="bg-base-200/50 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
              <Image
                src="/clients/conveniencia-uniao.webp"
                alt="Conveniência União"
                width={52}
                height={52}
                quality={100}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-center items-center gap-y-7">
            <div className="bg-base-200/50 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
              <Image
                src="/clients/praticar-italiano.webp"
                alt="Blog Praticar Italiano"
                width={72}
                height={72}
                quality={100}
              />
            </div>
            <div className="bg-gray-700 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
              <Image
                src="/clients/conectimme.webp"
                alt="Conectimme"
                width={72}
                height={72}
                quality={100}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-center items-center gap-y-7">
            <div className="bg-base-200/50 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
              <Image
                src="/clients/emporio-da-terra.webp"
                alt="Empório da Terra"
                width={72}
                height={72}
                quality={100}
              />
            </div>
            <div className="bg-base-200/50 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
              <Image
                src="/clients/castelli.webp"
                alt="Pizzaria Castelli"
                width={72}
                height={72}
                quality={100}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-center items-center gap-y-7">
            <div className="bg-gray-700  rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
              <Image
                src="/clients/j3a-metais.webp"
                alt="J3A Metais"
                width={72}
                height={72}
                quality={100}
              />
            </div>

            <div className="bg-base-200/50 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
              <Image
                src="/clients/onibus-iracemapolis.webp"
                alt="App Ônibus Iracemápolis"
                width={72}
                height={72}
                quality={100}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const data = [
  {
    text: "A MZN Digital fez um trabalho incrível no desenvolvimento do meu site. O Jesse foi muito prestativo durante todo o processo, explicando cada detalhe e certificando-se de que eu estava satisfeita em cada etapa. O resultado final foi além do que eu esperava. Definitivamente recomendaria a MZN para qualquer pessoa precisando de um site de qualidade.",
    name: "Érica Neves",
    businessName: "J3A Metais",
  },
  {
    text: "Trabalhar com o Jesse Mezini e a equipe da MZN Digital foi uma experiência incrível. Desde o início, eles entenderam exatamente o que eu precisava e transformaram minhas ideias em um aplicativo funcional e esteticamente agradável. A dedicação ao projeto e a atenção aos detalhes realmente se destacaram. Estou extremamente satisfeito com o resultado e recomendo a MZN Digital para quem procura serviços de design e desenvolvimento de alta qualidade.",
    name: "Fabio Lima",
    businessName: "Meditar para Despertar",
  },
  {
    text: "Eu tinha uma visão clara do que queria para o meu site, e o Jesse e sua equipe da MZN Digital superaram minhas expectativas. Eles foram extremamente profissionais, criativos e rápidos em entregar exatamente o que eu imaginava. A comunicação foi excelente, e o suporte durante todo o processo fez com que me sentisse em boas mãos. Recomendo o trabalho.",
    name: "André Martinatti",
    businessName: "Gazeta de Iracemápolis",
  },
  {
    text: "Trabalhar com a MZN Digital foi uma decisão acertada. O Jesse realmente se destacou ao compreender o meu negócio e aplicar isso no design do site. Fiquei impressionado com a capacidade deles de equilibrar funcionalidade e estilo. Desde o primeiro contato até o lançamento, todo o processo foi tranquilo e eficiente.",
    name: "Sebastião Cordeiro",
    businessName: "Empório da Terra",
  },
  {
    text: "Jesse e a equipe da MZN Digital criaram um site que não só é lindo, mas também fácil de navegar e incrivelmente rápido. Desde o início até a entrega final, senti que estava em parceria com uma equipe dedicada. Estou muito satisfeito com o resultado!",
    name: "Jhonatan Oliveira",
    businessName: "Pizza da Casa",
  },
  {
    text: "Temos nosso cardápio online desde 2016 e estamos muitos satisfeitos com o resultado e feedback de nossos clientes. Recomendo.",
    name: "Renato Rizzo",
    businessName: "Pastelaria do Gordão",
  },
];

export default function Testimonials() {
  return (
    <section className="my-20">
      <h2 className="text-center text-2xl leading-normal tracking-tight mb-10">
        Depoimentos
      </h2>
      <div className="container mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gradient-to-br from-base-200 to-base-200/10 shadow-sm p-9 prose rounded-lg">
                <blockquote>{item.text}</blockquote>
                <div className="mt-5">
                  <h4>{item.name}</h4>
                  <p>{item.businessName}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

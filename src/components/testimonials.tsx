"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Testimonials() {
  return (
    <section className="my-20">
      <h2 className="text-center text-2xl leading-normal tracking-tight mb-10">
        Depoimentos de nossos clientes
      </h2>
      <div className="container mx-auto">
        <Swiper
          className="[&>.swiper-pagination-bullet-active]:bg-slate-300"
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
          <SwiperSlide>
            <div className="bg-base-200/50 p-10 prose rounded-2xl">
              <blockquote>
                We deliver on such an expansive with innovation agenda with so
                many theme projects going on at any time, it can be hard to
                maintain momentum. So We appreciate to work with them.
              </blockquote>
              <div className="mt-5">
                <h4>Deanna Hodges</h4>
                <p>Business HR Admin</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-base-200/50 p-10 prose rounded-2xl">
              <blockquote>
                We deliver on such an expansive with innovation agenda with so
                many theme projects going on at any time, it can be hard to
                maintain momentum. So We appreciate to work with them.
              </blockquote>
              <div className="mt-5">
                <h4>Deanna Hodges</h4>
                <p>Business HR Admin</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-base-200/50 p-10 prose rounded-2xl">
              <blockquote>
                We deliver on such an expansive with innovation agenda with so
                many theme projects going on at any time, it can be hard to
                maintain momentum. So We appreciate to work with them.
              </blockquote>
              <div className="mt-5">
                <h4>Deanna Hodges</h4>
                <p>Business HR Admin</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-base-200/50 p-10 prose rounded-2xl">
              <blockquote>
                We deliver on such an expansive with innovation agenda with so
                many theme projects going on at any time, it can be hard to
                maintain momentum. So We appreciate to work with them.
              </blockquote>
              <div className="mt-5">
                <h4>Deanna Hodges</h4>
                <p>Business HR Admin</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

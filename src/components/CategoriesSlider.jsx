// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import { categories } from "../data/categories";

export default function CategoriesSlider() {
  return (
    <div className="bg-primary h-96 -mt-8 flex flex-col justify-center gap-y-4">
      <div className="prose text-center mx-auto mt-5">
        <h3 className="text-primary-content">Encontre por Categoria</h3>
      </div>
      <div className="container mx-auto">
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            425: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index} className="text-primary-content p-5">
              <a href={`/produtos?category=${category.name}`}>
                <div className="flex justify-center items-center bg-base-100 shadow-md rounded-full w-32 h-32 mx-auto">
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="object-contain h-40 mx-auto"
                  />
                </div>
                <p className="text-center my-5">{category.name}</p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

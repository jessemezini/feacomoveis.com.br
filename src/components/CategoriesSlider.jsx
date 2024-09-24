// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const categories = [
  {
    name: "Armário de Ferramentas",
    categoryName: "armarios-de-ferramentas",
    imageUrl: "../../src/assets/images/categories/armarios-de-ferramentas.png",
  },
  {
    name: "Armários de Ferramentas Balcão",
    categoryName: "armarios-de-ferramentas-balcao",
    imageUrl:
      "../../src/assets/images/categories/armarios-de-ferramentas-balcao.png",
  },
  {
    name: "Armários",
    categoryName: "armarios",
    imageUrl: "../../src/assets/images/categories/armarios.png",
  },
  {
    name: "Estantes",
    categoryName: "estantes",
    imageUrl: "../../src/assets/images/categories/estantes.png",
  },
  {
    name: "Roupeiros GRP",
    categoryName: "roupeiros-grp",
    imageUrl: "../../src/assets/images/categories/roupeiros-grp.png",
  },
  {
    name: "Carrinhos Auxiliares",
    categoryName: "carrinhos-auxiliares",
    imageUrl: "../../src/assets/images/categories/carrinhos-auxiliares.png",
  },
  {
    name: "Suportes",
    categoryName: "suportes",
    imageUrl: "../../src/assets/images/categories/suportes.png",
  },
];

export default function CategoriesSlider() {
  return (
    <div class="bg-primary h-96 -mt-8 flex flex-col justify-center gap-y-4">
      <div class="prose text-center mx-auto mt-5">
        <h3 class="text-primary-content">Encontre por Categoria</h3>
      </div>
      <div class="container mx-auto">
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
              <a href={`/produtos?category=${category.categoryName}`}>
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

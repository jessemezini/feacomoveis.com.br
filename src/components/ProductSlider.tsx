// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

interface ProductSlider {
  images: string[];
  alt: string;
}

export default function ProductSlider({ images, alt }: ProductSlider) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <img
              src={image}
              alt={alt}
              className="object-contain h-[500px] mx-auto p-5 mb-1 sm:mb-5"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

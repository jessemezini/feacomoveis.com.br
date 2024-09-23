// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

interface ProductSlider {
  images: string[];
  alt: string;
}

export default function ProductSlider({ images, alt }: ProductSlider) {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {images.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} alt={alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

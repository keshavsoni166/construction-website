'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function HeroSlider({ images }: any) {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop
      autoplay
    >
      {images.map((img: string, i: number) => (
        <SwiperSlide key={i}>
          <img
            src={img}
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
"use client"

import Link from "next/link"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

import { urlFor } from "@/sanity/lib/image"

export default function ProjectsSlider({ projects }: any) {

  return (

    <section
      id="projects"
      className="py-24 bg-[#f8f5f2]"
    >

      <div className="max-w-7xl mx-auto px-5">

        <div className="flex justify-between items-end mb-16">

          <div>

            <p className="uppercase tracking-[4px] text-[#b67859] text-sm mb-4">
              Portfolio
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              Featured Projects
            </h2>

          </div>

        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={25}
          slidesPerView={1.1}
          breakpoints={{
            640: {
              slidesPerView: 1.3,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2.5,
            },
          }}
        >

          {projects.map((project: any) => (

            <SwiperSlide key={project._id}>

              <Link
                href={`/project/${project?.slug?.current}`}
                className="group block"
              >

                <div className="relative h-[350px] md:h-[500px] overflow-hidden rounded-[30px]">

                  <Image
                    src={
                      project?.mainImage
                        ? urlFor(project.mainImage).url()
                        : "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                    }
                    alt={project.title}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="
                    object-cover
                    group-hover:scale-110
                    transition duration-700
                    "
                  />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

                  <div className="absolute bottom-0 left-0 p-8 text-white">

                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {project.title}
                    </h3>

                    <p className="uppercase tracking-[3px] text-sm text-gray-200">
                      View Project
                    </p>

                  </div>

                </div>

              </Link>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  )
}
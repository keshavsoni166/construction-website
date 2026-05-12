// "use client"

// import Link from "next/link"
// import Image from "next/image"

// import { Swiper, SwiperSlide } from "swiper/react"
// import { Navigation } from "swiper/modules"

// import "swiper/css"
// import "swiper/css/navigation"

// import { urlFor } from "@/sanity/lib/image"

// export default function ProjectsSlider({ projects }: any) {

//   return (

//     <section
//       id="projects"
//       className="py-24 bg-[#f8f5f2]"
//     >

//       <div className="max-w-7xl mx-auto px-5">

//         <div className="flex justify-between items-end mb-16">

//           <div>

//             <p className="uppercase tracking-[4px] text-[#b67859] text-sm mb-4">
//               Portfolio
//             </p>

//             <h2 className="text-3xl md:text-5xl font-bold">
//               Featured Projects
//             </h2>

//           </div>

//         </div>

//         <Swiper
//           modules={[Navigation]}
//           navigation
//           spaceBetween={25}
//           slidesPerView={1.1}
//           breakpoints={{
//             640: {
//               slidesPerView: 1.3,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//             1200: {
//               slidesPerView: 2.5,
//             },
//           }}
//         >

//           {projects.map((project: any) => (

//             <SwiperSlide key={project._id}>

//               <Link
//                 href={`/project/${project?.slug?.current}`}
//                 className="group block"
//               >

//                 <div className="relative h-[350px] md:h-[500px] overflow-hidden rounded-[30px]">

//                   <Image
//                     src={
//                       project?.mainImage
//                         ? urlFor(project.mainImage).url()
//                         : "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
//                     }
//                     alt={project.title}
//                     fill
//                     sizes="(max-width:768px) 100vw, 50vw"
//                     className="
//                     object-cover
//                     group-hover:scale-110
//                     transition duration-700
//                     "
//                   />

//                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

//                   <div className="absolute bottom-0 left-0 p-8 text-white">

//                     <h3 className="text-2xl md:text-3xl font-bold mb-2">
//                       {project.title}
//                     </h3>

//                     <p className="uppercase tracking-[3px] text-sm text-gray-200">
//                       View Project
//                     </p>

//                   </div>

//                 </div>

//               </Link>

//             </SwiperSlide>

//           ))}

//         </Swiper>

//       </div>

//     </section>
//   )
// }

"use client"

import Link from "next/link"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"

import {
  Navigation,
  Pagination,
} from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { urlFor } from "@/sanity/lib/image"

import Reveal from "./Reveal"

export default function ProjectsSlider({
  projects,
}: {
  projects: any[]
}) {

  return (

    <section
      id="projects"
      className="
        py-28
        md:py-36
        bg-[#f8f5f2]
        overflow-hidden
      "
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <Reveal>

          <div className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-end
            gap-8
            mb-16
          ">

            <div>

              <p className="
                uppercase
                tracking-[4px]
                text-[#b67859]
                text-sm
                mb-4
              ">
                Portfolio
              </p>

              <h2 className="
                text-4xl
                md:text-6xl
                font-bold
                tracking-tight
              ">
                Featured Projects
              </h2>

            </div>

            {/* CUSTOM ARROWS */}
            <div className="flex gap-4">

              <button className="
                projects-prev
                w-14
                h-14
                rounded-full
                border
                border-[#d8cfc8]
                bg-white
                hover:bg-[#b67859]
                hover:text-white
                transition-all
                duration-300
                text-xl
              ">
                ←
              </button>

              <button className="
                projects-next
                w-14
                h-14
                rounded-full
                border
                border-[#d8cfc8]
                bg-white
                hover:bg-[#b67859]
                hover:text-white
                transition-all
                duration-300
                text-xl
              ">
                →
              </button>

            </div>

          </div>

        </Reveal>

        {/* SLIDER */}
        <Swiper

          modules={[Navigation, Pagination]}

          navigation={{
            prevEl: ".projects-prev",
            nextEl: ".projects-next",
          }}

          pagination={{
            clickable: true,
          }}

          spaceBetween={30}

          slidesPerView={1}

          breakpoints={{
            768: {
              slidesPerView: 1.2,
            },
            1200: {
              slidesPerView: 1.5,
            },
          }}
        >

          {projects.map((project, index) => (

            <SwiperSlide key={project._id}>

              <Reveal>

                <Link
                  href={`/project/${project.slug?.current}`}
                  className="group block"
                >

                  <div className="
                    relative
                    h-[550px]
                    md:h-[720px]
                    rounded-[40px]
                    overflow-hidden
                    shadow-xl
                  ">

                    {/* IMAGE */}
                    <Image
                      src={
                        project.mainImage
                          ? urlFor(project.mainImage).url()
                          : "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                      }
                      alt={project.title}
                      fill
                      unoptimized
                      sizes="(max-width:768px) 100vw, 70vw"
                      className="
                        object-cover
                        group-hover:scale-110
                        transition
                        duration-[1800ms]
                        ease-out
                      "
                    />

                    {/* OVERLAY */}
                    <div className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/20
                      to-transparent
                    " />

                    {/* CONTENT */}
                    <div className="
                      absolute
                      bottom-0
                      left-0
                      w-full
                      p-8
                      md:p-12
                      text-white
                    ">

                      <div className="
                        flex
                        justify-between
                        items-end
                        gap-6
                      ">

                        <div>

                          <p className="
                            uppercase
                            tracking-[4px]
                            text-xs
                            text-[#d6a27d]
                            mb-4
                          ">
                            Project {index + 1}
                          </p>

                          <h3 className="
                            text-3xl
                            md:text-5xl
                            font-bold
                            leading-tight
                            mb-4
                          ">
                            {project.title}
                          </h3>

                        </div>

                        {/* ARROW */}
                        <div className="
                          w-16
                          h-16
                          rounded-full
                          border
                          border-white/30
                          backdrop-blur-md
                          flex
                          items-center
                          justify-center
                          text-2xl
                          group-hover:translate-x-2
                          transition
                          duration-500
                        ">
                          ↗
                        </div>

                      </div>

                    </div>

                  </div>

                </Link>

              </Reveal>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  )
}
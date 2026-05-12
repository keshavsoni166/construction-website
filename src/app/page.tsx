import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

import { client } from "@/sanity/client";
import ProjectsSlider from "@/components/ProjectsSlider";

import Reveal from "@/components/Reveal";
import HeroAnimation from "@/components/HeroAnimation";

async function getProjects() {
  return client.fetch(`
    *[_type == "project"] | order(_createdAt desc){
      _id,
      title,
      slug,
      location,
      mainImage
    }
  `);
}

export default async function Home() {


  let projects = [];
  // deployment can fail if sanity fetch fails, so we catch errors here
  try {
    projects = await getProjects();
    } catch (error) {
      console.log("Sanity fetch failed:", error);
  }

  return (
    <main className="bg-[#f8f5f2] text-[#2b2b2b] overflow-hidden">

      {/* HERO */}
      <section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <Image
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
          alt="Hero"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover scale-110 animate-[slowZoom_12s_ease-in-out_forwards]"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        {/* GLOW */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 z-[2]" />

        {/* NAVBAR */}
        <Navbar />

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center text-white max-w-6xl px-6">

          <HeroAnimation delay={0.2}>

            <p className="uppercase tracking-[6px] text-xs sm:text-sm mb-6 text-[#d6a27d]">

              Crafting Luxury Spaces

            </p>

          </HeroAnimation>

          <HeroAnimation delay={0.5}>

            <h1 className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-8xl
              font-bold
              leading-[1.05]
              tracking-[-2px]
              mb-8
            ">

              We Build Your
              <span className="text-[#d6a27d]"> Vision </span>
              Into Reality

            </h1>

          </HeroAnimation>

          <HeroAnimation delay={0.8}>

            <p className="
              text-base
              sm:text-lg
              md:text-xl
              text-gray-200
              max-w-3xl
              mx-auto
              leading-relaxed
              mb-10
            ">

              From luxury homes to commercial projects —
              we deliver world-class architecture,
              construction, and interior experiences.

            </p>

          </HeroAnimation>

          <HeroAnimation delay={1.1}>

            <div className="
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-4
              sm:gap-6
            ">

              <a
                href="#projects"
                className="
                  bg-[#c78665]
                  hover:bg-[#ad6f51]
                  transition-all
                  duration-300
                  px-8
                  py-4
                  rounded-full
                  font-medium
                  shadow-xl
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                  border
                  border-white/70
                  backdrop-blur-sm
                  hover:bg-white
                  hover:text-black
                  transition-all
                  duration-300
                  px-8
                  py-4
                  rounded-full
                  font-medium
                "
              >
                Get In Touch
              </a>

            </div>

          </HeroAnimation>

        </div>

      </section>

      {/* STATS */}
      <Reveal>

        <section className="bg-[#b67859] text-white py-14">

          <div className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-2
            md:grid-cols-4
            gap-10
            text-center
            px-6
          ">

            {[
              ["500+", "Projects Completed"],
              ["20+", "Years Experience"],
              ["150+", "Expert Team"],
              ["98%", "Client Satisfaction"],
            ].map(([number, label]) => (

              <div key={label}>

                <h2 className="text-4xl md:text-5xl font-bold">
                  {number}
                </h2>

                <p className="mt-2 text-xs md:text-sm uppercase tracking-wider">
                  {label}
                </p>

              </div>

            ))}

          </div>

        </section>

      </Reveal>

      {/* SERVICES */}
      <Reveal>

        <section
          id="services"
          className="py-24 md:py-32 px-6"
        >

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <HeroAnimation delay={0.2}>

                <p className="uppercase tracking-[4px] text-[#b67859] text-sm mb-4">
                  What We Do
                </p>

              </HeroAnimation>

              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Our Services
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {[
                "Residential Buildings",
                "Commercial Construction",
                "Civil Engineering",
                "Interior Design",
              ].map((service, index) => (

                <div
                  key={service}
                  className="
                    bg-white
                    rounded-[32px]
                    p-10
                    shadow-sm
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-500
                    border
                    border-[#eee]
                  "
                >

                  <div className="
                    w-14
                    h-14
                    rounded-full
                    bg-[#f3e2d8]
                    mb-8
                  " />

                  <div className="text-sm text-[#b67859] mb-3">
                    0{index + 1}
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {service}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Premium construction solutions crafted with
                    precision and timeless aesthetics.
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

      </Reveal>

      {/* PROJECT SLIDER */}
      {/* deployment can fail if sanity fetch fails, so we conditionally render the slider only if we have projects */}
      {projects?.length > 0 && (
        <ProjectsSlider projects={projects} />
      )}

      {/* ABOUT */}
      <Reveal>

        <section className="py-24 md:py-32 px-6 bg-white">

          <div className="
            max-w-7xl
            mx-auto
            grid
            md:grid-cols-2
            gap-16
            items-center
          ">

            {/* IMAGE */}
            <div className="
              relative
              h-[400px]
              md:h-[650px]
              rounded-[40px]
              overflow-hidden
              shadow-2xl
            ">

              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                alt="About"
                fill
                unoptimized
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition duration-700"
              />

            </div>

            {/* CONTENT */}
            <div>

              <p className="uppercase tracking-[4px] text-[#b67859] text-sm mb-4">
                About Us
              </p>

              <h2 className="
                text-4xl
                md:text-6xl
                font-bold
                leading-tight
                tracking-tight
                mb-8
              ">
                Designing Timeless Spaces
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">

                We combine innovation, architecture,
                and craftsmanship to deliver luxury
                residential and commercial projects
                that stand the test of time.

              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-10">

                Our focus is creating elegant spaces
                with exceptional detail and modern aesthetics.

              </p>

              <Link
                href="#contact"
                className="
                  inline-flex
                  items-center
                  bg-[#c78665]
                  hover:bg-[#ad6f51]
                  text-white
                  px-8
                  py-4
                  rounded-full
                  transition-all
                  duration-300
                "
              >
                Contact Us
              </Link>

            </div>

          </div>

        </section>

      </Reveal>

      {/* CONTACT */}
      <Reveal>

        <section
          id="contact"
          className="bg-[#221d1a] text-white py-24 md:py-32 px-6"
        >

          <div className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            md:grid-cols-2
            gap-16
            md:gap-24
          ">

            {/* LEFT */}
            <div>

              <p className="uppercase tracking-[4px] text-[#d6a27d] text-sm mb-4">
                Contact
              </p>

              <h2 className="
                text-4xl
                md:text-6xl
                font-bold
                leading-tight
                tracking-tight
                mb-8
              ">
                Start Your Project Today
              </h2>

              <p className="text-gray-300 leading-relaxed mb-14 text-lg">

                Ready to build something extraordinary?
                Contact our team for premium architecture,
                construction, and interior solutions.

              </p>

              <div className="space-y-10">

                {/* ADDRESS */}
                <div>

                  <h3 className="text-lg font-semibold text-[#d6a27d] mb-2">
                    Office Address
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    Old Itarsi, Madhya Pradesh 461111
                  </p>

                </div>

                {/* PHONE */}
                <div>

                  <h3 className="text-lg font-semibold text-[#d6a27d] mb-2">
                    Phone Number
                  </h3>

                  <a
                    href="tel:+919630787857"
                    className="text-gray-300 hover:text-white transition"
                  >
                    +91 96307 87857
                  </a>

                </div>

                {/* EMAIL */}
                <div>

                  <h3 className="text-lg font-semibold text-[#d6a27d] mb-2">
                    Email Address
                  </h3>

                  <a
                    href="mailto:contact@hometechstudio.com"
                    className="text-gray-300 hover:text-white transition"
                  >
                    contact@hometechstudio.com
                  </a>

                </div>

                {/* MAP */}
                <div className="pt-2">

                  <a
                    href="https://maps.app.goo.gl/C7iV3rch2w8msgan7"
                    target="_blank"
                    className="
                      inline-flex
                      items-center
                      gap-3
                      border
                      border-[#4b433e]
                      hover:bg-white
                      hover:text-black
                      transition-all
                      duration-300
                      px-6
                      py-4
                      rounded-full
                    "
                  >
                    Open office location in maps
                  </a>

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <ContactForm />

          </div>

        </section>

      </Reveal>

      {/* FOOTER */}
      <footer className="bg-[#181411] text-gray-400 py-10 text-center text-sm">

        © 2026 Hometech Studio. All rights reserved.

      </footer>

    </main>
  );
}


// export default function Home() {
//   return (
//     <main
//       style={{
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         fontSize: "40px",
//       }}
//     >
//       WEBSITE WORKING
//     </main>
//   )
// }
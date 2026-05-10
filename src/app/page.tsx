import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar"

import ContactForm from "@/components/ContactForm";

import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/lib/image";

import ProjectsSlider from "@/components/ProjectsSlider";

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

  const projects = await getProjects();

  return (
    <main className="bg-[#f8f5f2] text-[#2b2b2b] overflow-hidden">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">

        <Image
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
          alt="Hero"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        {/* NAVBAR */}
        {/* <nav className="absolute top-0 left-0 w-full z-20 px-10 py-6 flex justify-between items-center text-white">

          <div className="text-2xl font-bold">
            Hometech Studio
          </div>

          <div className=" hidden md:flex gap-8 text-sm uppercase tracking-wider">

            <a href="#">Home</a>
            <a href="#projects">Portfolio</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>

          </div>

        </nav> */}
        <Navbar />

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center text-white max-w-5xl px-5 sm:px-6 md:px-10">

          <p className="uppercase tracking-[6px] text-sm mb-6 text-[#d6a27d]">
            Crafting Luxury Spaces
          </p>

          <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-8 ">
            We Build Your
            <span className="text-[#d6a27d]"> Vision </span>
            Into Reality
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
            From luxury homes to commercial projects —
            we deliver world-class architecture,
            construction, and interior experiences.
          </p>

          <div className=" flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 ">

            <a
              href="#projects"
              className="bg-[#c78665] hover:bg-[#ad6f51] transition px-8 py-4 rounded-full"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full"
            >
              Get In Touch
            </a>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="bg-[#b67859] text-white py-14">

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-5xl font-bold">500+</h2>
            <p className="mt-2 text-sm uppercase tracking-wider">
              Projects Completed
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">20+</h2>
            <p className="mt-2 text-sm uppercase tracking-wider">
              Years Experience
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">150+</h2>
            <p className="mt-2 text-sm uppercase tracking-wider">
              Expert Team
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">98%</h2>
            <p className="mt-2 text-sm uppercase tracking-wider">
              Client Satisfaction
            </p>
          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-28 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[4px] text-[#b67859] text-sm mb-4">
              What We Do
            </p>

            <h2 className="text-5xl font-bold">
              Our Services
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Residential Buildings",
              "Commercial Construction",
              "Civil Engineering",
              "Interior Design",
            ].map((service) => (

              <div
                key={service}
                className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition duration-500"
              >

                <div className="w-14 h-14 rounded-full bg-[#f3e2d8] mb-8" />

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

      {/* PROJECT SLIDER */}
      <ProjectsSlider projects={projects} />

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#221d1a] text-white py-28 px-6"
      >

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          <div>

  <p className="uppercase tracking-[4px] text-[#d6a27d] text-sm mb-4">
    Contact
  </p>

  <h2 className="text-5xl font-bold mb-8 leading-tight">
    Start Your Project Today
  </h2>

  <p className="text-gray-300 leading-relaxed mb-12">
    Ready to build something extraordinary?
    Contact our team for premium architecture,
    construction, and interior solutions.
  </p>

  <div className="space-y-8">

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

    {/* MAP BUTTON */}
    <div className="pt-4">

      <a
        href="https://maps.google.com"
        target="_blank"
        className="
          inline-flex
          items-center
          gap-3

          border
          border-[#4b433e]

          hover:bg-white
          hover:text-black

          transition

          px-6
          py-4

          rounded-full
        "
      >
        View on Google Maps
      </a>

    </div>

  </div>

</div>

          <ContactForm />

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#181411] text-gray-400 py-10 text-center text-sm">
        © 2026 Hometech Studio. All rights reserved.
      </footer>

    </main>
  );
}
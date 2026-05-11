import Image from "next/image";
import Link from "next/link";

import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/lib/image";

import ParallaxImage from "@/components/ParallaxImage";

import GalleryLightbox from "@/components/GalleryLightbox";

async function getProject(slug: string) {
  return client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0]{
      title,
      description,
      mainImage,
      gallery,
      date
    }
  `,
    { slug }
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = await getProject(slug);

  const galleryImages = project.gallery?.map(
  (img: any) => urlFor(img).url()
) || [];
 
  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center text-3xl">
        Project Not Found
      </div>
    );
  }

  return (
    <main className="bg-[#f7f3ef] text-[#1f1f1f] overflow-hidden">

      {/* HERO IMAGE */}
      <section className="relative h-screen w-full">

        <Image
          src={urlFor(project.mainImage).url()}
          alt={project.title}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute bottom-20 left-10 md:left-20 text-white z-10">

          <p className="uppercase tracking-[5px] text-sm mb-4 text-[#d6a27d]">
            Featured Project
          </p>

          <h1 className="text-5xl md:text-8xl font-bold max-w-5xl leading-tight">
            {project.title}
          </h1>

        </div>

      </section>

      {/* OVERVIEW */}
      <section className="py-28 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[4px] text-[#b67859] text-sm mb-6">
            Project Overview
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10">
            Timeless Design.
            <br />
            Built With Precision.
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {project.description}
          </p>

        </div>

      </section>

      {/* LARGE FEATURE IMAGE */}
      <section className="px-6 pb-24">
        <ParallaxImage>

          <div className="relative h-[80vh] rounded-[40px] overflow-hidden max-w-7xl mx-auto">

            <Image
              src={urlFor(project.mainImage).url()}
              alt={project.title}
              fill
              unoptimized
              sizes="100vw"
              className="object-cover hover:scale-105 transition duration-700"
            />

          </div>
        </ParallaxImage>
      </section>

      {/* GALLERY */}
      {project.gallery && project.gallery.length > 0 && (

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="mb-16 text-center">

              <p className="uppercase tracking-[4px] text-[#b67859] text-sm mb-4">
                Gallery
              </p>

              <h2 className="text-5xl font-bold">
                Visual Showcase
              </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {project.gallery.map((img: any, index: number) => (
                <ParallaxImage key={index}>
                <div
                  
                  className={`relative overflow-hidden rounded-[30px]
                  ${index % 3 === 0
                      ? "md:h-[700px]"
                      : "md:h-[500px]"
                    }
                  h-[400px] group`}
                  >
                    <GalleryLightbox
                      images={galleryImages}
                      index={index}
                      >
                      <Image
                        src={urlFor(img).url()}
                        alt="Gallery Image"
                        fill
                        unoptimized
                        sizes="(max-width:768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-110 transition duration-700"
                      />
                  </GalleryLightbox>
                </div>
                </ParallaxImage>
              ))}

            </div>

          </div>

        </section>

      )}

      {/* STORY SECTION */}
      <section className="bg-[#221d1a] text-white py-28 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[4px] text-[#d6a27d] text-sm mb-5">
              Design Philosophy
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Every Space
              <br />
              Tells A Story
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              We believe architecture is more than structures —
              it is emotion, experience, and timeless artistry.
              Every detail of this project was crafted with
              precision, elegance, and modern aesthetics.
            </p>

          </div>

          <div className="relative h-[500px] rounded-[30px] overflow-hidden">

            <Image
              src={urlFor(project.mainImage).url()}
              alt={project.title}
              fill
              unoptimized
              sizes="50vw"
              className="object-cover"
            />

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center">

        <p className="uppercase tracking-[4px] text-[#b67859] text-sm mb-4">
          Start Your Dream Project
        </p>

        <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-10">
          Let’s Build
          <br />
          Something Extraordinary
        </h2>

        <Link
          href="/#contact"
          className="inline-block bg-[#b67859] hover:bg-[#9d6144]
          text-white px-10 py-5 rounded-full transition duration-300"
        >
          Contact Us
        </Link>

      </section>

    </main>
  );
}
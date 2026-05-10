import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import Image from "next/image";
import Link from "next/link";

const query = `
*[_type == "project" && slug.current == $slug][0]{
  title,
  description,
  mainImage,
  gallery
}
`;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const project = await client.fetch(query, { slug });

  if (!project) {
    return (
      <div className="h-screen bg-black text-white flex items-center justify-center text-3xl">
        Project Not Found
      </div>
    );
  }

  return (
    <main className="bg-[#f5f1eb] text-black overflow-hidden">

      {/* HERO */}
      <section className="relative h-screen">

        <Image
          src={
            project.mainImage
              ? urlFor(project.mainImage).url()
              : "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
          }
          alt={project.title}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-20">

          <Link
            href="/"
            className="mb-8 text-white/70 hover:text-white transition text-sm tracking-[0.2em] uppercase"
          >
            ← Back to Projects
          </Link>

          <h1 className="text-5xl md:text-8xl font-bold text-white max-w-4xl leading-tight">
            {project.title}
          </h1>

        </div>

      </section>

      {/* DESCRIPTION */}
      <section className="py-32">

        <div className="max-w-5xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-20">

            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-[#9f7b66] mb-6">
                Project Overview
              </p>

              <h2 className="text-5xl font-bold leading-tight">
                Designed with elegance and modern architectural precision.
              </h2>
            </div>

            <div className="text-lg leading-[2] text-[#4b4b4b]">
              {project.description}
            </div>

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-8">

            {project.gallery?.map((img: any, index: number) => (

              <div
                key={index}
                className={`relative overflow-hidden rounded-[30px]
                ${index % 3 === 0 ? "md:col-span-2 h-[700px]" : "h-[500px]"}
                `}
              >

                <Image
                  src={urlFor(img).url()}
                  alt="Project Image"
                  fill
                  sizes="100vw"
                  className="object-cover hover:scale-105 transition duration-700"
                />

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
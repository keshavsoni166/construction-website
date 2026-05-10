import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projects",
  type: "document",

  fields: [

    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",

      options: {
        source: "title",
        maxLength: 96,
      },

      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),

    defineField({
      name: "area",
      title: "Area",
      type: "string",
    }),

    defineField({
      name: "cost",
      title: "Project Cost",
      type: "string",
    }),

    defineField({
      name: "date",
      title: "Completion Date",
      type: "date",
    }),

    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",

      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "gallery",
      title: "Gallery Images",

      type: "array",

      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),

  ],
});
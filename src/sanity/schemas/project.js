// export default {
//   name: 'project',
//   title: 'Project',
//   type: 'document',
//   fields: [
//     {
//       name: 'title',
//       title: 'Project Title',
//       type: 'string',
//     },
//     {
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//         maxLength: 96,
//       },
//     },
//     {
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//     },
//     {
//       name: 'mainImage',
//       title: 'Main Image',
//       type: 'image',
//       options: { hotspot: true },
//     },
//     {
//       name: 'gallery',
//       title: 'Gallery Images',
//       type: 'array',
//       of: [{ type: 'image' }],
//     },
//     {
//       name: 'date',
//       title: 'Project Date',
//       type: 'date',
//     },
//     {
//       name: 'area',
//       title: 'Area (sq ft)',
//       type: 'number',
//     },
//     {
//       name: 'cost',
//       title: 'Cost',
//       type: 'string',
//     },
//     {
//       name: 'location',
//       title: 'Location',
//       type: 'string',
//     },
//   ],
// };
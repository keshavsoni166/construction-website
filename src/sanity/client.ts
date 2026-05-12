// import { createClient } from "next-sanity";

// export const client = createClient({
//   projectId: "b7scsm0j",
//   dataset: "production",
//   apiVersion: "2024-01-01",
//   useCdn: false,
// });

import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true,
});
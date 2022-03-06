import sanityClient from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: "2021-10-21",
};

export default sanityClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

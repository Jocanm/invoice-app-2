import { extendTailwindMerge } from "tailwind-merge";

// TODO: figure out how to get this to work with the tailwind.config.js file
const twMerge = extendTailwindMerge({
  classGroups: {
    // Add a new class group
    // "hl", "hm", "hs", "hs-v", "body", "body-v"
    "font-size": [
      {
        // Add a new class
        hl: ["text-4xl", "leading-10"],
        hm: ["text-3xl", "leading-9"],
        hs: ["text-2xl", "leading-8"],
        "hs-v": ["text-xl", "leading-7"],
        body: ["text-base", "leading-6"],
        "body-v": ["text-sm", "leading-5"],
      },
    ],
  },
});

export default twMerge;

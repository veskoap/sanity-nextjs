import { Experience } from "../../page/types";

export const fetchExperiences = async () => {
  const res = await fetch('https://.../api/getExperience');

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  console.log("fetching", experiences)

  return experiences;
};

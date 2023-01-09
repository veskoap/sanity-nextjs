import { Social } from "../../page/types";

export const fetchSocials = async () => {
  const res = await fetch(`${process.env.VERCEL_URL}/api/getSocials`); 

  const data = await res.json();
  const socials: Social[] = data.socials;

  //console.log("fetching", skills)

  return socials;
};
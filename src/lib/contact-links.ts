export const CONTACT_LINKS = {
  email: "guilhermenstorti@gmail.com",
  linkedin: "https://linkedin.com/in/guilherme-navakoski-storti",
  whatsapp: "https://wa.me/5544999905592",
  phone: "+55 44 99990-5592",
  scheduleCall: "https://calendar.app.google/BKeoRpgz5FATNNQKA",
  github: "https://github.com/guilhermenstorti",
  substack: "https://onproductpath.substack.com",
} as const;

export const getCvLink = (language: string): string => {
  if (language === "en") {
    return "/portfolio/assets/docs/resume-guilherme-storti-pm.pdf";
  }
  return "/portfolio/assets/docs/cv-guilherme-storti-pm.pdf";
};

export const MAILTO_EMAIL_LINK = `mailto:${CONTACT_LINKS.email}`;

const cleanPhone = (phone) => phone?.replace(/\D/g, "");

const whatsappLink = (phone) =>
  phone ? `https://wa.me/${cleanPhone(phone)}` : null;

const instagramLink = (user) =>
  user ? `https://instagram.com/${user.replace("@", "")}` : null;

const xLink = (user) =>
  user ? `https://x.com/${user.replace("@", "")}` : null;

const linkedinLink = (url) => {
  if (!url) return "#";
  if (url.startsWith("http")) return url;
  const slug = url.trim().replace(/\s+/g, "-"); // reemplaza espacios por guiones
  return `https://linkedin.com/in/${slug}`;
};
export { instagramLink, xLink, linkedinLink, whatsappLink };
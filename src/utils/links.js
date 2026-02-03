const cleanPhone = (phone) => phone?.replace(/\D/g, "");

const whatsappLink = (phone) =>
  phone ? `https://wa.me/${cleanPhone(phone)}` : null;

const instagramLink = (user) =>
  user ? `https://instagram.com/${user.replace("@", "")}` : null;

const xLink = (user) =>
  user ? `https://x.com/${user.replace("@", "")}` : null;

const linkedinLink = (url) =>
  url?.startsWith("http") ? url : `https://${url}`;
export { whatsappLink, instagramLink, xLink, linkedinLink, cleanPhone };

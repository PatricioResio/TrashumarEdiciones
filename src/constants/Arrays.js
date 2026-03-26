import { scrollToContact } from "../hooks/useScrollToContact";
import { HOME_HERO_LCP_URL } from "./heroPreload";
export const pages = [
  {
    name: "NOSOTROS",
    path: "/nosotros",
  },
  {
    name: "LIBRERÍA",
    path: "/libreria",
  },
  {
    name: "COMUNIDAD",
    path: "/comunidad",
  },
  {
    name: "QUIERO PUBLICAR",
    path: "/publicar",
  },
];

/** Slides del carrusel Home. Opcional por slide: responsiveSrcs: { 640: url, 960: url, 1280: url, 1920: url } */
export const homeArrays = [
  {
    id: 1,
    url: HOME_HERO_LCP_URL,
    h2: "Trashumar Ediciones",
    textP:
      "Bienvenidos a Trashumar, una editorial nómada, federal e independiente. Publicamos voces y proyectos que cruzan fronteras.",
    buttonText: "¿Quéres trabajar con nosotros?",
    buttonLink: "/nosotros",
  },
  {
    id: 2,
    url: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/Home2.webp?alt=media&token=f6b7fc3a-3806-44e3-a793-fd35b2e83c5d",
    h2: "Contacto",
    textP:
      "Quéres contactarte con nosotros para hablar de trashumancias? seguí el boton.",
    buttonText: "Contactanos",
    buttonLink: "",
    function: scrollToContact,
  },
  {
    id: 3,
    url: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/Home3.webp?alt=media&token=1f7d3685-deea-4a96-9789-51882e928d89",
    h2: "Estamos formando una comunidad!",
    textP:
      "Registrate con tu cuenta y sé parte de Trashumar. Estamos en constante crecimiento y queremos que formes parte de esta red.",
    buttonText: "Ingresar",
    buttonLink: "/ingresa",
  },
];

export const historias = [
  {
    id: "0",
    title: "¿Porqué Trashumar?",
    posicion: "primero",
    url: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-1%20(frente)-min.webp?alt=media&token=4a2a6f33-7004-484c-a3c4-4387407e6a75",
  },
  {
    id: "1",
    title: "¿Y los libros qué?",
    posicion: "segundo",
    url: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-1%20(frente).webp?alt=media&token=aca4bfb4-0a32-4f02-aae5-227a573f8dfd",
  },
  {
    id: "2",
    title: "Las cosas como son",
    posicion: "tercero",
    url: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-1-min.webp?alt=media&token=22aae57a-4039-4d01-8307-1632c6354ce8",
  },
  {
    id: "3",
    title: "Para que nos entendamos",
    posicion: "cuarto",
    url: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-1-min.webp?alt=media&token=547317a1-5708-4c15-8e1c-54661073330f",
  },
];

export const imgArrayHistorias = [
  {
    id: "0",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-1%20(frente)-min.webp?alt=media&token=4a2a6f33-7004-484c-a3c4-4387407e6a75",
  },
  {
    id: "1",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-2-min.webp?alt=media&token=a9b08894-db20-4bef-b46d-8a6ce2b1e6db",
  },
  {
    id: "2",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-3-min.webp?alt=media&token=4781d395-ecce-46c9-8dea-b013f33a612c",
  },
  {
    id: "3",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-4-min.webp?alt=media&token=a81ff9a0-2e00-4c71-bb93-ca6aaa8d01b5",
  },
  {
    id: "4",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-5-min.webp?alt=media&token=54f96489-414e-440b-a0b5-6fea9474258e",
  },
  {
    id: "5",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-6-min.jpg?alt=media&token=221134b3-0d50-4183-bacc-24b39efd11c9",
  },
  {
    id: "6",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-7-min.webp?alt=media&token=ab88ec80-bcf0-47a1-b094-9aefb8eb735d",
  },
  {
    id: "7",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-8-min.webp?alt=media&token=9b742bf6-8d7f-4470-bcdb-c251f274399a",
  },
  {
    id: "8",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-9-min.webp?alt=media&token=efef89de-a086-482b-930f-3b69235a24f3",
  },
  {
    id: "9",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-10-min.webp?alt=media&token=6ae4bd20-0dce-4314-b532-14cc0cb25a7e",
  },
  {
    id: "10",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-11-min.webp?alt=media&token=f2f62cb4-fe43-46fa-9440-a29a563db637",
  },
  {
    id: "11",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-12-min.webp?alt=media&token=4ef29f3e-29a9-47a4-a5bd-14362058be1e",
  },
  {
    id: "12",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-13-min.webp?alt=media&token=10aba3ae-61cb-4bfd-ac2b-6b3e255309cb",
  },
  {
    id: "13",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-14-min.webp?alt=media&token=b7c76c7b-76fe-4b96-9798-0353fc4dc74a",
  },
  {
    id: "14",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-15-min.webp?alt=media&token=a068c84e-583b-48d3-af2a-6a253bdded69",
  },
  {
    id: "15",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-16-min.webp?alt=media&token=b14ed3fe-ad19-4aba-aec2-e73b755300d6",
  },

  {
    id: "17",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-1%20(frente).webp?alt=media&token=aca4bfb4-0a32-4f02-aae5-227a573f8dfd",
  },
 
  {
    id: "18",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-2-min.webp?alt=media&token=ff8c123d-53a4-48da-876f-e5e74f924f07",
  },
  {
    id: "19",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-3-min.webp?alt=media&token=61e9533c-93e4-438a-bf82-efa4f0338449",
  },
  {
    id: "20",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-4-min.webp?alt=media&token=cd461bb1-9fe5-424d-9756-479702143657",
  },
  {
    id: "21",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-5-min.webp?alt=media&token=3a8bdfb1-c8ad-478b-bd0d-2e624f007580",
  },
  {
    id: "22",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-6-min.webp?alt=media&token=025d8080-1254-4ec0-aba0-8c358b145b8c",
  },
  {
    id: "23",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-7-min.webp?alt=media&token=d0213d78-0a77-485d-a767-abef283222db",
  },
  {
    id: "24",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-8-min.webp?alt=media&token=0443ceb5-d3f0-489f-bb8f-6bdddd9273b3",
  },
  {
    id: "25",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-9-min.webp?alt=media&token=240abd51-f2c0-4bef-85ab-ecd8c4ad1a55",
  },
  {
    id: "26",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-10-min.webp?alt=media&token=4aa57658-165f-49c2-a8fa-608306c84fb2",
  },
  {
    id: "27",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-11-min.webp?alt=media&token=7abe468a-77c3-463c-a3b7-b96e67402fc2",
  },
  {
    id: "28",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-1-min.webp?alt=media&token=22aae57a-4039-4d01-8307-1632c6354ce8",
  },
  {
    id: "29",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-2-min.webp?alt=media&token=b3d63367-29d3-46d5-892a-e002a94958db",
  },
  {
    id: "30",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-3-min.webp?alt=media&token=f37e3caf-5990-4234-ad39-50b077865d11",
  },
  {
    id: "31",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-4-min.webp?alt=media&token=14b962f6-5de0-4cd2-811f-af98b3bf8f5b",
  },
  {
    id: "32",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-5-min.webp?alt=media&token=00f585bb-bef6-474c-94dd-2a67718a72b8",
  },
  {
    id: "33",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-6-min%20(1).webp?alt=media&token=0a907d83-1e79-4c15-9d9b-d16bcfc7d702",
  },
  {
    id: "34",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-7-min.webp?alt=media&token=654e2767-b071-4788-be7b-fda8f0ce9a03",
  },
  {
    id: "35",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-8-min.webp?alt=media&token=5b7a5409-06b1-4b02-a5e6-34c59a08071e",
  },
  {
    id: "36",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-9-min.webp?alt=media&token=f4d7365a-1d7f-4695-8aaf-fb36fa8f561c",
  },

  {
    id: "37",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-10-min.webp?alt=media&token=a0c552b4-be3d-4c07-8e3f-9bf9e812f797",
  },
  {
    id: "38",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-11-min.webp?alt=media&token=c6382df9-1cb2-432a-bced-3a3f8c020198",
  },
  {
    id: "39",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-1-min.webp?alt=media&token=547317a1-5708-4c15-8e1c-54661073330f",
  },
  {
    id: "40",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-2-min.webp?alt=media&token=cbc60896-34c0-4515-ab99-636cf68aedee",
  },
  {
    id: "41",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-3-min.webp?alt=media&token=d480cc68-c505-43a7-bb86-e0ce2d05f618",
  },
  {
    id: "42",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-4-min.webp?alt=media&token=d59eb00c-9c94-4780-9a1b-fa6f2ec95d84",
  },
  {
    id: "43",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-5-min.webp?alt=media&token=85953abf-0a4e-4f5e-b477-6c2da0c6e117",
  },
  {
    id: "44",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-6-min.webp?alt=media&token=249617c6-976e-476a-a519-b00d396900d5",
  },
  {
    id: "45",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-7-min.webp?alt=media&token=a4438222-6059-4d85-8e7b-59a9bf198758",
  },
  {
    id: "46",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-8-min.webp?alt=media&token=dd271a2e-da10-4d3c-95cc-fab9ac37a6b8",
  },
  {
    id: "47",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-9-min.webp?alt=media&token=9029fbb5-d387-49be-abc3-62f217f3a3e2",
  },
  {
    id: "48",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-10-min.webp?alt=media&token=64387793-a977-45f8-9d43-b2de0667ba26",
  },
  {
    id: "49",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-11-min.webp?alt=media&token=81150450-9eb3-4e51-a947-2493bf8aa8d0",
  },
  {
    id: "50",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-12-min.webp?alt=media&token=13b7cddb-a412-4843-b4d0-cf32ae16dda4",
  },
  {
    id: "51",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-13-min.webp?alt=media&token=1fff13a8-f722-4942-8074-fcfb09f3e25b",
  },
  {
    id: "52",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-14-min.webp?alt=media&token=7fff4c5f-e5b6-4801-8a34-e4a87049682d",
  },
  {
    id: "53",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-15-min.webp?alt=media&token=8fbe98d7-8d68-4807-ae05-684f13e57ba9",
  },
  {
    id: "54",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-16-min.webp?alt=media&token=a04ddff2-bd1f-40f9-9476-b0bcc8677f04",
  },
  {
    id: "55",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-17-min.webp?alt=media&token=38cf9274-395d-4ba4-8225-818e3047076d",
  },
  {
    id: "56",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-18-min.webp?alt=media&token=b735b676-3980-407e-b272-7d1cd8d6e0ce",
  },
];

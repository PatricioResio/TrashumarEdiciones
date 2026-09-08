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
    url: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/Home1.webp?alt=media&token=98438b6d-e268-4e89-8f95-a38d0bf492f1",
    h2: "Bienvenidos",
    textP:
      "Bienvenidos a Trashumar, una editorial nómada, federal e independiente. Publicamos voces y proyectos que cruzan fronteras.",
    buttonText: "¿Quéres trabajar con nosotros?",
    buttonLink: "/nosotros",
  },
  {
    id: 2,
    h2: "Contacto",
    url: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/Home2.webp?alt=media&token=ee9c24e8-7536-4327-87cb-30e11a19abd3",
    textP:
      "Quéres contactarte con nosotros para hablar de trashumancias? seguí el boton.",
    buttonText: "Contactanos",
    buttonLink: "",
    function: scrollToContact,
  },
  {
    id: 3,
    url: HOME_HERO_LCP_URL,   
    h2: "Registrate",
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
    url: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-1%20(frente)-min.webp?alt=media&token=a20a0b30-be9b-4f28-b218-87f0614ea6da",
  },
  {
    id: "1",
    title: "¿Y los libros qué?",
    posicion: "segundo",
    url: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-1%20(frente).webp?alt=media&token=ef012003-5c33-4a6a-a3ae-4621fab0a740",
  },
  {
    id: "2",
    title: "Las cosas como son",
    posicion: "tercero",
    url: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-1-min.webp?alt=media&token=0967e14e-2100-4502-b73b-e90749cf87ad",
  },
  {
    id: "3",
    title: "Para que nos entendamos",
    posicion: "cuarto",
    url: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-1-min.webp?alt=media&token=8c30cdfb-bcc3-4be3-917e-f0df36b1c9a0",
  },
];

export const imgArrayHistorias = [
  {
    id: "0",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-1%20(frente)-min.webp?alt=media&token=a20a0b30-be9b-4f28-b218-87f0614ea6da",
  },
  {
    id: "1",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-2-min.webp?alt=media&token=99bd0679-19cb-4254-a747-7eeb8c6497a7",
  },
  {
    id: "2",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-3-min.webp?alt=media&token=17e934cc-316c-4f86-a2a0-ad80fae71468",
  },
  {
    id: "3",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-4-min.webp?alt=media&token=ebd6b9ee-1227-449b-901f-b14993e44421",
  },
  {
    id: "4",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-5-min.webp?alt=media&token=edfb7e20-6744-4a32-8a8e-2f290434fcb3",
  },
  {
    id: "5",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-6-min.jpg?alt=media&token=1233ef0e-e4eb-4e80-8a68-20a34ce975a4",
  },
  {
    id: "6",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-7-min.webp?alt=media&token=c4e1a21f-2b4a-4d0f-af96-5c13c60d02ce",
  },
  {
    id: "7",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-8-min.webp?alt=media&token=85c07271-aa77-4935-9f14-e5cd9e5d10ff",
  },
  {
    id: "8",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-9-min.webp?alt=media&token=8e36c38a-bfea-491e-ba64-8b436ab2360c",
  },
  {
    id: "9",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-10-min.webp?alt=media&token=811f2a29-7b96-4c54-b248-040a35b5f8fe",
  },
  {
    id: "10",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-11-min.webp?alt=media&token=547f3aad-e455-4314-86c5-c94eadc652e1",
  },
  {
    id: "11",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-12-min.webp?alt=media&token=d653473d-3c4d-4526-8ee2-2e8713f96e23",
  },
  {
    id: "12",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-13-min.webp?alt=media&token=f960718e-8489-4b36-b6ce-336ec67be338",
  },
  {
    id: "13",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-14-min.webp?alt=media&token=4eb276f2-3abe-4a4c-b930-0e598c104f7d",
  },
  {
    id: "14",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-15-min.webp?alt=media&token=25b7eaa2-d5bf-4902-93d3-9b65f85fe52d",
  },
  {
    id: "15",
    posicion: "primero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias1%2Fhistorias1-16-min.webp?alt=media&token=ee70b0fe-52e6-44cf-a6a6-409738d7ba74",
  },

  {
    id: "17",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-1%20(frente).webp?alt=media&token=aca4bfb4-0a32-4f02-aae5-227a573f8dfd",
  },
 
  {
    id: "18",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-2-min.webp?alt=media&token=7a3f7606-b8a5-4ca4-9b6d-f67fb928c6ee",
  },
  {
    id: "19",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-3-min.webp?alt=media&token=b2bcde24-0d0c-4f45-a906-a97818ec98a4",
  },
  {
    id: "20",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-4-min.webp?alt=media&token=1c1a7f2e-12e9-4a05-9278-ba12fe127d0e",
  },
  {
    id: "21",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-5-min.webp?alt=media&token=3e42bca4-0502-4a5e-9f67-0739661bfde3",
  },
  {
    id: "22",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-6-min.webp?alt=media&token=0e18f179-0dbb-4639-9f44-eff73665d519",
  },
  {
    id: "23",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-7-min.webp?alt=media&token=62705983-e408-4caa-b154-602eb29a9df4",
  },
  {
    id: "24",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-8-min.webp?alt=media&token=4e268abc-2ece-44c2-9654-c8d6a9d4776b",
  },
  {
    id: "25",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-9-min.webp?alt=media&token=ca98c4a0-a8f3-4a64-8748-0ac1c5abd77b",
  },
  {
    id: "26",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-10-min.webp?alt=media&token=eebcb862-3785-4f36-9c26-b0d3b37d91c7",
  },
  {
    id: "27",
    posicion: "segundo",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias2%2Fhistorias2-11-min.webp?alt=media&token=ce706bf0-4f57-4f9e-a658-9cb84472c03c",
  },
  {
    id: "28",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-1-min.webp?alt=media&token=0967e14e-2100-4502-b73b-e90749cf87ad",
  },
  {
    id: "29",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-2-min.webp?alt=media&token=3517098a-d679-462a-997b-167792753886",
  },
  {
    id: "30",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-3-min.webp?alt=media&token=d031d78e-1b11-4575-b7a9-98b2e543211d",
  },
  {
    id: "31",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-4-min.webp?alt=media&token=61ead58d-c594-42bd-aa43-453a2ce21caa",
  },
  {
    id: "32",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-5-min.webp?alt=media&token=148ba90b-eb45-4447-a969-c04fdacae414",
  },
  {
    id: "33",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-6-min%20(1).webp?alt=media&token=8a4df33c-1d18-4a86-b621-1f55b7c18c24",
  },
  {
    id: "34",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-7-min.webp?alt=media&token=3907f75f-7df0-4bbc-92af-29e0e9f5889c",
  },
  {
    id: "35",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-8-min.webp?alt=media&token=f59efe91-9f52-429a-975d-9c56dcbf9214",
  },
  {
    id: "36",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-9-min.webp?alt=media&token=d1a0ad75-8c04-420e-ba70-965b639187d4",
  },

  {
    id: "37",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-10-min.webp?alt=media&token=3ffd63cb-7850-4067-92fb-130ba44eedbc",
  },
  {
    id: "38",
    posicion: "tercero",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias3%2Fhistorias3-11-min.webp?alt=media&token=8f27d083-f762-4f6a-9f9f-5976ab5b6a95",
  },
  {
    id: "39",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-1-min.webp?alt=media&token=8c30cdfb-bcc3-4be3-917e-f0df36b1c9a0",
  },
  {
    id: "40",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-2-min.webp?alt=media&token=23835de9-33c7-4302-8af2-83829fdea95c",
  },
  {
    id: "41",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-3-min.webp?alt=media&token=30480f33-03df-433e-b352-b4761c71dacc",
  },
  {
    id: "42",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-4-min.webp?alt=media&token=ab67a79b-1e38-43c2-a190-67ec232b0259",
  },
  {
    id: "43",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-5-min.webp?alt=media&token=37f0fe9f-5053-4ec3-b50a-bf7767818c4a",
  },
  {
    id: "44",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-6-min.webp?alt=media&token=548822ba-42ce-432e-8b39-3d7a8775c50d",
  },
  {
    id: "45",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-7-min.webp?alt=media&token=42defb2e-c595-4cca-ae50-0ac7bf1a7108",
  },
  {
    id: "46",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-8-min.webp?alt=media&token=153fbbaa-a861-4dc2-85cc-e88e5e4a805f",
  },
  {
    id: "47",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-9-min.webp?alt=media&token=5a06cfad-9b35-4d85-bb70-ec9b54925a79",
  },
  {
    id: "48",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-10-min.webp?alt=media&token=51b55c8b-c628-42a7-924d-9cdd37e92637",
  },
  {
    id: "49",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-11-min.webp?alt=media&token=eaa39a62-021c-437a-a954-9382b4a49e3f",
  },
  {
    id: "50",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-12-min.webp?alt=media&token=5112ac7c-5b85-440f-92b8-d107be1dc9ca",
  },
  {
    id: "51",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-13-min.webp?alt=media&token=aa012918-ea87-4d63-b1f6-96d658d39e41",
  },
  {
    id: "52",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-14-min.webp?alt=media&token=91ffcdde-bc37-4a6c-ae7f-912de13dc387",
  },
  {
    id: "53",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-15-min.webp?alt=media&token=af95112d-7eaf-4b5f-aed0-e4735753ad14",
  },
  {
    id: "54",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-16-min.webp?alt=media&token=037db341-bd29-4ecb-88f1-9217942bc57f",
  },
  {
    id: "55",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-17-min.webp?alt=media&token=2a95129a-f999-4afe-8d6d-ad11fa2e94e0",
  },
  {
    id: "56",
    posicion: "cuarto",
    img: "https://firebasestorage.googleapis.com/v0/b/trashumar-c8bd9.appspot.com/o/historias%2Fhistorias4%2Fhistorias4-18-min.webp?alt=media&token=9db4a332-efd7-40a7-afb6-c05e9d3accc5  ",
  },
];

export type Stop = {
  name: string;
  slot: string;
  note?: string;
  image?: {
    src: string;
    alt: string;
    creditLabel: string;
    creditUrl: string;
  };
};

export type DayPlan = {
  day: string;
  title: string;
  vibe: string;
  color: string;
  stops: Stop[];
};

export type CityPlan = {
  id: string;
  city: string;
  label: string;
  emoji: string;
  accent: string;
  description: string;
  stay: string;
  highlights: string[];
  days: DayPlan[];
};

function commonsImage(filename: string, alt: string, creditUrl?: string, creditLabel = "Wikimedia Commons") {
  const encoded = encodeURIComponent(filename).replace(/%2F/g, "/");

  return {
    src: `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encoded}`,
    alt,
    creditLabel,
    creditUrl: creditUrl ?? `https://commons.wikimedia.org/wiki/File:${encoded}`,
  };
}

export const cityPlans: CityPlan[] = [
  {
    id: "osaka",
    city: "Osaka",
    label: "Neon & Foodie",
    emoji: "🍡",
    accent: "from-[#ff8db2] via-[#ffbfd1] to-[#ffe7a8]",
    description:
      "Una entrada llena de luces, castillos, compras y parques temáticos para arrancar el viaje con energía.",
    stay: "Días 1 al 4",
    highlights: ["Dotonbori", "USJ", "Umeda Sky", "Katsuoji"],
    days: [
      {
        day: "Día 1",
        title: "Namba y Dotonbori",
        vibe: "Luces, templo y primer shot urbano.",
        color: "#ff8db2",
        stops: [
          {
            name: "Castillo de Osaka",
            slot: "Mañana",
            image: commonsImage("Osaka Castle - 02.jpg", "Vista del Castillo de Osaka"),
          },
          {
            name: "Templo Namba Yasaka",
            slot: "Mediodía / tarde",
            image: commonsImage("Namba Yasaka Shrine 2015.JPG", "Santuario Namba Yasaka en Osaka"),
          },
          {
            name: "Shinsekai",
            slot: "Tarde / atardecer",
            image: commonsImage("Shinsekai and Tsutenkaku Tower, Osaka, Japan.jpg", "Calle de Shinsekai con Tsutenkaku"),
          },
          {
            name: "Dotonbori",
            slot: "Noche",
            note: "Cena, paseo y luces.",
            image: commonsImage("Dotonbori Area Namba Osaka Japan01s5.jpg", "Canal y neones de Dotonbori"),
          },
        ],
      },
      {
        day: "Día 2",
        title: "Umeda y compras",
        vibe: "Gaming, merch y skyline nocturno.",
        color: "#ff9a76",
        stops: [
          {
            name: "Pokemon Center",
            slot: "Mañana",
            image: commonsImage(
              "Pokémon Center (Shinsaibashi) - plush dolls.jpg",
              "Interior del Pokemon Center Osaka",
              "https://commons.wikimedia.org/wiki/File:Pok%C3%A9mon_Center_(Shinsaibashi)_-_plush_dolls.jpg",
            ),
          },
          {
            name: "Nintendo Center",
            slot: "Mañana / tarde",
            note: "Referencia visual del store oficial en Osaka.",
            image: commonsImage(
              "Nintendo Osaka logo white-red square.png",
              "Logo oficial de Nintendo Osaka",
            ),
          },
          {
            name: "Don Quijote",
            slot: "Tarde / noche",
            image: commonsImage(
              "Don Quijote Dotonbori Midosuji store.JPG",
              "Fachada de Don Quijote en Dotonbori",
            ),
          },
          {
            name: "Umeda Sky Building",
            slot: "Noche",
            note: "Comprar boletos con anticipacion.",
            image: commonsImage("UMEDA SKY BUILDING on 22nd March 2025.jpg", "Umeda Sky Building"),
          },
          {
            name: "Tower Slider",
            slot: "En la visita",
            note: "Resbaladilla transparente dentro del edificio.",
            image: commonsImage("Umeda Sky building 02.jpg", "Escaladores y estructura del Umeda Sky Building"),
          },
        ],
      },
      {
        day: "Día 3",
        title: "Universal Studios Japan",
        vibe: "Día completo de parque y adrenalina kawaii.",
        color: "#ffd166",
        stops: [
          {
            name: "Universal Studios Japan",
            slot: "Todo el día",
            image: commonsImage("Universal Studios Japan Globe.jpg", "Globo de Universal Studios Japan"),
          },
        ],
      },
      {
        day: "Día 4",
        title: "Templo fuera de la ciudad",
        vibe: "Un respiro zen antes de cambiar de ciudad.",
        color: "#9fe3d3",
        stops: [
          {
            name: "Templo Katsuoji",
            slot: "Medio día",
            note: "Considerar 2 horas en el templo más traslados.",
            image: commonsImage("Katsuoji-daruma.jpg", "Darumas en Katsuoji"),
          },
          {
            name: "Tiempo libre en Osaka",
            slot: "Resto del día",
            note: "Compras o repetir tu zona favorita.",
            image: commonsImage("Dotonbori Area Namba Osaka Japan01s5.jpg", "Vista nocturna de Osaka para repetir zona favorita"),
          },
        ],
      },
    ],
  },
  {
    id: "kyoto",
    city: "Kioto",
    label: "Temples & Calm",
    emoji: "⛩️",
    accent: "from-[#ffd7e5] via-[#fff0c7] to-[#d9f7e8]",
    description:
      "Ritmo más contemplativo, con templos, calles históricas y un contraste muy bonito entre tradición y arte inmersivo.",
    stay: "Días 5 al 10",
    highlights: ["Kinkaku-ji", "Arashiyama", "Fushimi Inari", "Gion"],
    days: [
      {
        day: "Día 5",
        title: "Norte de Kioto",
        vibe: "Dorado, calma y una tarde más experimental.",
        color: "#f7c948",
        stops: [
          {
            name: "Kinkaku-ji",
            slot: "Mañana",
            image: commonsImage("Kinkaku-ji, Kyoto.jpg", "Kinkaku-ji en Kyoto"),
          },
          {
            name: "TeamLab Biovortex",
            slot: "Tarde / noche",
            note: "A partir del 7 de octubre, a 10 min caminando de Kyoto Station.",
            image: commonsImage(
              "Photos at teamlab planets tokyo.jpg",
              "Referencia visual inmersiva estilo TeamLab",
            ),
          },
        ],
      },
      {
        day: "Día 6",
        title: "Arashiyama",
        vibe: "Bosques de bambú y fotos con menos gente.",
        color: "#86d1c1",
        stops: [
          {
            name: "Arashiyama / Bosque de Bambú",
            slot: "Mañana",
            image: commonsImage("Arashiyama Bamboo Grove.jpg", "Arashiyama Bamboo Grove"),
          },
          {
            name: "Adashino Nenbutsu-ji",
            slot: "Tarde",
            note: "Zona tranquila, 500 yenes y otro bosque de bambú.",
            image: commonsImage("Kyoto Adashino Nenbutsu-ji 8.jpg", "Templo Adashino Nenbutsu-ji"),
          },
        ],
      },
      {
        day: "Día 7",
        title: "Sur y centro histórico",
        vibe: "Postales clásicas de Kioto durante todo el día.",
        color: "#ff9f9f",
        stops: [
          {
            name: "Fushimi Inari",
            slot: "Muy temprano o al atardecer",
            image: commonsImage("Fushimi Inari.JPG", "Torii de Fushimi Inari"),
          },
          {
            name: "Hanamikoji-dori",
            slot: "Durante el día",
            image: commonsImage("Hanamikoji-dori.jpg", "Hanamikoji-dori en Kyoto"),
          },
          {
            name: "Gion + Tatsumi Bridge",
            slot: "Tarde",
            image: commonsImage("Tatsumi Bridge in Gion, Kyoto.jpg", "Puente Tatsumi en Gion"),
          },
          {
            name: "Pontocho",
            slot: "Noche",
            note: "Ideal para cenar.",
            image: commonsImage("Pontocho by einalem in Kyoto.jpg", "Callejón de Pontocho en Kyoto"),
          },
          {
            name: "Ninenzaka y Sannenzaka",
            slot: "Paseo histórico",
            image: commonsImage("Sannenzaka.jpg", "Cuesta de Sannenzaka en Kyoto"),
          },
        ],
      },
      {
        day: "Día 8",
        title: "Este de Kioto",
        vibe: "Ruta clásica, templos y vistas.",
        color: "#b39ddb",
        stops: [
          {
            name: "Sannenzaka",
            slot: "Mañana si quedó pendiente",
            image: commonsImage("Sannenzaka.jpg", "Sannenzaka en Kyoto"),
          },
          {
            name: "Yasaka Shrine",
            slot: "Mañana / tarde",
            image: commonsImage(
              "Nishiromon Gate, Yasaka Shrine, Kyoto, 20240820 1721 5183.jpg",
              "Entrada del Yasaka Shrine",
            ),
          },
          {
            name: "Yasaka Pagoda",
            slot: "Durante la ruta",
            image: commonsImage("Yasaka pagoda @ Kyoto (13406127525).jpg", "Yasaka Pagoda en Kyoto"),
          },
          {
            name: "Kiyomizu-dera",
            slot: "Tarde",
            image: commonsImage("JP-26 Kiyomizu-dera.jpg", "Kiyomizu-dera"),
          },
          {
            name: "Nijo Castle",
            slot: "Flexible",
            image: commonsImage("Nijo Castle, Kyoto.jpg", "Interior del Nijo Castle"),
          },
        ],
      },
    ],
  },
  {
    id: "tokyo",
    city: "Tokio",
    label: "Pop & Skyline",
    emoji: "🗼",
    accent: "from-[#ffb0d0] via-[#ffdca8] to-[#b8d8ff]",
    description:
      "Cierre intenso con barrios icónicos, cultura pop, miradores y parques temáticos.",
    stay: "Días 11 al 16",
    highlights: ["Shibuya", "DisneySea", "Akihabara", "Skytree"],
    days: [
      {
        day: "Día 11",
        title: "Shibuya y Harajuku",
        vibe: "Moda, energía y contraste con Asakusa.",
        color: "#ff7aa2",
        stops: [
          {
            name: "Shibuya",
            slot: "Durante el día",
            note: "Cruce, Hachiko y compras.",
            image: commonsImage("Shibuya crossing (12214).jpg", "Shibuya Crossing"),
          },
          {
            name: "Takeshita Street",
            slot: "Tarde",
            image: commonsImage("Takeshita Street.jpg", "Takeshita Street en Harajuku"),
          },
          {
            name: "Senso-ji",
            slot: "Mañana o tarde",
            note: "Según la ruta del día.",
            image: commonsImage("Overview of Sensoji temple.jpg", "Vista de Senso-ji en Asakusa"),
          },
        ],
      },
      {
        day: "Día 12",
        title: "Cultura y digital",
        vibe: "Espacios serenos + una tarde inmersiva.",
        color: "#ffb86b",
        stops: [
          {
            name: "Meiji Shrine",
            slot: "Mañana",
            image: commonsImage("Meiji-Jingu-Shrine-05.jpg", "Meiji Shrine en Tokio"),
          },
          {
            name: "TeamLab Planets",
            slot: "Tarde",
            note: "Reservar horario.",
            image: commonsImage("Photos at teamlab planets tokyo.jpg", "Instalación de TeamLab Planets Tokyo"),
          },
          {
            name: "Tokyo Tower",
            slot: "Atardecer / noche",
            image: commonsImage("Tokyo Tower at night.jpg", "Tokyo Tower iluminada"),
          },
        ],
      },
      {
        day: "Día 13",
        title: "Tokyo DisneySea",
        vibe: "Día completo de parque con estética de fantasía.",
        color: "#9bd8f0",
        stops: [
          {
            name: "Tokyo DisneySea",
            slot: "Todo el día",
            image: commonsImage("Tokyo DisneySea 200610.jpg", "Vista de Tokyo DisneySea"),
          },
        ],
      },
      {
        day: "Día 14",
        title: "Asakusa y vistas",
        vibe: "Ritmo más relajado con cierre panorámico.",
        color: "#c9b6ff",
        stops: [
          {
            name: "Asakusa District",
            slot: "Mañana",
            note: "Terminar Senso-ji si faltó.",
            image: commonsImage("Overview of Sensoji temple.jpg", "Asakusa y Senso-ji de noche"),
          },
          {
            name: "Ueno Park",
            slot: "Tarde",
            image: commonsImage("Ueno park.jpg", "Hanami en Ueno Park"),
          },
          {
            name: "Tokyo Skytree",
            slot: "Atardecer / noche",
            image: commonsImage("Tokyo Skytree in Japan.jpg", "Tokyo Skytree"),
          },
        ],
      },
      {
        day: "Día 15",
        title: "Zona moderna y friki",
        vibe: "Isla futurista y noche de arcades.",
        color: "#85dcb0",
        stops: [
          {
            name: "Odaiba Island",
            slot: "Mañana / tarde",
            image: commonsImage("Rainbow Bridge at Odaiba.JPG", "Rainbow Bridge y Odaiba"),
          },
          {
            name: "Akihabara",
            slot: "Tarde / noche",
            note: "Compras y arcades.",
            image: commonsImage("Akihabara at night.jpg", "Akihabara de noche"),
          },
          {
            name: "Suga Shrine",
            slot: "Flexible",
            note: "Ajustar según transporte.",
            image: commonsImage(
              "Suga Shrine stairs high-angle 20161113-073454.jpg",
              "Escaleras de Suga Shrine",
            ),
          },
        ],
      },
      {
        day: "Día 16",
        title: "Rincones especiales",
        vibe: "Un final más local, con gatos y callejones.",
        color: "#f0a6ca",
        stops: [
          {
            name: "Gotokuji Temple",
            slot: "Mañana",
            note: "Templo de los maneki-neko.",
            image: commonsImage("Gotokuji-manekineko.jpg", "Maneki-neko en Gotokuji"),
          },
          {
            name: "Todoroki Valley",
            slot: "Tarde",
            image: commonsImage("Todoroki Valley.JPG", "Todoroki Valley"),
          },
          {
            name: "Omoide Yokocho",
            slot: "Noche",
            note: "Cena y ambiente en Shinjuku.",
            image: commonsImage("Omoide Yokocho, Shinjuku (42384560880).jpg", "Omoide Yokocho de noche"),
          },
        ],
      },
    ],
  },
];

export const nightlifeSpots = ["Harajuku", "Akihabara", "Shinjuku"];

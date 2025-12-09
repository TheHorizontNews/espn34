// Casino data with logos and information
const casinoData = {
  "bet365": {
    name: "Bet365",
    logo: "https://images.seeklogo.com/logo-png/26/1/bet365-logo-png_seeklogo-261436.png",
    rank: 1,
    rating: 9.7,
    traffic: "985 000",
    gtrends: "59,91",
    payments: ["Tarjeta", "PayPal", "Transferencia"],
    tags: ["paypal", "slots", "ruleta", "movil"],
    tagline: "Líder del mercado español",
    description: "Jugadores que buscan variedad máxima y ruleta en vivo top.",
    slug: "bet365"
  },
  "sportium": {
    name: "Sportium",
    logo: "https://seeklogo.com/images/S/sportium-logo-D4935C77C4-seeklogo.com.png",
    rank: 2,
    rating: 9.2,
    traffic: "54 000",
    gtrends: "20,43",
    payments: ["Tarjeta", "Bizum", "PayPal"],
    tags: ["bizum", "slots", "movil"],
    tagline: "Apuestas + casino en una sola cuenta",
    description: "Quienes combinan apuestas deportivas y un casino fácil de usar.",
    slug: "sportium"
  },
  "bwin": {
    name: "Bwin",
    logo: "https://images.seeklogo.com/logo-png/2/1/bwin-com-logo-png_seeklogo-24042.png",
    rank: 3,
    rating: 9.1,
    traffic: "252 000",
    gtrends: "18,00",
    payments: ["Tarjeta", "PayPal"],
    tags: ["paypal", "slots", "ruleta", "movil"],
    tagline: "Marca internacional sólida",
    description: "Fans de jackpots y casino en vivo con proveedores top.",
    slug: "bwin"
  },
  "casino-barcelona": {
    name: "Casino Barcelona",
    logo: "https://images.seeklogo.com/logo-png/33/1/casino-barcelona-logo-png_seeklogo-335481.png",
    rank: 4,
    rating: 8.9,
    traffic: "85 000",
    gtrends: "9,51",
    payments: ["Tarjeta", "Transferencia"],
    tags: ["slots", "ruleta"],
    tagline: "Casino físico mítico + online",
    description: "Quienes quieren una experiencia de casino clásico español.",
    slug: "casino-barcelona"
  },
  "william-hill": {
    name: "William Hill",
    logo: "https://images.seeklogo.com/logo-png/45/1/william-hill-online-betting-logo-png_seeklogo-450690.png",
    rank: 5,
    rating: 8.8,
    traffic: "151 000",
    gtrends: "9,06",
    payments: ["Tarjeta", "PayPal"],
    tags: ["slots", "ruleta", "movil"],
    tagline: "Operador histórico en Europa",
    description: "Jugadores tradicionales que valoran una marca muy conocida.",
    slug: "william-hill"
  },
  "tombola": {
    name: "Tombola",
    logo: "https://images.seeklogo.com/logo-png/45/1/tombola-logo-png_seeklogo-451134.png",
    rank: 6,
    rating: 8.6,
    traffic: "123 000",
    gtrends: "8,72",
    payments: ["Tarjeta"],
    tags: ["slots"],
    tagline: "Referente en bingo online",
    description: "Amantes del bingo online y de las slots sencillas.",
    slug: "tombola"
  },
  "casino-gran-madrid": {
    name: "Casino Gran Madrid",
    logo: "https://images.seeklogo.com/logo-png/53/1/casino-gran-madrid-logo-png_seeklogo-535095.png",
    rank: 7,
    rating: 8.5,
    traffic: "31 000",
    gtrends: "7,15",
    payments: ["Tarjeta", "Transferencia"],
    tags: ["slots", "ruleta"],
    tagline: "Uno de los grandes casinos físicos",
    description: "Usuarios que prefieren casino físico + online del mismo operador.",
    slug: "casino-gran-madrid"
  },
  "retabet": {
    name: "Retabet",
    logo: "https://images.seeklogo.com/logo-png/53/1/reta-bet-logo-png_seeklogo-535730.png",
    rank: 8,
    rating: 8.3,
    traffic: "74 000",
    gtrends: "6,69",
    payments: ["Tarjeta"],
    tags: ["slots"],
    tagline: "Fuerte en apuestas deportivas",
    description: "Apostadores que quieren probar slots en un entorno conocido.",
    slug: "retabet"
  },
  "kirolbet": {
    name: "Kirolbet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/54/LOGO_KIROLBET.jpg",
    rank: 9,
    rating: 8.2,
    traffic: "52 000",
    gtrends: "6,16",
    payments: ["Tarjeta"],
    tags: ["slots"],
    tagline: "Operador con enfoque local",
    description: "Jugadores que buscan un casino cercano al público del norte.",
    slug: "kirolbet"
  },
  "betway": {
    name: "Betway",
    logo: "https://www.nicepng.com/png/full/920-9207295_betway-logo-png.png",
    rank: 10,
    rating: 8.7,
    traffic: "117 000",
    gtrends: "6,06",
    payments: ["Tarjeta", "PayPal"],
    tags: ["slots", "ruleta", "paypal", "movil"],
    tagline: "Marca global muy conocida",
    description: "Quienes quieren app moderna y buena ruleta en vivo.",
    slug: "betway"
  },
  "one-casino": {
    name: "One Casino",
    logo: "https://via.placeholder.com/120x40/1a2332/00ff7a?text=OneCasino",
    rank: 11,
    rating: 8.4,
    traffic: "61 000",
    gtrends: "4,80",
    payments: ["Tarjeta", "PayPal"],
    tags: ["slots", "paypal", "movil"],
    tagline: "Interfaz limpia y moderna",
    description: "Usuarios que quieren un casino simple, centrado en slots actuales.",
    slug: "one-casino"
  },
  "paf": {
    name: "Paf",
    logo: "https://via.placeholder.com/120x40/1a2332/00ff7a?text=PAF",
    rank: 12,
    rating: 8.3,
    traffic: "33 000",
    gtrends: "4,62",
    payments: ["Tarjeta"],
    tags: ["slots"],
    tagline: "Operador con enfoque social",
    description: "Jugadores que valoran un casino responsable y transparente.",
    slug: "paf"
  },
  "botemania": {
    name: "Botemania",
    logo: "https://via.placeholder.com/120x40/1a2332/00ff7a?text=Botemania",
    rank: 13,
    rating: 8.1,
    traffic: "54 000",
    gtrends: "3,93",
    payments: ["Tarjeta"],
    tags: ["slots"],
    tagline: "Famoso por sus botes",
    description: "Fans de jackpots, bingo online y juegos muy coloridos.",
    slug: "botemania"
  },
  "playuzu": {
    name: "Playuzu",
    logo: "https://via.placeholder.com/120x40/1a2332/00ff7a?text=Playuzu",
    rank: 14,
    rating: 8.2,
    traffic: "60 000",
    gtrends: "3,87",
    payments: ["Tarjeta"],
    tags: ["slots"],
    tagline: "Promos frecuentes para slots",
    description: "Quienes quieren muchas tragaperras y promociones recurrentes.",
    slug: "playuzu"
  },
  "yobingo": {
    name: "Yobingo",
    logo: "https://via.placeholder.com/120x40/1a2332/00ff7a?text=Yobingo",
    rank: 15,
    rating: 8.0,
    traffic: "48 000",
    gtrends: "2,96",
    payments: ["Tarjeta"],
    tags: ["slots"],
    tagline: "Especialista en bingo",
    description: "Amantes del bingo online con comunidad activa y chat.",
    slug: "yobingo"
  },
  "admiralbet": {
    name: "Admiralbet",
    logo: "https://via.placeholder.com/120x40/1a2332/00ff7a?text=Admiralbet",
    rank: 16,
    rating: 7.9,
    traffic: "43 000",
    gtrends: "2,20",
    payments: ["Tarjeta"],
    tags: ["slots", "ruleta"],
    tagline: "Operador clásico de casino",
    description: "Quienes buscan un casino completo con enfoque tradicional.",
    slug: "admiralbet"
  },
  "leovegas": {
    name: "Leovegas",
    logo: "https://via.placeholder.com/120x40/1a2332/00ff7a?text=LeoVegas",
    rank: 17,
    rating: 8.6,
    traffic: "55 000",
    gtrends: "1,90",
    payments: ["Tarjeta", "PayPal"],
    tags: ["slots", "ruleta", "paypal", "movil"],
    tagline: "Muy fuerte en móvil",
    description: "Jugadores móviles que priorizan una app rápida y estable.",
    slug: "leovegas"
  },
  "monopoly-casino": {
    name: "Monopoly Casino",
    logo: "https://via.placeholder.com/120x40/1a2332/00ff7a?text=Monopoly",
    rank: 18,
    rating: 7.8,
    traffic: "41 000",
    gtrends: "1,57",
    payments: ["Tarjeta"],
    tags: ["slots"],
    tagline: "Basado en el clásico juego",
    description: "Fans de Monopoly y de juegos de mesa con temática propia.",
    slug: "monopoly-casino"
  },
  "casumo": {
    name: "Casumo",
    logo: "https://via.placeholder.com/120x40/1a2332/00ff7a?text=Casumo",
    rank: 19,
    rating: 8.4,
    traffic: "26 000",
    gtrends: "0,82",
    payments: ["Tarjeta", "PayPal"],
    tags: ["slots", "paypal", "movil"],
    tagline: "Casino muy gamificado",
    description: "Usuarios que disfrutan retos, niveles y sistema de logros.",
    slug: "casumo"
  },
  "speedybet": {
    name: "Speedybet",
    logo: "https://via.placeholder.com/120x40/1a2332/00ff7a?text=Speedybet",
    rank: 20,
    rating: 7.7,
    traffic: "31 000",
    gtrends: "0,70",
    payments: ["Tarjeta"],
    tags: ["slots"],
    tagline: "Registro muy rápido",
    description: "Jugadores que quieren entrar, depositar y jugar en pocos minutos.",
    slug: "speedybet"
  }
};

// Helper function to get casino by slug
function getCasinoBySlug(slug) {
  return Object.values(casinoData).find(casino => casino.slug === slug);
}

// Helper function to get all casinos as array
function getAllCasinos() {
  return Object.values(casinoData).sort((a, b) => a.rank - b.rank);
}

// Helper function to filter casinos by tag
function getCasinosByTag(tag) {
  if (tag === 'all') return getAllCasinos();
  return Object.values(casinoData)
    .filter(casino => casino.tags.includes(tag))
    .sort((a, b) => a.rank - b.rank);
}

import ServiceDetail, {
    type ServiceDetailData,
} from "./ServiceDetail";

const bodyData: ServiceDetailData = {
    eyebrow: "NJEGA TIJELA",
    title: "Njega tijela uz pažnju prema svakom detalju.",
    description:
        "Profesionalna njega tijela posvećena je koži, njenoj hidrataciji i ugodnom osjećaju. Tretman se prilagođava vašim željama i potrebama, uz odabir odgovarajućih proizvoda i pažljivo planirane korake njege.",
    tags: [
        "Njega i hidratacija",
        "Profesionalni preparati",
        "Individualni pristup",
    ],
    introLabel: "VRIJEME ZA VAS",
    introTitle: "Njega tijela kao dio vaše rutine.",
    introParagraphs: [
        "Koža tijela, baš kao i koža lica, zahtijeva odgovarajuću njegu. Na njen izgled i osjećaj utječu svakodnevne navike, vanjski faktori i individualne potrebe, zbog čega biramo preparate i postupke koji odgovaraju konkretnom tretmanu.",
        "U našem salonu njegujemo pristup koji povezuje pažljivo odabrane proizvode, ugodno iskustvo i praktične preporuke za kućnu njegu. Cilj je koži pružiti odgovarajuću pažnju i podržati njenu mekoću i hidrataciju.",
    ],
    quoteNumber: "02",
    quote: "Posvetite svom tijelu njegu koju zaslužuje.",
    sectionLabel: "TRETMANI TIJELA",
    sectionTitle: "Pažljivo odabrana njega od početka do kraja.",
    sectionDescription:
        "U zavisnosti od vaših potreba, tretman može obuhvatati pripremu kože, njegu odabranim preparatima i preporuke za održavanje rezultata.",
    cards: [
        {
            number: "01",
            category: "PRIPREMA",
            title: "Priprema kože",
            description:
                "Prvi korak je razumijevanje stanja kože i odabir načina pripreme koji odgovara planiranom tretmanu.",
            points: [
                "Razgovor o potrebama kože",
                "Odabir odgovarajućih preparata",
                "Priprema za naredne korake njege",
            ],
        },
        {
            number: "02",
            category: "HIDRATACIJA",
            title: "Njega i mekoća kože",
            description:
                "Proizvodi za njegu biraju se prema potrebama kože i željenom osjećaju nakon tretmana.",
            points: [
                "Njegujući preparati za tijelo",
                "Fokus na hidrataciji i mekoći",
                "Prilagođen završetak tretmana",
            ],
        },
        {
            number: "03",
            category: "INDIVIDUALNA NJEGA",
            title: "Tretman prema vašim potrebama",
            description:
                "Način rada i izbor proizvoda prilagođavaju se području koje se tretira, stanju kože i vašim očekivanjima.",
            points: [
                "Individualan pristup",
                "Odabir preparata prema potrebama",
                "Pažnja prema osjetljivosti kože",
            ],
        },
        {
            number: "04",
            category: "KUĆNA RUTINA",
            title: "Njega i nakon salona",
            description:
                "Odgovarajuća kućna njega pomaže da koži i između posjeta posvetite pažnju koja joj je potrebna.",
            points: [
                "Preporuka proizvoda za kućnu njegu",
                "Savjeti o načinu primjene",
                "Rutina prilagođena vašim navikama",
            ],
        },
    ],
    processLabel: "TOK TRETMANA",
    processTitle: "Vaš tretman, pažljivo osmišljen.",
    steps: [
        {
            number: "01",
            title: "Razgovor",
            description:
                "Upoznajemo vaše želje, navike i očekivanja u vezi s njegom tijela.",
        },
        {
            number: "02",
            title: "Tretman",
            description:
                "Biramo preparate i korake njege koji odgovaraju stanju kože i odabranoj usluzi.",
        },
        {
            number: "03",
            title: "Preporuke",
            description:
                "Dobijate praktične savjete za njegu kože i između dolazaka u salon.",
        },
    ],
    noteLabel: "NAŠA PREPORUKA",
    noteTitle: "Prava njega počinje poznavanjem kože.",
    noteDescription:
        "Prije tretmana podijelite s nama informacije o osjetljivosti kože, eventualnim iritacijama ili drugim okolnostima koje bi mogle utjecati na izbor preparata. Na taj način možemo odabrati pažljiviji i primjereniji pristup.",
};

export default function Body() {
    return <ServiceDetail data={bodyData} />;
}
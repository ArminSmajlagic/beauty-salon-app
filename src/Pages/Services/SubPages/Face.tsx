import ServiceDetail, {
    type ServiceDetailData,
} from "./ServiceDetail";

const faceData: ServiceDetailData = {
    eyebrow: "NJEGA LICA",
    title: "Njega lica prilagođena vašoj koži.",
    description:
        "Njega lica počinje razumijevanjem potreba kože. Kroz individualnu procjenu i pažljiv odabir profesionalnih preparata, cilj je pružiti koži odgovarajuću njegu, hidrataciju i osjećaj svježine.",
    tags: [
        "Individualni pristup",
        "Profesionalni preparati",
        "Njega prema potrebama kože",
    ],
    introLabel: "NJEGA PO MJERI",
    introTitle: "Vaša koža ima svoje potrebe. Njega ih treba pratiti.",
    introParagraphs: [
        "Koža se mijenja pod utjecajem brojnih faktora, zbog čega isti tretman ne odgovara svima. Prije početka njege razgovaramo o vašim navikama, željama i karakteristikama kože kako bismo odabrali odgovarajući pristup.",
        "U tretmanima koristimo profesionalne proizvode i pažljivo planirane korake njege. U zavisnosti od stanja kože, fokus može biti na čišćenju, hidrataciji, njezi kože sklone nepravilnostima ili poboljšanju izgleda i teksture kože.",
    ],
    quoteNumber: "01",
    quote: "Zdrava rutina počinje pažljivim odabirom njege.",
    sectionLabel: "TRETMANI LICA",
    sectionTitle: "Njega prilagođena različitim potrebama.",
    sectionDescription:
        "Od pripreme kože do završnih koraka, svaki dio tretmana bira se u skladu s njenim trenutnim stanjem i vašim očekivanjima.",
    cards: [
        {
            number: "01",
            category: "PROCJENA I PRIPREMA",
            title: "Čišćenje i priprema kože",
            description:
                "Pažljiva priprema predstavlja osnovu kvalitetnog tretmana. Odabir preparata i načina čišćenja prilagođava se tipu i osjetljivosti kože.",
            points: [
                "Procjena trenutnog stanja kože",
                "Uklanjanje nečistoća i ostataka proizvoda",
                "Priprema kože za naredne korake njege",
            ],
        },
        {
            number: "02",
            category: "HIDRATACIJA",
            title: "Njega i hidratacija",
            description:
                "Tretman je usmjeren na njegu kože kojoj je potrebna dodatna hidratacija, mekoća i ugodan osjećaj nakon tretmana.",
            points: [
                "Odabir odgovarajućih preparata",
                "Njega prilagođena stanju kože",
                "Preporuke za održavanje hidratacije",
            ],
        },
        {
            number: "03",
            category: "CILJANA NJEGA",
            title: "Njega kože sklone nepravilnostima",
            description:
                "Kada je koža sklona nepravilnostima ili ima neujednačenu teksturu, posebna pažnja posvećuje se izboru proizvoda i načinu njihove primjene.",
            points: [
                "Procjena potreba kože",
                "Pažljiv izbor preparata",
                "Individualne preporuke za kućnu rutinu",
            ],
        },
        {
            number: "04",
            category: "PROFESIONALNA NJEGA",
            title: "Personalizirani tretman",
            description:
                "Proizvodi i koraci tretmana kombinuju se prema potrebama kože, umjesto da se primjenjuje isti pristup na svako lice.",
            points: [
                "Prilagođen izbor proizvoda",
                "Pažljivo planirani koraci tretmana",
                "Preporuke za nastavak njege kod kuće",
            ],
        },
    ],
    processLabel: "TOK TRETMANA",
    processTitle: "Njega u nekoliko pažljivo odabranih koraka.",
    steps: [
        {
            number: "01",
            title: "Konsultacija",
            description:
                "Razgovaramo o vašim potrebama, navikama njege i željenim rezultatima.",
        },
        {
            number: "02",
            title: "Odabir njege",
            description:
                "Prema stanju kože biramo odgovarajuće preparate i korake tretmana.",
        },
        {
            number: "03",
            title: "Preporuke",
            description:
                "Na kraju razgovaramo o njezi nakon tretmana i odgovarajućoj kućnoj rutini.",
        },
    ],
    noteLabel: "VAŽNO JE ZNATI",
    noteTitle: "Njega treba biti prilagođena, a ne univerzalna.",
    noteDescription:
        "Ako imate osjetljivu kožu, izražene nepravilnosti ili koristite preparate koji mogu utjecati na podnošljivost tretmana, obavijestite nas prije početka. Tako možemo pažljivije odabrati odgovarajući pristup.",
};

export default function Face() {
    return <ServiceDetail data={faceData} />;
}
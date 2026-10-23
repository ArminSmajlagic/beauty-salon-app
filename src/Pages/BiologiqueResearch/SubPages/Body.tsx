import BiologiqueDetail, {
    type BiologiquePageData,
} from "./BiologiqueDetail";

const bodyData: BiologiquePageData = {
    eyebrow: "BIOLOGIQUE RECHERCHE · NJEGA TIJELA",

    title: "Profesionalna njega tijela. Precizno odabrana.",

    description:
        "Biologique Recherche principe individualizirane njege primjenjuje i na kožu tijela. Posebno formulirani proizvodi za eksfolijaciju, hidrataciju i njegu kože povezuju se u protokol koji se prilagođava stanju kože, tretiranom području i željenom cilju.",

    tags: [
        "Formule za kožu tijela",
        "Ciljana njega",
        "Personalizirani protokoli",
    ],

    introLabel: "BIOLOGIQUE RECHERCHE · BODY CARE",

    introTitle:
        "Koža tijela zahtijeva vlastiti pristup i odgovarajuće formule.",

    introParagraphs: [
        "Koža tijela razlikuje se od kože lica po svojim karakteristikama i potrebama. Zbog toga Biologique Recherche razvija posebne preparate za tijelo, uključujući eksfolijacijske losione, pilinge, serume, ulja i kreme za različite namjene.",
        "U profesionalnom tretmanu izbor proizvoda zavisi od stanja kože, područja koje se tretira i cilja njege. Preparati za uklanjanje površinskih nečistoća i zaglađivanje kože imaju drugačiju ulogu od proizvoda usmjerenih na hidrataciju, mekoću i osjećaj ugodnosti.",
        "U našem salonu pristup njezi tijela zasnivamo na razgovoru o potrebama klijenta, pažljivom odabiru preparata i povezivanju odgovarajućih koraka tretmana. Svaki proizvod ima određenu ulogu i ne mora biti dio svakog protokola.",
    ],

    quoteNumber: "02",

    quote:
        "Njega tijela počinje odabirom formule koja odgovara njegovim potrebama.",

    methodologyLabel: "METODOLOGIJA",

    methodologyTitle:
        "Tri faze njege kože tijela.",

    methodologyDescription:
        "Principi Biologique Recherche metodologije primjenjuju se i na tijelo: procjena kože, odgovarajuća priprema i ciljano odabrani proizvodi. Preparati i intenzitet tretmana prilagođavaju se konkretnom području i stanju kože.",

    methodology: [
        {
            number: "01",
            label: "PROCJENA",
            title: "Procjena stanja kože",

            description:
                "Tretman započinje razgovorom o potrebama, navikama njege i očekivanjima. Razmatraju se suhoća, hrapavost, osjećaj zatezanja, stanje površine kože i područja kojima je potrebna dodatna pažnja.",

            details: [
                "Razgovor o cilju tretmana",
                "Procjena kože i tretiranih područja",
                "Odabir primjerenog intenziteta njege",
            ],
        },
        {
            number: "02",
            label: "PRIPREMA",
            title: "Eksfolijacija i zaglađivanje",

            description:
                "Za pripremu kože mogu se odabrati proizvodi namijenjeni eksfolijaciji tijela. Lotion P50 Corps je eksfolijacijski losion za tijelo, dok je Gommage P50 Corps namijenjen intenzivnijem pilingu, naročito kod hrapavijih područja kada je takav pristup prikladan.",

            details: [
                "Odabir proizvoda namijenjenog tijelu",
                "Prilagođavanje tretmana stanju kože",
                "Pažljiv pristup osjetljivim područjima",
            ],
        },
        {
            number: "03",
            label: "CILJANA NJEGA",
            title: "Hidratacija i njega kože",

            description:
                "Nakon pripreme biraju se preparati za ciljanu njegu, poput ulja, seruma i krema. Izbor zavisi od toga da li je prioritet hidratacija, mekoća, ugodniji osjećaj kože ili njega područja s posebnim potrebama.",

            details: [
                "Serum ili ulje prema potrebama kože",
                "Završna njega odgovarajućom kremom",
                "Preporuke za kućnu njegu tijela",
            ],
        },
    ],

    productsLabel: "PROIZVODI ZA TIJELO",

    productsTitle:
        "Namjenske formule za različite korake njege.",

    productsDescription:
        "Biologique Recherche linija za tijelo obuhvata eksfolijacijske preparate, ulja, serume i kreme. Sljedeći primjeri pokazuju ulogu pojedinih proizvoda u njezi; izbor zavisi od potreba kože i dostupnosti preparata.",

    products: [
        {
            category: "EKSFOLIJACIJA",
            name: "Lotion P50 Corps",

            description:
                "Eksfolijacijski losion formuliran za tijelo. Namijenjen je pročišćavanju i pripremi kože za naredne korake njege.",

            role: "Eksfolijacija i priprema kože",
        },
        {
            category: "PILING TIJELA",
            name: "Gommage P50 Corps",

            description:
                "Gel za eksfolijaciju tijela koji kombinuje mehaničko i hemijsko djelovanje. Namijenjen je naročito hrapavijim područjima kada je intenzivnija eksfolijacija prikladna.",

            role: "Zaglađivanje površine kože",
        },
        {
            category: "ULJE ZA TIJELO",
            name: "Huile Fondamentale",

            description:
                "Ulje iz linije za njegu tijela namijenjeno hidratantnoj, zaštitnoj i regenerativnoj njezi. Može biti dio protokola usmjerenog na mekoću i udobnost kože.",

            role: "Hidratantna i njegujuća njega",
        },
        {
            category: "SERUM ZA TIJELO",
            name: "Sérum Matriciel",

            description:
                "Serum za tijelo formuliran za hidratantnu njegu, tonus i čvršći izgled kože. Uključuje se u tretman prema odabranom cilju njege.",

            role: "Ciljana njega i tonus kože",
        },
        {
            category: "KREMA ZA TIJELO",
            name: "Crème Matricielle",

            description:
                "Krema za hidratantnu njegu i podršku čvršćem, zaglađenijem izgledu kože tijela.",

            role: "Hidratacija i njega kože",
        },
        {
            category: "SPECIFIČNA NJEGA",
            name: "Crème MSR-H Corps",

            description:
                "Krema namijenjena njezi kože u periodu prije i nakon menopauze, kada se mogu javiti izraženija suhoća i promjene u njenoj čvrstoći. Odabir se razmatra prema individualnim potrebama.",

            role: "Njega kože s posebnim potrebama",
        },
    ],

    protocolLabel: "PRIMJENA U SALONU",

    protocolTitle:
        "Svaki proizvod ima svoju ulogu u protokolu.",

    protocolDescription:
        "Tretman se ne zasniva na automatskoj primjeni svih proizvoda. Eksfolijacijski preparat bira se samo kada je prikladan, a nakon njega se odabiru odgovarajući proizvodi za daljnju njegu kože tijela.",

    protocolSteps: [
        {
            number: "01",
            title: "Priprema područja",

            description:
                "Procjenjuju se koža i tretirano područje, a zatim se bira odgovarajući način pripreme.",
        },
        {
            number: "02",
            title: "Eksfolijacija po potrebi",

            description:
                "Lotion P50 Corps ili Gommage P50 Corps mogu se razmotriti prema stanju kože i prikladnosti tretmana.",
        },
        {
            number: "03",
            title: "Ciljana njega",

            description:
                "Ulje, serum ili krema biraju se u skladu s potrebama kože, željenim osjećajem i ciljem njege.",
        },
        {
            number: "04",
            title: "Održavanje njege",

            description:
                "Prema potrebi, preporučuju se odgovarajući proizvodi i navike za kućnu njegu između tretmana.",
        },
    ],

    noteLabel: "INDIVIDUALNI ODABIR",

    noteTitle:
        "Intenzitet njege prilagođava se stanju kože.",

    noteDescription:
        "Eksfolijacija nije prikladna za svako stanje kože. Kod izražene osjetljivosti, iritacije ili oštećene kože potrebno je pažljivo razmotriti tretman i pridržavati se uputa proizvođača. Navedeni proizvodi su primjeri iz linije Biologique Recherche, a ne preporuka da se svi koriste u jednom tretmanu.",
};

export default function BiologiqueBody() {
    return <BiologiqueDetail data={bodyData} />;
}
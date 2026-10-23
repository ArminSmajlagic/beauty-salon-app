import BiologiqueDetail, {
    type BiologiquePageData,
} from "./BiologiqueDetail";

const faceData: BiologiquePageData = {
    eyebrow: "BIOLOGIQUE RECHERCHE · NJEGA LICA",

    title: "Precizna njega lica. Prilagođena vašoj koži.",

    description:
        "Biologique Recherche pristupa njezi lica kroz individualnu procjenu, pažljivu pripremu epidermisa i izbor proizvoda prema specifičnim potrebama kože. Svaki korak ima svoju svrhu, a tretman se oblikuje prema stanju kože u trenutku dolaska.",

    tags: [
        "Individualna procjena",
        "Profesionalne formule",
        "Personalizirani protokoli",
    ],

    introLabel: "BIOLOGIQUE RECHERCHE · FACE CARE",

    introTitle:
        "Koža nije uvijek ista. Zato ni njena njega ne treba biti univerzalna.",

    introParagraphs: [
        "Biologique Recherche je profesionalni brend za njegu kože koji povezuje detaljnu procjenu, ciljano odabrane preparate i precizno definisane korake tretmana. Umjesto oslanjanja isključivo na tip kože, njihov pristup uzima u obzir njeno trenutno stanje i specifične potrebe.",
        "U našem salonu proizvode iz ove linije koristimo u skladu s odabranim tretmanom i potrebama klijenta. Preparati za čišćenje, eksfolijaciju, maske, serumi i kreme imaju različite uloge, zbog čega se njihov izbor i kombinacija određuju individualno.",
        "Cilj je kreirati smislen i usklađen tretman, a zatim, prema potrebi, preporučiti proizvode za nastavak njege kod kuće.",
    ],

    quoteNumber: "01",

    quote:
        "Prvo razumjeti kožu. Zatim odabrati njegu koja joj je potrebna.",

    methodologyLabel: "METODOLOGIJA",

    methodologyTitle:
        "Tri koraka profesionalne njege lica.",

    methodologyDescription:
        "Biologique Recherche svoj pristup zasniva na procjeni kože, pripremi epidermisa i ciljanoj njezi. Ove faze povezuju se u protokol koji se prilagođava konkretnim potrebama kože.",

    methodology: [
        {
            number: "01",
            label: "PROCJENA",
            title: "Razumijevanje kože",

            description:
                "Prvi korak je razgovor i procjena trenutnog stanja kože. U obzir se uzimaju hidratacija, višak sebuma, osjetljivost, tekstura, neujednačen ten i želje klijenta. Biologique Recherche ovu fazu povezuje sa svojim konceptom Skin Instant©.",

            details: [
                "Razgovor o potrebama i navikama njege",
                "Procjena stanja kože prije tretmana",
                "Odabir odgovarajućeg pristupa",
            ],
        },
        {
            number: "02",
            label: "PRIPREMA",
            title: "Priprema epidermisa",

            description:
                "Nakon procjene bira se odgovarajući preparat za čišćenje i, kada stanje kože to dopušta, proizvod za eksfolijaciju. Lotion P50 je jedan od prepoznatljivih proizvoda brenda i dio njegove metodologije pripreme epidermisa.",

            details: [
                "Čišćenje kože odgovarajućim preparatom",
                "Odabir odgovarajuće formule Lotion P50",
                "Prilagođavanje intenziteta potrebama kože",
            ],
        },
        {
            number: "03",
            label: "CILJANA NJEGA",
            title: "Odabir aktivnih preparata",

            description:
                "U završnoj fazi biraju se maske, serumi i kreme prema cilju tretmana. Fokus može biti na hidrataciji, njezi kože sklone nepravilnostima, ugodnijem osjećaju kože ili poboljšanju njenog ukupnog izgleda.",

            details: [
                "Ciljana maska ili serum",
                "Krema prema potrebama kože",
                "Preporuke za kućnu njegu",
            ],
        },
    ],

    productsLabel: "PROIZVODI ZA LICE",

    productsTitle:
        "Različite formule. Različite potrebe kože.",

    productsDescription:
        "Asortiman Biologique Recherche obuhvata preparate za čišćenje, eksfolijaciju, maske, serume i kreme. Ovo su primjeri proizvoda koji imaju različite uloge u njezi lica; izbor zavisi od procjene kože i dostupnosti proizvoda.",

    products: [
        {
            category: "ČIŠĆENJE",
            name: "Lait E.V.",

            description:
                "Bogato mlijeko za uklanjanje šminke i nečistoća, namijenjeno posebno koži kojoj nedostaju lipidi i koja je sklona dehidraciji ili izraženijoj suhoći.",

            role: "Čišćenje i udobnost kože",
        },
        {
            category: "EKSFOLIJACIJA",
            name: "Lotion P50",

            description:
                "Višenamjenski losion za eksfolijaciju i pročišćavanje epidermisa. Postoji više formula Lotion P50, a odabir treba prilagoditi stanju i toleranciji kože.",

            role: "Priprema epidermisa",
        },
        {
            category: "MASKA",
            name: "Masque Vivant",

            description:
                "Maska za njegu kože sklone višku sebuma i nepravilnostima. Njena uloga uključuje pročišćavanje i pomoć u postizanju manje sjajnog izgleda kože.",

            role: "Pročišćavanje i balansiranje",
        },
        {
            category: "CILJANA NJEGA",
            name: "Sérum Amniotique VG",

            description:
                "Serum namijenjen hidratantnoj, umirujućoj i zaštitnoj njezi. U protokolu se razmatra kada koži odgovara ovakav tip ciljane njege.",

            role: "Hidratacija i ugodniji osjećaj kože",
        },
        {
            category: "KREMA",
            name: "Crème Dermopurifiante",

            description:
                "Krema namijenjena njezi kože sklone višku sebuma i nepravilnostima, s fokusom na pročišćavanje i balansiranje izgleda kože.",

            role: "Njega kože sklone nepravilnostima",
        },
        {
            category: "KREMA",
            name: "Crème Hydravit’S",

            description:
                "Krema iz linije za njegu lica koja je namijenjena hidrataciji, revitalizaciji i podršci svježijem izgledu kože.",

            role: "Hidratantna i revitalizirajuća njega",
        },
    ],

    protocolLabel: "PRIMJENA U SALONU",

    protocolTitle:
        "Protokol se bira prema stanju kože, a ne prema jednom univerzalnom receptu.",

    protocolDescription:
        "U okviru profesionalnog tretmana proizvodi se mogu povezati u nekoliko funkcionalnih faza. Nije nužno da svaki tretman uključuje sve proizvode: izbor zavisi od procjene kože, njene tolerancije i cilja tretmana.",

    protocolSteps: [
        {
            number: "01",
            title: "Čišćenje",

            description:
                "Odabir mlijeka ili drugog preparata za uklanjanje šminke i nečistoća, uz uvažavanje stanja kože.",
        },
        {
            number: "02",
            title: "Priprema",

            description:
                "Prema potrebi kože primjenjuje se odgovarajuća eksfolijacijska njega, uključujući odabranu formulu Lotion P50 kada je prikladna.",
        },
        {
            number: "03",
            title: "Ciljana formula",

            description:
                "Maska, serum i krema biraju se prema prioritetu tretmana, bilo da je fokus na hidrataciji, višku sebuma ili drugim potrebama kože.",
        },
        {
            number: "04",
            title: "Kućna rutina",

            description:
                "Po završetku tretmana mogu se preporučiti proizvodi i način primjene za nastavak odgovarajuće njege kod kuće.",
        },
    ],

    noteLabel: "INDIVIDUALNI ODABIR",

    noteTitle:
        "Nije svaki proizvod namijenjen svakoj koži.",

    noteDescription:
        "Nazivi proizvoda na ovoj stranici predstavljaju primjere iz asortimana Biologique Recherche, a ne univerzalnu preporuku. Posebno se kod eksfolijacijskih preparata i kože koja je osjetljiva ili nadražena izbor i način primjene trebaju pažljivo razmotriti. Preporuku treba prilagoditi stanju kože i uputama proizvođača.",
};

export default function BiologiqueFace() {
    return <BiologiqueDetail data={faceData} />;
}
import ServiceDetail, {
    type ServiceDetailData,
} from "./ServiceDetail";

const makeUpData: ServiceDetailData = {
    eyebrow: "PERMANENT MAKE-UP & PRO MAKE-UP",
    title: "Ljepota koja prati vaš stil.",
    description:
        "Bilo da želite dugotrajnije naglašene crte lica ili profesionalni make-up za posebnu priliku, pristup prilagođavamo vašim željama, stilu i prirodnim karakteristikama.",
    tags: [
        "Permanentni make-up",
        "Profesionalno šminkanje",
        "Individualan izbor izgleda",
    ],
    introLabel: "VAŠ STIL, VAŠ IZBOR",
    introTitle: "Od prirodno naglašenog izgleda do make-upa za posebne prilike.",
    introParagraphs: [
        "Permanentni make-up i profesionalno šminkanje imaju različite namjene, ali oba zahtijevaju osjećaj za proporcije, pažnju prema detaljima i razumijevanje željenog izgleda. Zato prije tretmana razgovaramo o vašim očekivanjima i rezultatu koji želite postići.",
        "Kod permanentnog make-upa posebna pažnja posvećuje se obliku, nijansi i prikladnosti tretmana, dok se kod profesionalnog šminkanja izgled usklađuje s prilikom, odjećom, stilom i ličnim preferencijama.",
    ],
    quoteNumber: "03",
    quote: "Naglasite ono što vas čini jedinstvenim.",
    sectionLabel: "NAŠE MAKE-UP USLUGE",
    sectionTitle: "Dva pristupa. Vaš odabrani izgled.",
    sectionDescription:
        "Odaberite uslugu prema željenom efektu i prilici. Prije početka dogovaramo detalje kako bismo uskladili očekivanja i pristup.",
    cards: [
        {
            number: "01",
            category: "PERMANENT MAKE-UP",
            title: "Permanentni make-up",
            description:
                "Tretman namijenjen dugotrajnijem naglašavanju odabranih crta lica. Oblik i nijansa planiraju se prema prirodnim karakteristikama i željenom izgledu.",
            points: [
                "Konsultacija o željenom rezultatu",
                "Planiranje oblika i nijanse",
                "Dogovor o prikladnosti tretmana",
                "Upute za njegu nakon tretmana",
            ],
        },
        {
            number: "02",
            category: "PRO MAKE-UP",
            title: "Profesionalni make-up",
            description:
                "Profesionalno šminkanje prilagođeno je vašem licu, stilu i događaju za koji se pripremate, od suptilnog dnevnog izgleda do izraženijeg večernjeg make-upa.",
            points: [
                "Dnevni i večernji make-up",
                "Šminkanje za proslave i posebne prilike",
                "Make-up za fotografisanje i događaje",
                "Prilagodba željenom intenzitetu i stilu",
            ],
        },
    ],
    processLabel: "NAŠ PRISTUP",
    processTitle: "Detalji koji čine razliku.",
    steps: [
        {
            number: "01",
            title: "Konsultacija",
            description:
                "Razgovaramo o vašim željama, prilici i očekivanjima kako bismo dogovorili odgovarajući pristup.",
        },
        {
            number: "02",
            title: "Planiranje izgleda",
            description:
                "Usklađujemo oblik, boje i intenzitet s vašim crtama lica, stilom i odabranom uslugom.",
        },
        {
            number: "03",
            title: "Tretman i upute",
            description:
                "Izvodimo dogovorenu uslugu i objašnjavamo važne korake njege kada su oni potrebni.",
        },
    ],
    noteLabel: "PRIJE DOLASKA",
    noteTitle: "Razgovor o vašim željama prvi je korak.",
    noteDescription:
        "Za profesionalno šminkanje korisno je navesti priliku i željeni stil. Za permanentni make-up potrebno je prethodno razgovarati o očekivanjima, zdravstvenim okolnostima važnim za tretman i uputama za pripremu i njegu nakon njega.",
};

export default function MakeUp() {
    return <ServiceDetail data={makeUpData} />;
}
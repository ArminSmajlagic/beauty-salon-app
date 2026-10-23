export type Product = {
    name: string;
    category: string;
    description: string;
    image?: string;
};

export function slugifyProductName(name: string): string {
    return name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

export const products: Product[] = [
    // =========================================================
    // ČIŠĆENJE LICA
    // =========================================================
    {
        name: "Lait VIP O2",
        category: "Njega lica",
        description:
            "Mlijeko za čišćenje lica i uklanjanje šminke, razvijeno za njegu kože kojoj je potreban svježiji i blistaviji izgled. Koristi se kao prvi korak rutine za uklanjanje površinskih nečistoća, uz njegu i očuvanje ugodnog osjećaja kože.",
    },
    {
        name: "Lait S.R.",
        category: "Njega lica",
        description:
            "Mlijeko za čišćenje namijenjeno koži sklonoj pojačanom lučenju sebuma i nepravilnostima. Pomaže ukloniti šminku i nečistoće te pripremiti kožu za naredne korake profesionalne ili svakodnevne njege.",
    },
    {
        name: "Lait Dermo-S",
        category: "Njega lica",
        description:
            "Nježno mlijeko za čišćenje namijenjeno osjetljivoj i reaktivnoj koži. Uklanja šminku i svakodnevne nečistoće, uz fokus na umirujuću njegu, hidrataciju i osjećaj ugodnosti nakon čišćenja.",
    },
    {
        name: "Lait E.V.",
        category: "Njega lica",
        description:
            "Mlijeko za čišćenje i uklanjanje šminke namijenjeno koži kojoj je potrebna bogatija, lipidima usmjerena njega. Pomaže očistiti kožu i ostaviti je mekanom, posebno kada je izražena suhoća ili osjećaj zatezanja.",
    },
    {
        name: "Eau Micellaire Biosensible",
        category: "Njega lica",
        description:
            "Micelarna voda za uklanjanje šminke i nečistoća s fokusom na potrebe osjetljive kože. Praktična je za početno čišćenje, a formulacija je usmjerena na hidratantnu i umirujuću njegu.",
    },
    {
        name: "Lait U",
        category: "Njega lica",
        description:
            "Mlijeko za čišćenje lica koje se koristi za uklanjanje šminke i nečistoća te pripremu kože za nastavak rutine. Prije objave u prodajnom katalogu provjeriti tačan naziv i dostupnost ove formule na tržištu salona.",
    },

    // =========================================================
    // LOTIONS P50 I LOSIONI ZA LICE
    // =========================================================
    {
        name: "Lotion P50",
        category: "Njega lica",
        description:
            "Višenamjenski eksfolijacijski losion koji pomaže ukloniti odumrle ćelije s površine kože, pročistiti epidermis i poboljšati izgled teksture. Namijenjen je prvenstveno koži sklonoj pojačanom lučenju sebuma i zadebljanom površinskom sloju; odabir i način primjene trebaju odgovarati toleranciji kože.",
    },
    {
        name: "Lotion P50W",
        category: "Njega lica",
        description:
            "Varijanta Lotion P50 linije razvijena za kožu koja je tanja, dehidrirana ili osjetljivija na intenzivnu eksfolijaciju. Povezuje eksfolijacijski učinak s hidratantnom i umirujućom njegom, uz potrebu za postepenim uvođenjem prema uputama proizvođača.",
    },
    {
        name: "Lotion P50V",
        category: "Njega lica",
        description:
            "Eksfolijacijski losion namijenjen koži kojoj je potrebna njega usmjerena na tonus i revitaliziraniji izgled. Pomaže pročistiti površinu epidermisa i podržati ujednačeniju teksturu kože u okviru prilagođenog protokola.",
    },
    {
        name: "Lotion P50 PIGM 400",
        category: "Njega lica",
        description:
            "Eksfolijacijski losion namijenjen njezi kože s neujednačenim tenom i vidljivim tamnim mrljama. Povezuje eksfolijaciju i pročišćavanje s njegom usmjerenom na blistaviji i ujednačeniji izgled kože.",
    },
    {
        name: "Lotion P50T",
        category: "Njega lica",
        description:
            "Losion iz linije P50 koji objedinjuje eksfolijacijsku, pročišćavajuću i tonizirajuću njegu. Predstavlja jednu od specijaliziranih formula ove linije, pa se odabir treba zasnivati na stanju kože i preporukama proizvođača.",
    },
    {
        name: "Lotion MC 110 N°1",
        category: "Njega lica",
        description:
            "Losion namijenjen njezi kože kojoj je potreban zaglađeniji i puniji izgled. U protokolu se koristi kao specijalizirani korak usmjeren na izgled površine kože i osjećaj zaglađenosti, u skladu s odabranom rutinom.",
    },
    {
        name: "L’Eauxygénante",
        category: "Njega lica",
        description:
            "Osvježavajući losion u spreju za njegu lica, namijenjen podršci hidrataciji, tonusu i blistavijem izgledu kože. Može se uključiti u rutinu kao dodatni korak osvježenja, prema preporučenom načinu primjene.",
    },

    // =========================================================
    // SERUMI ZA LICE
    // =========================================================
    {
        name: "Sérum Vivant",
        category: "Njega lica",
        description:
            "Ciljani serum namijenjen koži sklonoj upornim nepravilnostima i višku sebuma. Njegova uloga u rutini je podrška pročišćenom izgledu kože i njezi kožne barijere, uz odabir drugih preparata prema individualnoj procjeni.",
    },
    {
        name: "Spectral",
        category: "Njega lica",
        description:
            "Serum usmjeren na blistaviji, ujednačeniji izgled tena i kvalitetu površine kože. Uključuje se u personaliziranu rutinu kada su prioritet izgled bez sjaja, neujednačen ten ili koža kojoj je potrebna dodatna revitalizirajuća njega.",
    },
    {
        name: "ISO-Placenta",
        category: "Njega lica",
        description:
            "Serum namijenjen njezi kože s vidljivim tragovima nakon nepravilnosti i neujednačenom pigmentacijom. Koristi se kao ciljani korak u rutini koja je usmjerena na zaglađeniji i ujednačeniji izgled kože.",
    },
    {
        name: "Elastine",
        category: "Njega lica",
        description:
            "Serum namijenjen njezi kože s vidljivim linijama i borama te koži kojoj je potrebna dodatna njega za zaglađeniji izgled. U rutini se primjenjuje kao ciljani preparat prije odabrane završne kreme.",
    },
    {
        name: "Complexe Iribiol",
        category: "Njega lica",
        description:
            "Serum namijenjen koži sklonoj pojačanom lučenju sebuma i nepravilnostima. Njegova uloga je podrška matiranijem i uravnoteženijem izgledu kože kao dio rutine koja se prilagođava njenim potrebama.",
    },
    {
        name: "Collagène Originel",
        category: "Njega lica",
        description:
            "Serum usmjeren na punoću kože i njegu vidljivih linija. Uključuje se u rutinu kada je cilj njegovaniji, zaglađeniji izgled kože i podrška njenoj vizuelnoj punoći.",
    },
    {
        name: "Oligo-Protéines Marines",
        category: "Njega lica",
        description:
            "Preparat namijenjen revitalizirajućoj njezi područja oko očiju, posebno kada su prisutni umoran izgled i vidljivi podočnjaci. Njegova je namjena osvježavanje izgleda osjetljivog područja i podrška njegovanijem izgledu.",
    },
    {
        name: "Progeskin",
        category: "Njega lica",
        description:
            "Serum iz linije za njegu zrelije kože, usmjeren na izgled bora i znakove starenja. Koristi se kao dio personalizirane rutine kojoj je cilj zaglađeniji i njegovaniji izgled kože.",
    },
    {
        name: "Amniotique VG",
        category: "Njega lica",
        description:
            "Serum namijenjen hidratantnoj, umirujućoj i zaštitnoj njezi. Može biti prikladan dio rutine kada je koži potrebna dodatna hidratacija i ugodniji osjećaj, uz izbor preparata prema njenom trenutnom stanju.",
    },
    {
        name: "Extraits Tissulaires",
        category: "Njega lica",
        description:
            "Serum namijenjen hidratantnoj i zaštitnoj njezi kože. U profesionalnoj ili kućnoj rutini može se koristiti kao ciljani korak za podršku ravnoteži kože, uz kombinovanje s odgovarajućom kremom.",
    },
    {
        name: "Sérum Colostrum",
        category: "Njega lica",
        description:
            "Preparat iz ranije korištenih ili regionalno dostupnih ponuda, namijenjen njezi kože kojoj je potrebna dodatna podrška hidrataciji i udobnosti. Prije prikazivanja kao aktuelnog proizvoda provjeriti tačan naziv i važeću dostupnost kod dobavljača.",
    },

    // =========================================================
    // KREME ZA LICE
    // =========================================================
    {
        name: "Crème M.E.C.",
        category: "Njega lica",
        description:
            "Krema namijenjena punoći i njegovanijem izgledu kože. U rutini se koristi kao završni korak kada je prioritet mekša, glatkija i vizuelno punija koža.",
    },
    {
        name: "Crème VIP O2",
        category: "Njega lica",
        description:
            "Krema namijenjena hidratantnoj njezi i blistavijem izgledu kože. Može se uključiti u rutinu kada je koži potrebna podrška svježijem izgledu i njezi površine izložene svakodnevnim vanjskim utjecajima.",
    },
    {
        name: "Crème PTO Métamorphique",
        category: "Njega lica",
        description:
            "Krema usmjerena na njegu kože kojoj je potreban čvršći, zaglađeniji i strukturiraniji izgled. Koristi se kao završni korak prilagođene rutine, prema potrebama kože i načinu preporučenom od proizvođača.",
    },
    {
        name: "Crème ISO-Placenta",
        category: "Njega lica",
        description:
            "Krema namijenjena njezi kože s neujednačenom teksturom i vidljivim tragovima nakon nepravilnosti. Fokus je na zaglađenijem i ujednačenijem izgledu kože u okviru cjelovite rutine.",
    },
    {
        name: "Crème Dermopurifiante",
        category: "Njega lica",
        description:
            "Krema za njegu kože sklone nepravilnostima i pojačanom lučenju sebuma. Kombinuje umirujuću i pročišćavajuću njegu, a u rutini se bira kada je prioritet uravnoteženiji izgled kože i kontrola viška sjaja.",
    },
    {
        name: "Crème Elastine",
        category: "Njega lica",
        description:
            "Krema namijenjena hidratantnoj njezi i zaglađenijem izgledu kože s vidljivim linijama. Uključuje se kao završni korak rutine usmjerene na njegu i revitalizaciju kože.",
    },
    {
        name: "Crème Hydravit’S",
        category: "Njega lica",
        description:
            "Krema za hidratantnu i revitalizirajuću njegu, namijenjena koži kojoj je potreban svježiji i njegovaniji izgled. Pomaže podržati osjećaj mekoće i ugodnosti kao dio svakodnevne rutine.",
    },
    {
        name: "Crème Collagène",
        category: "Njega lica",
        description:
            "Krema usmjerena na hidratantnu i regenerativnu njegu kože. Koristi se kada je cilj podržati osjećaj punoće, mekoće i njegovaniji izgled kože.",
    },
    {
        name: "Crème PIGM 400",
        category: "Njega lica",
        description:
            "Krema namijenjena njezi kože s neujednačenim tenom i vidljivim tamnim mrljama. U rutini je usmjerena na blistaviji izgled i podršku ujednačenijem tonu kože.",
    },
    {
        name: "Crème Masque Vernix VG",
        category: "Njega lica",
        description:
            "Bogata krema-maska namijenjena zaštitnoj i regenerativnoj njezi. Koristi se kada je koži potrebna dodatna udobnost i njega, posebno u rutinama usmjerenim na osjećaj mekoće i zaštićenosti.",
    },
    {
        name: "Crème VG Derm",
        category: "Njega lica",
        description:
            "Krema namijenjena hidratantnoj i hranjivoj njezi kože kojoj je potreban osjećaj udobnosti. Pomaže u održavanju mekoće i njegovanog izgleda te se bira prema potrebama kože.",
    },
    {
        name: "Crème Dermo-RL",
        category: "Njega lica",
        description:
            "Krema usmjerena na regenerativnu i lipidima obnavljajuću njegu. Namijenjena je koži kojoj su potrebni bogatiji osjećaj njege, mekoća i podrška zaštitnoj funkciji površinskog sloja.",
    },

    // =========================================================
    // MASKE ZA LICE
    // =========================================================
    {
        name: "Masque Vivant",
        category: "Njega lica",
        description:
            "Maska namijenjena pročišćavanju i njezi kože sklone višku sebuma i nepravilnostima. U personaliziranom protokolu koristi se za podršku ujednačenijem izgledu, matiranijoj površini i njezi vidljivih pora.",
    },
    {
        name: "Masque Visolastine +",
        category: "Njega lica",
        description:
            "Hidratantna maska namijenjena koži kojoj je potrebna dodatna mekoća i udobnost. Pomaže podržati njegovan i zaglađen izgled kože te se uključuje u rutine usmjerene na očuvanje hidratacije.",
    },
    {
        name: "Masque VIP O2",
        category: "Njega lica",
        description:
            "Maska koja njeguje hidrataciju i blistaviji izgled tena. U profesionalnom tretmanu koristi se kao ciljani korak kada je prioritet svježiji izgled kože i dodatna njega površine.",
    },
    {
        name: "Masque Biosensible",
        category: "Njega lica",
        description:
            "Maska razvijena za potrebe osjetljive kože kojoj je važna umirujuća i hidratantna njega. Koristi se kada je potrebno posvetiti dodatnu pažnju ugodnosti kože i njenoj zaštitnoj barijeri.",
    },
    {
        name: "Masque PIGM 400",
        category: "Njega lica",
        description:
            "Maska namijenjena njezi kože s neujednačenim tenom i vidljivim pigmentacijskim nepravilnostima. U tretmanu se koristi kao ciljani korak za podršku blistavijem i ujednačenijem izgledu.",
    },
    {
        name: "Masque Caviar Vert",
        category: "Njega lica",
        description:
            "Maska namijenjena njezi kože s vidljivim borama i gubitkom glatkoće. Njena uloga je podrška zaglađenijem i zategnutijem izgledu kože kao dio protokola prilagođenog njenim potrebama.",
    },
    {
        name: "Platysma",
        category: "Njega lica",
        description:
            "Ciljana maska za njegu kože kojoj je potrebna njega usmjerena na čvršći izgled, naročito u području donjeg dijela lica i vrata. Uključuje se u specijalizirani protokol, prema prikladnosti i načinu primjene koji preporučuje proizvođač.",
    },
    {
        name: "Biomagic Mask",
        category: "Njega lica",
        description:
            "Maska namijenjena pročišćavanju kože, smanjenju vidljivog sjaja i njegovanijem izgledu pora. Koristi se u rutinama za kožu kojoj odgovara matirajuća i zaštitna njega.",
    },
    {
        name: "Masque Biofixine",
        category: "Njega lica",
        description:
            "Maska za njegu kože s vidljivim linijama i borama, namijenjena zaglađenijem i revitaliziranijem izgledu. Dio je ciljane njege koja se bira prema stanju kože i ukupnom protokolu.",
    },
    {
        name: "Masque Dermopurifiant",
        category: "Njega lica",
        description:
            "Maska namijenjena njezi kože sklone nepravilnostima i višku sebuma. U kombinaciji s odgovarajućim preparatima koristi se kao korak pročišćavajuće rutine, prema individualnim potrebama kože.",
    },

    // =========================================================
    // PODRUČJE OKO OČIJU I USANA
    // =========================================================
    {
        name: "Crème Contour Yeux et Lèvres Biofixine",
        category: "Njega lica",
        description:
            "Krema za područje oko očiju i usana, usmjerena na njegu vidljivih linija i podršku zaglađenijem izgledu. Formulacija je namijenjena osjetljivim zonama koje zahtijevaju ciljanu njegu i odabranu količinu proizvoda.",
    },
    {
        name: "Crème Contour des Yeux VIP O2",
        category: "Njega lica",
        description:
            "Krema za područje oko očiju namijenjena blistavijem i odmornijem izgledu. Koristi se za ciljanu njegu ove osjetljive zone, naročito kada su prioritet hidratacija i izgled podočnjaka.",
    },
    {
        name: "Liposmose",
        category: "Njega lica",
        description:
            "Preparat za područje oko očiju namijenjen njezi vidljivih vodenastih podočnjaka i natečenosti. U rutini se primjenjuje ciljano i prema uputama proizvođača, uz izbjegavanje kontakta s očima.",
    },
    {
        name: "Patchs Défatigants",
        category: "Njega lica",
        description:
            "Flasteri za njegu područja ispod očiju, namijenjeni umornom izgledu, vidljivim linijama dehidracije i podočnjacima. Koriste se kao povremeni dodatni korak kada je potrebno osvježiti izgled osjetljivog područja.",
    },
    {
        name: "Liftkiss",
        category: "Njega lica",
        description:
            "Maska za usne namijenjena njezi, zaglađivanju i punijem izgledu. Koristi se kao ciljani tretman usana, posebno kada im je potrebna dodatna mekoća i njega.",
    },
    {
        name: "Biokiss",
        category: "Njega lica",
        description:
            "Bogati preparat za njegu usana namijenjen zaštitnoj, obnavljajućoj i lipidima usmjerenoj njezi. Pomaže održati usne mekanim i njegovanim, posebno kada su suhe ili izložene vanjskim utjecajima.",
    },
    {
        name: "Expert Eyes",
        category: "Njega lica",
        description:
            "Specijalizirani dodatak za ciljanu njegu područja oko očiju, namijenjen podršci i njezi osjetljive kože ove regije. Prije predstavljanja kao samostalnog proizvoda provjeriti lokalnu verziju i tačne upute iz pakovanja.",
    },

    // =========================================================
    // TONIRANA NJEGA
    // =========================================================
    {
        name: "Eye Care Concealer N°1",
        category: "Njega lica",
        description:
            "Tonirani preparat za područje oko očiju koji kombinuje njegu s vizuelnim ujednačavanjem izgleda. Namijenjen je ublažavanju vidljivosti podočnjaka i zaglađenijem izgledu područja oko očiju.",
    },
    {
        name: "Eye Care Concealer N°2",
        category: "Njega lica",
        description:
            "Tonirani preparat za područje oko očiju iz linije Eye Care Concealer. Pomaže vizuelno ujednačiti ten u ovoj zoni, uz njegu i fokus na svježijem izgledu područja ispod očiju.",
    },
    {
        name: "Eye Care Concealer N°3",
        category: "Njega lica",
        description:
            "Tonirani preparat namijenjen području oko očiju koji kombinuje kozmetičko prekrivanje s njegom. Nijansa se bira prema tonu kože kako bi izgled bio ujednačeniji i prirodniji.",
    },
    {
        name: "Eye Care Concealer N°4",
        category: "Njega lica",
        description:
            "Tonirani preparat za područje oko očiju u tamnijoj nijansi iz linije Eye Care Concealer. Namijenjen je vizuelnom ujednačavanju tena ove regije uz istovremenu njegu kože.",
    },
    {
        name: "Sérum teinté N°1C",
        category: "Njega lica",
        description:
            "Tonirani serum koji kombinuje njegu kože s laganim ujednačavanjem tena. Koristi se kada je poželjan prirodniji izgled tena, uz hidratantnu i zaštitnu njegu.",
    },
    {
        name: "Sérum teinté N°1W",
        category: "Njega lica",
        description:
            "Tonirani serum za lice u toplijoj nijansi, namijenjen blagom ujednačavanju tena uz njegovanje kože. Odabir nijanse treba prilagoditi prirodnom tonu i željenom završnom izgledu.",
    },

    // =========================================================
    // ZAŠTITA LICA OD SUNCA
    // =========================================================
    {
        name: "Protection U.V. SPF 25",
        category: "Njega lica",
        description:
            "Preparat za dnevnu zaštitu lica sa SPF 25, namijenjen zaštiti kože od UV zračenja u okviru svakodnevne rutine. Može se uključiti u njegu usmjerenu na ujednačeniji izgled tena i smanjenje izlaganja kože štetnim efektima sunca; zaštitu treba obnavljati prema uputama proizvođača.",
    },

    // =========================================================
    // NJEGA TIJELA
    // =========================================================
    {
        name: "Lotion P50 Corps",
        category: "Njega tijela",
        description:
            "Eksfolijacijski losion posebno formuliran za kožu tijela. Pomaže ukloniti površinske odumrle ćelije, pročistiti kožu i pripremiti je za naredne korake njege, uz blag način primjene koji je prilagođen stanju tretiranog područja.",
    },
    {
        name: "Gommage P50 Corps",
        category: "Njega tijela",
        description:
            "Gel za piling tijela koji kombinuje mehaničku i hemijsku eksfolijaciju. Namijenjen je zaglađivanju hrapavijih područja i pripremi kože za daljnju njegu; ne koristi se na nadraženoj ili oštećenoj koži.",
    },
    {
        name: "Liposculpt AC",
        category: "Njega tijela",
        description:
            "Preparat za ciljanu njegu tijela usmjeren na izgled područja s celulitom i lokaliziranim naslagama. U masažnoj rutini koristi se s ciljem podrške zaglađenijem i čvršćem izgledu kože, bez garancije promjene tjelesne težine ili uklanjanja celulita.",
    },
    {
        name: "Huile Fondamentale",
        category: "Njega tijela",
        description:
            "Njegujuće ulje namijenjeno hidratantnoj, zaštitnoj i regenerativnoj njezi kože tijela. Pomaže održati osjećaj mekoće i elastičnosti te se može uključiti u masažne ili završne korake njege prema potrebi kože.",
    },
    {
        name: "Crème Matricielle",
        category: "Njega tijela",
        description:
            "Krema za tijelo usmjerena na hidrataciju, čvršći izgled i njegovaniju površinu kože. Koristi se kao završni korak njege tijela kada je cilj podržati mekoću, gipkost i ujednačeniji izgled kože.",
    },
    {
        name: "Sérum Matriciel",
        category: "Njega tijela",
        description:
            "Serum za tijelo namijenjen hidratantnoj njezi i podršci tonusu kože. U tretmanima se koristi kao ciljani preparat prije završne kreme, prema potrebi tretiranog područja.",
    },
    {
        name: "Crème MSR-H Corps",
        category: "Njega tijela",
        description:
            "Krema za tijelo namijenjena koži kojoj su potrebni bogatija njega, lipidna podrška i njegovaniji izgled. Formulacija je posebno usmjerena na promjene u potrebama kože koje se mogu javiti u periodu menopauze.",
    },
    {
        name: "Crème Dermo-RL Corps",
        category: "Njega tijela",
        description:
            "Krema za tijelo namijenjena hidratantnoj, regenerativnoj i lipidima usmjerenoj njezi. Pomaže podržati mekoću i ugodniji osjećaj kože, naročito kada joj je potrebna bogatija svakodnevna njega.",
    },
    {
        name: "Cible PIGM 400",
        category: "Njega tijela",
        description:
            "Ciljani preparat za njegu područja tijela s vidljivim tamnim mrljama i neujednačenom pigmentacijom. Usmjeren je na umirujuću njegu i blistaviji izgled kože, a izbor se prilagođava njenom stanju.",
    },
    {
        name: "Lipogen AC",
        category: "Njega tijela",
        description:
            "Preparat za ciljanu njegu tijela usmjeren na glađi i čvršći izgled kože. U profesionalnom protokolu može se kombinovati s odgovarajućim tehnikama masaže i drugim proizvodima za tijelo, u skladu s preporukama proizvođača.",
    },
    {
        name: "Lift Buste 3D",
        category: "Njega tijela",
        description:
            "Preparat za njegu područja dekoltea i poprsja, namijenjen zaglađenijem, punijem i čvršćem izgledu kože. Koristi se kao ciljano sredstvo za njegu ovog područja, uz pažljivo nanošenje prema uputama proizvođača.",
    },
    {
        name: "Masque Bain de Plantes",
        category: "Njega tijela",
        description:
            "Maska namijenjena pročišćavajućoj njezi i regulaciji izgleda kože sklone višku sebuma. Koristi se u okviru odgovarajućeg protokola za kožu tijela ili vlasišta, kada je primjena na konkretnom području predviđena uputama proizvođača.",
    },
    {
        name: "Crème Défatigante",
        category: "Njega tijela",
        description:
            "Preparat za njegu tijela čija je namjena osvježavajući i umirujući osjećaj na koži koja djeluje umorno. Ovaj naziv može se pojavljivati u ranijim ili regionalnim katalozima; provjeriti aktuelnu dostupnost prije predstavljanja kao proizvoda iz tekuće ponude.",
    },
    {
        name: "Huile Souveraine",
        category: "Njega tijela",
        description:
            "Njegujuće ulje koje je bilo navedeno u prethodnom katalogu salona za njegu kože tijela. Prije objave provjeriti tačan naziv proizvoda, deklaraciju i aktuelnu dostupnost kod dobavljača, jer nije potvrđeno u trenutno pregledanom glavnom katalogu brenda.",
    },

    // =========================================================
    // NJEGA KOSE I VLASIŠTA
    // =========================================================
    {
        name: "Lotion P50 Capillaire",
        category: "Njega kose i vlasišta",
        description:
            "Eksfolijacijski losion za vlasište namijenjen uklanjanju površinskih nečistoća i podršci uravnoteženijem stanju kože glave. Koristi se kao pripremni korak prije daljnje njege vlasišta, u skladu s uputama proizvođača.",
    },
    {
        name: "Shampooing Nutri-K",
        category: "Njega kose i vlasišta",
        description:
            "Šampon za čišćenje i hranjivu njegu kose kojoj je potrebna dodatna mekoća. Pomaže ukloniti nečistoće s kose i vlasišta te predstavlja prvi korak rutine za kosu koja djeluje suho ili zahtijeva bogatiju njegu.",
    },
    {
        name: "Shampooing Sébo-Rééquilibrant",
        category: "Njega kose i vlasišta",
        description:
            "Šampon namijenjen čišćenju vlasišta sklonog pojačanom lučenju sebuma. Pomaže ukloniti višak masnoće i podržati osjećaj čistoće, kao dio rutine prilagođene stanju vlasišta.",
    },
    {
        name: "Shampooing VIP O2",
        category: "Njega kose i vlasišta",
        description:
            "Šampon za čišćenje kose i vlasišta, formuliran s fokusom na njegu kose izložene svakodnevnim vanjskim utjecajima. Koristi se za uklanjanje nečistoća i pripremu kose za daljnje korake njege.",
    },
    {
        name: "Shampooing Dermo-Apaisant",
        category: "Njega kose i vlasišta",
        description:
            "Šampon namijenjen nježnom čišćenju osjetljivog vlasišta. Njegova je namjena podrška osjećaju udobnosti i čistoće, uz odabir načina korištenja prema stanju kože glave.",
    },
    {
        name: "Crème de Soin",
        category: "Njega kose i vlasišta",
        description:
            "Preparat za njegu kose koji pomaže zagladiti vlas, olakšati raščešljavanje i poboljšati osjećaj mekoće. U rutini se koristi nakon pranja, prema potrebama kose i preporučenom načinu primjene.",
    },
    {
        name: "Kéractive",
        category: "Njega kose i vlasišta",
        description:
            "Preparat namijenjen hidratantnoj, zaglađujućoj i zaštitnoj njezi kose. Može se uključiti u završne korake rutine kako bi kosa djelovala njegovanije i bila lakša za oblikovanje.",
    },
    {
        name: "Masque Dermo-Apaisant",
        category: "Njega kose i vlasišta",
        description:
            "Maska namijenjena umirujućoj njezi vlasišta i podršci njegovoj ugodnosti. U okviru odgovarajućeg protokola koristi se kao dodatni korak njege, posebno kada je potrebno voditi računa o osjetljivosti kože glave.",
    },
    {
        name: "Complexe Cegaba + Bioproline",
        category: "Njega kose i vlasišta",
        description:
            "Ciljani preparat za njegu vlasišta u rutini usmjerenoj na jačanje i njegu kose sklone opadanju. Predstavlja specijalizirani korak koji treba koristiti u skladu s uputama proizvođača i procjenom potreba vlasišta.",
    },

    // =========================================================
    // DODATNI PROIZVODI IZ RANIJEG SALONSKOG KATALOGA
    // Zadržani radi provjere postojeće ponude.
    // =========================================================
    {
        name: "Sérum Elastine",
        category: "Njega lica",
        description:
            "Naziv koji se pojavljivao u ranijem katalogu salona za serum namijenjen njezi kože s vidljivim linijama i borama. Prije objave provjeriti da li je u pitanju proizvod Elastine iz aktuelne linije i koristiti službeni naziv s pakovanja.",
    },
];
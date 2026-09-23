// src/Pages/Services/Services.tsx

import styles from "./Services.module.css";
import ScrollReveal from "../../Components/common/ScrollReveal.tsx";

function ArrowIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    );
}

type Service = {
    number: string;
    category: string;
    title: string;
    description: string;
    details: string[];
};

const services: Service[] = [
    {
        number: "01",
        category: "NJEGA LICA",
        title: "Profesionalna njega lica",
        description:
            "Njega lica prilagođava se trenutnom stanju i potrebama kože. Kroz pažljivo odabrane proizvode i individualan pristup, tretman je usmjeren na čišćenje, hidrataciju, obnovu i poboljšanje izgleda kože.",
        details: [
            "Individualna procjena kože",
            "Dubinsko čišćenje i priprema kože",
            "Profesionalni tretmani hidratacije i obnove",
            "Njega kože sklone nepravilnostima",
        ],
    },
    {
        number: "02",
        category: "NJEGA TIJELA",
        title: "Njega i tretmani tijela",
        description:
            "Tretmani tijela osmišljeni su za njegu, hidrataciju i poboljšanje izgleda kože. U zavisnosti od potreba, koriste se različite tehnike i profesionalni proizvodi kako bi tretman bio prilagođen pojedincu.",
        details: [
            "Njega i hidratacija kože tijela",
            "Piling i priprema kože",
            "Tretmani za zaglađivanje kože",
            "Opuštajuća i njegujuća njega tijela",
        ],
    },
    {
        number: "03",
        category: "PERMANENT MAKE-UP",
        title: "Permanentni make-up",
        description:
            "Permanentni make-up omogućava dugotrajniji, prirodan izgled obrva i drugih tretiranih područja. Oblik, intenzitet i ton biraju se prema crtama lica i željenom efektu.",
        details: [
            "Oblikovanje i definisanje obrva",
            "Odabir tona prema tenu i prirodnim dlačicama",
            "Prirodan i uredan izgled",
            "Konsultacija prije samog tretmana",
        ],
    },
    {
        number: "04",
        category: "PRO MAKE-UP",
        title: "Profesionalni make-up",
        description:
            "Profesionalno šminkanje prilagođavamo prilici, od elegantnog dnevnog izgleda do izraženijeg make-upa za posebne događaje. Fokus je na skladnom izgledu, trajnosti i individualnim karakteristikama lica.",
        details: [
            "Dnevni i večernji make-up",
            "Make-up za posebne prilike",
            "Šminkanje za fotografisanje i događaje",
            "Individualna prilagodba izgleda",
        ],
    },
];

export default function Services() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <ScrollReveal distance={30}>
                    <span className={styles.eyebrow}>
                        NAŠE USLUGE
                    </span>

                    <h1>
                        Njega, ljepota
                        <br />
                        i pažnja prema detaljima.
                    </h1>

                    <p>
                        U Alma & Selma Studiju Ljepote vjerujemo da
                        kvalitetna njega počinje razumijevanjem individualnih
                        potreba. Naše usluge obuhvataju profesionalnu njegu
                        lica i tijela, permanentni make-up i profesionalno
                        šminkanje.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={120} distance={30}>
                    <div className={styles.heroVisual}>
                        <div className={styles.heroGlow} />

                        <div className={styles.heroContent}>
                            <span>ALMA & SELMA</span>

                            <strong>
                                STUDIO LJEPOTE
                            </strong>

                            <small>
                                NJEGA • ESTETIKA • MAKE-UP
                            </small>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            <section className={styles.introSection}>
                <ScrollReveal distance={30}>
                    <div className={styles.introCard}>
                        <div className={styles.introLabel}>
                            <span />
                            INDIVIDUALNI PRISTUP
                        </div>

                        <div className={styles.introGrid}>
                            <div>
                                <h2>
                                    Svaki tretman prilagođavamo
                                    <br />
                                    vama.
                                </h2>

                                <p>
                                    Prije odabira tretmana važno nam je
                                    razumjeti vaše želje, potrebe i očekivanja.
                                    Na osnovu konsultacije biramo odgovarajući
                                    pristup, proizvode i način rada.
                                </p>
                            </div>

                            <div className={styles.introQuote}>
                                <span>04</span>

                                <p>
                                    Ljepota nije univerzalna.
                                    <br />
                                    Pristup treba biti ličan.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            <section className={styles.servicesSection}>
                <div className={styles.sectionHeading}>
                    <ScrollReveal distance={25}>
                        <span className={styles.eyebrow}>
                            USLUGE
                        </span>

                        <h2>
                            Tretmani za lice, tijelo i make-up.
                        </h2>

                        <p>
                            Od svakodnevne njege do posebnih prilika,
                            svaki tretman izvodimo pažljivo i individualno.
                        </p>
                    </ScrollReveal>
                </div>

                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <ScrollReveal
                            key={service.number}
                            delay={index * 80}
                            distance={30}
                        >
                            <article className={styles.serviceCard}>
                                <div className={styles.serviceTop}>
                                    <span className={styles.serviceNumber}>
                                        {service.number}
                                    </span>

                                    <span className={styles.serviceCategory}>
                                        {service.category}
                                    </span>
                                </div>

                                <div className={styles.serviceBody}>
                                    <h3>
                                        {service.title}
                                    </h3>

                                    <p>
                                        {service.description}
                                    </p>

                                    <div className={styles.serviceDetails}>
                                        {service.details.map((detail) => (
                                            <span key={detail}>
                                                <i />
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href="#/kontakt"
                                    className={styles.serviceLink}
                                >
                                    Saznajte više
                                    <ArrowIcon />
                                </a>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            <section className={styles.featureSection}>
                <ScrollReveal distance={30}>
                    <div className={styles.featureCard}>
                        <div className={styles.featureVisual}>
                            <div className={styles.featureVisualGlow} />

                            <div className={styles.featureVisualText}>
                                <span>
                                    PROFESIONALNA NJEGA
                                </span>

                                <strong>
                                    Ljepota kroz
                                    <br />
                                    pažljivo odabrane tretmane.
                                </strong>
                            </div>
                        </div>

                        <div className={styles.featureContent}>
                            <span className={styles.eyebrow}>
                                ALMA & SELMA
                            </span>

                            <h2>
                                Vrijeme posvećeno
                                <br />
                                vama.
                            </h2>

                            <p>
                                Naš cilj je da svaki dolazak u salon bude
                                više od samog tretmana. Želimo da se osjećate
                                ugodno, njegovano i sigurno u odabiru usluge.
                            </p>

                            <p>
                                Uz profesionalne proizvode, pažljiv rad i
                                individualan pristup, zajedno biramo njegu
                                koja najbolje odgovara vašim potrebama.
                            </p>

                            <a
                                href="#/kontakt"
                                className={styles.primaryButton}
                            >
                                Rezervišite termin
                                <ArrowIcon />
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            <section className={styles.ctaSection}>
                <ScrollReveal distance={30}>
                    <div className={styles.ctaCard}>
                        <span className={styles.eyebrow}>
                            STUDIO LJEPOTE
                        </span>

                        <h2>
                            Niste sigurni koji tretman
                            <br />
                            odgovara vašim potrebama?
                        </h2>

                        <p>
                            Kontaktirajte nas i zajedno ćemo odabrati
                            uslugu koja najbolje odgovara vašim željama,
                            potrebama i prilici.
                        </p>

                        <a
                            href="#/kontakt"
                            className={styles.primaryButton}
                        >
                            Kontaktirajte nas
                            <ArrowIcon />
                        </a>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
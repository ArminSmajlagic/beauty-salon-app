import { products } from "../../data/data";
import styles from "./Biologique.module.css";
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

function StepNumber({ number }: { number: string }) {
    return (
        <span className={styles.stepNumber}>
            {number}
        </span>
    );
}

export default function Biologique() {
    const featuredProducts = products.slice(0, 6);

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <ScrollReveal distance={30}>
                    <span className={styles.eyebrow}>
                        BIOLOGIQUE RECHERCHE
                    </span>

                    <h1>
                        Njega kože zasnovana
                        <br />
                        na preciznom pristupu.
                    </h1>

                    <p className={styles.heroText}>
                        U našem salonu Biologique Recherche proizvode
                        koristimo kao dio individualiziranog pristupa
                        njezi kože. Svaki tretman započinje procjenom
                        trenutnog stanja kože, nakon čega se odabiru
                        preparati i koraci njege koji odgovaraju njenim
                        specifičnim potrebama.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={120} distance={30}>
                    <div className={styles.heroVisual}>
                        <div className={styles.heroVisualGlow} />

                        <div className={styles.heroVisualContent}>
                            <span>
                                PROFESIONALNA NJEGA
                            </span>

                            <strong>
                                FACE • BODY • SCALP
                            </strong>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            <section className={styles.introSection}>
                <ScrollReveal distance={35}>
                    <div className={styles.introCard}>
                        <div className={styles.introLabel}>
                            <span />
                            O BRENDu
                        </div>

                        <div className={styles.introGrid}>
                            <div>
                                <h2>
                                    Biologique Recherche
                                </h2>

                                <p>
                                    Biologique Recherche razvija
                                    profesionalnu njegu koja se zasniva
                                    na personaliziranom pristupu koži.
                                    Fokus nije samo na izboru proizvoda,
                                    već na tome da se preparat i način
                                    primjene prilagode potrebama kože u
                                    trenutku tretmana.
                                </p>

                                <p>
                                    Linija obuhvata proizvode za čišćenje,
                                    eksfolijaciju, maske, serume i kreme,
                                    kao i preparate namijenjene njezi
                                    tijela. Formule se koriste u okviru
                                    protokola koji povezuje procjenu kože,
                                    pripremu epidermisa i ciljanu njegu.
                                </p>
                            </div>

                            <div className={styles.introQuote}>
                                <span>01</span>

                                <p>
                                    Precizno odabrana njega za potrebe
                                    kože kakva je danas.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            <section className={styles.methodologySection}>
                <ScrollReveal distance={35}>
                    <div className={styles.sectionHeading}>
                        <span className={styles.eyebrow}>
                            NAŠ PRISTUP
                        </span>

                        <h2>
                            Tretman počinje razumijevanjem kože.
                        </h2>

                        <p>
                            Biologique Recherche metodologija temelji se
                            na tri međusobno povezana koraka koji omogućavaju
                            da se profesionalna njega prilagodi konkretnim
                            potrebama kože.
                        </p>
                    </div>
                </ScrollReveal>

                <div className={styles.stepsGrid}>
                    <ScrollReveal delay={0} distance={30}>
                        <article className={styles.stepCard}>
                            <StepNumber number="01" />

                            <div className={styles.stepContent}>
                                <span>PROCJENA</span>

                                <h3>
                                    Procjena kože
                                </h3>

                                <p>
                                    Prije tretmana razgovaramo o stanju
                                    kože i njenim potrebama. Posmatramo
                                    hidrataciju, osjetljivost, sebum,
                                    teksturu i druge karakteristike kako
                                    bismo odredili odgovarajući pristup.
                                </p>
                            </div>
                        </article>
                    </ScrollReveal>

                    <ScrollReveal delay={100} distance={30}>
                        <article className={styles.stepCard}>
                            <StepNumber number="02" />

                            <div className={styles.stepContent}>
                                <span>PRIPREMA</span>

                                <h3>
                                    Priprema epidermisa
                                </h3>

                                <p>
                                    Koža se priprema odgovarajućim
                                    preparatima za čišćenje i eksfolijaciju.
                                    U ovu fazu mogu biti uključeni proizvodi
                                    poput Lotion P50, odabrani u skladu sa
                                    stanjem i potrebama kože.
                                </p>
                            </div>
                        </article>
                    </ScrollReveal>

                    <ScrollReveal delay={200} distance={30}>
                        <article className={styles.stepCard}>
                            <StepNumber number="03" />

                            <div className={styles.stepContent}>
                                <span>TRETMAN</span>

                                <h3>
                                    Ciljana njega
                                </h3>

                                <p>
                                    Nakon pripreme biraju se proizvodi i
                                    kombinacije aktivnih formula koje
                                    odgovaraju identificiranim potrebama.
                                    Tretman se tako prilagođava konkretnoj
                                    koži, umjesto unaprijed definisanom
                                    univerzalnom protokolu.
                                </p>
                            </div>
                        </article>
                    </ScrollReveal>
                </div>
            </section>

            <section className={styles.salonSection}>
                <ScrollReveal distance={35}>
                    <div className={styles.salonCard}>
                        <div className={styles.salonVisual}>
                            <div className={styles.salonVisualInner}>
                                <span>
                                    ALMA & SELMA
                                </span>

                                <strong>
                                    STUDIO LJEPOTE
                                </strong>
                            </div>
                        </div>

                        <div className={styles.salonContent}>
                            <span className={styles.eyebrow}>
                                BIOLOGIQUE RECHERCHE U NAŠEM SALONU
                            </span>

                            <h2>
                                Profesionalni proizvodi,
                                <br />
                                individualan pristup.
                            </h2>

                            <p>
                                U našem salonu Biologique Recherche
                                proizvodi nisu zamišljeni kao jedna
                                univerzalna rutina za svakoga. Koristimo ih
                                kao dio profesionalnog tretmana u kojem se
                                izbor proizvoda prilagođava potrebama kože.
                            </p>

                            <p>
                                Tokom tretmana kombinujemo odgovarajuće
                                preparate za čišćenje, pripremu, maske,
                                serume i završnu njegu. Na taj način svaki
                                korak ima svoju svrhu i uklapa se u cjelinu
                                tretmana.
                            </p>

                            <p>
                                Odabrane proizvode moguće je koristiti i za
                                kućnu njegu, uz preporuku prilagođenu stanju
                                vaše kože i načinu na koji je tretiramo u
                                salonu.
                            </p>

                            <a
                                href="#/kontakt"
                                className={styles.textLink}
                            >
                                Zatražite individualnu konsultaciju
                                <ArrowIcon />
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            <section className={styles.productsSection}>
                <ScrollReveal distance={35}>
                    <div className={styles.sectionHeading}>
                        <span className={styles.eyebrow}>
                            LINIJA PROIZVODA
                        </span>

                        <h2>
                            Od čišćenja do završne njege.
                        </h2>

                        <p>
                            Biologique Recherche linija obuhvata različite
                            kategorije profesionalne njege. U salonu se
                            proizvodi biraju prema konkretnim potrebama
                            kože i ulozi koju imaju u tretmanu.
                        </p>
                    </div>
                </ScrollReveal>

                <div className={styles.productsGrid}>
                    {featuredProducts.map((product, index) => (
                        <ScrollReveal
                            key={product.name}
                            delay={index * 70}
                            distance={25}
                        >
                            <article className={styles.productCard}>
                                <div className={styles.productImage}>
                                    <span>
                                        BIOLOGIQUE
                                        <br />
                                        RECHERCHE
                                    </span>
                                </div>

                                <div className={styles.productBody}>
                                    <span className={styles.productCategory}>
                                        {product.category}
                                    </span>

                                    <h3>{product.name}</h3>

                                    <p>
                                        {product.description}
                                    </p>

                                    <a
                                        href="#/web-shop"
                                        className={styles.productLink}
                                    >
                                        Pogledaj proizvod
                                        <ArrowIcon />
                                    </a>
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            <section className={styles.routineSection}>
                <ScrollReveal distance={35}>
                    <div className={styles.routineCard}>
                        <div>
                            <span className={styles.eyebrow}>
                                KUĆNA NJEGA
                            </span>

                            <h2>
                                Tretman se nastavlja i kod kuće.
                            </h2>

                            <p>
                                Profesionalna njega i kućna rutina mogu
                                zajedno činiti cjelovit pristup koži.
                                Nakon tretmana možemo preporučiti proizvode
                                koji odgovaraju vašim potrebama i objasniti
                                njihov redoslijed i način primjene.
                            </p>
                        </div>

                        <a
                            href="#/web-shop"
                            className={styles.primaryButton}
                        >
                            Istražite proizvode
                            <ArrowIcon />
                        </a>
                    </div>
                </ScrollReveal>
            </section>

            <section className={styles.ctaSection}>
                <ScrollReveal distance={30}>
                    <div className={styles.ctaCard}>
                        <span className={styles.eyebrow}>
                            ALMA & SELMA • STUDIO LJEPOTE
                        </span>

                        <h2>
                            Želite saznati koja njega
                            <br />
                            odgovara vašoj koži?
                        </h2>

                        <p>
                            Javite nam se za konsultaciju i saznajte više
                            o Biologique Recherche tretmanima i proizvodima
                            dostupnim u našem salonu.
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
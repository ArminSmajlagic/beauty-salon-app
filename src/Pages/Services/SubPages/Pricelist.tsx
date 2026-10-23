import styles from "./Pricelist.module.css";
import ScrollReveal from "../../../Components/common/ScrollReveal.tsx";

function DownloadIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M12 3v12" />
            <path d="m7 10 5 5 5-5" />
            <path d="M5 17v3h14v-3" />
        </svg>
    );
}

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

const pricelistUrl = `${
    import.meta.env.BASE_URL
}AlmaSelmaStudioLjepoteCjenovnik-Tretmani.pdf`;

export default function Pricelist() {
    console.log(pricelistUrl);
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <ScrollReveal distance={30}>
                    <span className={styles.eyebrow}>
                        ALMA & SELMA · STUDIO LJEPOTE
                    </span>

                    <h1>
                        Vrijeme za njegu.
                        <br />
                        Vrijeme za vas.
                    </h1>

                    <p className={styles.heroDescription}>
                        U našem salonu ljepote posvećeni smo individualnom
                        pristupu, profesionalnoj njezi i pažljivo odabranim
                        tretmanima. Svaku uslugu prilagođavamo vašim željama,
                        potrebama i očekivanjima, kako bi vaš dolazak bio
                        ugodno iskustvo posvećeno vama.
                    </p>

                    <div className={styles.heroActions}>
                        <a
                            href={pricelistUrl}
                            download="AlmaSelmaStudioLjepoteCjenovnik-Tretmani.pdf"
                            className={styles.primaryButton}
                        >
                            <DownloadIcon />
                            Preuzmite cjenovnik
                        </a>

                        <a
                            href="#/kontakt"
                            className={styles.secondaryButton}
                        >
                            Kontaktirajte nas
                            <ArrowIcon />
                        </a>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={100} distance={25}>
                    <div className={styles.heroCard}>
                        <div className={styles.cardTop}>
                            <span>ALMA & SELMA</span>
                            <span>STUDIO LJEPOTE</span>
                        </div>

                        <div className={styles.cardDivider} />

                        <span className={styles.cardEyebrow}>
                            NAŠE USLUGE
                        </span>

                        <h2>
                            Njega lica.
                            <br />
                            Njega tijela.
                            <br />
                            Ljepota u detaljima.
                        </h2>

                        <p>
                            Profesionalni tretmani i pažnja usmjerena na
                            ono što je vama važno.
                        </p>

                        <span className={styles.cardIndex}>AS</span>
                    </div>
                </ScrollReveal>
            </section>

            <section className={styles.introSection}>
                <ScrollReveal distance={30}>
                    <div className={styles.introCard}>
                        <div className={styles.introLabel}>
                            <span />
                            O NAŠIM USLUGAMA
                        </div>

                        <div className={styles.introGrid}>
                            <div>
                                <h2>
                                    Pronađite tretman koji odgovara
                                    vašim potrebama.
                                </h2>

                                <p>
                                    Naša ponuda obuhvata profesionalnu njegu
                                    lica i tijela, tretmane uz Biologique
                                    Recherche proizvode, permanentni make-up
                                    i profesionalno šminkanje.
                                </p>

                                <p>
                                    Svakoj usluzi pristupamo pažljivo,
                                    uz razgovor o vašim željama i izbor
                                    odgovarajućeg tretmana. Važno nam je
                                    da prije dolaska znate koje su vam
                                    mogućnosti dostupne i da imate priliku
                                    odabrati uslugu koja vam najviše odgovara.
                                </p>
                            </div>

                            <div className={styles.quote}>
                                <span>01</span>

                                <p>
                                    Vaše želje. Naša stručnost.
                                    Njega prilagođena vama.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            <section className={styles.servicesSection}>
                <ScrollReveal distance={25}>
                    <div className={styles.sectionHeading}>
                        <span className={styles.eyebrow}>
                            PONUDA SALONA
                        </span>

                        <h2>
                            Usluge za različite potrebe i prilike.
                        </h2>

                        <p>
                            Upoznajte naše kategorije usluga i preuzmite
                            cjenovnik za detaljniji pregled tretmana i cijena.
                        </p>
                    </div>
                </ScrollReveal>

                <div className={styles.servicesGrid}>
                    <ScrollReveal delay={0} distance={25}>
                        <a
                            href="#/usluge/njega-lica"
                            className={styles.serviceCard}
                        >
                            <span className={styles.serviceNumber}>01</span>

                            <div>
                                <span className={styles.serviceLabel}>
                                    NJEGA LICA
                                </span>

                                <h3>
                                    Profesionalna njega lica
                                </h3>

                                <p>
                                    Tretmani usmjereni na potrebe kože,
                                    čišćenje, hidrataciju i personaliziranu
                                    profesionalnu njegu.
                                </p>
                            </div>

                            <span className={styles.serviceArrow}>
                                <ArrowIcon />
                            </span>
                        </a>
                    </ScrollReveal>

                    <ScrollReveal delay={70} distance={25}>
                        <a
                            href="#/usluge/njega-tijela"
                            className={styles.serviceCard}
                        >
                            <span className={styles.serviceNumber}>02</span>

                            <div>
                                <span className={styles.serviceLabel}>
                                    NJEGA TIJELA
                                </span>

                                <h3>
                                    Njega i tretmani tijela
                                </h3>

                                <p>
                                    Njegujući tretmani s pažljivo odabranim
                                    preparatima koji odgovaraju potrebama kože.
                                </p>
                            </div>

                            <span className={styles.serviceArrow}>
                                <ArrowIcon />
                            </span>
                        </a>
                    </ScrollReveal>

                    <ScrollReveal delay={140} distance={25}>
                        <a
                            href="#/usluge/permanentni-make-up"
                            className={styles.serviceCard}
                        >
                            <span className={styles.serviceNumber}>03</span>

                            <div>
                                <span className={styles.serviceLabel}>
                                    PERMANENT MAKE-UP
                                </span>

                                <h3>
                                    Permanentni make-up
                                </h3>

                                <p>
                                    Pažljivo planiran izgled i naglašavanje
                                    odabranih crta lica u skladu s vašim željama.
                                </p>
                            </div>

                            <span className={styles.serviceArrow}>
                                <ArrowIcon />
                            </span>
                        </a>
                    </ScrollReveal>

                    <ScrollReveal delay={210} distance={25}>
                        <a
                            href="#/usluge/pro-make-up"
                            className={styles.serviceCard}
                        >
                            <span className={styles.serviceNumber}>04</span>

                            <div>
                                <span className={styles.serviceLabel}>
                                    PRO MAKE-UP
                                </span>

                                <h3>
                                    Profesionalno šminkanje
                                </h3>

                                <p>
                                    Make-up prilagođen vašem stilu, posebnim
                                    prilikama i željenom izgledu.
                                </p>
                            </div>

                            <span className={styles.serviceArrow}>
                                <ArrowIcon />
                            </span>
                        </a>
                    </ScrollReveal>
                </div>
            </section>

            <section className={styles.downloadSection}>
                <ScrollReveal distance={25}>
                    <div className={styles.downloadCard}>
                        <div className={styles.downloadIcon}>
                            <DownloadIcon />
                        </div>

                        <span className={styles.eyebrow}>
                            CJENOVNIK TRETMANA
                        </span>

                        <h2>
                            Sve informacije na jednom mjestu.
                        </h2>

                        <p>
                            Preuzmite naš cjenovnik u PDF formatu i pregledajte
                            ponudu tretmana i njihove cijene prije rezervacije
                            termina.
                        </p>

                        <a
                            href={pricelistUrl}
                            download="AlmaSelmaStudioLjepoteCjenovnik-Tretmani.pdf"
                            className={styles.primaryButton}
                        >
                            <DownloadIcon />
                            Preuzmite cjenovnik
                        </a>

                        <span className={styles.fileInfo}>
                            PDF dokument · Cjenovnik tretmana
                        </span>
                    </div>
                </ScrollReveal>
            </section>

            <section className={styles.contactSection}>
                <ScrollReveal distance={25}>
                    <div className={styles.contactCard}>
                        <span className={styles.contactEyebrow}>
                            ALMA & SELMA · STUDIO LJEPOTE
                        </span>

                        <h2>
                            Niste sigurni koji tretman
                            <br />
                            odgovara vašim potrebama?
                        </h2>

                        <p>
                            Kontaktirajte nas i zajedno ćemo odabrati uslugu
                            koja najbolje odgovara vašim željama, potrebama
                            i prilici.
                        </p>

                        <a
                            href="#/kontakt"
                            className={styles.contactButton}
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
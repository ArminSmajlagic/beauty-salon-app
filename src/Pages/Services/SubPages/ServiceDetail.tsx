import styles from "./ServiceDetail.module.css";
import ScrollReveal from "../../../Components/common/ScrollReveal.tsx";

export interface ServiceCard {
    number: string;
    category: string;
    title: string;
    description: string;
    points: string[];
}

export interface ServiceStep {
    number: string;
    title: string;
    description: string;
}

export interface ServiceDetailData {
    eyebrow: string;
    title: string;
    description: string;
    tags: string[];
    introLabel: string;
    introTitle: string;
    introParagraphs: string[];
    quoteNumber: string;
    quote: string;
    sectionLabel: string;
    sectionTitle: string;
    sectionDescription: string;
    cards: ServiceCard[];
    processLabel: string;
    processTitle: string;
    steps: ServiceStep[];
    noteLabel: string;
    noteTitle: string;
    noteDescription: string;
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

export default function ServiceDetail({
                                          data,
                                      }: {
    data: ServiceDetailData;
}) {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <ScrollReveal distance={30}>
                    <span className={styles.eyebrow}>
                        {data.eyebrow}
                    </span>

                    <h1>{data.title}</h1>

                    <p className={styles.heroDescription}>
                        {data.description}
                    </p>

                    <div className={styles.tags}>
                        {data.tags.map((tag) => (
                            <span key={tag} className={styles.tag}>
                                <i />
                                {tag}
                            </span>
                        ))}
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={100} distance={25}>
                    <div className={styles.heroCard}>
                        <div className={styles.heroCardTop}>
                            <span>ALMA & SELMA</span>
                            <span>STUDIO LJEPOTE</span>
                        </div>

                        <div className={styles.heroCardDivider} />

                        <span className={styles.heroCardLabel}>
                            POSVEĆENI VAMA
                        </span>

                        <h2>
                            Njega koja počinje
                            <br />
                            vašim potrebama.
                        </h2>

                        <p>
                            Pažljivo odabrani tretmani, individualan pristup
                            i posebna pažnja prema svakom detalju.
                        </p>

                        <a href="#/kontakt" className={styles.heroCardLink}>
                            Dogovorite konsultaciju
                            <ArrowIcon />
                        </a>

                        <span className={styles.heroCardNumber}>
                            01
                        </span>
                    </div>
                </ScrollReveal>
            </section>

            <section className={styles.introSection}>
                <ScrollReveal distance={30}>
                    <div className={styles.introCard}>
                        <div className={styles.introLabel}>
                            <span />
                            {data.introLabel}
                        </div>

                        <div className={styles.introGrid}>
                            <div className={styles.introMain}>
                                <h2>{data.introTitle}</h2>

                                {data.introParagraphs.map(
                                    (paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ),
                                )}
                            </div>

                            <aside className={styles.introQuote}>
                                <span>{data.quoteNumber}</span>
                                <p>{data.quote}</p>
                            </aside>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            <section className={styles.servicesSection}>
                <ScrollReveal distance={25}>
                    <div className={styles.sectionHeading}>
                        <span className={styles.eyebrow}>
                            {data.sectionLabel}
                        </span>

                        <h2>{data.sectionTitle}</h2>

                        <p>{data.sectionDescription}</p>
                    </div>
                </ScrollReveal>

                <div className={styles.cardsGrid}>
                    {data.cards.map((card, index) => (
                        <ScrollReveal
                            key={card.number}
                            delay={index * 75}
                            distance={25}
                        >
                            <article className={styles.serviceCard}>
                                <div className={styles.cardTop}>
                                    <span className={styles.cardNumber}>
                                        {card.number}
                                    </span>

                                    <span className={styles.cardCategory}>
                                        {card.category}
                                    </span>
                                </div>

                                <div className={styles.cardBody}>
                                    <h3>{card.title}</h3>

                                    <p>{card.description}</p>

                                    <div className={styles.cardPoints}>
                                        {card.points.map((point) => (
                                            <div
                                                className={styles.cardPoint}
                                                key={point}
                                            >
                                                <i />
                                                <span>{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            <section className={styles.processSection}>
                <ScrollReveal distance={25}>
                    <div className={styles.sectionHeading}>
                        <span className={styles.eyebrow}>
                            NAŠ PRISTUP
                        </span>

                        <h2>{data.processTitle}</h2>

                        <p>
                            Svaki korak ima svoju svrhu, a detalji tretmana
                            prilagođavaju se vašim željama, potrebama i
                            odabranoj usluzi.
                        </p>
                    </div>
                </ScrollReveal>

                <div className={styles.stepsGrid}>
                    {data.steps.map((step, index) => (
                        <ScrollReveal
                            key={step.number}
                            delay={index * 75}
                            distance={25}
                        >
                            <article className={styles.stepCard}>
                                <span className={styles.stepNumber}>
                                    {step.number}
                                </span>

                                <div className={styles.stepLine} />

                                <h3>{step.title}</h3>

                                <p>{step.description}</p>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            <section className={styles.noteSection}>
                <ScrollReveal distance={25}>
                    <div className={styles.noteCard}>
                        <div className={styles.noteIndex}>
                            <span>{data.noteLabel}</span>
                            <strong>✳</strong>
                        </div>

                        <div className={styles.noteContent}>
                            <h2>{data.noteTitle}</h2>
                            <p>{data.noteDescription}</p>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            <section className={styles.contactSection}>
                <ScrollReveal distance={25}>
                    <div className={styles.contactCard}>
                        <span className={styles.contactEyebrow}>
                            ALMA & SELMA • STUDIO LJEPOTE
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
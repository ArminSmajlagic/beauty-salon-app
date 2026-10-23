import styles from "./BiologiqueDetail.module.css";
import ScrollReveal from "../../../Components/common/ScrollReveal.tsx";

export interface BiologiqueMethodStep {
    number: string;
    label: string;
    title: string;
    description: string;
    details: string[];
}

export interface BiologiqueProduct {
    category: string;
    name: string;
    description: string;
    role: string;
}

export interface BiologiqueProtocolStep {
    number: string;
    title: string;
    description: string;
}

export interface BiologiquePageData {
    eyebrow: string;
    title: string;
    description: string;
    tags: string[];

    introLabel: string;
    introTitle: string;
    introParagraphs: string[];
    quoteNumber: string;
    quote: string;

    methodologyLabel: string;
    methodologyTitle: string;
    methodologyDescription: string;
    methodology: BiologiqueMethodStep[];

    productsLabel: string;
    productsTitle: string;
    productsDescription: string;
    products: BiologiqueProduct[];

    protocolLabel: string;
    protocolTitle: string;
    protocolDescription: string;
    protocolSteps: BiologiqueProtocolStep[];

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

export default function BiologiqueDetail({
                                             data,
                                         }: {
    data: BiologiquePageData;
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
                            <span className={styles.tag} key={tag}>
                                <i />
                                {tag}
                            </span>
                        ))}
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={100} distance={25}>
                    <div className={styles.heroPanel}>
                        <div className={styles.panelTop}>
                            <span>ALMA & SELMA</span>
                            <span>STUDIO LJEPOTE</span>
                        </div>

                        <div className={styles.panelRule} />

                        <span className={styles.panelEyebrow}>
                            BIOLOGIQUE RECHERCHE
                        </span>

                        <h2>
                            Nauka o koži.
                            <br />
                            Preciznost u njezi.
                        </h2>

                        <p>
                            Profesionalne formule i individualno odabrani
                            koraci njege, u skladu s potrebama kože.
                        </p>

                        <div className={styles.panelFooter}>
                            <span>ASSESSMENT</span>
                            <i />
                            <span>PREPARATION</span>
                            <i />
                            <span>TREATMENT</span>
                        </div>

                        <span className={styles.panelIndex}>BR</span>
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

                            <aside className={styles.quoteCard}>
                                <span>{data.quoteNumber}</span>
                                <p>{data.quote}</p>
                                <div className={styles.quoteRule} />
                                <small>BIOLOGIQUE RECHERCHE</small>
                            </aside>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            <section className={styles.methodologySection}>
                <ScrollReveal distance={25}>
                    <div className={styles.sectionHeading}>
                        <span className={styles.eyebrow}>
                            {data.methodologyLabel}
                        </span>

                        <h2>{data.methodologyTitle}</h2>

                        <p>{data.methodologyDescription}</p>
                    </div>
                </ScrollReveal>

                <div className={styles.methodologyGrid}>
                    {data.methodology.map((step, index) => (
                        <ScrollReveal
                            key={step.number}
                            delay={index * 80}
                            distance={25}
                        >
                            <article className={styles.methodCard}>
                                <div className={styles.methodTop}>
                                    <span className={styles.methodNumber}>
                                        {step.number}
                                    </span>

                                    <span className={styles.methodLabel}>
                                        {step.label}
                                    </span>
                                </div>

                                <div className={styles.methodRule} />

                                <h3>{step.title}</h3>

                                <p className={styles.methodDescription}>
                                    {step.description}
                                </p>

                                <div className={styles.methodDetails}>
                                    {step.details.map((detail) => (
                                        <div
                                            className={styles.methodDetail}
                                            key={detail}
                                        >
                                            <i />
                                            <span>{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            <section className={styles.productsSection}>
                <ScrollReveal distance={25}>
                    <div className={styles.sectionHeading}>
                        <span className={styles.eyebrow}>
                            {data.productsLabel}
                        </span>

                        <h2>{data.productsTitle}</h2>

                        <p>{data.productsDescription}</p>
                    </div>
                </ScrollReveal>

                <div className={styles.productsGrid}>
                    {data.products.map((product, index) => (
                        <ScrollReveal
                            key={product.name}
                            delay={(index % 3) * 65}
                            distance={25}
                        >
                            <article className={styles.productCard}>
                                <div className={styles.productTop}>
                                    <span>{product.category}</span>
                                    <span className={styles.productIndex}>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <div className={styles.productRule} />

                                <h3>{product.name}</h3>

                                <p>{product.description}</p>

                                <div className={styles.productRole}>
                                    <span>ULOGA U NJEZI</span>
                                    <strong>{product.role}</strong>
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>

                <p className={styles.productsDisclaimer}>
                    Konačan izbor proizvoda i njihov redoslijed primjene
                    određuju se prema potrebama kože i uputama proizvođača.
                </p>
            </section>

            <section className={styles.protocolSection}>
                <ScrollReveal distance={25}>
                    <div className={styles.sectionHeading}>
                        <span className={styles.eyebrow}>
                            {data.protocolLabel}
                        </span>

                        <h2>{data.protocolTitle}</h2>

                        <p>{data.protocolDescription}</p>
                    </div>
                </ScrollReveal>

                <div className={styles.protocolList}>
                    {data.protocolSteps.map((step, index) => (
                        <ScrollReveal
                            key={step.number}
                            delay={index * 55}
                            distance={20}
                        >
                            <article className={styles.protocolRow}>
                                <span className={styles.protocolNumber}>
                                    {step.number}
                                </span>

                                <h3>{step.title}</h3>

                                <p>{step.description}</p>

                                <span className={styles.protocolArrow}>
                                    <ArrowIcon />
                                </span>
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
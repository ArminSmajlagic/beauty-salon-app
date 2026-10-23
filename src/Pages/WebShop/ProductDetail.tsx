import { Link, useParams } from "react-router-dom";
import {
    products,
    slugifyProductName,
    type Product,
} from "../../data/data";
import styles from "./ProductDetails.module.css";
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

function ProductMonogram() {
    return (
        <div className={styles.productMonogram}>
            <span>BIOLOGIQUE</span>
            <strong>RECHERCHE</strong>
            <i />
        </div>
    );
}

function getCategoryDescription(category: string): string {
    const normalized = category.toLowerCase();

    if (normalized.includes("tijel")) {
        return "Proizvodi namijenjeni njezi kože tijela, uz izbor preparata prema potrebama kože i željenom načinu njege.";
    }

    if (normalized.includes("kose") || normalized.includes("vlasi")) {
        return "Proizvodi za njegu kose i vlasišta, od čišćenja do ciljane njege, u skladu s namjenom preparata.";
    }

    if (normalized.includes("oko očiju") || normalized.includes("usana")) {
        return "Ciljana njega osjetljivih područja lica, uz pažljiv odabir proizvoda i primjenu prema uputama proizvođača.";
    }

    return "Profesionalna njega lica uz odabir preparata prema potrebama kože, njihovoj namjeni i pravilnom redoslijedu primjene.";
}

function getRoutineSteps(category: string) {
    const normalized = category.toLowerCase();

    if (normalized.includes("tijel")) {
        return [
            {
                number: "01",
                title: "Priprema kože",
                description:
                    "Prije primjene provjerite namjenu proizvoda i pripremite kožu u skladu s preporukama proizvođača.",
            },
            {
                number: "02",
                title: "Ciljana njega",
                description:
                    "Odaberite preparat prema njegovoj namjeni i potrebama područja koje njegujete.",
            },
            {
                number: "03",
                title: "Kontinuitet",
                description:
                    "Pridržavajte se preporučene učestalosti primjene i uputa navedenih na pakovanju.",
            },
        ];
    }

    if (normalized.includes("kose") || normalized.includes("vlasi")) {
        return [
            {
                number: "01",
                title: "Njega vlasišta",
                description:
                    "Upoznajte namjenu proizvoda i koristite ga na predviđenom području prema uputama.",
            },
            {
                number: "02",
                title: "Njega kose",
                description:
                    "Uskladite odabrani preparat s potrebama kose i vlasišta.",
            },
            {
                number: "03",
                title: "Preporučena primjena",
                description:
                    "Slijedite način korištenja i učestalost koje navodi proizvođač.",
            },
        ];
    }

    return [
        {
            number: "01",
            title: "Razumijevanje potreba",
            description:
                "Odabir preparata počinje razumijevanjem stanja kože i cilja koji želite postići njegom.",
        },
        {
            number: "02",
            title: "Pravilna primjena",
            description:
                "Koristite proizvod na predviđen način, u preporučenoj količini i uzimajući u obzir upute proizvođača.",
        },
        {
            number: "03",
            title: "Usklađena rutina",
            description:
                "Kombinujte preparate pažljivo i izbjegavajte uvođenje više intenzivnih proizvoda bez stručnog savjeta.",
        },
    ];
}

function ProductVisual({ product }: { product: Product }) {
    if (product.image) {
        return (
            <div className={styles.imageFrame}>
                <img
                    src={product.image}
                    alt={product.name}
                    className={styles.productImage}
                />

                <span className={styles.imageCaption}>
                    BIOLOGIQUE RECHERCHE
                </span>
            </div>
        );
    }

    return (
        <div className={styles.placeholderFrame}>
            <div className={styles.placeholderGlow} />

            <span className={styles.placeholderNumber}>BR</span>

            <ProductMonogram />

            <div className={styles.placeholderFooter}>
                <span>{product.category.toUpperCase()}</span>
                <span>PROFESSIONAL SKINCARE</span>
            </div>
        </div>
    );
}

function RelatedProductCard({ product }: { product: Product }) {
    return (
        <Link
            to={`/biologique-recherche/proizvod/${slugifyProductName(product.name)}`}
            className={styles.relatedCard}
        >
            <div className={styles.relatedVisual}>
                {product.image ? (
                    <img src={product.image} alt={product.name} />
                ) : (
                    <ProductMonogram />
                )}
            </div>

            <div className={styles.relatedBody}>
                <span>{product.category}</span>
                <h3>{product.name}</h3>
                <div className={styles.relatedLink}>
                    Pogledaj proizvod
                    <ArrowIcon />
                </div>
            </div>
        </Link>
    );
}

export default function ProductDetails() {
    const { slug } = useParams<{ slug: string }>();

    const product = products.find(
        (item) => slugifyProductName(item.name) === slug,
    );

    if (!product) {
        return (
            <div className={styles.page}>
                <div className={styles.notFound}>
                    <span className={styles.eyebrow}>WEB SHOP</span>

                    <h1>Proizvod nije pronađen.</h1>

                    <p>
                        Proizvod koji tražite nije dostupan ili je uklonjen
                        iz kataloga.
                    </p>

                    <Link
                        to="/biologique-recherche/proizvodi"
                        className={styles.primaryButton}
                    >
                        Povratak na proizvode
                        <ArrowIcon />
                    </Link>
                </div>
            </div>
        );
    }

    const relatedProducts = products
        .filter(
            (item) =>
                item.name !== product.name &&
                item.category === product.category,
        )
        .slice(0, 3);

    const routineSteps = getRoutineSteps(product.category);

    return (
        <div className={styles.page}>
            <nav className={styles.breadcrumbs} aria-label="Putanja stranice">
                <Link to="/">Naslovna</Link>
                <span>/</span>
                <Link to="/biologique-recherche">Biologique Recherche</Link>
                <span>/</span>
                <Link to="/biologique-recherche/proizvodi">Svi proizvodi</Link>
                <span>/</span>
                <span className={styles.currentBreadcrumb}>
        {product.name}
    </span>
            </nav>

            <section className={styles.productHero}>
                <ScrollReveal distance={30}>
                    <div className={styles.visualColumn}>
                        <ProductVisual product={product} />

                        <div className={styles.visualNote}>
                            <span className={styles.noteDot} />

                            <span>
                                BIOLOGIQUE RECHERCHE
                            </span>

                            <span className={styles.noteDivider} />

                            <span>PROFESIONALNA NJEGA</span>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={100} distance={30}>
                    <div className={styles.productInfo}>
                        <span className={styles.eyebrow}>
                            BIOLOGIQUE RECHERCHE
                        </span>

                        <span className={styles.categoryBadge}>
                            {product.category}
                        </span>

                        <h1>{product.name}</h1>

                        <div className={styles.titleRule}>
                            <span />
                        </div>

                        <p className={styles.description}>
                            {product.description}
                        </p>

                        <div className={styles.infoDivider} />

                        <div className={styles.productMeta}>
                            <div>
                                <span>BREND</span>
                                <strong>Biologique Recherche</strong>
                            </div>

                            <div>
                                <span>KATEGORIJA</span>
                                <strong>{product.category}</strong>
                            </div>

                            <div>
                                <span>ODABIR</span>
                                <strong>Prema potrebama kože</strong>
                            </div>
                        </div>

                        <div className={styles.productActions}>
                            <Link
                                to="/kontakt"
                                className={styles.primaryButton}
                            >
                                Informacije o proizvodu
                                <ArrowIcon />
                            </Link>

                            <Link
                                to="/biologique-recherche/proizvodi"
                                className={styles.secondaryButton}
                            >
                                Svi proizvodi
                            </Link>
                        </div>

                        <p className={styles.availabilityNote}>
                            Za informacije o dostupnosti proizvoda i
                            preporučenoj primjeni kontaktirajte naš salon.
                        </p>
                    </div>
                </ScrollReveal>
            </section>

            <section className={styles.descriptionSection}>
                <ScrollReveal distance={25}>
                    <div className={styles.sectionHeading}>
                        <span className={styles.eyebrow}>
                            O PROIZVODU
                        </span>

                        <h2>
                            Njega s jasnom namjenom.
                        </h2>

                        <p>
                            {product.description}
                        </p>
                    </div>
                </ScrollReveal>

                <div className={styles.detailsGrid}>
                    <ScrollReveal distance={25}>
                        <article className={styles.detailCard}>
                            <span className={styles.cardIndex}>01</span>

                            <span className={styles.cardEyebrow}>
                                KATEGORIJA
                            </span>

                            <h3>{product.category}</h3>

                            <p>
                                {getCategoryDescription(product.category)}
                            </p>
                        </article>
                    </ScrollReveal>

                    <ScrollReveal delay={80} distance={25}>
                        <article className={styles.detailCard}>
                            <span className={styles.cardIndex}>02</span>

                            <span className={styles.cardEyebrow}>
                                INDIVIDUALNI PRISTUP
                            </span>

                            <h3>Odabir prema potrebama</h3>

                            <p>
                                Prikladnost proizvoda zavisi od njegovih
                                karakteristika, načina primjene i potreba
                                osobe koja ga koristi.
                            </p>
                        </article>
                    </ScrollReveal>

                    <ScrollReveal delay={160} distance={25}>
                        <article className={styles.detailCard}>
                            <span className={styles.cardIndex}>03</span>

                            <span className={styles.cardEyebrow}>
                                PROFESIONALNA NJEGA
                            </span>

                            <h3>Usklađena rutina</h3>

                            <p>
                                Proizvod treba biti dio dobro osmišljene
                                rutine, uz poštivanje uputa proizvođača i
                                pažljiv odabir ostalih preparata.
                            </p>
                        </article>
                    </ScrollReveal>
                </div>
            </section>

            <section className={styles.routineSection}>
                <ScrollReveal distance={25}>
                    <div className={styles.sectionHeading}>
                        <span className={styles.eyebrow}>
                            KAKO PRISTUPITI NJEZI
                        </span>

                        <h2>
                            Pažnja prema svakom koraku.
                        </h2>

                        <p>
                            Bez obzira na kategoriju proizvoda, pravilna
                            primjena i odabir preparata prema njegovoj
                            namjeni važan su dio rutine.
                        </p>
                    </div>
                </ScrollReveal>

                <div className={styles.routineGrid}>
                    {routineSteps.map((step, index) => (
                        <ScrollReveal
                            key={step.number}
                            delay={index * 70}
                            distance={25}
                        >
                            <article className={styles.routineCard}>
                                <span className={styles.routineNumber}>
                                    {step.number}
                                </span>

                                <div className={styles.routineLine} />

                                <h3>{step.title}</h3>

                                <p>{step.description}</p>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            <section className={styles.brandSection}>
                <ScrollReveal distance={25}>
                    <div className={styles.brandCard}>
                        <div className={styles.brandMonogram}>
                            <ProductMonogram />
                        </div>

                        <div className={styles.brandContent}>
                            <span className={styles.eyebrow}>
                                ALMA & SELMA · STUDIO LJEPOTE
                            </span>

                            <h2>
                                Proizvod je dio njege.
                                <br />
                                Pravi odabir čini razliku.
                            </h2>

                            <p>
                                Niste sigurni da li ovaj proizvod odgovara
                                vašim potrebama? Kontaktirajte nas za dodatne
                                informacije o njegovoj namjeni, dostupnosti
                                i načinu korištenja.
                            </p>

                            <Link
                                to="/kontakt"
                                className={styles.primaryButton}
                            >
                                Kontaktirajte nas
                                <ArrowIcon />
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {relatedProducts.length > 0 && (
                <section className={styles.relatedSection}>
                    <ScrollReveal distance={25}>
                        <div className={styles.sectionHeading}>
                            <span className={styles.eyebrow}>
                                ISTA KATEGORIJA
                            </span>

                            <h2>
                                Istražite i druge proizvode.
                            </h2>

                            <p>
                                Pogledajte druge preparate iz kategorije
                                {` ${product.category.toLowerCase()}`} i
                                uporedite njihove namjene.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className={styles.relatedGrid}>
                        {relatedProducts.map((relatedProduct) => (
                            <ScrollReveal
                                key={relatedProduct.name}
                                distance={20}
                            >
                                <RelatedProductCard
                                    product={relatedProduct}
                                />
                            </ScrollReveal>
                        ))}
                    </div>
                </section>
            )}

            <section className={styles.contactSection}>
                <ScrollReveal distance={25}>
                    <div className={styles.contactCard}>
                        <span className={styles.contactEyebrow}>
                            ALMA & SELMA · STUDIO LJEPOTE
                        </span>

                        <h2>
                            Trebate pomoć pri odabiru?
                        </h2>

                        <p>
                            Javite nam se kako biste saznali više o
                            proizvodima Biologique Recherche i pronašli
                            opciju koja odgovara vašim potrebama.
                        </p>

                        <Link
                            to="/kontakt"
                            className={styles.contactButton}
                        >
                            Kontaktirajte nas
                            <ArrowIcon />
                        </Link>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
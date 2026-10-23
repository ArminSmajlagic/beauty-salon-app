import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Products.module.css";
import {
    products,
    slugifyProductName,
} from "../../../data/data";
import ScrollReveal from "../../../Components/common/ScrollReveal";

type Category = "Svi proizvodi" | "Njega lica" | "Njega tijela";

const categories: Category[] = [
    "Svi proizvodi",
    "Njega lica",
    "Njega tijela",
];

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

function ProductPlaceholder({
                                number,
                                category,
                            }: {
    number: string;
    category: string;
}) {
    return (
        <div
            className={styles.productVisual}
            aria-hidden="true"
        >
            <div className={styles.productVisualGlow} />

            <span className={styles.productVisualDecoration}>
                BR
            </span>

            <div className={styles.productMonogram}>
                <span>BIOLOGIQUE</span>
                <strong>RECHERCHE</strong>
                <i />
            </div>

            <div className={styles.productVisualFooter}>
                <span>{category.toUpperCase()}</span>
                <span>{number}</span>
            </div>
        </div>
    );
}

export default function Products() {
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] =
        useState<Category>("Svi proizvodi");

    const filteredProducts = useMemo(() => {
        if (selectedCategory === "Svi proizvodi") {
            return products;
        }

        return products.filter(
            (product) => product.category === selectedCategory,
        );
    }, [selectedCategory]);

    function openProductDetails(productName: string) {
        navigate(
            `/biologique-recherche/proizvod/${slugifyProductName(productName)}`,
        );
    }

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <ScrollReveal distance={30}>
                    <span className={styles.eyebrow}>
                        BIOLOGIQUE RECHERCHE
                    </span>

                    <h1>
                        Profesionalna njega.
                        <br />
                        Pažljivo odabrani proizvodi.
                    </h1>

                    <p>
                        Upoznajte Biologique Recherche proizvode koje
                        predstavljamo u našem salonu. Kolekcija obuhvata
                        preparate za njegu lica i tijela, od čišćenja i
                        pripreme kože do seruma, maski i krema.
                    </p>

                    <div className={styles.heroTags}>
                        <span>Njega lica</span>
                        <span>Njega tijela</span>
                        <span>Profesionalni preparati</span>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={100} distance={25}>
                    <div className={styles.heroCard}>
                        <div className={styles.heroCardHeader}>
                            <span>ALMA & SELMA</span>
                            <span>STUDIO LJEPOTE</span>
                        </div>

                        <div className={styles.decorativeLine} />

                        <span className={styles.heroCardLabel}>
                            KOLEKCIJA PROIZVODA
                        </span>

                        <h2>
                            Pronađite njegu
                            <br />
                            prilagođenu svojoj koži.
                        </h2>

                        <p>
                            Izbor proizvoda najbolje je prilagoditi
                            karakteristikama kože, njenim potrebama i
                            postojećoj rutini njege.
                        </p>

                        <span className={styles.heroCardDecoration}>
                            BR
                        </span>
                    </div>
                </ScrollReveal>
            </section>

            <section className={styles.catalogSection}>
                <ScrollReveal distance={25}>
                    <div className={styles.sectionHeading}>
                        <span className={styles.eyebrow}>
                            KOLEKCIJA
                        </span>

                        <h2>Svi proizvodi</h2>

                        <p>
                            Pregledajte kategorije i upoznajte se s
                            preparatima, njihovom namjenom i mjestom u
                            rutini njege.
                        </p>
                    </div>
                </ScrollReveal>

                <div className={styles.filters}>
                    <div
                        className={styles.filterGroup}
                        role="group"
                        aria-label="Filtriraj proizvode po kategoriji"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                className={`${styles.filterButton} ${
                                    selectedCategory === category
                                        ? styles.filterButtonActive
                                        : ""
                                }`}
                                aria-pressed={selectedCategory === category}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <span
                        className={styles.productCount}
                        aria-live="polite"
                    >
                        {filteredProducts.length}{" "}
                        {filteredProducts.length === 1
                            ? "proizvod"
                            : "proizvoda"}
                    </span>
                </div>

                {filteredProducts.length > 0 ? (
                    <div className={styles.productsGrid}>
                        {filteredProducts.map((product, index) => {
                            const productNumber = String(index + 1).padStart(
                                2,
                                "0",
                            );

                            return (
                                <ScrollReveal
                                    key={product.name}
                                    delay={(index % 4) * 60}
                                    distance={20}
                                >
                                    <article className={styles.productCard}>
                                        <div className={styles.productTop}>
                                            <span
                                                className={styles.productNumber}
                                            >
                                                {productNumber}
                                            </span>

                                            <span
                                                className={
                                                    styles.productCategory
                                                }
                                            >
                                                {product.category}
                                            </span>
                                        </div>

                                        <button
                                            type="button"
                                            className={
                                                styles.productVisualButton
                                            }
                                            aria-label={`Pogledaj detalje proizvoda ${product.name}`}
                                            onClick={() =>
                                                openProductDetails(product.name)
                                            }
                                        >
                                            <ProductPlaceholder
                                                number={productNumber}
                                                category={product.category}
                                            />
                                        </button>

                                        <div className={styles.productBody}>
                                            <h3>{product.name}</h3>

                                            <p>{product.description}</p>

                                            <div
                                                className={
                                                    styles.productFooter
                                                }
                                            >
                                                <span
                                                    className={
                                                        styles.infoLabel
                                                    }
                                                >
                                                    BIOLOGIQUE RECHERCHE
                                                </span>
                                            </div>

                                            <button
                                                type="button"
                                                className={
                                                    styles.productButton
                                                }
                                                onClick={() =>
                                                    openProductDetails(
                                                        product.name,
                                                    )
                                                }
                                            >
                                                Detalji proizvoda
                                                <ArrowIcon />
                                            </button>
                                        </div>
                                    </article>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                ) : (
                    <div className={styles.emptyState}>
                        <h3>Nema proizvoda u ovoj kategoriji.</h3>

                        <p>
                            Trenutno nema proizvoda koji odgovaraju
                            odabranom filteru.
                        </p>

                        <button
                            type="button"
                            className={styles.resetButton}
                            onClick={() =>
                                setSelectedCategory("Svi proizvodi")
                            }
                        >
                            Prikaži sve proizvode
                        </button>
                    </div>
                )}
            </section>

            <section className={styles.infoSection}>
                <ScrollReveal distance={25}>
                    <div className={styles.infoCard}>
                        <div className={styles.infoIndex}>
                            <span>INDIVIDUALNA PREPORUKA</span>
                            <strong>BR.</strong>
                        </div>

                        <div className={styles.infoContent}>
                            <span className={styles.eyebrow}>
                                PRAVI IZBOR ZA VAŠU KOŽU
                            </span>

                            <h2>
                                Niste sigurni koji proizvod odabrati?
                            </h2>

                            <p>
                                Odabir proizvoda zavisi od trenutnog stanja
                                kože, njenih potreba i preparata koje već
                                koristite. Javite nam se za informacije i
                                preporuku prilagođenu vašoj rutini njege.
                            </p>

                            <a
                                href="#/kontakt"
                                className={styles.textLink}
                            >
                                Kontaktirajte nas
                                <ArrowIcon />
                            </a>
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
                            Niste sigurni koja njega
                            <br />
                            odgovara vašoj koži?
                        </h2>

                        <p>
                            Kontaktirajte nas i zajedno ćemo razmotriti
                            potrebe vaše kože i odabrati odgovarajući
                            pristup njezi.
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
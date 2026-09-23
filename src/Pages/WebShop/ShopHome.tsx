import { useMemo, useState } from "react";
import { products } from "../../data/data";
import styles from "./ShopHome.module.css";
import ScrollReveal from "../../Components/common/ScrollReveal.tsx";

const categories = [
    "Svi proizvodi",
    "Njega lica",
    "Njega tijela",
];

export default function WebShop() {
    const [activeCategory, setActiveCategory] =
        useState("Svi proizvodi");

    const filteredProducts = useMemo(() => {
        if (activeCategory === "Svi proizvodi") {
            return products;
        }

        return products.filter(
            (product) => product.category === activeCategory,
        );
    }, [activeCategory]);

    return (
        <div className={styles.page}>
            <ScrollReveal>
                <section className={styles.headerSection}>
                    <div className={styles.sectionInner}>
                        <span className={styles.eyebrow}>
                            Biologique Recherche
                        </span>

                        <h1>Web Shop</h1>

                        <p>
                            Istražite izbor Biologique Recherche
                            proizvoda dostupnih u našem studiju za
                            profesionalnu njegu i nastavak
                            personalizirane njege kod kuće.
                        </p>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section className={styles.brandSection}>
                    <div className={styles.brandPlaceholder}>
                        <span>Biologique Recherche</span>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section className={styles.shopSection}>
                    <div className={styles.sectionInner}>
                        <div className={styles.shopHeader}>
                            <div>
                                <span className={styles.eyebrow}>
                                    Naša ponuda
                                </span>

                                <h2>Proizvodi</h2>
                            </div>

                            <p>
                                Proizvodi se odabiru prema potrebama
                                kože i preporuci stručnog osoblja.
                            </p>
                        </div>

                        <div className={styles.categoryFilters}>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    className={
                                        activeCategory === category
                                            ? styles.filterActive
                                            : styles.filter
                                    }
                                    onClick={() =>
                                        setActiveCategory(category)
                                    }
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className={styles.productGrid}>
                            {filteredProducts.map((product) => (
                                <article
                                    key={product.name}
                                    className={styles.productCard}
                                >
                                    <div
                                        className={
                                            styles.productImage
                                        }
                                    >
                                        <span>
                                            Biologique
                                            <br />
                                            Recherche
                                        </span>
                                    </div>

                                    <div
                                        className={
                                            styles.productContent
                                        }
                                    >
                                        <span
                                            className={
                                                styles.productCategory
                                            }
                                        >
                                            {product.category}
                                        </span>

                                        <h3>{product.name}</h3>

                                        <p>
                                            {product.description}
                                        </p>

                                        <div
                                            className={
                                                styles.productBottom
                                            }
                                        >
                                            <strong>
                                                {product.price}
                                            </strong>

                                            <button
                                                type="button"
                                                className={
                                                    styles.addButton
                                                }
                                            >
                                                Dodaj u korpu
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className={styles.emptyState}>
                                <p>
                                    Trenutno nema proizvoda u ovoj
                                    kategoriji.
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
}
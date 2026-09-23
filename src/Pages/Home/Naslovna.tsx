import { useEffect, useState } from "react";
import styles from "./Naslovna.module.css";

import serumVivant from "../../assets/serum-vivant.mp4";
import bsProducts from "../../assets/bs-products-2.jpg";
import ScrollReveal from "../../Components/common/ScrollReveal.tsx";
import {products} from "../../data/data.ts";

type HeroSlide =
    | {
    type: "video";
    src: string;
}
    | {
    type: "image";
    src: string;
};

const heroSlides: HeroSlide[] = [
    {
        type: "video",
        src: serumVivant,
    },
    {
        type: "image",
        src: bsProducts,
    },
];

const services = [
    {
        title: "Njega lica",
        text: "Personalizirani tretmani njege lica prilagođeni trenutnom stanju i potrebama kože. Stručna procjena i pažljivo odabrani proizvodi pomažu koži vratiti ravnotežu, svježinu i prirodan sjaj.",
    },
    {
        title: "Njega tijela",
        text: "Tretmani njege tijela usmjereni su na hidrataciju, obnovu i poboljšanje izgleda kože. Svaki tretman prilagođavamo individualnim potrebama i stanju kože.",
    },
    {
        title: "Trajni MakeUp",
        text: "Precizni tretmani trajnog make-upa osmišljeni kako bi naglasili prirodne crte lica i pružili dugotrajan, njegovan izgled uz individualno prilagođen pristup.",
    },
    {
        title: "Pro MakeUp",
        text: "Profesionalno šminkanje za posebne prilike, događaje i trenutke u kojima želite zablistati. Look prilagođavamo vašem stilu, crtama lica i željenom efektu.",
    },
];

const methodologySteps = [
    {
        number: "01",
        title: "Procjena epiderma",
        text: "Prvi korak je pažljiva analiza kože i njenog trenutnog stanja. Posmatramo strukturu, hidrataciju, osjetljivost i specifične potrebe epiderma kako bismo odredili pravilan pristup.",
    },
    {
        number: "02",
        title: "Priprema",
        text: "Kožu pripremamo odabranim preparatima kako bismo je doveli u optimalno stanje za tretman. Svaki proizvod bira se prema individualnim karakteristikama kože.",
    },
    {
        number: "03",
        title: "Tretman i njega",
        text: "Nakon pripreme slijedi personalizirani tretman kojim ciljano djelujemo na potrebe kože. Njega se nastavlja preporukama za održavanje postignutih rezultata.",
    },
];

export default function Home() {
    const [activeHeroSlide, setActiveHeroSlide] = useState(0);
    const [activeService, setActiveService] = useState(0);
    const [activeProduct, setActiveProduct] = useState(0);

    useEffect(() => {
        if (heroSlides.length <= 1) {
            return;
        }

        const interval = window.setInterval(() => {
            setActiveHeroSlide(
                (current) =>
                    (current + 1) % heroSlides.length,
            );
        }, 15000);

        return () => {
            window.clearInterval(interval);
        };
    }, []);

    const nextService = () => {
        setActiveService(
            (current) => (current + 1) % services.length,
        );
    };

    const previousService = () => {
        setActiveService(
            (current) =>
                (current - 1 + services.length) %
                services.length,
        );
    };

    const nextProduct = () => {
        setActiveProduct(
            (current) => (current + 1) % products.length,
        );
    };

    const previousProduct = () => {
        setActiveProduct(
            (current) =>
                (current - 1 + products.length) %
                products.length,
        );
    };

    const visibleProducts = Array.from(
        { length: Math.min(4, products.length) },
        (_, index) =>
            products[
            (activeProduct + index) % products.length
                ],
    );

    return (
        <div className={styles.home}>
            <section className={styles.heroSlider}>
                <div className={styles.sliderTrack}>
                    {heroSlides.map((slide, index) => (
                        <div
                            key={`${slide.type}-${index}`}
                            className={`${styles.heroSlide} ${
                                index === activeHeroSlide
                                    ? styles.heroSlideActive
                                    : ""
                            }`}
                            aria-hidden={
                                index !== activeHeroSlide
                            }
                        >
                            {slide.type === "video" ? (
                                <video
                                    className={styles.heroMedia}
                                    src={slide.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            ) : (
                                <img
                                    className={styles.heroMedia}
                                    src={slide.src}
                                    alt=""
                                />
                            )}

                            <div className={styles.heroOverlay} />
                        </div>
                    ))}
                </div>

                <div className={styles.heroIndicators}>
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`${styles.heroIndicator} ${
                                index === activeHeroSlide
                                    ? styles.heroIndicatorActive
                                    : ""
                            }`}
                            aria-label={`Prikaži slajd ${
                                index + 1
                            }`}
                            aria-current={
                                index === activeHeroSlide
                            }
                            onClick={() =>
                                setActiveHeroSlide(index)
                            }
                        />
                    ))}
                </div>
            </section>

            <ScrollReveal>
                <section className={styles.quoteSection}>
                    <div className={styles.quoteContent}>
                        <span className={styles.quoteMark}>
                            “
                        </span>

                        <blockquote>
                            Ljepota nije samo ono što vidimo u
                            ogledalu. Ona je odraz njege, pažnje i
                            odnosa koji imamo prema sebi. Kada
                            razumijemo potrebe svoje kože, možemo
                            joj pružiti upravo ono što joj je
                            potrebno da zadrži svoju prirodnu
                            ravnotežu, zdravlje i sjaj.
                        </blockquote>

                        <span className={styles.quoteAuthor}>
                            Studio Ljepote Alma & Selma
                        </span>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section
                    className={`${styles.glassSection} ${styles.aboutSection}`}
                >
                    <div className={styles.sectionInner}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionEyebrow}>
                                Studio Ljepote Alma & Selma
                            </span>

                            <h2>O nama</h2>
                        </div>

                        <div className={styles.aboutGrid}>
                            <div className={styles.aboutContent}>
                                <p>
                                    Naš studio posvećen je njezi,
                                    zdravlju i prirodnoj ljepoti kože.
                                    Kroz individualan pristup svakom
                                    klijentu kreiramo tretmane koji
                                    odgovaraju stvarnim potrebama
                                    kože lica i tijela.
                                </p>

                                <p>
                                    Koristimo savremene tehnike,
                                    stručna znanja i pažljivo
                                    odabrane proizvode, uključujući
                                    profesionalnu liniju
                                    Biologique Recherche, kako bismo
                                    koži pružili ciljanu i
                                    personaliziranu njegu.
                                </p>

                                <p>
                                    Vjerujemo da kvalitetan tretman
                                    počinje razumijevanjem kože.
                                    Zato svakom tretmanu pristupamo
                                    individualno, sa posebnom
                                    pažnjom prema trenutnom stanju,
                                    potrebama i ciljevima naše
                                    klijentice.
                                </p>

                                <a
                                    href="#/o-nama"
                                    className={styles.primaryButton}
                                >
                                    Saznaj više
                                </a>
                            </div>

                            <div
                                className={styles.imagePlaceholder}
                                aria-label="Mjesto za fotografiju"
                            >
                                <span>Fotografija</span>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section className={styles.methodologySection}>
                    <div className={styles.sectionInner}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionEyebrow}>
                                Biologique Recherche
                            </span>

                            <h2>
                                Metodologija Biologique Recherche
                            </h2>

                            <p className={styles.sectionIntro}>
                                Personalizirani pristup njezi kože
                                zasniva se na razumijevanju njenog
                                trenutnog stanja i pažljivom odabiru
                                svakog koraka tretmana.
                            </p>
                        </div>

                        <div className={styles.methodologyGrid}>
                            {methodologySteps.map((step, index) => (
                                <ScrollReveal
                                    key={step.number}
                                    delay={index * 100}
                                    distance={30}
                                >
                                    <article
                                        className={
                                            styles.methodologyStep
                                        }
                                    >
                                        <div
                                            className={
                                                styles.stepNumber
                                            }
                                        >
                                            {step.number}
                                        </div>

                                        <h3>{step.title}</h3>

                                        <p>{step.text}</p>
                                    </article>
                                </ScrollReveal>
                            ))}
                        </div>

                        <div className={styles.sectionButton}>
                            <a
                                href="#/biologique-recherche/o-brandu"
                                className={styles.primaryButton}
                            >
                                Saznaj više
                            </a>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section
                    className={`${styles.glassSection} ${styles.servicesSection}`}
                >
                    <div className={styles.sectionInner}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionEyebrow}>
                                Naše usluge
                            </span>

                            <h2>Tretmani</h2>

                            <p className={styles.sectionIntro}>
                                Svaka njega i briga o koži u
                                Biologique Recherche počinje
                                dovođenjem epiderme u uravnoteženo
                                stanje. Za to se koriste preparati
                                koji su odabrani u odnosu na
                                strukturu kože, nivo vlage, kao i
                                ukupno stanje kože.
                            </p>

                            <p className={styles.sectionIntro}>
                                Ujedinjeni preparati Biologique
                                Recherche sa stručnim osobljem,
                                inovativnim aparatima i individualno
                                preporučenim tretmanima stvaraju
                                personalizirani pristup njezi i
                                podršci prirodnoj ravnoteži kože.
                            </p>
                        </div>

                        <div className={styles.serviceSlider}>
                            <button
                                type="button"
                                className={styles.sliderArrow}
                                onClick={previousService}
                                aria-label="Prethodni tretman"
                            >
                                ‹
                            </button>

                            <div className={styles.serviceCard}>
                                <div className={styles.serviceImage}>
                                    <span>Fotografija</span>
                                </div>

                                <div className={styles.serviceContent}>
                                    <span
                                        className={
                                            styles.serviceNumber
                                        }
                                    >
                                        0
                                        {activeService + 1}
                                    </span>

                                    <h3>
                                        {
                                            services[
                                                activeService
                                                ].title
                                        }
                                    </h3>

                                    <p>
                                        {
                                            services[
                                                activeService
                                                ].text
                                        }
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                className={styles.sliderArrow}
                                onClick={nextService}
                                aria-label="Sljedeći tretman"
                            >
                                ›
                            </button>
                        </div>

                        <div className={styles.sliderDots}>
                            {services.map((service, index) => (
                                <button
                                    key={service.title}
                                    type="button"
                                    className={`${styles.sliderDot} ${
                                        index === activeService
                                            ? styles.sliderDotActive
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setActiveService(index)
                                    }
                                    aria-label={service.title}
                                />
                            ))}
                        </div>

                        <div className={styles.sectionButton}>
                            <a
                                href="#/usluge"
                                className={styles.primaryButton}
                            >
                                Saznaj više
                            </a>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section className={styles.shopSection}>
                    <div className={styles.sectionInner}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionEyebrow}>
                                Biologique Recherche
                            </span>

                            <h2>Biologique Recherche Proizvodi</h2>

                            <p className={styles.sectionIntro}>
                                Biologique Recherche razvija
                                profesionalnu kozmetiku zasnovanu na
                                individualnom pristupu i preciznom
                                razumijevanju potreba kože. Proizvodi
                                su namijenjeni različitim stanjima i
                                potrebama kože, uz stručnu preporuku
                                i pravilnu primjenu.
                            </p>
                        </div>

                        <div className={styles.brandPlaceholder}>
                            <span>Biologique Recherche</span>
                        </div>

                        <div className={styles.productSlider}>
                            <button
                                type="button"
                                className={styles.sliderArrow}
                                onClick={previousProduct}
                                aria-label="Prethodni proizvodi"
                            >
                                ‹
                            </button>

                            <div className={styles.productGrid}>
                                {visibleProducts.map((product) => (
                                    <article
                                        key={`${product.name}-${product.category}`}
                                        className={styles.productCard}
                                    >
                                        <div
                                            className={
                                                styles.productImage
                                            }
                                        >
                                            <span>
                                                Biologique
                                                Recherche
                                            </span>
                                        </div>

                                        <div
                                            className={
                                                styles.productInfo
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

                                            <strong>
                                                {product.price}
                                            </strong>

                                            <button
                                                type="button"
                                                className={
                                                    styles.productButton
                                                }
                                            >
                                                Dodaj u korpu
                                            </button>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            <button
                                type="button"
                                className={styles.sliderArrow}
                                onClick={nextProduct}
                                aria-label="Sljedeći proizvodi"
                            >
                                ›
                            </button>
                        </div>

                        <div className={styles.sliderDots}>
                            {products.map((product, index) => (
                                <button
                                    key={`${product.name}-${index}`}
                                    type="button"
                                    className={`${styles.sliderDot} ${
                                        index === activeProduct
                                            ? styles.sliderDotActive
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setActiveProduct(index)
                                    }
                                    aria-label={`Proizvod ${
                                        index + 1
                                    }`}
                                />
                            ))}
                        </div>

                        <div className={styles.sectionButton}>
                            <a
                                href="#/web-shop"
                                className={styles.primaryButton}
                            >
                                Pogledaj više
                            </a>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section
                    className={`${styles.glassSection} ${styles.bookingSection}`}
                >
                    <div className={styles.bookingContent}>
                        <span className={styles.sectionEyebrow}>
                            Vaše vrijeme za sebe
                        </span>

                        <h2>
                            Rezervirajte svoj tretman koji
                            zaslužujete
                        </h2>

                        <p>
                            Na konsultaciji naš stručnjak pažljivo
                            analizira vašu kožu i kreira tretman po
                            mjeri, vodeći vas kroz iskustvo,
                            stručnost i pažnju posvećenu svakom
                            detalju.
                        </p>

                        <div className={styles.bookingActions}>
                            <a
                                className={styles.primaryButton}
                                href="mailto:info@studioljepote.com"
                            >
                                Pošaljite e-mail
                            </a>

                            <a
                                className={styles.secondaryButton}
                                href="viber://chat?number=%2B38765863593"
                            >
                                Kontaktirajte putem Vibera
                            </a>
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
}
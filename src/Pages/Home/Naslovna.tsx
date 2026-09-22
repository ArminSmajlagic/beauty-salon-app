// src/Pages/Home.tsx

import { useEffect, useState } from "react";
import styles from "./Naslovna.module.css";

import serumVivant from "../../assets/serum-vivant.mp4";
import bsProducts from "../../assets/bs-products-2.jpg";

type Slide =
    | {
    type: "video";
    src: string;
}
    | {
    type: "image";
    src: string;
};

const slides: Slide[] = [
    {
        type: "video",
        src: serumVivant,
    },
    {
        type: "image",
        src: bsProducts,
    },
];

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        if (slides.length <= 1) {
            return;
        }

        const interval = window.setInterval(() => {
            setActiveSlide(
                (current) => (current + 1) % slides.length,
            );
        }, 15000);

        return () => {
            window.clearInterval(interval);
        };
    }, []);

    return (
        <section className={styles.heroSlider}>
            <div className={styles.sliderTrack}>
                {slides.map((slide, index) => (
                    <div
                        key={`${slide.type}-${index}`}
                        className={`${styles.slide} ${
                            index === activeSlide
                                ? styles.slideActive
                                : ""
                        }`}
                        aria-hidden={index !== activeSlide}
                    >
                        {slide.type === "video" ? (
                            <video
                                className={styles.media}
                                src={slide.src}
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        ) : (
                            <img
                                className={styles.media}
                                src={slide.src}
                                alt=""
                            />
                        )}

                        <div className={styles.overlay} />
                    </div>
                ))}
            </div>

            <div className={styles.sliderIndicators}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`${styles.indicator} ${
                            index === activeSlide
                                ? styles.indicatorActive
                                : ""
                        }`}
                        aria-label={`Prikaži slajd ${index + 1}`}
                        aria-current={
                            index === activeSlide
                        }
                        onClick={() =>
                            setActiveSlide(index)
                        }
                    />
                ))}
            </div>
        </section>
    );
}
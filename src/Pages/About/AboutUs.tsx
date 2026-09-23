import ScrollReveal from "../../components/common/ScrollReveal";
import styles from "./AboutUs.module.css";

const methodologySteps = [
    {
        number: "01",
        title: "Procjena epiderma",
        text: "Prvi korak je pažljiva analiza kože i njenog trenutnog stanja. Posmatramo strukturu, hidrataciju, osjetljivost i specifične potrebe epiderma kako bismo odredili pravilan pristup i odabrali odgovarajuće preparate.",
    },
    {
        number: "02",
        title: "Priprema",
        text: "Kožu pripremamo pažljivo odabranim preparatima kako bismo je doveli u optimalno stanje za tretman. Svaki proizvod bira se prema individualnim karakteristikama i trenutnom stanju kože.",
    },
    {
        number: "03",
        title: "Tretman i njega",
        text: "Nakon pripreme slijedi personalizirani tretman kojim ciljano djelujemo na potrebe kože. Njega se nastavlja preporukama za kućnu rutinu i održavanje postignutih rezultata.",
    },
];

export default function AboutUs() {
    return (
        <div className={styles.page}>
            <ScrollReveal>
                <section className={styles.welcomeSection}>
                    <div className={styles.sectionInner}>
                        <span className={styles.eyebrow}>
                            Studio Ljepote Alma & Selma
                        </span>

                        <h1>Dobrodošli u naš studio</h1>

                        <p className={styles.lead}>
                            Mjesto posvećeno njezi, zdravlju i prirodnoj
                            ljepoti kože. Naš pristup temelji se na
                            razumijevanju kože, individualnoj procjeni i
                            pažljivo odabranim tretmanima koji odgovaraju
                            njenim stvarnim potrebama.
                        </p>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section className={styles.heroImageSection}>
                    <div
                        className={styles.largeImagePlaceholder}
                        aria-label="Fotografija Studio Ljepote Alma & Selma"
                    >
                        <span>Fotografija</span>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section
                    className={`${styles.glassSection} ${styles.aboutSection}`}
                >
                    <div className={styles.sectionInner}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.eyebrow}>
                                O nama
                            </span>

                            <h2>Njega koja počinje razumijevanjem kože</h2>
                        </div>

                        <div className={styles.aboutGrid}>
                            <div className={styles.aboutText}>
                                <p>
                                    Studio Ljepote Alma & Selma posvećen
                                    je njezi, zdravlju i prirodnoj ljepoti
                                    kože. Svakom klijentu pristupamo
                                    individualno, jer vjerujemo da kvalitetan
                                    tretman počinje razumijevanjem trenutnog
                                    stanja kože.
                                </p>

                                <p>
                                    Kroz stručnu procjenu kože određujemo
                                    potrebe i biramo odgovarajuće preparate
                                    i tretmane. Cilj nije samo trenutni
                                    estetski efekat, već stvaranje pravilne
                                    rutine njege koja podržava prirodnu
                                    ravnotežu i dugoročno zdravlje kože.
                                </p>

                                <p>
                                    U radu koristimo profesionalne proizvode
                                    i savremene tehnike, uz posebnu pažnju
                                    prema individualnim karakteristikama
                                    svake kože.
                                </p>
                            </div>

                            <div className={styles.aboutHighlight}>
                                <span className={styles.highlightNumber}>
                                    Alma & Selma
                                </span>

                                <h3>
                                    Individualan pristup svakoj koži
                                </h3>

                                <p>
                                    Svaki tretman prilagođavamo stanju,
                                    potrebama i ciljevima kože.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section
                    className={`${styles.glassSection} ${styles.biologiqueSection}`}
                >
                    <div className={styles.sectionInner}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.eyebrow}>
                                Biologique Recherche
                            </span>

                            <h2>
                                Profesionalna njega i proizvodi
                            </h2>

                            <p className={styles.sectionIntro}>
                                U našem radu koristimo Biologique Recherche
                                proizvode, kako za profesionalne tretmane u
                                studiju, tako i za nastavak pravilne njege
                                kod kuće.
                            </p>
                        </div>

                        <div className={styles.biologiqueGrid}>
                            <div className={styles.biologiqueContent}>
                                <p>
                                    Biologique Recherche razvija
                                    profesionalnu kozmetiku zasnovanu na
                                    individualnom pristupu i preciznom
                                    razumijevanju potreba kože.
                                </p>

                                <p>
                                    Preparati se biraju prema trenutnom
                                    stanju kože, njenoj strukturi, nivou
                                    hidratacije i osjetljivosti. Na taj način
                                    svaki tretman i preporučena kućna njega
                                    mogu biti prilagođeni konkretnoj osobi.
                                </p>

                                <p>
                                    Kao distributer Biologique Recherche za
                                    Bosnu i Hercegovinu, u našem studiju
                                    dostupni su proizvodi namijenjeni
                                    profesionalnoj upotrebi, kao i proizvodi
                                    za nastavak njege kod kuće.
                                </p>
                            </div>

                            <div className={styles.productPlaceholder}>
                                <span>
                                    Biologique Recherche
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section className={styles.methodologySection}>
                    <div className={styles.sectionInner}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.eyebrow}>
                                Naš pristup
                            </span>

                            <h2>
                                Tri koraka personalizirane njege
                            </h2>

                            <p className={styles.sectionIntro}>
                                Naš pristup njezi kože zasniva se na
                                pažljivoj procjeni i individualnom odabiru
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
                                        className={styles.methodologyCard}
                                    >
                                        <span
                                            className={
                                                styles.stepNumber
                                            }
                                        >
                                            {step.number}
                                        </span>

                                        <h3>{step.title}</h3>

                                        <p>{step.text}</p>
                                    </article>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section
                    className={`${styles.glassSection} ${styles.philosophySection}`}
                >
                    <div className={styles.sectionInner}>
                        <div className={styles.philosophyContent}>
                            <span className={styles.eyebrow}>
                                Naša filozofija
                            </span>

                            <h2>
                                Ljepota je rezultat njege, pažnje i
                                razumijevanja.
                            </h2>

                            <p>
                                Vjerujemo da njega kože ne treba biti
                                univerzalna. Svaka koža ima svoje potrebe,
                                zbog čega svakom tretmanu pristupamo
                                individualno i pažljivo.
                            </p>

                            <p>
                                Naš cilj je stvoriti iskustvo u kojem se
                                stručnost, kvalitetni proizvodi i pažnja
                                prema svakom detalju spajaju u njegu
                                prilagođenu upravo vama.
                            </p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section className={styles.contactSection}>
                    <div className={styles.contactCard}>
                        <span className={styles.eyebrow}>
                            Vaše vrijeme za sebe
                        </span>

                        <h2>Posjetite nas</h2>

                        <p>
                            Rezervirajte konsultaciju i zajedno ćemo
                            odrediti tretman i njegu koji odgovaraju
                            potrebama vaše kože.
                        </p>

                        <div className={styles.contactDetails}>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Bataljon%20BB%2C%2074400%20Derventa%2C%20Bosnia%20and%20Herzegovina"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Bataljon BB
                                <br />
                                74400 Derventa
                            </a>

                            <a href="tel:+38765863593">
                                +387 (0) 65-863-593
                            </a>

                            <a href="mailto:info@studioljepote.com">
                                info@studioljepote.com
                            </a>
                        </div>

                        <div className={styles.contactActions}>
                            <a
                                href="mailto:info@studioljepote.com"
                                className={styles.primaryButton}
                            >
                                Pošaljite e-mail
                            </a>

                            <a
                                href="viber://chat?number=%2B38765863593"
                                className={styles.secondaryButton}
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
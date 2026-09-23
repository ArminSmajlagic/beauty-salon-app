import { type FormEvent } from "react";
import styles from "./Contact.module.css";
import ScrollReveal from "../../Components/common/ScrollReveal.tsx";

function FacebookIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                fill="currentColor"
                d="M13.5 8.2V6.7c0-.7.5-1.1 1.2-1.1h1.6V3.1l-2.2-.1c-2.5 0-4.1 1.5-4.1 4.1v1.1H7.5v2.8H10v7.9h3.5V11h2.4l.4-2.8h-2.8Z"
            />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect
                x="3.5"
                y="3.5"
                width="17"
                height="17"
                rx="4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
            />
            <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
            />
            <circle
                cx="17.5"
                cy="6.8"
                r="1"
                fill="currentColor"
            />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="m4 7 8 6 8-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <circle
                cx="12"
                cy="9"
                r="2.3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
            />
        </svg>
    );
}

function ViberIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M18.6 4.6C16.9 3 14.5 2.4 12 2.4S7.1 3 5.4 4.6C3.2 6.6 2.5 9.7 2.9 13c.3 2.6 1.5 4.6 3.5 5.8l-.2 2.1c-.1.6.5 1 1 .7l2.4-1.4c.8.2 1.6.3 2.4.3 2.5 0 4.9-.7 6.6-2.3 2.2-2 2.9-5.1 2.5-8.4-.3-2.6-1.5-4.6-3.5-5.8Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <path
                d="M8.3 7.3c.4-.4 1-.4 1.4 0l1 1.2c.3.4.3.9-.1 1.3l-.6.6c.7 1.2 1.6 2.1 2.8 2.8l.6-.6c.4-.4.9-.4 1.3-.1l1.2 1c.4.4.4 1 0 1.4l-.5.5c-.6.6-1.5.8-2.3.5-3.4-1.2-5.8-3.6-7-7-.3-.8-.1-1.7.5-2.3l.5-.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function Contact() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;

        const formData = new FormData(form);

        const name = String(formData.get("name") ?? "");
        const phone = String(formData.get("phone") ?? "");
        const email = String(formData.get("email") ?? "");
        const subject = String(formData.get("subject") ?? "");
        const message = String(formData.get("message") ?? "");

        const emailBody = [
            `Ime i prezime: ${name}`,
            `Telefon: ${phone}`,
            `E-mail: ${email}`,
            "",
            "Poruka:",
            message,
        ].join("\n");

        const mailtoUrl =
            `mailto:info@studioljepote.com` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoUrl;
    };

    return (
        <div className={styles.page}>
            <ScrollReveal>
                <section className={styles.headerSection}>
                    <div className={styles.sectionInner}>
                        <span className={styles.eyebrow}>
                            Studio Ljepote Alma & Selma
                        </span>

                        <h1>Kontakt</h1>

                        <p>
                            Za informacije, konsultacije ili rezervaciju
                            tretmana, kontaktirajte nas putem forme ili
                            jednog od dostupnih kanala.
                        </p>
                    </div>
                </section>
            </ScrollReveal>

            <section className={styles.contactLayout}>
                <ScrollReveal className={styles.formColumn}>
                    <div className={styles.glassCard}>
                        <div className={styles.cardHeader}>
                            <span className={styles.eyebrow}>
                                Pošaljite nam poruku
                            </span>

                            <h2>Kontakt forma</h2>

                            <p>
                                Popunite formu i otvorit će se vaša
                                e-mail aplikacija sa pripremljenom
                                porukom.
                            </p>
                        </div>

                        <form
                            className={styles.form}
                            onSubmit={handleSubmit}
                        >
                            <div className={styles.formGrid}>
                                <label className={styles.field}>
                                    <span>Ime i prezime</span>

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Vaše ime i prezime"
                                        required
                                    />
                                </label>

                                <label className={styles.field}>
                                    <span>Broj telefona</span>

                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+387 ..."
                                        required
                                    />
                                </label>
                            </div>

                            <label className={styles.field}>
                                <span>E-mail</span>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="vas@email.com"
                                    required
                                />
                            </label>

                            <label className={styles.field}>
                                <span>Naslov</span>

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Naslov poruke"
                                    required
                                />
                            </label>

                            <label className={styles.field}>
                                <span>Poruka</span>

                                <textarea
                                    name="message"
                                    placeholder="Vaša poruka..."
                                    rows={7}
                                    required
                                />
                            </label>

                            <button
                                type="submit"
                                className={styles.submitButton}
                            >
                                Pošalji
                            </button>
                        </form>
                    </div>
                </ScrollReveal>

                <ScrollReveal
                    className={styles.infoColumn}
                    delay={100}
                >
                    <div className={styles.glassCard}>
                        <div className={styles.cardHeader}>
                            <span className={styles.eyebrow}>
                                Budimo u kontaktu
                            </span>

                            <h2>Kontakt informacije</h2>
                        </div>

                        <div className={styles.contactLinks}>
                            <a
                                href="https://facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.contactLink}
                            >
                                <span className={styles.icon}>
                                    <FacebookIcon />
                                </span>

                                <span>
                                    <small>Facebook</small>
                                    <strong>
                                        Alma & Selma Studio Ljepote
                                    </strong>
                                </span>
                            </a>

                            <a
                                href="https://instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.contactLink}
                            >
                                <span className={styles.icon}>
                                    <InstagramIcon />
                                </span>

                                <span>
                                    <small>Instagram</small>
                                    <strong>
                                        Alma & Selma Studio Ljepote
                                    </strong>
                                </span>
                            </a>

                            <a
                                href="mailto:info@studioljepote.com"
                                className={styles.contactLink}
                            >
                                <span className={styles.icon}>
                                    <MailIcon />
                                </span>

                                <span>
                                    <small>E-mail</small>
                                    <strong>
                                        info@studioljepote.com
                                    </strong>
                                </span>
                            </a>

                            <a
                                href="viber://chat?number=%2B38765863593"
                                className={styles.contactLink}
                            >
                                <span className={styles.icon}>
                                    <ViberIcon />
                                </span>

                                <span>
                                    <small>Viber</small>
                                    <strong>
                                        +387 (0) 65-863-593
                                    </strong>
                                </span>
                            </a>
                        </div>

                        <div className={styles.addressBlock}>
                            <span className={styles.addressIcon}>
                                <LocationIcon />
                            </span>

                            <div>
                                <small>Adresa</small>

                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Bataljon%20BB%2C%2074400%20Derventa%2C%20Bosnia%20and%20Herzegovina"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Bataljon BB
                                    <br />
                                    <strong>
                                        74400 Derventa
                                    </strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
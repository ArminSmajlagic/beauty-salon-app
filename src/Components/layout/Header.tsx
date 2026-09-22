// src/components/layout/header.tsx

import Navbar from "./Navigation";
import styles from "./Header.module.css";

function MailIcon() {
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
            <rect
                x="2"
                y="5"
                width="20"
                height="14"
                rx="2"
            />
            <path d="m3 7 9 6 9-6" />
        </svg>
    );
}

function PhoneIcon() {
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
        </svg>
    );
}

function InstagramIcon() {
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
            <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
            />
            <circle
                cx="12"
                cy="12"
                r="4"
            />
            <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
            />
        </svg>
    );
}

function FacebookIcon() {
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
            <path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v6h4v-6h3.2l.8-4H13V9c0-.7.3-1 1-1Z" />
        </svg>
    );
}

export default function Header() {
    return (
        <header className={styles.siteHeader}>
            <div className={styles.topBar}>
                <div className={styles.topBarInner}>
                    <div className={styles.topBarLeft}>
                        <a
                            className={styles.contactLink}
                            href="mailto:info@studioljepote.com"
                        >
                            <MailIcon />
                            <span>
                                info@studioljepote.com
                            </span>
                        </a>

                        <a
                            className={styles.contactLink}
                            href="tel:+38765863593"
                        >
                            <PhoneIcon />
                            <span>
                                +387 (0) 65-863-593
                            </span>
                        </a>
                    </div>

                    <div className={styles.topBarRight}>
                        <a
                            className={styles.socialLink}
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <InstagramIcon />
                            <span>Instagram</span>
                        </a>

                        <a
                            className={styles.socialLink}
                            href="https://facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                        >
                            <FacebookIcon />
                            <span>Facebook</span>
                        </a>
                    </div>
                </div>
            </div>

            <Navbar />
        </header>
    );
}
import styles from "./Footer.module.css";

type FooterNavItem = {
    label: string;
    href: string;
};

type FooterCategory = {
    label: string;
    href?: string;
    items?: FooterNavItem[];
};

const footerNavigation: FooterCategory[] = [
    {
        label: "O nama",
        items: [
            {
                label: "Početna",
                href: "/beauty-salon-app/o-nama",
            }
        ],
    },
    {
        label: "Web Shop",
        items: [
            {
                label: "Početna",
                href: "/beauty-salon-app/web-shop",
            }
        ],
    },
    {
        label: "Usluge",
        items: [
            {
                label: "O uslugama",
                href: "/beauty-salon-app/usluge/usluge",
            },
            {
                label: "Njega Lica",
                href: "/beauty-salon-app/usluge/njega-lica",
            },
            {
                label: "Njega Tijela",
                href: "/beauty-salon-app/usluge/njega-tijela",
            },
            {
                label: "Make-Up",
                href: "/beauty-salon-app/usluge/make-up",
            },
            {
                label: "Cjenovnik",
                href: "/beauty-salon-app/usluge/cjenovnika",
            },
        ],
    },
    {
        label: "Biologique Recherche",
        items: [
            {
                label: "O Brandu",
                href: "/biologique-recherche/o-brandu",
            },
            {
                label: "Njega Lica",
                href: "/biologique-recherche/njega-lica",
            },
            {
                label: "Njega Tijela",
                href: "/biologique-recherche/njega-tijela",
            },
            {
                label: "Svi Proizvodi",
                href: "/biologique-recherche/proizvodi",
            },
            {
                label: "Cjenovnik",
                href: "/biologique-recherche/cjenovnik",
            },
        ],
    }
];

function FacebookIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M14 8h3V4h-3c-3.314 0-5 1.686-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.667.333-1 1-1Z"
                fill="currentColor"
            />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="1.8"
            />

            <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="1.8"
            />

            <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
            />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.6"
            />

            <path
                d="m4 7 8 6 8-6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M6.7 3.5h2.2l1.4 4-2 1.6a16.8 16.8 0 0 0 6.6 6.6l1.6-2 4 1.4v2.2c0 1.2-.9 2.2-2.1 2.2C11.2 19.5 4.5 12.8 4.5 5.6c0-1.2 1-2.1 2.2-2.1Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.brandColumn}>
                    <a
                        href="/"
                        className={styles.logo}
                    >
                        <span className={styles.logoMain}>
                            Alma & Selma
                        </span>

                        <span className={styles.logoSub}>
                            STUDIO LJEPOTE
                        </span>
                    </a>

                    <p className={styles.brandDescription}>
                        Distributer Biologique Recherche
                        <br />
                        za Bosnu i Hercegovinu.
                    </p>

                    <div className={styles.socialLinks}>
                        <a
                            href="https://facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.socialLink}
                            aria-label="Facebook"
                        >
                            <FacebookIcon />
                        </a>

                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.socialLink}
                            aria-label="Instagram"
                        >
                            <InstagramIcon />
                        </a>
                    </div>
                </div>

                <nav
                    className={styles.navigation}
                    aria-label="Footer navigacija"
                >
                    {footerNavigation.map((category) => (
                        <div
                            key={category.label}
                            className={styles.category}
                        >
                            {category.href ? (
                                <a
                                    href={category.href}
                                    className={styles.categoryTitle}
                                >
                                    {category.label}
                                </a>
                            ) : (
                                <span
                                    className={
                                        styles.categoryTitle
                                    }
                                >
                                    {category.label}
                                </span>
                            )}

                            {category.items && (
                                <ul className={styles.categoryItems}>
                                    {category.items.map((item) => (
                                        <li key={item.href}>
                                            <a
                                                href={item.href}
                                                className={
                                                    styles.categoryItem
                                                }
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </nav>

                <div className={styles.contactColumn}>
                    <h3 className={styles.categoryTitle}>
                        Kontakt
                    </h3>

                    <div className={styles.contactList}>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Bataljon%20BB%2C%2074400%20Derventa%2C%20Bosnia%20and%20Herzegovina"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.contactItem}
                        >
                            <span className={styles.contactIcon}>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                    />

                                    <circle
                                        cx="12"
                                        cy="10"
                                        r="2.5"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                    />
                                </svg>
                            </span>

                            <span>
                                Bataljon BB
                                <br />
                                <strong>74400 Derventa</strong>
                            </span>
                        </a>

                        <a
                            href="tel:+38765863593"
                            className={styles.contactItem}
                        >
                            <span className={styles.contactIcon}>
                                <PhoneIcon />
                            </span>

                            <span>
                                +387 (0) 65-863-593
                            </span>
                        </a>

                        <a
                            href="mailto:info@studioljepote.com"
                            className={styles.contactItem}
                        >
                            <span className={styles.contactIcon}>
                                <MailIcon />
                            </span>

                            <span>
                                info@studioljepote.com
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.footerBottomInner}>
                    <span>
                        © {new Date().getFullYear()} Alma & Selma
                        Studio Ljepote. Sva prava zadržana.
                    </span>

                    <span>
                        Derventa, Bosna i Hercegovina
                    </span>
                </div>
            </div>
        </footer>
    );
}
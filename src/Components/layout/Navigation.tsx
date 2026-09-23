import { useEffect, useRef, useState } from "react";
import styles from "./Navigation.module.css";

type NavItem =
    | {
    label: string;
    href: string;
    children?: never;
}
    | {
    label: string;
    href?: never;
    children: {
        label: string;
        href: string;
    }[];
};

const navigation: NavItem[] = [
    { label: "Naslovna", href: "#/" },
    { label: "O Nama", href: "#/o-nama" },
    { label: "Web Shop",href: "#/web-shop" },
    {
        label: "Usluge",
        children: [
            { label: "Njega Lica", href: "#/usluge/njega-lica" },
            { label: "Njega Tijela", href: "#/usluge/njega-tijela" },
            { label: "Make-Up", href: "#/usluge/make-up" },
            { label: "Cjenovnik", href: "#/usluge/cjenovnik" },
        ],
    },
    {
        label: "Biologique Recherche",
        children: [
            {
                label: "O Brandu",
                href: "#/biologique-recherche/o-brandu",
            },
            {
                label: "Njega Lica",
                href: "#/biologique-recherche/njega-lica",
            },
            {
                label: "Njega Tijela",
                href: "#/biologique-recherche/njega-tijela",
            },
            {
                label: "Svi Proizvodi",
                href: "#/biologique-recherche/proizvodi",
            },
            {
                label: "Cjenovnik",
                href: "#/biologique-recherche/cjenovnik",
            },
        ],
    },
    { label: "Kontakt", href: "#/kontakt" },
];

function ChevronIcon({ open }: { open: boolean }) {
    return (
        <svg
            className={`${styles.navDropdownChevron} ${
                open ? styles.navDropdownChevronOpen : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}

function SearchIcon() {
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
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
        </svg>
    );
}

function CartIcon() {
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
            <path d="M3 4h2l2.2 11h10.9L21 7H6" />
            <circle cx="9" cy="20" r="1.5" />
            <circle cx="18" cy="20" r="1.5" />
        </svg>
    );
}

function HeartIcon() {
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
            <path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z" />
        </svg>
    );
}

interface NavDropdownItem {
    label: string;
    href: string;
}

interface NavDropdownProps {
    label: string;
    items: NavDropdownItem[];
    onNavigate?: () => void;
}

function NavDropdown({
                         label,
                         items,
                         onNavigate,
                     }: NavDropdownProps) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(
                    event.target as Node,
                )
            ) {
                setOpen(false);
            }
        }

        document.addEventListener(
            "mousedown",
            handleClickOutside,
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside,
            );
        };
    }, []);

    return (
        <div
            ref={dropdownRef}
            className={`${styles.navDropdown} ${
                open ? styles.navDropdownOpen : ""
            }`}
            onMouseEnter={() => {
                if (window.innerWidth > 1050) {
                    setOpen(true);
                }
            }}
            onMouseLeave={() => {
                if (window.innerWidth > 1050) {
                    setOpen(false);
                }
            }}
        >
            <button
                type="button"
                className={`${styles.navbarLink} ${styles.navDropdownTrigger}`}
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
            >
                <span>{label}</span>

                <ChevronIcon open={open} />
            </button>

            <div className={styles.navDropdownMenu}>
                <div
                    className={
                        styles.navDropdownMenuInner
                    }
                >
                    {items.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={
                                styles.navDropdownItem
                            }
                            onClick={() => {
                                setOpen(false);
                                onNavigate?.();
                            }}
                        >
                            <span>{item.label}</span>

                            <svg
                                className={
                                    styles.navDropdownItemArrow
                                }
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M5 12h13" />
                                <path d="m13 6 6 6-6 6" />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Navbar() {
    const [mobileOpen, setMobileOpen] =
        useState(false);

    const cartItems = 0;
    const wishlistItems = 0;

    return (
        <div className={styles.navbarShell}>
            <nav
                className={`${styles.navbar} glass-panel`}
                aria-label="Glavna navigacija"
            >
                <a
                    className={styles.navbarLogo}
                    href="/"
                >
                    <span
                        className={
                            styles.navbarLogoMain
                        }
                    >
                        Alma & Selma
                    </span>

                    <span
                        className={
                            styles.navbarLogoSub
                        }
                    >
                        STUDIO LJEPOTE
                    </span>
                </a>

                <button
                    className={`${styles.navbarMobileToggle} ${
                        mobileOpen
                            ? styles.navbarMobileToggleActive
                            : ""
                    }`}
                    type="button"
                    aria-label={
                        mobileOpen
                            ? "Zatvori navigaciju"
                            : "Otvori navigaciju"
                    }
                    aria-expanded={mobileOpen}
                    onClick={() =>
                        setMobileOpen(
                            (value) => !value,
                        )
                    }
                >
                    <span />
                    <span />
                    <span />
                </button>

                <div
                    className={`${styles.navbarContent} ${
                        mobileOpen
                            ? styles.navbarContentOpen
                            : ""
                    }`}
                >
                    <div className={styles.navbarLinks}>
                        {navigation.map((item) => {
                            if (item.children) {
                                return (
                                    <NavDropdown
                                        key={item.label}
                                        label={item.label}
                                        items={item.children}
                                        onNavigate={() =>
                                            setMobileOpen(
                                                false,
                                            )
                                        }
                                    />
                                );
                            }

                            return (
                                <a
                                    key={item.label}
                                    className={
                                        styles.navbarLink
                                    }
                                    href={item.href}
                                    onClick={() =>
                                        setMobileOpen(
                                            false,
                                        )
                                    }
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </div>

                    <div
                        className={
                            styles.navbarActions
                        }
                    >
                        <label
                            className={
                                styles.searchBox
                            }
                        >
                            <SearchIcon />

                            <input
                                type="search"
                                placeholder="Pretraga"
                                aria-label="Pretraga"
                            />
                        </label>

                        <a
                            className={
                                styles.iconAction
                            }
                            href="/web-shop/korpa"
                            aria-label={`Korpa, ${cartItems} proizvoda`}
                        >
                            <CartIcon />

                            {cartItems > 0 && (
                                <span
                                    className={
                                        styles.iconActionBadge
                                    }
                                >
                                    {cartItems}
                                </span>
                            )}
                        </a>

                        <a
                            className={
                                styles.iconAction
                            }
                            href="/web-shop/omiljeno"
                            aria-label={`Lista želja, ${wishlistItems} proizvoda`}
                        >
                            <HeartIcon />

                            {wishlistItems > 0 && (
                                <span
                                    className={
                                        styles.iconActionBadge
                                    }
                                >
                                    {wishlistItems}
                                </span>
                            )}
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
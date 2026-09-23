// src/components/common/ScrollReveal.tsx

import {
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    distance?: number;
}

export default function ScrollReveal({
                                         children,
                                         className = "",
                                         delay = 500,
                                         duration = 700,
                                         distance = 40,
                                     }: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -60px 0px",
            },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible
                    ? "translateY(0)"
                    : `translateY(${distance}px)`,
                transition: `
                    opacity ${duration}ms ease,
                    transform ${duration}ms ease
                `,
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}
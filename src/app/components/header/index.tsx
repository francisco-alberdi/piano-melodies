"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/recitals", label: "Recitals" },
  { href: "/joinus", label: "Join Us" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        event.target instanceof Node &&
        !navRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu when viewport expands past mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu automatically on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoTitleContainer}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/logos/logo.jpg"
            alt="Piano Melodies Logo"
            width={48}
            height={48}
          />
        </div>
        <h1 className={styles.title}>Piano Melodies Studio</h1>
      </Link>

      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        aria-expanded={menuOpen}
      >
        <span className={styles.hamburgerBar} />
        <span className={styles.hamburgerBar} />
        <span className={styles.hamburgerBar} />
      </button>

      <nav
        ref={navRef}
        className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
      >
        <ul className={styles.navList}>
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className={styles.navItem}>
                <Link
                  href={href}
                  className={isActive ? styles.navLinkActive : styles.navLink}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li className={styles.navItem}>
            <a
              href="https://forms.gle/R1aSvUebtKH8XTbn9"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bookNowBtn}
            >
              Book Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

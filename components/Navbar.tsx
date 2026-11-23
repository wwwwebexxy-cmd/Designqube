"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Brand from "./Brand";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const sectionHref = (id: string) => `${pathname === "/" ? "" : "/"}#${id}`;

  return (
    <nav className={styles.navbar}>
      <Link href={sectionHref("home")} className={styles.logo} aria-label="DesignQube home">
        <Brand />
      </Link>
      
      {/* Mobile Toggle Button */}
      <button 
        className={styles.mobileToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      <div className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ''}`}>
        <Link href={sectionHref("home")} className={styles.navLink} onClick={() => setIsOpen(false)}>Home</Link>
        <Link href={sectionHref("about")} className={styles.navLink} onClick={() => setIsOpen(false)}>About</Link>
        <Link href={sectionHref("services")} className={styles.navLink} onClick={() => setIsOpen(false)}>Services</Link>
        <Link href="/our-profile" className={styles.navLink} onClick={() => setIsOpen(false)}>Our Profile</Link>
        {/* <Link href="#features" className={styles.navLink} onClick={() => setIsOpen(false)}>Why Choose Us</Link> */}
        <Link href={sectionHref("contact")} className={styles.navLink} onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

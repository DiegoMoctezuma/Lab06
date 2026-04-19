import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link';

import { FaBars, FaTimes } from 'react-icons/fa'

let headerData: String = "Rafael Moctezuma"

export default function Header() {
    return (
        <header className={styles.header} id="header">
            <nav className={`container ${styles.nav}`}>
                <Link href="#home" className={styles.nav__logo}>
                    <span className={styles.logo__bracket}>&lt;</span>{headerData}<span className={styles.logo__bracket}>/&gt;</span>
                </Link>

                <input type="checkbox" id="nav-toggle" className={styles.nav__checkbox} />
                <label htmlFor="nav-toggle" className={styles.nav__toggle}>
                    <FaBars></FaBars>
                </label>

                <div className={styles.nav__menu} id="nav-menu">
                    <label htmlFor="nav-toggle" className={styles.nav__close}>
                        <FaTimes></FaTimes>
                    </label>

                    <ul className={styles.nav__list}>
                        <li className={styles.nav__item}>
                            <label htmlFor="nav-toggle">
                                <Link href="#home" className={styles.nav__link}>Inicio</Link>
                            </label>
                        </li>
                        <li className={styles.nav__item}>
                            <label htmlFor="nav-toggle">
                                <Link href="#interests" className={styles.nav__link}>Intereses</Link>
                            </label>
                        </li>
                        <li className={styles.nav__item}>
                            <label htmlFor="nav-toggle">
                                <Link href="#cv" className={styles.nav__link}>CV</Link>
                            </label>
                        </li>
                        <li className={styles.nav__item}>
                            <label htmlFor="nav-toggle">
                                <Link href="#projects" className={styles.nav__link}>Proyectos</Link>
                            </label>
                        </li>
                        <li className={styles.nav__item}>
                            <label htmlFor="nav-toggle">
                                <Link href="#contact" className={styles.nav__link}>Contacto</Link>
                            </label>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

import React from "react";
import Link from "next/link";

import styles from './Footer.module.css'
import { FaCoffee, FaEnvelope, FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";

let infoFooter: String = "Rafael Moctezuma"
let name: String = "Moctezuma Ramirez Diego Rafael"

export default function Footer() {
    return (
        <footer className={styles.footer} id="footer">
            <div className="container">
                <div className={styles.footer__content}>
                    <div className={styles.footer__brand}>
                        <Link href="#" className={styles.footer__logo}>
                            <span className="logo__bracket">&lt;</span>{infoFooter}<span className="logo__bracket">/&gt;</span>
                        </Link>
                        <p className={styles.footer__text}>
                            Gracias por visitar mi portfolio. ¡Espero que podamos trabajar juntos pronto!
                        </p>
                    </div>

                    <div className={styles.footer__social}>
                        <Link href="https://www.linkedin.com/in/rafael-moctezuma/" target="_blank" rel="noopener noreferrer"
                            className={styles['footer__social-link']} aria-label="LinkedIn">
                            <FaLinkedin></FaLinkedin>
                        </Link>
                        <Link href="https://github.com/DiegoMoctezuma" target="_blank" rel="noopener noreferrer"
                            aria-label="GitHub" className={styles['footer__social-link']}>
                            <FaGithub></FaGithub>
                        </Link>
                        <Link href="mailto:moctezumadiego5@gmail.com" className={styles['footer__social-link']} aria-label="Email">
                            <FaEnvelope></FaEnvelope>
                        </Link>
                    </div>
                </div>

                <div className={styles.footer__bottom}>
                    <p className={styles.footer__copyright}>
                        &copy; 2026 {name}. Todos los derechos reservados.
                    </p>
                    <p className={styles.footer__made}>
                        Hecho con <FaHeart className={styles.red}></FaHeart> y mucho <FaCoffee className={styles.red}></FaCoffee>
                    </p>
                </div>
            </div>
        </footer>
    )
}
import Link from 'next/link';

import styles from './Hero.module.css'
import { FaUserAstronaut, FaRocket, FaEnvelope, FaChevronDown } from 'react-icons/fa';

let heroData: String = "Diego Rafael Moctezuma Ramirez"

export default function Hero() {
    return (
        <section className={styles.hero} id="home">
            <div className={`${styles.hero__container} container`}>
                <div className={styles.hero__content}>
                    <span className={styles.hero__greeting}>¡Hola! 👋 Soy</span>
                    <h1 className={styles.hero__title}>{heroData}</h1>
                    <h2 className={styles.hero__subtitle}>
                        <span className={styles.highlight}>Científico de Datos</span> en Crecimiento
                    </h2>
                    <p className={styles.hero__description}>
                        Estudiante de Ciencia de Datos apasionado por crear soluciones analíticas innovadoras. Combino
                        pensamiento matemático con herramientas de machine learning para transformar datos crudos en
                        decisiones estratégicas.
                    </p>
                    <div className={styles.hero__buttons}>
                        <Link href="#projects" className="btn btn--primary">
                            <FaRocket></FaRocket> Ver mis proyectos
                        </Link>
                        <Link href="#contact" className="btn btn--outline">
                            <FaEnvelope></FaEnvelope> Contáctame
                        </Link>
                    </div>
                </div>

                <div className={styles.hero__image}>
                    <div className={styles.hero__blob}>
                        <div className={styles.hero__avatar}>
                            <FaUserAstronaut></FaUserAstronaut>
                        </div>
                    </div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--1']}`}></div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--2']}`}></div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--3']}`}></div>
                </div>
            </div>

            <div className={styles.hero__scroll}>
                <Link href="#interests" className={styles['hero__scroll-link']}>
                    <span>Scroll</span>
                    <FaChevronDown></FaChevronDown>
                </Link>
            </div>
        </section>
    );
}
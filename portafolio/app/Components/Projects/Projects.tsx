import React from "react";
import Link from "next/link";

import styles from './Projects.module.css'
import { FaBrain, FaDatabase, FaGithub, FaMobile } from "react-icons/fa";

export default function Projects() {
    return (
        <section className={`${styles.projects} section`} id="projects">
            <div className="container">
                <div className="section__header">
                    <span className="section__subtitle">Mi trabajo</span>
                    <h2 className="section__title">Proyectos Destacados</h2>
                    <p className="section__description">
                        Una selección de proyectos que demuestran mis habilidades y pasión por el desarrollo
                    </p>
                </div>

                <div className={styles.projects__grid}>
                    <article className={styles.project__card}>
                        <div className={styles.project__image}>
                            <div className={styles.project__placeholder}>
                                <FaMobile></FaMobile>
                            </div>
                            <div className={styles.project__overlay}>
                                <Link href="https://github.com/DiegoMoctezuma/GlosarioFinanzas" target="_blank"
                                    rel="noopener noreferrer" className={styles.project__link}>
                                    <FaGithub></FaGithub>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.project__content}>
                            <h3 className={styles.project__title}>Glosario Móvil Inteligente</h3>
                            <p className={styles.project__description}>
                                Aplicación móvil multiplataforma que integra un glosario de términos con un agente de
                                inteligencia artificial, orquestado mediante flujos automatizados para consultas
                                dinámicas.
                            </p>
                            <div className={styles.project__tech}>
                                <span className={styles.tech}>React Native</span>
                                <span className={styles.tech}>TypeScript</span>
                                <span className={styles.tech}>n8n</span>
                            </div>
                        </div>
                    </article>

                    <article className={styles.project__card}>
                        <div className={styles.project__image}>
                            <div className={styles.project__placeholder}>
                                <FaDatabase></FaDatabase>
                            </div>
                            <div className={styles.project__overlay}>
                                <Link href="https://github.com/DiegoMoctezuma/Proyecto_OLTP" target="_blank"
                                    rel="noopener noreferrer" className={styles.project__link}>
                                    <FaGithub></FaGithub>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.project__content}>
                            <h3 className={styles.project__title}>Plataforma Web Relacional</h3>
                            <p className={styles.project__description}>
                                Aplicación web interactiva conectada Link una base de datos SQL para la gestión,
                                almacenamiento y visualización dinámica de registros desde el navegador.
                            </p>
                            <div className={styles.project__tech}>
                                <span className={styles.tech}>Python</span>
                                <span className={styles.tech}>SQL</span>
                                <span className={styles.tech}>JS / HTML / CSS</span>
                            </div>
                        </div>
                    </article>

                    <article className={styles.project__card}>
                        <div className={styles.project__image}>
                            <div className={styles.project__placeholder}>
                                <FaBrain></FaBrain>
                            </div>
                            <div className={styles.project__overlay}>
                                <Link href="https://github.com/DiegoMoctezuma/RegresionesLineales_CreditScoring"
                                    target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <FaGithub></FaGithub>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.project__content}>
                            <h3 className={styles.project__title}>Modelos de Credit Scoring</h3>
                            <p className={styles.project__description}>
                                Pipeline analítico para predecir pagos de tarjetas de crédito. Incluye procesos de
                                extracción (ETL), ingeniería de características y evaluación de modelos de
                                regularización (Lasso, Ridge,etc).
                            </p>
                            <div className={styles.project__tech}>
                                <span className={styles.tech}>Python</span>
                                <span className={styles.tech}>Machine Learning</span>
                                <span className={styles.tech}>ETL</span>
                            </div>
                        </div>
                    </article>
                </div>

                <div className={styles.projects__more}>
                    <Link href="https://github.com/DiegoMoctezuma" target="_blank" rel="noopener noreferrer"
                        className="btn btn--outline">
                        <FaGithub></FaGithub> Ver más en GitHub
                    </Link>
                </div>
            </div>
        </section>
    )
}
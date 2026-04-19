import React from "react";

import styles from './InterestsSubjects.module.css'
import { FaBrain, FaMobile, FaDatabase, FaCode, FaNetworkWired, FaServer, FaGraduationCap } from "react-icons/fa";

export default function InterestsSubjects() {
    return (
        <section className={`${styles.interests} section`} id="interests">
            <div className="container">
                <div className="section__header">
                    <span className="section__subtitle">Lo que me apasiona</span>
                    <h2 className="section__title">Intereses & Especialidades</h2>
                    <p className="section__description">
                        Áreas tecnológicas en las que desarrollo soluciones escalables y modelos analíticos
                    </p>
                </div>

                <div className={styles.interests__grid}>
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <FaBrain></FaBrain>
                        </div>
                        <h3 className={styles.card__title}>Data Science & Machine Learning</h3>
                        <p className={styles.card__description}>
                            Desarrollo de modelos predictivos, ingeniería de características (ETL) y análisis
                            estadístico profundo para la toma de decisiones.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>Python</span>
                            <span className={styles.tag}>Modelos de Regresión</span>
                            <span className={styles.tag}>Análisis de Datos</span>
                        </div>
                    </article>

                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <FaMobile></FaMobile>
                        </div>
                        <h3 className={styles.card__title}>Desarrollo Móvil</h3>
                        <p className={styles.card__description}>
                            Creación de aplicaciones móviles nativas y multiplataforma con un enfoque centrado en la
                            experiencia del usuario (HCAI).
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>Swift / SwiftUI</span>
                            <span className={styles.tag}>React Native</span>
                            <span className={styles.tag}>Arquitectura Móvil</span>
                        </div>
                    </article>

                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <FaDatabase></FaDatabase>
                        </div>
                        <h3 className={styles.card__title}>Arquitectura de Datos</h3>
                        <p className={styles.card__description}>
                            Diseño, normalización y gestión de bases de datos para aplicaciones modernas y proyectos
                            orientados a grandes volúmenes de información.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>PostgreSQL</span>
                            <span className={styles.tag}>Supabase</span>
                            <span className={styles.tag}>NoSQL / SQL</span>
                        </div>
                    </article>

                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <FaCode></FaCode>
                        </div>
                        <h3 className={styles.card__title}>Desarrollo Web</h3>
                        <p className={styles.card__description}>
                            Construcción de aplicaciones web interactivas y plataformas escalables estructurando reglas
                            de negocio sólidas.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>Next.js</span>
                            <span className={styles.tag}>React</span>
                            <span className={styles.tag}>APIs</span>
                        </div>
                    </article>

                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <FaNetworkWired></FaNetworkWired>
                        </div>
                        <h3 className={styles.card__title}>Automatización & Workflows</h3>
                        <p className={styles.card__description}>
                            Creación de flujos de trabajo automatizados, orquestación de servicios y configuración de
                            entornos en contenedores.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>n8n</span>
                            <span className={styles.tag}>Docker</span>
                            <span className={styles.tag}>Integración API</span>
                        </div>
                    </article>

                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <FaServer></FaServer>
                        </div>
                        <h3 className={styles.card__title}>Big Data & Cómputo Paralelo</h3>
                        <p className={styles.card__description}>
                            Procesamiento de conjuntos de datos masivos y optimización del rendimiento computacional
                            mediante concurrencia.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>PySpark</span>
                            <span className={styles.tag}>Computación Concurrente</span>
                            <span className={styles.tag}>Arquitectura Cliente-Servidor</span>
                        </div>
                    </article>
                </div>

                <div className={styles.subjects}>
                    <h3 className={styles.subjects__title}>
                        <FaGraduationCap></FaGraduationCap> Materias Relevantes
                    </h3>
                    <div className={styles.subjects__list}>
                        <span className={styles.subject}>Desarrolo Web</span>
                        <span className={styles.subject}>Métodos Estadísticos</span>
                        <span className={styles.subject}>Probabilidad y Simulación Estocástica</span>
                        <span className={styles.subject}>Computación Concurrente</span>
                        <span className={styles.subject}>Reconocimiento de Patrones</span>
                        <span className={styles.subject}>Machine Learning</span>
                        <span className={styles.subject}>Bases de Datos</span>
                        <span className={styles.subject}>Big Data</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
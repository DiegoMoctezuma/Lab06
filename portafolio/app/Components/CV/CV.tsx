import React from "react";
import Link from "next/link";

import styles from './CV.module.css'
import { FaArrowRight, FaDownload, FaEnvelope, FaEye, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function CV() {
    return (
        <section className={`${styles.cv} section`} id="cv">
            <div className="container">
                <div className={styles.cv__content}>
                    <div className={styles.cv__info}>
                        <span className="section__subtitle">Conoce mi trayectoria</span>
                        <h2 className="section__title">Mi Currículum</h2>
                        <p className={styles.cv__description}>
                            Descarga mi CV para conocer mi formación académica, habilidades
                            técnicas y experiencia. También puedes conectar conmigo en mis
                            redes profesionales.
                        </p>

                        <div className={styles.cv__buttons}>
                            <Link href="https://www.overleaf.com/gallery/tagged/cv" className="btn btn--primary btn--large">
                                <FaDownload></FaDownload> Descargar CV
                            </Link>
                            <Link href="https://diegomoctezuma.github.io/lab05MoctezumaRamirezDiegoRafael/"
                                className="btn btn--secondary btn--large" target="_blank">
                                <FaEye></FaEye> Ver CV Digital
                            </Link>
                        </div>
                    </div>

                    <div className={styles.cv__social}>
                        <h3 className={styles['cv__social-title']}>Conectemos</h3>
                        <div className={styles['cv__social-links']}>
                            <Link href="https://www.linkedin.com/in/rafael-moctezuma/" target="_blank"
                                rel="noopener noreferrer" className={styles.social__card}>
                                <div className={`${styles.social__icon} ${styles['social__icon--linkedin']}`}>
                                    <FaLinkedinIn></FaLinkedinIn>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>LinkedIn</span>
                                    <span className={styles.social__user}>@Diego Rafael Moctezuma Ramirez</span>
                                </div>
                                <FaArrowRight className={styles.social__arrow}></FaArrowRight>
                            </Link>

                            <Link href="https://github.com/DiegoMoctezuma" target="_blank" rel="noopener noreferrer"
                                className={styles.social__card}>
                                <div className={`${styles.social__icon} ${styles['social__icon--github']}`}>
                                    <FaGithub></FaGithub>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>GitHub</span>
                                    <span className={styles.social__user}>@DiegoMoctezuma</span>
                                </div>
                                <FaArrowRight className={styles.social__arrow}></FaArrowRight>
                            </Link>

                            <Link href="mailto:moctezumadiego5@gmail.com" className={styles.social__card}>
                                <div className={`${styles.social__icon} ${styles['social__icon--email']}`}>
                                    <FaEnvelope></FaEnvelope>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>Email</span>
                                    <span className={styles.social__user}>moctezumadiego5@gmail.com</span>
                                </div>
                                <FaArrowRight className={styles.social__arrow}></FaArrowRight>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
import React from "react";
import Link from "next/link";

import styles from './Contact.module.css'
import { FaBriefcase, FaEnvelope, FaMapMarkedAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
    return (
        <section className={`${styles.contact} section`} id="contact">
            <div className="container">
                <div className={styles.contact__content}>
                    <div className={styles.contact__info}>
                        <span className="section__subtitle">¿Tienes un proyecto?</span>
                        <h2 className="section__title">¡Hablemos!</h2>
                        <p className={styles.contact__description}>
                            Estoy disponible para oportunidades laborales, proyectos freelance
                            o simplemente para conectar. ¡No dudes en contactarme!
                        </p>

                        <div className={styles.contact__data}>
                            <div className={styles.contact__item}>
                                <div className={styles.contact__icon}>
                                    <FaEnvelope></FaEnvelope>
                                </div>
                                <div className={styles.contact__text}>
                                    <span className={styles.contact__label}>Email</span>
                                    <Link href="mailto:moctezumadiego5@gmail.com"
                                        className={styles.contact__value}>moctezumadiego5@gmail.com</Link>
                                </div>
                            </div>

                            <div className={styles.contact__item}>
                                <div className={styles.contact__icon}>
                                    <FaMapMarkedAlt></FaMapMarkedAlt>
                                </div>
                                <div className={styles.contact__text}>
                                    <span className={styles.contact__label}>Ubicación</span>
                                    <span className={styles.contact__value}>Ciudad de México, México</span>
                                </div>
                            </div>

                            <div className={styles.contact__item}>
                                <div className={styles.contact__icon}>
                                    <FaBriefcase></FaBriefcase>
                                </div>
                                <div className={styles.contact__text}>
                                    <span className={styles.contact__label}>Disponibilidad</span>
                                    <span className={`${styles.contact__value} ${styles['contact__value--available']}`}>Disponible para
                                        trabajar</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contact__cta}>
                        <div className={styles.contact__card}>
                            <h3 className={styles['contact__card-title']}>¿Listo para comenzar?</h3>
                            <p className={styles['contact__card-text']}>
                                Envíame un mensaje y te responderé lo antes posible.
                            </p>
                            <Link href="mailto:moctezumadiego5@gmail.com" className={`btn btn--primary btn--large btn--full`}>
                                <FaPaperPlane></FaPaperPlane> Enviar mensaje
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
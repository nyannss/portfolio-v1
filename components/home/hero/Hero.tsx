"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
    return (
        <>
            <section className={`section-wrapper ${styles.hero}`}>
                <div className={styles.heroGrid}>
                    <div className={styles.copyWrapper}>
                        <Reveal>
                            <h1 className={styles.title}>
                                Hi, I&apos;m ahann<span>.</span>
                            </h1>
                        </Reveal>
                        <Reveal>
                            <h2 className={styles.subTitle}>
                                I&apos;m a <span>Web Developer</span>
                            </h2>
                        </Reveal>
                        <Reveal>
                            <p className={styles.aboutCopy}>
                                I&apos;m a fullstack developer with a strong passion for continuous learning and collaboration, actively seeking new opportunities.
                                Let&apos;s connect!
                            </p>
                        </Reveal>
                        <Reveal>
                            <StandardButton
                                onClick={() => document.getElementById("contact")?.scrollIntoView()}
                            >
                                Contact me
                            </StandardButton>
                        </Reveal>
                    </div>
                    <motion.div
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}>
                        <Image
                            className={styles.profile}
                            src="https://media.licdn.com/dms/image/D5603AQEWZtgwBBzcWA/profile-displayphoto-shrink_200_200/0/1685069414744?e=2147483647&v=beta&t=GErggdgvaTM35z08FqTxwO9B1ksJetkB6y78GhKPkeQ"
                            priority
                            alt="ahann | Web Developer"
                            width={250}
                            height={250}
                        />
                    </motion.div>
                </div>
                <DotGrid />
            </section>
        </>
    )
}
import { Links } from "@/components/nav/components/Links";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Stats } from "@/components/home/about/Stats";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "./about.module.scss";

export const About = () => {
    return (
        <section id="about" className="section-wrapper">
            <SectionHeader title="About" dir="l" />
            <div className={styles.about}>
                <div>
                    <Reveal>
                        <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
                            Allo! I&apos;m Farhan Brillan Widyakirana, and I&apos;m a web developer with a strong passion for continuous learning and collaboration, actively seeking new opportunities.
                            <br /><br />
                            I have experience working in both the mobile and web development worlds, with a focus on backend development. I&apos;m passionate about building robust, scalable systems that handle complex data processing efficiently.
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className={styles.aboutText}>
                            My expertise encompasses Node.js, PHP/Laravel, Go-lang, MongoDB, Docker, and SQL for backend development. Additionally, I possess proficiency in front-end technologies such as React, Vue.js, and Next.js, enabling me to craft comprehensive full-stack applications.
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className={styles.aboutText}>
                            I&apos;am continuously seeking fresh challenges and opportunities to expand my skills and evolve as a developer. If you&apos;re keen on collaborating or have any inquiries, please feel free to reach out. I&apos;m eager to connect and explore potential ventures together!
                            🔗
                        </p>
                    </Reveal>
                    <Reveal>
                        <div className={styles.links}>
                            <div className={styles.linksText}>
                                <span>Connect me</span>
                                <AiOutlineArrowRight />
                            </div>
                            <Links />
                        </div>
                    </Reveal>
                </div>
                <Stats />
            </div>
        </section>
    );
};
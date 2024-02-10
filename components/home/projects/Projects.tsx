import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./project.module.scss";

export const Projects = () => {
    return (
        <section className="section-wrapper" id="projects">
            <SectionHeader title="Projects" dir="r" />

            <div className={styles.projects}>
                {projects.map((project) => {
                    return <Project key={project.title} {...project} />;
                })}
            </div>
        </section>
    );
};

/**
 * Max 6 project, if it's more than that the sidebar won't read if it's in this section
 */
const projects = [
    {
        title: "jokopi.",
        imgSrc: "/images/projects/jokopi.png",
        code: "https://github.com/nyannss/jokopi-react",
        projectLink: "https://jokopi-react.vercel.app/",
        tech: ["React", "DaisyUI", "Tailwind", "Express.js", "React Native (Android)"],
        description: "jokopi! what a complete app coffee shop ordering!",
        modalContent: (
            <>
                <p>
                    Working on the whole project with a deadline of 2 weeks &#40;one week for frontend and one week for backend&#41;. This is an assignment from the bootcamp I attended. There is also an android application which is react native based with notifications using firebase cloud messaging. For now, this project is the most starred project.
                </p>
                <p>
                    The tech stack is based on React with the custom tailwind components and daisyUI &#40;library component based on tailwind&#41;,
                    connected to Express.js.
                </p>
            </>
        ),
    },
    {
        title: "Titan Saga",
        imgSrc: "/images/projects/tisaga.jpg",
        code: null,
        projectLink: "https://tisaga.com/",
        tech: ["Laravel", "jQuery", "Firebase"],
        description:
            "Classic web text-based rpg game; Battles, quest, love, here it all.",
        modalContent: (
            <>
                <p>
                    An old personal project that used to use php native and I migrated to laravel 10 at the end of 2023 and finished in approximately 2.5 months with additional features.
                </p>
                <p>
                    Here you can fight, upgrade your equipment, create alliances, chat with your friends and family.
                </p>
                <p>
                    In this live project using docker in which it runs laravel octane using the openswoole php extension which can boost this application.
                </p>
            </>
        ),
    },
    {
        title: "Tickits",
        imgSrc: "/images/projects/tickits.png",
        code: "https://github.com/purapuraturtle/tickits-fe",
        projectLink: "https://tickits-next.vercel.app",
        tech: ["Next.js", "Tailwind", "DaisyUI", "Express.js", "MongoDB"],
        description:
            "Tickits offers a convenient online platform for reserving movie tickets and selecting cinema showtimes.",
        modalContent: (
            <>
                <p>
                    Worked as a front-end developer for this web application. Integrated
                    api&apos;s, Created dynamic and reusable components.
                </p>
                <p>
                    I work primarily on the frontend, creating reusable components and
                    integrating api.
                </p>
                <p>
                    The team in total consists of 5 developers. This is a project that from bootcamp that i participated in.
                </p>
            </>
        ),
    },
];
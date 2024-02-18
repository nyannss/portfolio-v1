import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
    return (
        <section className="section-wrapper" id="experience">
            <SectionHeader title="Experience" dir="l" />
            {experience.map((item) => (
                <ExperienceItem key={item.title} {...item} />
            ))}
        </section>
    );
};

const experience = [
    {
        title: "SuperLab",
        position: "Backend Developer",
        time: "November 2023 - Present",
        location: "Surabaya, Jawa Timur (Remote)",
        description:
            "Design databases, build Express (Node.js) REST APIs, deploy servers on VPS via GitLab CI, configure with Nginx, and collaborate with frontend developers for seamless application functionality.",
        tech: [
            "Express.js",
            "Laravel",
            "MongoDB",
            "Postgres",
            "Git",
            "Gitlab",
        ],
    },
];
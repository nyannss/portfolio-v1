"use client";
import React from "react";
import styles from "./home.module.scss";
import { Header } from "@/components/nav/Header";
import { SideBar } from "@/components/nav/SideBar";
import { Hero } from "@/components/home/hero/Hero";
import { About } from "@/components/home/about/About";
import { Contact } from "@/components/home/contact/Contact";
import { Projects } from "@/components/home/projects/Projects";
import { Experience } from "@/components/home/experience/Experience";

export const Home = () => {
    return (
        <>
            <div className={styles.home}>
                <SideBar />
                <main id="main">
                    <Header />
                    <Hero />
                    <About />
                    <Projects />
                    <Experience />
                    <Contact />
                    <div
                        style={{
                            height: "200px",
                            background:
                                "linear-gradient(180deg, var(--background), var(--background-dark))",
                        }}
                    />
                </main>
            </div>
        </>
    )
}
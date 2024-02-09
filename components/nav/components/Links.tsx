'use client';

import styles from "./links.module.scss";
import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

export const Links = () => {
    return (
        <>
            <div className={styles.links}>
                <motion.span
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.0 }}
                >
                    <Link href="https://www.linkedin.com/in/frhnbrln/" target="_blank" rel="nofollow">
                        <AiFillLinkedin size="2.4rem" />
                    </Link>
                </motion.span>

                <motion.span
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Link href="https://github.com/nyannss" target="_blank" rel="nofollow">
                        <AiFillGithub size="2.4rem" />
                    </Link>
                </motion.span>

                <motion.span
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Link href="https://www.instagram.com/ahann.dev/" target="_blank" rel="nofollow">
                        <AiFillInstagram size="2.4rem" />
                    </Link>
                </motion.span>
            </div>
        </>
    );
};
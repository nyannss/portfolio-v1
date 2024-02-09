"use client";
import React from "react";
import styles from "./header.module.scss";
import { Links } from "@/components/nav/components/Links"
import { OutlineButton } from "@/components/buttons/OutlineButton";

export const Header = () => {
  return (
    <>
      <header className={styles.heading}>
        <Links />

        <OutlineButton onClick={() => window.open("/")}>
          My resume
        </OutlineButton>

      </header>
    </>
  )
}
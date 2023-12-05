import styles from "../styles/Button.module.css";
import React from "react";

export default function Button({ children }) { 
    return (
        <button className={styles.button}>
            {children}
        </button>
    );
}
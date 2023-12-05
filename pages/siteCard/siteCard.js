import Link from "next/link";
import styles from "./site.module.css";

export function SiteCard() {
    return (
        <div className={styles.divPrincipal}>
            <Link href="../receita1/index" className={styles.link}>
                <div className={styles.card}>
                    Acessar receita 1
                </div>
            </Link>
            <Link href="../receita2/pages/novaPagina" className={styles.link}>
                <div className={styles.card}>
                    Acessar receita 2
                </div>
            </Link>
             <Link href="../receita3/movies" className={styles.link}>
                <div className={styles.card}>
                    Acessar receita 3
                </div>
            </Link>
            <Link href="../receita4/pages/Q1/movies2" className={styles.link}>
                <div className={styles.card}>
                    Acessar receita 4
                </div>
            </Link>
        </div>
    )
}
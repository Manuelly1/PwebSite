import Link from "next/link";
import styles from "./site.module.css";

export function SiteCard() {
    return (
        <div className={styles.divPrincipal}>
            <div className={styles.receitasContainer}>
                <Link href="../receita1" className={styles.link}>
                    <div className={styles.card}>
                        <div>Acessar receita 1</div>
                    </div>
                </Link>
                <Link href="../receita2/pages/novaPagina" className={styles.link}>
                    <div className={styles.card}>
                        <div>Acessar receita 2</div>
                    </div>
                </Link>
                <Link href="../receita3/movies" className={styles.link}>
                    <div className={styles.card}>
                        <div>Acessar receita 3</div>
                    </div>
                </Link>
                <Link href="../receita4/pages/Q1/movies2" className={styles.link}>
                    <div className={styles.card}>
                        <div>Acessar receita 4</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

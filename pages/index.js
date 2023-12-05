import Link from "next/link";
import styles from "./styles/index.module.css";

export default function Index() {
    return (
        <div className={styles.pagPrincipal}>
            <h1>Receitas de Next.js</h1>
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
        </div>
    );
}


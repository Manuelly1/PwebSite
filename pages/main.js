import { SiteCard } from "./siteCard/siteCard";
import styles from "./styles/main.module.css";

export default function Main() {
    return (
        <div className={styles.pagPrincipal}>
            <h1>Receitas de Next.js</h1>
            <SiteCard />
        </div>
    );
}
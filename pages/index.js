import { SiteCard } from "./siteCard/siteCard";
import styles from "./styles/index.module.css";

export default function Index() {
    return (
        <div className={styles.pagPrincipal}>
            <h1>Receitas de Next.js</h1>
            <SiteCard />
        </div>
    );
}
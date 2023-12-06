import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import styles from "../styles/movies2.module.css";

export default function Movies2(){
    const {data, error} = useSWR(`https://www.omdbapi.com/?apikey=a1705ee9&s=bagdad`, fetcher)    

    if (error) return <div>Falha na requisição...</div>
    if (!data) return <div>carregando...</div>

    return (
        <div>
            { data.Search.map( (m) => <MovieLink key={m.imdbID} movie2={m}/> )};
        </div>
    )   
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

function MovieLink({ movie2 }) {
    const router = useRouter();

    return (
        <div className={styles.divPage}>
            <div className={styles.divMovies}>
                <Link href={`/receita4/pages/Q1/${movie2.imdbID}`}>
                    <p style={{ cursor: "pointer" }}>
                        {movie2.Title} --- {movie2.Year}
                    </p>
                </Link>
            </div>
        </div>
    );
}
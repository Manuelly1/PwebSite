import Footer from "./elements/footer";
import Button from "./elements/button";
import styles from "./styles/novaPagina.module.css";
import React from 'react';

export default function Main(){
    return (
        <div className={styles.divMain}>
            <h1 className={styles.titleMain}>
                Contrate os nossos serviços de assistência!
            </h1>
            <Button children="teste" />
            <Button children="contato" />
            <Footer />
        </div>
  )
}
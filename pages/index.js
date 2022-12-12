import styles from '../styles/Home.module.css'
import React from 'react';
import axios from 'axios';

function Home(){
  return(
    <div className={styles.container}>
      <header>
        <title> Projeto SSG </title>
      </header>
      <h1> Projeto Produtos </h1>
      <a href='\products'> Abrir produtos</a>

    </div>
  )
}

export default Home;
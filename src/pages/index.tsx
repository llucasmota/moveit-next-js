import { Experiencebar } from '../components/ExperienceBar';
import styles from '../styles/pages/Home.module.css'
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Experiencebar />
      <section>
        <div></div>
        <div></div>
      </section>
    </div>
  );
}

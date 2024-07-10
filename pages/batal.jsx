import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Batal.module.css";

export default function Batal() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Terima Kasih - Kuisioner</title>
      </Head>
      <div className={styles.card}>
        <img
          src="/thank you-rafiki.svg"
          alt="thank-you"
          className={styles.image}
        />
        <div className={styles.content}>
          <h1 className={styles.title}>Terima Kasih!</h1>
          <p className={styles.text}>
            Kami mengucapkan terima kasih atas partisipasi Anda. Kami menghargai
            keputusan Anda untuk tidak melanjutkan kuisioner ini. Masukan Anda
            tetap sangat berarti bagi kami.
          </p>
          <p className={styles.text}>
            Jika ada pertanyaan lebih lanjut atau butuh informasi tambahan,
            jangan ragu untuk menghubungi kami.
          </p>
          <Link href="/" legacyBehavior>
            <a className={styles.link}>Kembali ke Beranda</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

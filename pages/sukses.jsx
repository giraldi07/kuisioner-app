import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styles from "../styles/sukses.module.css"; // Import CSS module

const Sukses = () => {
  const router = useRouter();

  const variants = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className={styles.container}>
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        className={styles.card}
      >
        <h1 className={styles.title}>Terima Kasih!</h1>
        <p className={styles.text}>
          Terima kasih telah mengisi kuisioner dengan baik.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/login")}
            className={styles.button}
          >
            Kembali ke Beranda
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Sukses;

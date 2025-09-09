import React from "react";
import { motion } from "framer-motion";
import styles from "./NoInternet.module.css";

const NoInternet = ({ onRetry }) => {
  return (
    <div className={styles.container}>
      {/* Wi-Fi animation */}
      <motion.div
        className={styles.wifi}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      >
        {/* Dot at bottom */}
        <motion.div
          className={styles.dot}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Rings as Wi-Fi waves */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.ring}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0.6, 0.2, 0], scale: [0.7, 1.1, 1.4] }}
            transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
          />
        ))}
      </motion.div>

      {/* Text */}
      <motion.h1
        className={styles.title}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Oops! No Internet
      </motion.h1>
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Check your connection and try again.
      </motion.p>

      {/* Retry button */}
      <motion.button
        className={styles.retryBtn}
        onClick={onRetry}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 12px rgba(0, 150, 255, 0.6)",
        }}
        whileTap={{
          scale: 0.95,
          boxShadow: "0px 0px 18px rgba(0, 150, 255, 0.9)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        Retry
      </motion.button>
    </div>
  );
};

export default NoInternet;

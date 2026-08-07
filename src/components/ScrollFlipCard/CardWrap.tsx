"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./CardWrap.module.css";
import { CardAsset } from "./cardAssets";

interface CardWrapProps {
  asset: CardAsset;
}

export const CardWrap: React.FC<CardWrapProps> = ({ asset }) => {
  return (
    <div className={styles.cardWrapContainer}>
      {/* Front Face */}
      <div
        className={styles.frontFace}
        style={{ background: asset.gradient }}
      >
        <div className={styles.imageWrapper}>
          <img
            src={asset.frontImage}
            alt={asset.title}
            className={styles.image}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>{asset.title}</h2>
          <p className={styles.subtitle}>{asset.subtitle}</p>
        </div>
      </div>

      {/* Back Face */}
      <motion.div
        className={styles.backFace}
        style={{
          background: asset.gradient,
          rotateY: 180,
        }}
      >
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>{asset.title}</h2>
          <p className={styles.subtitle}>{asset.subtitle}</p>
        </div>
      </motion.div>
    </div>
  );
};

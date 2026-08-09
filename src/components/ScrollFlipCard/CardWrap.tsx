"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./CardWrap.module.css";
import { CardAsset } from "./cardAssets";

interface CardWrapProps {
  asset: CardAsset;
}

export const CardWrap: React.FC<CardWrapProps> = ({ asset }) => {
  const content = (
    <>
      <div className={styles.iconContainer} style={{ backgroundColor: asset.iconBg }}>
        <img src={asset.iconUrl} alt="icon" className={styles.icon} />
      </div>
      
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{asset.title}</h2>
        <div className={styles.subtitles}>
          {asset.subtitles.map((sub, i) => (
            <p key={i} className={styles.subtitle} style={{ color: asset.accentColor }}>{sub}</p>
          ))}
        </div>
        
        <div className={styles.accentDivider} style={{ backgroundColor: asset.accentColor }}></div>
        
        {asset.description && <p className={styles.description}>{asset.description}</p>}
        
        <div className={styles.footerWrap}>
          <svg className={styles.footerIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
            <path d="M9 22v-4h6v4"></path>
            <path d="M8 6h.01"></path>
            <path d="M16 6h.01"></path>
            <path d="M12 6h.01"></path>
            <path d="M12 10h.01"></path>
            <path d="M12 14h.01"></path>
            <path d="M16 10h.01"></path>
            <path d="M16 14h.01"></path>
            <path d="M8 10h.01"></path>
            <path d="M8 14h.01"></path>
          </svg>
          <p className={styles.footerText}>{asset.issuer} &middot; {asset.year}</p>
        </div>
      </div>

      <div className={styles.sectionDivider}></div>
      
      <div className={styles.badgesWrapper}>
        {asset.badges.map((badge, i) => (
          <div key={i} className={styles.badgeContainer}>
            <img src={badge} alt="badge" className={styles.badgeImage} />
          </div>
        ))}
      </div>
      
    </>
  );

  const credentialButton = asset.credentialLink ? (
    <a href={asset.credentialLink} className={styles.credentialButton} style={{ borderColor: asset.accentColor, color: asset.accentColor }}>
      View Credential
      <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </a>
  ) : null;

  return (
    <div className={styles.cardWrapContainer}>
      {/* Front Face */}
      <div 
        className={styles.frontFace} 
        style={{ borderTopColor: asset.accentColor }}
      >
        <div className={styles.contentWrapper}>
          {content}
        </div>
      </div>

      {/* Back Face */}
      <motion.div
        className={styles.backFace}
        style={{
          rotateY: 180,
          borderTopColor: asset.accentColor
        }}
      >
        <div className={styles.contentWrapper}>
          {content}
          {credentialButton}
        </div>
      </motion.div>
    </div>
  );
};

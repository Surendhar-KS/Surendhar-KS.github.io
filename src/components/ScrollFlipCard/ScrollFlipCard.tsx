"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./ScrollFlipCard.module.css";
import { CardWrap } from "./CardWrap";
import {
  CARD_ONE_CONFIG,
  CARD_TWO_CONFIG,
  CARD_THREE_CONFIG,
  CardState,
  triggersConfig,
} from "./scroll-flip.config";
import { cardAssets } from "./cardAssets";

const DEBUG = false;

// Helper component for Triggers
const Trigger = ({
  id,
  className,
  onInView,
  debug,
  activeState,
}: {
  id: string;
  className: string;
  onInView: (id: string, inView: boolean) => void;
  debug: boolean;
  activeState?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5, margin: "0px 0px -20% 0px" });

  useEffect(() => {
    onInView(id, isInView);
  }, [isInView, id, onInView]);

  return (
    <div
      ref={ref}
      id={id}
      className={`${className} ${
        debug ? (isInView ? styles.debugTriggerActive : styles.debugTrigger) : ""
      }`}
    >
      {debug && (
        <span style={{ padding: "10px", display: "block" }}>
          {id} {isInView ? "(ACTIVE)" : ""}
        </span>
      )}
    </div>
  );
};

export const ScrollFlipCard = () => {
  const [card1State, setCard1State] = useState<CardState>(CardState.Initial);
  const [card2State, setCard2State] = useState<CardState>(CardState.Initial);
  const [card3State, setCard3State] = useState<CardState>(CardState.Initial);

  // Active trigger tracking for Debug
  const [activeTriggers, setActiveTriggers] = useState<Set<string>>(new Set());

  const handleInView = React.useCallback((id: string, inView: boolean) => {
    setActiveTriggers((prev) => {
      const next = new Set(prev);
      if (inView) next.add(id);
      else next.delete(id);
      return next;
    });

    if (inView) {
      // Map triggers to states based on Framer logic
      if (id === "firstTrigger") {
        setCard1State(CardState.FirstTrigger);
        setCard2State(CardState.FirstTrigger);
        setCard3State(CardState.FirstTrigger);
      } else if (id.startsWith("littleUp")) {
        const num = id.replace("littleUp", "");
        if (num === "1") setCard1State(CardState.LittleUp);
        if (num === "2") setCard2State(CardState.LittleUp);
        if (num === "3") setCard3State(CardState.LittleUp);
      } else if (id.startsWith("backToCenter")) {
        const num = id.replace("backToCenter", "");
        if (num === "1") setCard1State(CardState.BackToCenter);
        if (num === "2") setCard2State(CardState.BackToCenter);
        if (num === "3") setCard3State(CardState.BackToCenter);
      } else if (id.startsWith("flip")) {
        const num = id.replace("flip", "");
        if (num === "1") setCard1State(CardState.Flip);
        if (num === "2") setCard2State(CardState.Flip);
        if (num === "3") setCard3State(CardState.Flip);
      }
    } else {
      // Revert logic when scrolling UP
      // This requires complex ordering, but for a simple state machine, 
      // if it leaves view, we drop back to the previous state.
      // To simplify, we track the highest active state.
    }
  }, []);

  // Compute actual state based on active triggers (handles scrolling up/down gracefully)
  useEffect(() => {
    // Card 1
    if (activeTriggers.has("flip1")) setCard1State(CardState.Flip);
    else if (activeTriggers.has("backToCenter1")) setCard1State(CardState.BackToCenter);
    else if (activeTriggers.has("littleUp1")) setCard1State(CardState.LittleUp);
    else if (activeTriggers.has("firstTrigger")) setCard1State(CardState.FirstTrigger);
    else setCard1State(CardState.Initial);

    // Card 2
    if (activeTriggers.has("flip2")) setCard2State(CardState.Flip);
    else if (activeTriggers.has("backToCenter2")) setCard2State(CardState.BackToCenter);
    else if (activeTriggers.has("littleUp2")) setCard2State(CardState.LittleUp);
    else if (activeTriggers.has("firstTrigger")) setCard2State(CardState.FirstTrigger);
    else setCard2State(CardState.Initial);

    // Card 3
    if (activeTriggers.has("flip3")) setCard3State(CardState.Flip);
    else if (activeTriggers.has("backToCenter3")) setCard3State(CardState.BackToCenter);
    else if (activeTriggers.has("littleUp3")) setCard3State(CardState.LittleUp);
    else if (activeTriggers.has("firstTrigger")) setCard3State(CardState.FirstTrigger);
    else setCard3State(CardState.Initial);

  }, [activeTriggers]);

  return (
    <div className={styles.sectionMain}>
      {DEBUG && (
        <div className={styles.debugOverlay}>
          <h3>DEBUG MODE</h3>
          <p>Active Triggers: {Array.from(activeTriggers).join(", ") || "None"}</p>
          <hr />
          <p>Card 1 State: {card1State}</p>
          <p>Card 2 State: {card2State}</p>
          <p>Card 3 State: {card3State}</p>
        </div>
      )}

      {/* Sticky Perspective Container */}
      <div className={styles.stickyContainer}>
        <div className={styles.cardsWrapper}>
          {/* Card 3 (Bottom Layer) */}
          <motion.div
            className={styles.cardMotionWrapper}
            initial={CARD_THREE_CONFIG.states[CardState.Initial]}
            animate={CARD_THREE_CONFIG.states[card3State]}
            transition={CARD_THREE_CONFIG.spring}
            style={{ ...cardAssets[2].origin }}
          >
            <CardWrap asset={cardAssets[2]} />
          </motion.div>

          {/* Card 2 (Middle Layer) */}
          <motion.div
            className={styles.cardMotionWrapper}
            initial={CARD_TWO_CONFIG.states[CardState.Initial]}
            animate={CARD_TWO_CONFIG.states[card2State]}
            transition={CARD_TWO_CONFIG.spring}
            style={{ ...cardAssets[1].origin }}
          >
            <CardWrap asset={cardAssets[1]} />
          </motion.div>

          {/* Card 1 (Top Layer) */}
          <motion.div
            className={styles.cardMotionWrapper}
            initial={CARD_ONE_CONFIG.states[CardState.Initial]}
            animate={CARD_ONE_CONFIG.states[card1State]}
            transition={CARD_ONE_CONFIG.spring}
            style={{ ...cardAssets[0].origin }}
          >
            <CardWrap asset={cardAssets[0]} />
          </motion.div>
        </div>
      </div>

      {/* Triggers (Invisible blocks that drive the scroll state) */}
      <div className={styles.triggersWrapper}>
        <Trigger id="firstTrigger" className={styles.firstTrigger} onInView={handleInView} debug={DEBUG} />
        
        <div className={styles.secondTriggersWrap}>
          <Trigger id="littleUp1" className={styles.littleUp1} onInView={handleInView} debug={DEBUG} />
          <Trigger id="littleUp2" className={styles.littleUp2} onInView={handleInView} debug={DEBUG} />
          <Trigger id="littleUp3" className={styles.littleUp3} onInView={handleInView} debug={DEBUG} />
        </div>

        <div className={styles.thirdTriggersWrap}>
          <Trigger id="backToCenter1" className={styles.backToCenter1} onInView={handleInView} debug={DEBUG} />
          <Trigger id="backToCenter2" className={styles.backToCenter2} onInView={handleInView} debug={DEBUG} />
          <Trigger id="backToCenter3" className={styles.backToCenter3} onInView={handleInView} debug={DEBUG} />
        </div>

        <div className={styles.fourthTriggersWrap}>
          <Trigger id="flip1" className={styles.flip1} onInView={handleInView} debug={DEBUG} />
          <Trigger id="flip2" className={styles.flip2} onInView={handleInView} debug={DEBUG} />
          <Trigger id="flip3" className={styles.flip3} onInView={handleInView} debug={DEBUG} />
        </div>

        <div className={styles.spacer} />
      </div>
    </div>
  );
};

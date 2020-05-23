import React from "react";
import { motion } from "framer-motion";
import "./style.css";

import { useSessionData } from "../../hooks/useSessionData";

interface TextAccordionProps {
  delay: number;
  chars: string;
}

const TextAccordion = ({ delay, chars }: TextAccordionProps) => {
  return (
    <>
      {chars.split("").map((c, idx) => (
        <motion.span
          key={idx}
          transition={{ delay: (idx + delay) / 13, from: 0 }}
          animate={{ maxWidth: "9vw" }}
        >
          {c}
        </motion.span>
      ))}
    </>
  );
};

export const Splash = () => {
  const vh = window.innerHeight;
  const { visited } = useSessionData();

  return visited ? null : (
    <div className="viewport-center">
      <motion.div transition={{ delay: 1.8 }} animate={{ y: vh * -0.6 }}>
        <motion.div
          className="dangling-text"
          style={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <span>M</span>
          <TextAccordion delay={4} chars="ichele" />
          <span>&nbsp;L</span>
          <TextAccordion delay={11} chars="oria" />
        </motion.div>
      </motion.div>
    </div>
  );
};

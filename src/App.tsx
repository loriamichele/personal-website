import React from "react";
import { motion } from "framer-motion";
import "./App.css";

interface TextAccordionProps {
  delay: number;
  chars: string;
}

function TextAccordion({ delay, chars }: TextAccordionProps) {
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
}

function App() {
  const vh = window.innerHeight;
  return (
    <>
      <div className="viewport-center">
        <motion.div transition={{ delay: 1.8 }} animate={{ y: vh * -0.6 }}>
          <motion.div
            className="dangling-text"
            transition={{ from: 0 }}
            animate={{ scale: 1 }}
          >
            <span>M</span>
            <TextAccordion delay={4} chars="ichele" />
            <span>&nbsp;L</span>
            <TextAccordion delay={12} chars="oria" />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="header"
        transition={{ delay: 2.3 }}
        animate={{ opacity: [0, 1], x: [-1000, 0] }}
      >
        <h1>&nbsp;</h1>
      </motion.div>
      <motion.h1
        className="logo"
        transition={{ delay: 2.3 }}
        animate={{ y: 100 }}
      >
        ML
      </motion.h1>
    </>
  );
}

export default App;

import React from "react";
import { motion } from "framer-motion";

import { useSessionData } from "../../hooks/useSessionData";

import "./style.css";

export const Header = () => {
  const { visited } = useSessionData();

  return (
    <>
      <motion.div
        className="header"
        transition={{ delay: visited ? 0.2 : 2.3 }}
        style={{ opacity: 0, x: -1000 }}
        animate={{ opacity: [0, 1], x: [-1000, 0] }}
      >
        <h1>&nbsp;</h1>
      </motion.div>
      <motion.h1
        className="logo"
        transition={{ delay: visited ? 0.2 : 2.3 }}
        style={{ y: -100 }}
        animate={{ y: 0 }}
      >
        ML
      </motion.h1>
    </>
  );
};

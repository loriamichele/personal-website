import React from "react";

import { Header } from "./components/Header";
import { Splash } from "./components/Splash";
import { Typewriter } from "./components/Typewriter";

export const App = () => {
  return (
    <>
      <Header />
      <Splash />
      <Typewriter />
    </>
  );
};

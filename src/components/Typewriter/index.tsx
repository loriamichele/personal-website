import React from "react";
import Typist from "react-typist";

import { useSessionData } from "../../hooks/useSessionData";

import "./style.css";

export const Typewriter = () => {
  const { visited } = useSessionData();
  return (
    <div className="text-container">
      <Typist startDelay={visited ? 1000 : 3000} cursor={{ show: false }}>
        <h2>
          Hi{" "}
          <span className="hand" role="img" aria-label="waving hand">
            👋
          </span>
        </h2>
      </Typist>
      <Typist startDelay={visited ? 2500 : 4500} cursor={{ show: false }}>
        <p>
          I'm Michele
          <Typist.Delay ms={200} />, nice to see you here!
        </p>
        <br />
        <Typist.Delay ms={500} />
        <p>
          As you might have guessed,
          <br />
          <Typist.Delay ms={400} />I just love <strong>making things</strong>.
        </p>
        <br />
        <p>
          And by things I mean <Typist.Delay ms={200} />
          <strong>
            music
            <Typist.Delay ms={300} />
            <Typist.Backspace count={5} />
            <Typist.Delay ms={100} />
            bug
            <Typist.Backspace count={3} />
            software
            <Typist.Delay ms={400} />
            <Typist.Backspace count={8} />
            <Typist.Delay ms={100} />
            videos
            <Typist.Delay ms={400} />
            <Typist.Backspace count={6} />
            <Typist.Delay ms={100} />
            food
            <Typist.Delay ms={300} />
            <Typist.Backspace count={4} />
            <Typist.Delay ms={100} />
            thoughts
            <Typist.Delay ms={200} />
            <Typist.Backspace count={8} />
            <Typist.Delay ms={100} />
            pictures
            <Typist.Delay ms={300} />
            <Typist.Backspace count={9} />
          </strong>
          ... whatever, you get the point.
        </p>
        <br />
        <Typist.Delay ms={500} />
        <p>
          So, ready to <a href="#">check some stuff out</a>?
        </p>
      </Typist>
    </div>
  );
};

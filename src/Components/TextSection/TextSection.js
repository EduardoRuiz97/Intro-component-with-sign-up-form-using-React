import React from "react";

import Section from "../UI/Section";

import classes from './TextSection.module.css';


const TextSection = () => {

  return <Section className={classes['text-section']}>
    <h1>Learn to code by watching others</h1>
    <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
    but understanding how developers think is invaluable. </p>
  </Section>
}

export default TextSection;
import React from "react";
import Section from "../UI/Section";
import Form from "./Form/Form";

import classes from'./FormSection.module.css';

const FormSection = () => {
  return (
    <Section className={classes['form-section']}>
      <div className={classes['form-section__offer']}>
        <span>Try it free 7 days</span> then $20/mo. thereafter
      </div>
      <Form></Form>
    </Section>
  )
}

export default FormSection;
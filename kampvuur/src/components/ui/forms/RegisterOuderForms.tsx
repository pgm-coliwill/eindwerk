"use client";

import React, { useState } from "react";
import styles from "@componentsStyles/forms/RegisterOuderForms.module.css";

export default function RegisterOuderForms() {
  const [step, setStep] = useState(1);

  const handleNext = (e) => {
    e.preventDefault(); 
    setStep(2);
  };

  return (
    <div className={styles.container}>
      <form action="">
        {step === 1 && (
          <div className={styles.firstForm}>
            <label htmlFor="code">Code</label>
            <input type="text" id="code" />

            <div className={styles.flexForm}>
              <div>
                <label htmlFor="voornaam">Voornaam</label>
                <input type="text" id="voornaam" />
              </div>
              <div>
                <label htmlFor="familienaam">Familienaam</label>
                <input type="text" id="familienaam" />
              </div>
            </div>

            <label htmlFor="password">Wachtwoord</label>
            <input type="password" id="password" />

            <label htmlFor="repeat-password">Herhaal Wachtwoord</label>
            <input type="password" id="repeat-password" />
          </div>
        )}

        {step === 2 && (
          <div className={styles.secondForm}>
            <div>Groups</div>
          </div>
        )}
      </form>
      <div className={styles.buttonContainer}>
        {step === 1 && (
          <button className="primary" onClick={handleNext}>
            Verder
          </button>


        )}
        {/* Optionally, add a "Back" button if you want to allow navigation back */}

        {step === 2 && (
          <button className="primary">Registreer</button>
        )}
      </div>
    </div>
  );
}

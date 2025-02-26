import React from "react";
import styles from "@pageStyles/ChooseRegister.module.css";
import BenefitsCardHero from "@/components/ui/cards/BenefitsCardHero";
import Link from "next/link";

export default function ChooseRegister() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
      <div className={styles.cardContainer}>
        <Link href={"/register/ouders"}>
          {" "}
          <BenefitsCardHero
            title="Ik ben een ouder"
            description="Ik heb een code ontvangen via mail en wil me graag registreren als ouder."
          />
        </Link>

        <Link href={"/register/leiders"}>
          <BenefitsCardHero
            title="Ik ben een leider"
            description="Ik heb een code ontvangen via mail en wil me graag inschrijven als leider."
          />
        </Link>

        <Link href={"/register/jeugdbeweging"}>
          <BenefitsCardHero
            title="Jeugdbeweging"
            description="Ik wil graag mijn organisatie registreren op het KampVuur platform."
          />
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import RegisterLayout from "@/layouts/RegisterLayout";
import styles from "@pageStyles/RegistreerOuder.module.css";
import Image from "next/image";
import RegisterOuderForms from "@/components/ui/forms/RegisterOuderForms";

export default function RegistreerOuder() {
  return (
    <>
      <RegisterLayout>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              width={100}
              height={100}
            />
            <h1>Registreer als ouder</h1>
          </div>
          <div className={styles.formContainer}>
            <RegisterOuderForms />
          </div>
        </div>
      </RegisterLayout>
    </>
  );
}

import React from "react";
import Image from "next/image";

import styles from "@componentsStyles/buttons/ButtonWithArrow.module.css";

type ButtonWithArrowProps = {
  children: React.ReactNode;
  action: () => void;
};

export default function ButtonWithArrow({
  children,
  action,
}: ButtonWithArrowProps) {
  return (
    <button onClick={action} className={`${styles.buttonWithArrow} primary`}>
      {children}
    <Image
      src={"/images/icons/arrow_right.svg"}
      alt="arrow right"
      width={15}
      height={15}
    />
    </button>
  );
}

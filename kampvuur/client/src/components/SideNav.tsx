import React from "react";
import styles from "@styles/globals/sideNav.module.css";
import {
  House,
  CalendarSearch,
  MessageCircle,
  Users,
  FilePen,
  Tent,
} from "lucide-react";
import Link from "next/link";

export default function SideNav() {
  return (
    <div className={styles.sideNav}>
      <div>Dropdown</div>

      <div className={styles.navItemsContainer}>
        <ul className={styles.standardNavItems}>
          <li>
            <Link className={styles.navItem} href="/dashboard">
              <House color="black" size={20} strokeWidth={1} />
              Dashboard
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} href="/messages">
              <MessageCircle color="black" size={20} strokeWidth={1} />
              Berichten
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} href="/events">
              <CalendarSearch color="black" size={20} strokeWidth={1} />
              Evenementen
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} href="/groups">
              <Users color="black" size={20} strokeWidth={1} />
              Groepen
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link className={styles.navItem} href="/dashboard">
              <FilePen color="black" size={20} strokeWidth={1} />
              Inschrijvingen
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} href="/dashboard">
              <Tent color="black" size={20} strokeWidth={1} />
              Kamp
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

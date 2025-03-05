import SideNav from "@/components/SideNav";
import styles from "@styles/layouts/DashboardLayout.module.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.dashboardLayout}>
      <SideNav />
      <div className={styles.mainContent}>{children}</div>
    </main>
  );
}

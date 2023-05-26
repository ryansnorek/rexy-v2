'use client';
import styles from './page.module.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import Landing from './pages/Landing';
import { ToastProvider } from './context/toastNotifications';

export default function Home() {
  return (
    <main className={styles.main}>
      <ToastProvider>
        <Landing />
      </ToastProvider>
    </main>
  );
}

'use client';
import styles from './page.module.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import Landing from './pages/Landing';
import { ToastProvider } from './context/ToastContext';
import { store } from './state/store';
import { StoreProvider } from './state/context/StoreContext';

export default function Home() {
  return (
    <main className={styles.main}>
      <ToastProvider>
        <StoreProvider store={store}>
          <Landing />
        </StoreProvider>
      </ToastProvider>
    </main>
  );
}

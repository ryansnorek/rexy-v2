'use client';
import styles from './page.module.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import Landing from './pages/Landing';
import { ToastProvider } from './context/toastContext';
import { UserProvider } from './context/userContext';
import { WordsProvider } from './context/wordsContext';

export default function Home() {
  return (
    <main className={styles.main}>
      <ToastProvider>
        <UserProvider>
          <WordsProvider>
            <Landing />
          </WordsProvider>
        </UserProvider>
      </ToastProvider>
    </main>
  );
}

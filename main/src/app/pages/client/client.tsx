'use client';

import { ToastProvider } from '@/app/context/ToastContext';
import { StoreProvider } from '@/app/state/context/StoreContext';
import { store } from '@/app/state/store';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

export default function ClientProvider({ children }: React.PropsWithChildren) {
  return (
    <ToastProvider>
      <StoreProvider store={store}>
        {children}
      </StoreProvider>
    </ToastProvider>
  );
}

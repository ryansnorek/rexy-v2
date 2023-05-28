import { Toast } from 'primereact/toast';
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useRef,
} from 'react';

interface ToastContextProps {
  toast: React.RefObject<Toast>;
}

const ToastContext = createContext<ToastContextProps>({
  toast: { current: null },
});

export const useToastContext = () => useContext(ToastContext);

export function ToastProvider({ children }: PropsWithChildren) {
  const toast = useRef<Toast | null>(null);
  return (
    <ToastContext.Provider value={{ toast }}>
      <Toast ref={toast} />
      {children}
    </ToastContext.Provider>
  );
}

import { Toast, ToastMessage } from 'primereact/toast';
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useRef,
} from 'react';

interface ToastContextProps {
  toast: React.RefObject<Toast>;
  showToast: (message: ToastMessage) => void;
}

const ToastContext = createContext<ToastContextProps>({
  toast: { current: null },
  showToast: () => {},
});

const useToastContext = () => useContext(ToastContext);

export const useToast = () => useToastContext();

export function ToastProvider({ children }: PropsWithChildren) {
  const toast = useRef<Toast | null>(null);

  const showToast = (message: ToastMessage) => {
    toast?.current?.show(message);
  };
  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      <Toast ref={toast} />
      {children}
    </ToastContext.Provider>
  );
}

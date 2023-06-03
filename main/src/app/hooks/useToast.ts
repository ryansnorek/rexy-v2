import { ToastMessage } from "primereact/toast";
import { useToastContext } from "../context/ToastContext";

export function useToast() {
  const { toast } = useToastContext();

  const showToast = (message: ToastMessage) => {
    toast?.current?.show(message);
  };
  return { showToast };
};
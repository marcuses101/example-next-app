import Snackbar, {
  SnackbarCloseReason,
  SnackbarProps,
} from "@mui/material/Snackbar";
import Alert, { AlertColor } from "@mui/material/Alert";
import {
  createContext,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

export interface Toast extends SnackbarProps {
  id: string;
  severity?: AlertColor;
}

interface ToastContextInterface {
  toasts: Toast[];
  setToasts: Dispatch<SetStateAction<any[]>>;
}

export const ToastContext = createContext<ToastContextInterface>({
  toasts: [],
  setToasts: () => {},
});

interface ToasterProps {
  children: ReactNode;
}

export function Toaster({ children }: ToasterProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const value = useMemo<ToastContextInterface>(
    () => ({
      toasts,
      setToasts,
    }),
    [toasts, setToasts]
  );

  function onClose(_: any, reason: SnackbarCloseReason) {
    if (reason === "clickaway") return;
    setToasts(([currentToast, ...rest]) => [
      { ...currentToast, open: false },
      ...rest,
    ]);
  }

  function onExited() {
    setToasts((currentToasts) => {
      const newToastList = currentToasts.slice(1);
      if (!newToastList.length) return [];
      const [openToast, ...rest] = newToastList;
      return [{ ...openToast, open: true }, ...rest];
    });
  }

  const { id, severity, message, ...currentProperties } = toasts[0] || {};
  const autoHideDuration = 3000;
  return (
    <ToastContext.Provider value={value}>
      {!severity ? (
        <Snackbar
          key={id}
          autoHideDuration={autoHideDuration}
          message={message}
          {...currentProperties}
          onClose={onClose}
          TransitionProps={{ onExited }}
        />
      ) : (
        <Snackbar
          key={id}
          autoHideDuration={autoHideDuration}
          {...currentProperties}
          onClose={onClose}
          TransitionProps={{ onExited }}
        >
          <Alert severity={severity}>{message}</Alert>
        </Snackbar>
      )}

      {children}
    </ToastContext.Provider>
  );
}

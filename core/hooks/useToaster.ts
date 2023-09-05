import { ToastContext } from "core/components/Toaster";
import { AlertColor } from "@mui/material/Alert";
import { SnackbarOrigin } from "@mui/material/Snackbar";
import { useContext, useCallback } from "react";
import { uuid } from "core/utils";

interface AddToastParameters {
  message: string;
  severity?: AlertColor;
  position?: AnchorOriginMapKey;
}

export type AnchorOriginMapKey = `${"top" | "bottom"}-${
  | "left"
  | "center"
  | "right"}`;

const anchorOriginMap: {
  [K in AnchorOriginMapKey]: SnackbarOrigin;
} = {
  "top-left": { vertical: "top", horizontal: "center" },
  "top-center": { vertical: "top", horizontal: "center" },
  "top-right": { vertical: "top", horizontal: "right" },
  "bottom-left": { vertical: "bottom", horizontal: "left" },
  "bottom-center": { vertical: "bottom", horizontal: "center" },
  "bottom-right": { vertical: "bottom", horizontal: "right" },
};

/**
 * A hook that provides a function to add toasts to the toast context.
 * @returns An object containing a function to add toasts to the toast context.
 * @example
 * ```ts
 * const { successToast } = useToaster();
 * successToast("This is a success toast");
 * ```
 */
export function useToaster() {
  const { setToasts } = useContext(ToastContext);

  const toast = useCallback(
    ({ message, severity, position = "bottom-center" }: AddToastParameters) => {
      const id = uuid();
      const currentToast = {
        id,
        message,
        severity,
        anchorOrigin: anchorOriginMap[position],
      };
      setToasts((allToasts) => {
        const newToasts = allToasts.length
          ? [...allToasts, currentToast]
          : [{ ...currentToast, open: true }];
        return newToasts;
      });
    },
    [setToasts]
  );

  const errorToast = useCallback(
    (message: string, position?: AnchorOriginMapKey) => {
      toast({ message, severity: "error", position });
    },
    [toast]
  );

  const successToast = useCallback(
    (message: string, position?: AnchorOriginMapKey) => {
      toast({ message, severity: "success", position });
    },
    [toast]
  );

  return {
    toast,
    errorToast,
    successToast,
  };
}

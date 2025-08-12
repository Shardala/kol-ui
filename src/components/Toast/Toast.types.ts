
export interface ToastProps {
  id?: number;
  type: ToastType;
  icon?: string;
  message?: string;
  onClose: () => void;
}

export type ToastType = 'Success' | 'Warning' | 'Error' | 'Info' | 'Custom';
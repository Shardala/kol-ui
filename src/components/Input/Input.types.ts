import { ChangeEventHandler } from "react";

export interface InputProps {
  id?: string;
  label?: string;
  error?: boolean;
  primary?: boolean;
  message?: string;
  success?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
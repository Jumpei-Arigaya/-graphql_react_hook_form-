import React from "react";
import { UseFormRegister } from "react-hook-form";
import { IFormValues } from "./HookForm4";

// React.forwardRefでrefオブジェクトを渡すこともできる
export const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <label>
    {label}
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </label>
));

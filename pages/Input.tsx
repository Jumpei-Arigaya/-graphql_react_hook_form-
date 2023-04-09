import { Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "./hook_form4";

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};
// <input>要素を含んだ子コンポーネント
export const Input = ({ label, register, required }: InputProps) => (
  <label>
    {label}
    <input {...register(label, { required })} />
  </label>
);

import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "./HookForm7mui";

export const InputMui = (props: UseControllerProps<FormValues>) => {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
    </div>
  );
};

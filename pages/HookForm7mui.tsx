import React from "react";
import { useForm } from "react-hook-form";
import { InputMui } from "./InputMui";

export type FormValues = {
  FirstName: string;
};

const HookForm7mui = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      FirstName: "test",
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputMui control={control} name="FirstName" rules={{ required: true }} />
      <input type="submit" />
    </form>
  );
};

export default HookForm7mui;

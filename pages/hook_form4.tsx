import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "./Input";
import { Select } from "./Select";

export interface IFormValues {
  "First Name": string;
  Age: number;
}

const hook_form4 = () => {
  const { register, handleSubmit } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
      <Select label="Age" {...register("Age")} />
      <input type="submit" />
    </form>
  );
};

export default hook_form4;

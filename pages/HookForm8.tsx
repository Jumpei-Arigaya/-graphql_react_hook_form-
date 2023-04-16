import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  firstName: string;
  lastName: string;
}

const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

const HookForm8 = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      {errors.firstName && "FirstName is required."}
      <input {...register("lastName", { required: true })} />
      {errors.firstName && "LastName is required."}
      <input type="submit" />
    </form>
  );
};

export default HookForm8;

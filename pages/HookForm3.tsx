import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: String;
  lastName: string;
  age: number;
}

const hookForm3 = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        FirstName
        <input {...register("firstName", { required: true, maxLength: 20 })} />
      </label>
      <label>
        FirstName
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      </label>
      <label>
        age
        <input type="number" {...register("firstName", { min: 20, max: 99 })} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default hookForm3;

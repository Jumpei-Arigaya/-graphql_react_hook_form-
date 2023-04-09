import { useForm, SubmitHandler } from "react-hook-form";
const hook_form2 = () => {
  enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
  }
  interface IFormInput {
    firstName: String;
    gender: GenderEnum;
  }

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name
        <input {...register("firstName")} />
      </label>
      <label>
        Gender Selection
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </label>
      <input type="submit" />
      <div>
        <div>Enter</div>
      </div>
    </form>
  );
};

export default hook_form2;

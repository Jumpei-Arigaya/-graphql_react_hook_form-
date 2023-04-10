import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button, Input } from "@mui/material";
import Select from "react-select";

export type IFormInput = {
  firstName: string;
  iceCreamType: { label: string; value: string };
};

const HookForm5Mui = () => {
  const { control, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} />}
        />
      </label>
      <label>
        Ice Cream Preference
        <Controller
          name="iceCreamType"
          control={control}
          render={({ field }) => (
            <Select
              instanceId="selectbox"
              {...field}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
              onChange={(option: any) => field.onChange(option?.value)}
            />
          )}
        />
      </label>
      <Button type="submit">送信</Button>
    </form>
  );
};

export default HookForm5Mui;

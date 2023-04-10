import React from "react";
import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button, Checkbox, Input, TextField } from "@mui/material";

export type IFormInput = {
  TextField: string;
  MyCheckbox: boolean;
};

const defaultValues = {
  TextField: "",
  MyCheckbox: false,
};

const HookForm6mui = () => {
  const { handleSubmit, control } = useForm<IFormInput>({ defaultValues });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  console.log(123);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        MUI TextField
        <Controller
          render={({ field }) => <TextField {...field} />}
          name="TextField"
          control={control}
        />
      </label>
      <label>
        MUI Checkbox
        <Controller
          name="MyCheckbox"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Checkbox {...field} />}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default HookForm6mui;

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import form from "../modules/form.module.css";
import button from "../modules/Button.module.css";
import style from "../modules/FormPage.module.css"
import * as yup from "yup";

const Step1 = ({formData, setFormData}) => {
  const schema = yup.object().shape({
    about: yup
      .string()
      .max(200)
      .matches(/^[a-zA-Z0-9]+$/, "Only letters and numbers are allowed")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <div className={style.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={form.container}>
            <p>Textarea</p>
            <textarea className={form.textarea} id="field-about" {...register("about")} placeholder="Placeholder" rows="4"></textarea>
            <p>{errors.about?.message}</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step1;

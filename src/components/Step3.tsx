import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import form from "../modules/form.module.css";
import button from "../modules/Button.module.css";
import style from "../modules/FormPage.module.css"
import * as yup from "yup";

const Step1 = () => {
  const schema = yup.object().shape({
    nickname: yup
      .string()
      .max(30)
      .matches(/^[a-zA-Z0-9]+$/, "Only letters and numbers are allowed")
      .required(),
    name: yup
      .string()
      .max(50)
      .matches(/^[a-zA-Z]+$/, "Only alphabetic characters are allowed")
      .required(),
    sername: yup
      .string()
      .max(50)
      .matches(/^[a-zA-Z]+$/, "Only alphabetic characters are allowed")
      .required(),
    sex: yup.string().oneOf(["man", "woman"]).required(),
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
            <textarea style={{border: '1px solid #000'}} name="" id="" cols="100" rows="10"></textarea>
            <p>{errors.nickname?.message}</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step1;

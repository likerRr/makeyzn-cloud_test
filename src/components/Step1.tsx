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
            <p>Nickname</p>
            <input
              type="text"
              placeholder="Placeholder"
              {...register("nickname")}
              className={form.input}
            />
            <p>{errors.nickname?.message}</p>
            <p>Name</p>
            <input
              type="text"
              placeholder="Placeholder"
              {...register("name")}
              className={form.input}
            />
            <p>{errors.name?.message}</p>
            <p>Sername</p>
            <input
              type="text"
              placeholder="Placeholder"
              {...register("sername")}
              className={form.input}
            />
            <p>{errors.sername?.message}</p>
            <p>Sex</p>
            {/* Стилизовать option */}
            <select {...register("sex")} className={form.input}>
              <option value="" disabled selected hidden>
                Не выбрано
              </option>
              <option value="man" className={form.option}>
                man
              </option>
              <option value="woman" style={{ padding: "12px" }}>
                woman
              </option>
            </select>
            <p>{errors.sex?.message}</p>
          </div>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Step1;

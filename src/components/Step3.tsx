import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import form from "../modules/form.module.css";
import button from "../modules/Button.module.css";
import style from "../modules/FormPage.module.css";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addAbout } from "../features/Advantages/Data-slice";

export type AboutValues = {
  about: string;
};

const Step1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.data);

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
    defaultValues: data,
  });

  function goBack() {
    navigate("/create/step2");
  }

  const onSubmit = (data: AboutValues) => {
    dispatch(addAbout(data));
  };

  return (
    <>
      <div className={style.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={form.container}>
            <p>Textarea</p>
            <textarea
              className={form.textarea}
              id="field-about"
              {...register("about")}
              placeholder="Placeholder"
              rows="4"
            ></textarea>
            <p>{errors.about?.message}</p>
          </div>
          <div className="footer">
            <button
              id="button-back"
              className={button.buttonBack}
              onClick={goBack}
            >
              Назад
            </button>
            <button
              id="button-next"
              className={button.buttonNext}
              type="submit"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step1;

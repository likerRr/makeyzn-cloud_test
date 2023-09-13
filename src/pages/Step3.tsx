import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import form from "../modules/form.module.css";
import button from "../modules/Button.module.css";
import style from "../modules/FormPage.module.css";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { addAbout } from "../features/SendDataSlice";
import CustomizedSteppers from "../components/Stepper";

import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import ModalWindow from "../components/ModalWindow";
import { Button } from "../components/Button";
import { sendData } from "../features/SendDataAction";

export type AboutValues = {
  about: string;
};

const Step1 = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const data = useAppSelector((state) => state.data);

  const [symbols, setSymbols] = useState("");

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

  function symbolCounter(e: any) {
    const newSymbols = e.target.value;
    setSymbols(newSymbols);
  }

  return (
    <>
      <div className={style.container}>
        <CustomizedSteppers activeStep={2} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={form.container}>
            <p>Textarea</p>
            <textarea
              className={form.textarea}
              id="field-about"
              {...register("about")}
              placeholder="Placeholder"
              rows={4}
              onChange={symbolCounter}
            ></textarea>
            <p>{symbols.length}</p>
            <p>{errors.about?.message}</p>
          </div>
          <div className={button.container}>
            <Button
              id="button-back"
              className={button.buttonBack}
              onClick={goBack}
            >
              Назад
            </Button>
            <Button
              id="button-next"
              className={button.buttonNext}
              type="submit"
              onClick={() => dispatch(sendData())}
            >
              Отправить
            </Button>
          </div>
        </form>
        <ModalWindow />
      </div>
    </>
  );
};

export default Step1;

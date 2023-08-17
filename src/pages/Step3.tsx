import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import form from "../modules/form.module.css";
import button from "../modules/Button.module.css";
import style from "../modules/FormPage.module.css";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { RootState, addAbout, closeModal, sendData } from "../features/Data-slice";
import CustomizedSteppers from "../components/Stepper";
import Modal from "../components/UI/Modal/Modal";
import modal from "../modules/Modal.module.css";
import AcceptIcon from "../components/UI/Icons/AcceptIcon";
import CancelIcon from "../components/UI/Icons/CancelIcon";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

export type AboutValues = {
  about: string;
};

const Step1 = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const data = useAppSelector((state) => state.data);
  const status = useAppSelector((state) => state.data.status);

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

  function goMain() {
    navigate("/");
  }

  const onSubmit = (data: AboutValues) => {
    dispatch(addAbout(data));
  };

  function symbolCounter(e: any) {
    const newSymbols = e.target.value;
    setSymbols(newSymbols);
  }

  function closeModalClickHandler() {
    dispatch(closeModal());
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
              onClick={() => dispatch(sendData())}
            >
              Отправить
            </button>
          </div>
        </form>
        {status === "fulfilled" && (
          <Modal
            renderHeader={() => <p>Форма успешно отправлена</p>}
            renderMainContent={() => AcceptIcon()}
            renderFooter={() => (
              <button className={button.buttonNext} onClick={goMain}>
                На главную
              </button>
            )}
          />
        )}
        {status === "rejected" && (
          <Modal
            renderHeader={() => (
              <div className={modal.headerContainer}>
                <p>Ошибка</p>
                <button
                  onClick={closeModalClickHandler}
                  className={modal.close}
                ></button>
              </div>
            )}
            renderMainContent={() => CancelIcon()}
            renderFooter={() => (
              <button
                onClick={closeModalClickHandler}
                className={button.buttonNext}
              >
                Закрыть
              </button>
            )}
          />
        )}
      </div>
    </>
  );
};

export default Step1;

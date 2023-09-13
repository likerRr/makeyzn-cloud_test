import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import form from "../modules/form.module.css";
import button from "../modules/Button.module.css";
import style from "../modules/FormPage.module.css";
import * as yup from "yup";
import { addInfo } from "../features/SendDataSlice";
import CustomizedSteppers from "../components/Stepper";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Button } from "../components/Button";

export type InfoValues = {
  nickname: string;
  name: string;
  surname: string;
  sex: string;
};

const Step1 = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const data = useAppSelector((state) => state.data);
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
    surname: yup
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
    defaultValues: data,
  });

  function goBack() {
    navigate("/");
  }

  const onSubmit = (data: InfoValues) => {
    dispatch(addInfo(data));
    navigate("/create/step2");
  };

  return (
    <>
      <div className={style.container}>
        <CustomizedSteppers activeStep={0} />
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
              {...register("surname")}
              className={form.input}
            />
            <p>{errors.surname?.message}</p>
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
            >
              Далее
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step1;

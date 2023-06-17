import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import form from "../modules/form.module.css";
import style from "../modules/FormPage.module.css";
import * as yup from "yup";
import button from "../modules/Button.module.css";

const Step1 = () => {
  const schema = yup.object().shape({
    advantages: yup.string().required(),
    checkbox: yup.string().oneOf(["man", "woman"]).required(),
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

  const [advantages, setAdvantages] = useState([{ id: 1 }]);

  const addAdvantages = () => {
    setAdvantages([...advantages, { id: advantages.length + 1 }]);
    console.log(advantages);
  };

  const removeAdvantages = (id) => {
    setAdvantages(advantages.filter((advantage) => advantage.id !== id));
  };

  return (
    <>
      <div className={style.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={form.inputAdv}>
            <p>Advantages</p>
            {advantages.map((adv) => (
              <div>
                <input
                  type="text"
                  placeholder="Placeholder"
                  {...register("advantages")}
                  className={form.input}
                  id={`field-advantages-${adv.id}`}
                />
                <button
                  className={button.delete}
                  id={`button-remove-${adv.id}`}
                  onClick={() => removeAdvantages(adv.id)}
                ></button>
              </div>
            ))}
            <p>{errors.nickname?.message}</p>
            <button className={button.buttonBack} onClick={addAdvantages}>
              +
            </button>
          </div>
          <div className={form.checkbox}>
            <p>Checkbox group</p>
            <div>
              <input
                type="checkbox"
                placeholder="Placeholder"
                {...register("checkbox")}
              />
              <label>1</label>
            </div>
            <div>
              <input
                type="checkbox"
                placeholder="Placeholder"
                {...register("checkbox")}
              />
              <label>2</label>
            </div>
            <div>
              <input
                type="checkbox"
                placeholder="Placeholder"
                {...register("checkbox")}
              />
              <label>3</label>
            </div>
          </div>
          <div className={form.checkbox}>
            <p>Radio group</p>
            <div>
              <input
                type="radio"
                placeholder="Placeholder"
                {...register("checkbox")}
              />
              <label>1</label>
            </div>
            <div>
              <input
                type="radio"
                placeholder="Placeholder"
                {...register("checkbox")}
              />
              <label>2</label>
            </div>
            <div>
              <input
                type="radio"
                placeholder="Placeholder"
                {...register("checkbox")}
              />
              <label>3</label>
            </div>
          </div>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Step1;

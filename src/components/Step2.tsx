import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import form from "../modules/form.module.css";
import style from "../modules/FormPage.module.css";
import * as yup from "yup";
import button from "../modules/Button.module.css";

type FormValues = {
  advantages: string[];
  advntgs: {
    advntg: string;
  }[];
};

const Step1 = () => {
  const schema = yup.object().shape({
    advntgs: yup.array(yup.object().shape({
      advntg: yup.string().required()
    })).required()
    // checkbox: yup.array().required(),
    // radio: yup.string().oneOf(["1", "2", "3"]).required(),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      advantages: ["", ""],
      advntgs: [{ advntg: "" }, { advntg: "" }, { advntg: "" },],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "advntgs",
    control,
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <div className={style.container}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className={form.inputAdv}>
            <p>Advantages</p>
            <div>
              {fields.map((field, index) => {
                return (
                  <div key={field.id}>
                    <input
                      type="text"
                      placeholder="Placeholder"
                      className={form.input}
                      {...register(`advntgs.${index}.advntg` as const)}
                    />
                    <button
                      className={button.delete}
                      type="button"
                      onClick={() => remove(index)}
                    ></button>
                  </div>
                );
              })}
            </div>
            <p>{errors.advntgs?.message}</p>
            <button
              className={button.buttonBack}
              type="button"
              onClick={() => append({ advntg: "" })}
            >
              +
            </button>
            <input type="submit" />
          </div>
          {/* <div className={form.checkbox}>
            <p>Checkbox group</p>
            <div>
              <input
                type="checkbox"
                value="1"
                id="field-checkbox-group-option-1"
                placeholder="Placeholder"
                {...register("checkbox")}
              />
              <label>1</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="field-checkbox-group-option-2"
                value="2"
                placeholder="Placeholder"
                {...register("checkbox")}
              />
              <label>2</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="field-checkbox-group-option-3"
                value="3"
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
                id="field-radio-group-option-1"
                // value="1"
                placeholder="Placeholder"
                {...register("radio")}
                value={formData.radio}
                onChange={(e) => setFormData({...formData, radio: e.target.value})}
              />
              <label>1</label>
            </div>
            <div>
              <input
                type="radio"
                id="field-radio-group-option-2"
                value="2"
                placeholder="Placeholder"
                {...register("radio")}
                value={formData.radio}
                onChange={(e) => setFormData({...formData, radio: e.target.value})}
              />
              <label>2</label>
            </div>
            <div>
              <input
                type="radio"
                id="field-radio-group-option-3"
                value="3"
                placeholder="Placeholder"
                {...register("radio")}
              />
              <label>3</label>
            </div> */}
          {/* </div> */}
        </form>
      </div>
    </>
  );
};

export default Step1;

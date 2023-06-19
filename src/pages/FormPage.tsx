import React, { useState } from "react";
import form from "../modules/FormPage.module.css";
import button from "../modules/Button.module.css";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";

const FormPage = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    nickname: "",
    name: "",
    sername: "",
    sex: "",
    advantages: "",
    checkbox: "",
    radio: "",
    textarea: "",
  })


  const PageDisplay = () => {
    if (page === 1) {
      return <Step1 formData={formData} setFormData={setFormData}/>;
    } else if (page === 2) {
      return <Step2/>;
    } else {
      return <Step3 formData={formData} setFormData={setFormData}/>;
    }
  };

  return (
    <div className={form.container}>
      <div className="progressbar"></div>
      <div className="form-container">
        <div className="body">
          {PageDisplay()}
        </div>
        <div className="footer">
          <button
            disabled={page == 1}
            id="button-back"
            className={button.buttonBack}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Назад
          </button>
          <button
            id="button-next"
            className={button.buttonNext}
            type="submit"
            onClick={() => {
              if (page === 3) {
                console.log(formData)
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === 3 ? "Отправить" : "Далее"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPage;

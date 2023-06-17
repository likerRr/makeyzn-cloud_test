import React, { useState } from "react";
import form from "../modules/FormPage.module.css";
import button from "../modules/Button.module.css";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";

const FormPage = () => {
  const [page, setPage] = useState(1);

  const PageDisplay = () => {
    if (page === 1) {
      return <Step1 />;
    } else if (page === 2) {
      return <Step2 />;
    } else {
      return <Step3 />;
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
            disabled={page == 3}
            id="button-next"
            className={button.buttonNext}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPage;

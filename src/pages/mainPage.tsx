import "../App.css";
import { useNavigate } from "react-router-dom";
import FolderIcon from "@mui/icons-material/Folder";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import style from "../modules/mainPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addMain } from "../features/Advantages/Data-slice";

export type MainValues = {
  phone: string;
  email: string;
}

const mainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.data);
  const phoneRegExp = /^[0-9]{10}$/;

  const schema = yup.object().shape({
    phone: yup
      .string()
      .required()
      .matches(phoneRegExp, "Phone number is not valid"),
    email: yup.string().email().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: data
  });


  const onSubmit = (data: MainValues) => {
    console.log(data);
    dispatch(addMain(data));
    navigate("/create/step1");
  };
  
  return (
    <>
      {/* Семантика? */}
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.main__logo}>ДИ</div>
          <div className={style.main__contacts}>
            <h3>Иван Иванов</h3>
            <ul className={style.main__contacts_links}>
              {/* Убрать HARDCODE STYLE */}
              {/* Рассмотреть вариант замены 'li' n 'a' */}
              <li>
                <FolderIcon style={{ color: "#CCCCCC", marginRight: "5px" }} />
                <a href="#">Telegram</a>
              </li>
              <li>
                <FolderIcon style={{ color: "#CCCCCC", marginRight: "5px" }} />
                <a href="#">GitHub</a>
              </li>
              <li>
                <FolderIcon style={{ color: "#CCCCCC", marginRight: "5px" }} />
                <a href="#">Resume</a>
              </li>
            </ul>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <div className={style.form__container}>
            <p>Номер телефона</p>
            <input
              type="tel"
              placeholder="+7 999"
              {...register("phone")}
              className={style.form__input}
            />
            <p>{errors.phone?.message}</p>
            <p>Email</p>
            <input
              type="text"
              placeholder="tntmr774@gmail.com"
              {...register("email")}
              className={style.form__input}
            />
            <p>{errors.email?.message}</p>
          </div>
          <button id="button-start" className="buttonNext" type="submit" >
            Начать
          </button>
        </form>
      </div>
    </>
  );
};

export default mainPage;

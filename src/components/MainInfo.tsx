import FolderIcon from "@mui/icons-material/Folder";
import style from "../modules/mainPage.module.css";

const MainInfo = () => {
  return (
    <div className={style.main}>
      <div className={style.main__logo}>ВК</div>
      <div className={style.main__contacts}>
        <h3>Владимир Конаков</h3>
        <ul className={style.main__contacts_links}>
          {/* Убрать HARDCODE STYLE */}
          {/* Рассмотреть вариант замены 'li' n 'a' */}
          <li>
            <FolderIcon style={{ color: "#CCCCCC", marginRight: "5px" }} />
            <a href="https://t.me/makeyzn">Telegram</a>
          </li>
          <li>
            <FolderIcon style={{ color: "#CCCCCC", marginRight: "5px" }} />
            <a href="https://github.com/makeyzn">GitHub</a>
          </li>
          <li>
            <FolderIcon style={{ color: "#CCCCCC", marginRight: "5px" }} />
            <a href="#">Resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainInfo;

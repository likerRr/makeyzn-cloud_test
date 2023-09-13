import ReactDOM from "react-dom";
import modal from "../modules/Modal.module.css";
import { useAppSelector } from "../hooks/hooks";

const root = document.createElement("div");
root.classList.add("portal");
root.id = "portal";
document.body.append(root);

export default function Modal({
  renderHeader,
  renderFooter,
  renderMainContent,
}: any) {
  const portal = document.getElementById("portal");
  const isOpen = useAppSelector((state) => state.data.isOpen);
  console.log(isOpen);
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div className={modal.overlay}></div>
      <div className={modal.container}>
        <header className={modal.header}>{renderHeader?.()}</header>
        <main>{renderMainContent?.()}</main>
        <footer className={modal.footer}>{renderFooter?.()}</footer>
      </div>
    </>,
    document.getElementById("portal")
  );
}

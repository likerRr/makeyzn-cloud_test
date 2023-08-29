import cx from "classnames";

interface ButtonProps {
  children?: string;
  className: string;
  id?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  children,
  className,
  id,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <button className={cx(className)} id={id} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

import { ReactNode } from "react";

interface props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: props) => {
  return (
    <div
      className="alert alert-primary alert-dismissible"
      onClick={() => {
        console.log("clicked");
      }}
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;

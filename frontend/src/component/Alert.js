import { useAppContext } from "../context/appContext";

const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <div
      data-testid="alert-bar"
      className={`alert alert-${alertType}`}
      id="successFail"
    >
      {alertText}
    </div>
  );
};

export default Alert;

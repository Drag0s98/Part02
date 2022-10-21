import "../styles/notification.css";

const Notification = ({ errorMessage, message }) => {
  if (message === null && errorMessage === null) {
    return null;
  }

  return (
    <div className={errorMessage ? "errorMessage" : "message"}>
      {errorMessage ? errorMessage : message}
    </div>
  );
};

export default Notification;

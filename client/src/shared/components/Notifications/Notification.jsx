import { useCallback, useEffect, useState } from "react";

import classes from "./Notifications.module.scss";
import { notificationTypes } from "../../enums";
import { useDispatch } from "react-redux";
import { deleteNotification } from "../../../redux/Actions";

const notificationStyles = {
  [notificationTypes.success]: classes.notification_success,
  [notificationTypes.warning]: classes.notification_warn,
  [notificationTypes.error]: classes.notification_error,
};

const Notification = ({ notification }) => {
  const [shouldBeDeleted, setShouldBeDeleted] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    setShouldBeDeleted(true);
    setTimeout(() => {
      dispatch(deleteNotification(notification.id));
    }, 500);
  }, [notification.id, dispatch]);

  useEffect(() => {
    setTimeout(() => {
      handleDelete();
    }, 6000);
  }, [notification.id, handleDelete]);

  return (
    <div
      className={`${classes.notification} ${
        notificationStyles[notification.type]
      } ${shouldBeDeleted ? classes.notification_disappearing : ""}`}
    >
      {notification.text}{" "}
      <span className={classes.notification__delete} onClick={handleDelete}>
        +
      </span>
    </div>
  );
};

export default Notification;

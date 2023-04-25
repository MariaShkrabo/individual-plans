import { useSelector } from "react-redux";

import { getNotifications } from "../../../redux/Selectors";
import Notification from "./Notification";
import classes from "./Notifications.module.scss";

const Notifications = () => {
  const notifications = useSelector(getNotifications);

  return (
    <div className={classes.notifications}>
      {notifications.map((notification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default Notifications;

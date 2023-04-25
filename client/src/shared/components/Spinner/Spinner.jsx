import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

import { getSpinnerVisibility } from "../../../redux/Selectors";

const Spinner = () => {
  const spinnerVisibility = useSelector(getSpinnerVisibility);

  return (
    <Backdrop sx={{ color: "#fff", zIndex: 99999999 }} open={spinnerVisibility}>
      {spinnerVisibility && (
        <CircularProgress
          sx={{ color: "#00573b" }}
          size={200}
          color="inherit"
        />
      )}
    </Backdrop>
  );
};

export default Spinner;

import { Controller } from "react-hook-form";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField } from "@mui/material";
import ru from "date-fns/locale/ru";

const DateField = ({ placeholder, control, rules, error, name }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
          <DatePicker
            label={placeholder}
            renderInput={() => (
              <TextField
                value={value || ""}
                error={!!error}
                onChange={onChange}
              />
            )}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default DateField;

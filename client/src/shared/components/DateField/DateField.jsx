import { Controller } from "react-hook-form";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField } from "@mui/material";
import ru from "date-fns/locale/ru";

const DateField = ({
  placeholder,
  control,
  rules,
  error,
  name,
  openTo,
  views,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { ref, onBlur, name, value, ...field },
        fieldState,
      }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
          <DatePicker
            openTo={openTo}
            views={views}
            {...field}
            inputRef={ref}
            label={placeholder}
            value={value || ""}
            renderInput={(inputProps) => (
              <TextField
                {...inputProps}
                onBlur={onBlur}
                name={name}
                error={!!error}
                helperText={error?.message}
                value={value || ""}
              />
            )}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default DateField;

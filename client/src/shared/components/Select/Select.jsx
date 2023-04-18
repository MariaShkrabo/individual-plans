import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller } from "react-hook-form";

import { colors } from "../../enums";

const CustomSelect = ({
  placeholder,
  options,
  name,
  control,
  rules,
  error,
  disabled,
}) => {
  return (
    <FormControl fullWidth error={!!error} disabled={disabled}>
      <InputLabel color={colors.form}>{placeholder}</InputLabel>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value, onBlur } }) => (
          <Select
            color={colors.form}
            label={placeholder}
            value={value || ""}
            onChange={onChange}
            onBlur={onBlur}
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      <FormHelperText sx={{ position: "absolute", top: "100%" }}>
        {error?.message}
      </FormHelperText>
    </FormControl>
  );
};

export default CustomSelect;

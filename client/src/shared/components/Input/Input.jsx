import { useState } from "react";

import { IconButton, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Controller } from "react-hook-form";

import classes from "./input.module.scss";
import { colors, inputTypes } from "../../enums";

const Input = ({
  placeholder,
  isPassword,
  control,
  rules,
  error,
  name,
  disabled,
  type,
  changingValue = "",
  multiline,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToggleShowPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const getInputType = () => {
    if (!isPassword || (isPassword && isPasswordVisible)) {
      return inputTypes.text;
    }
    return inputTypes.password;
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value, onBlur } }) => (
        <div className={classes.input}>
          <TextField
            inputProps={isPassword ? { sx: { paddingRight: "70px" } } : {}}
            color={colors.primary}
            placeholder={placeholder}
            fullWidth
            label={placeholder}
            variant="outlined"
            type={type ? type : getInputType()}
            onChange={onChange}
            onBlur={onBlur}
            value={value ?? changingValue}
            error={!!error}
            helperText={error?.message}
            disabled={disabled}
            multiline={multiline}
          />
          {isPassword && (
            <div className={classes["input__show-password"]}>
              <IconButton
                tabIndex={-1}
                onClick={handleToggleShowPassword}
                color="primary"
              >
                <VisibilityIcon />
              </IconButton>
            </div>
          )}
        </div>
      )}
    />
  );
};

export default Input;

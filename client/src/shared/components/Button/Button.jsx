import Button from '@mui/material/Button';

import { buttonThemes } from '../../enums';
import classes from './button.module.scss';

const buttonClasses = {
  [buttonThemes.form]: classes.button_form,
  [buttonThemes.small]: classes.button_small,
  [buttonThemes.medium]: classes.button_medium,
  [buttonThemes.large]: classes.button_large
};

const CustomButton = ({onClick, theme, type, color, children, ...rest}) => {
  return <Button
    onClick={onClick}
    className={`${classes.button} ${buttonClasses[theme]}`}
    variant='contained'
    color={color}
    type={type}
    {...rest}
  >{children}</Button>
}

export default CustomButton;

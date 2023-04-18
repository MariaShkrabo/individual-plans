import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    form: {
      main: "#008a5e",
      contrastText: "#fff",
    },
    primary: {
      main: "#008a5e",
      contrastText: "#fff",
    },
    secondary: {
      main: "#C4A267",
      contrastText: "#fff",
    },
    success: {
      main: "#26b9e2",
      contrastText: "#fff",
    },
    error: {
      main: "#a83052",
      contrastText: "#fff",
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "20px",
          textAlign: "center",
          maxWidth: "250px",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "white",
          height: "37px",
          width: "48px",
          fontSize: "30px",
          fontFamily: "Rasa",
          border: "1px solid white",
          backgroundColor: "#898199",
          margin: "0px 7px",
          "&.Mui-selected": {
            width: "69px",
            backgroundColor: "#302b3a",
            border: "2px solid white",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontSize: "36px",
          fontWeight: "300",
        },
        root: {
          color: "white",
          fontSize: "28px",
          textAlign: "center",
          borderColor: "black",
          borderRight: "1px solid black",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          overflowX: "visible",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: "hsla(38, 44%, 59%, 0.7)",
          borderRadius: "8px",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: "1200px",
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          fontFamily: "Rasa !important",
          fontSize: "42px !important",
          color: "black",
          textAlign: "center",
        },
      },
    },
    MuiMenuItem: {
      defaultProps: {
        sx: {
          fontSize: "27px",
          height: "80px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          height: "70px",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        sx: {
          fontSize: "25px",
        },
      },
    },
    MuiFormControlLabel: {
      defaultProps: {
        sx: {
          color: "black",
        },
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        sx: {
          fontSize: "43px",
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        sx: {
          fontSize: "22px",
          top: "5px",
        },
      },
      styleOverrides: {
        shrink: {
          top: "-5px !important",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        sx: {
          fontSize: "22px",
          width: "100%",
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        sx: {
          fontSize: "22px",
        },
      },
      styleOverrides: {
        notchedOutline: {
          borderColor: "black",
        },
        input: {
          height: "70px",
          boxSizing: "border-box",
        },
      },
    },
  },
});

const MaterialThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MaterialThemeProvider;

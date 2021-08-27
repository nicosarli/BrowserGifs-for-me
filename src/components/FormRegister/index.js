import React, { useReducer, useState } from "react";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  Checkbox,
  FormControlLabel,
  Button,
  // FormHelperText,
  // Grid,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { IconButton } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import includesNumbers from "../../services/includesNumbers";
import includesLetters from "../../services/includesLetters";
import { Helmet } from "react-helmet";

const initialStateErrors = {
  accountError: [false, ""],
  passwordError: [false, ""],
  countryError: [false, ""],
  phoneError: [false, ""],
  nameError: [false, ""],
  lastNameError: [false, ""],
  emailError: [false, ""],
  submit: [false],
};

const ACTIONSOFERRORS = {
  UPDATE_ACCOUNT_ERROR: "update_account_error",
  UPDATE_PASSWORD_ERROR: "update_password_error",
  UPDATE_COUNTRY_ERROR: "update_country_error",
  UPDATE_PHONE_ERROR: "update_phone_error",
  UPDATE_NAME_ERROR: "update_name_error",
  UPDATE_LASTNAME_ERROR: "update_lastname_error",
  UPDATE_EMAIL_ERROR: "update_email_error",
  UPDATE_CHECKBOX_ERROR: "update_checkbox_error",
  RESET_ERRORS: "reset_errors",
};

const initialState = {
  account: "",
  password: "",
  country: "",
  phone: "",
  name: "",
  lastName: "",
  email: "",
  reciveInformation: false,
};

const ACTIONS = {
  UPDATE_ACCOUNT: "update_account",
  UPDATE_PASSWORD: "update_password",
  UPDATE_COUNTRY: "update_country",
  UPDATE_PHONE: "update_phone",
  UPDATE_NAME: "update_name",
  UPDATE_LASTNAME: "update_lastname",
  UPDATE_EMAIL: "update_email",
  UPDATE_CHECKBOX: "update_checkbox",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_ACCOUNT:
      return {
        ...state,
        account: action.payload,
      };

    case ACTIONS.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    case ACTIONS.UPDATE_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };

    case ACTIONS.UPDATE_PHONE:
      return {
        ...state,
        phone: action.payload,
      };

    case ACTIONS.UPDATE_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case ACTIONS.UPDATE_LASTNAME:
      return {
        ...state,
        lastName: action.payload,
      };

    case ACTIONS.UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case ACTIONS.UPDATE_CHECKBOX:
      return {
        ...state,
        checkbox: action.payload,
      };

    default:
      return new Error("Error in the form");
  }
};

const reducerErrors = (stateErrors, action) => {
  switch (action.type) {
    case ACTIONSOFERRORS.UPDATE_ACCOUNT_ERROR:
      return {
        ...stateErrors,
        accountError: action.payload,
      };

    case ACTIONSOFERRORS.UPDATE_PASSWORD_ERROR:
      return {
        ...stateErrors,
        passwordError: action.payload,
      };

    case ACTIONSOFERRORS.UPDATE_COUNTRY_ERROR:
      return {
        ...stateErrors,
        countryError: action.payload,
      };

    case ACTIONSOFERRORS.UPDATE_EMAIL_ERROR:
      return {
        ...stateErrors,
        emailError: action.payload,
      };

    case ACTIONSOFERRORS.UPDATE_LASTNAME_ERROR:
      return {
        ...stateErrors,
        lastNameError: action.payload,
      };

    case ACTIONSOFERRORS.UPDATE_PHONE_ERROR:
      return {
        ...stateErrors,
        phoneError: action.payload,
      };

    case ACTIONSOFERRORS.UPDATE_CHECKBOX_ERROR:
      return {
        ...stateErrors,
        check: action.payload,
      };

    case ACTIONSOFERRORS.RESET_ERRORS:
      return {
        ...stateErrors,
        stateErrors: initialStateErrors,
      };

    default:
      return stateErrors;
  }
};

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "20px 0",
    "& .MuiFormControl-root": {
      margin: "10px",
    },
  },
  contentPassword: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
  },
  textFieldPassword: {
    width: "100%",
  },
  buttonShowPassword: {
    position: "absolute",
    right: 0,
    bottom: 0,
    top: 0,
    transform: "none",
  },
}));

const handleSubmit = () => {};

const FormRegister = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stateErrors, dispatchErrors] = useReducer(
    reducerErrors,
    initialStateErrors
  );
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeShowPassword = () => {
    setShowPassword((prevSet) => !prevSet);
  };

  // const [error, setError] = useState(false);
  // const [helperText, setHelperText] = useState("");

  const {
    account,
    password,
    country,
    phone,
    name,
    lastName,
    email,
    reciveInformation,
  } = state;

  const {
    accountError,
    passwordError,
    countryError,
    phoneError,
    nameError,
    lastNameError,
    emailError,
  } = stateErrors;

  return (
    <form autoComplete="off" className={classes.root} onSubmit={handleSubmit}>
      <Helmet>
        <title> GIPHY || Register </title>
        <meta name="description" content="Register of the page" />
      </Helmet>
      <TextField
        variant="outlined"
        label="Account"
        name="user"
        id="user"
        // value={account}
        // error={error}
        value={account}
        error={accountError[0] || false}
        helperText={accountError[1] || ""}
        onChange={(evt) => {
          const { value } = evt.target;
          dispatch({
            type: ACTIONS.UPDATE_ACCOUNT,
            payload: value,
          });

          account.includes(" ")
            ? dispatchErrors({
                type: ACTIONSOFERRORS.UPDATE_ACCOUNT_ERROR,
                payload: [true, "Username not accept spacing"],
              })
            : account.length < 8
            ? dispatchErrors({
                type: ACTIONSOFERRORS.UPDATE_ACCOUNT_ERROR,
                payload: [true, "Username requerid more of 8 digits"],
              })
            : !(includesNumbers(account) && includesLetters(account))
            ? dispatchErrors({
                type: ACTIONSOFERRORS.UPDATE_ACCOUNT_ERROR,
                payload: [true, "User is required letters and numbers"],
              })
            : dispatchErrors({
                type: ACTIONSOFERRORS.UPDATE_ACCOUNT_ERROR,
                payload: [false, ""],
              });
        }}
      />

      <div className={classes.contentPassword}>
        <TextField
          className={classes.textFieldPassword}
          variant="outlined"
          type={showPassword ? "text" : "password"}
          label="Password"
          value={password}
          error={passwordError[0]}
          helperText={passwordError[1] || ""}
          onChange={(evt) => {
            const { value } = evt.target;
            dispatch({
              type: ACTIONS.UPDATE_PASSWORD,
              payload: value,
            });
            password.includes(" ")
              ? dispatchErrors({
                  type: ACTIONSOFERRORS.UPDATE_PASSWORD_ERROR,
                  payload: [true, "Password not accept spacing"],
                })
              : password.length < 8
              ? dispatchErrors({
                  type: ACTIONSOFERRORS.UPDATE_PASSWORD_ERROR,
                  payload: [true, "Password requerid more of 8 digits"],
                })
              : dispatchErrors({
                  type: ACTIONSOFERRORS.UPDATE_PASSWORD_ERROR,
                  payload: [false, ""],
                });
          }}
        />
        <IconButton
          disableFocusRipple
          disableRipple
          className={classes.buttonShowPassword}
          onClick={handleChangeShowPassword}
        >
          {showPassword ? (
            <VisibilityOffIcon color="secondary" />
          ) : (
            <VisibilityIcon color="secondary" />
          )}
        </IconButton>
      </div>

      <TextField
        variant="outlined"
        label="Name"
        value={name}
        onChange={(evt) =>
          dispatch({ type: ACTIONS.UPDATE_NAME, payload: evt.target.value })
        }
      />
      <TextField
        variant="outlined"
        label="Last name"
        value={lastName}
        onChange={(evt) =>
          dispatch({
            type: ACTIONS.UPDATE_LASTNAME,
            payload: evt.target.value,
          })
        }
      />
      <TextField
        variant="outlined"
        label="Email"
        value={email}
        error={emailError[0] || false}
        helperText={emailError[1] || ""}
        onChange={(evt) => {
          const { value } = evt.target;
          dispatch({
            type: ACTIONS.UPDATE_EMAIL,
            payload: value,
          });
          let expr =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          // email.includes(['@' && '.'])
          //   ? dispatchErrors({
          //       type: ACTIONS.UPDATE_EMAIL_ERROR,
          //       payload: [false, ""],
          //     })
          //   : dispatchErrors({
          //       type: ACTIONS.UPDATE_EMAIL_ERROR,
          //       payload: [true, "Email not valid"],
          //     });
          email.includes(" ")
            ? dispatchErrors({
                type: ACTIONSOFERRORS.UPDATE_EMAIL_ERROR,
                payload: [true, "Email not accept spacing"],
              })
            : !expr.test(email)
            ? dispatchErrors({
                type: ACTIONSOFERRORS.UPDATE_EMAIL_ERROR,
                payload: [true, "Email not valid"],
              })
            : dispatchErrors({
                type: ACTIONSOFERRORS.UPDATE_EMAIL_ERROR,
                payload: [false, ""],
              });
        }}
      />
      <TextField
        variant="outlined"
        label="Country"
        value={country}
        onChange={(evt) =>
          dispatch({
            type: ACTIONS.UPDATE_COUNTRY,
            payload: evt.target.value,
          })
        }
      />
      <TextField
        variant="outlined"
        label="Phone"
        value={phone}
        error={phoneError[0]}
        helperText={phoneError[1]}
        onChange={(evt) => {
          const { value } = evt.target;
          dispatch({
            type: ACTIONS.UPDATE_PHONE,
            payload: value,
          });
          includesNumbers(phone) && phone.length === 9
            ? dispatchErrors({
                type: ACTIONSOFERRORS.UPDATE_PHONE_ERROR,
                payload: [false, ""],
              })
            : dispatchErrors({
                type: ACTIONSOFERRORS.UPDATE_PHONE_ERROR,
                payload: [true, "Phone not valid"],
              });
        }}
      />
      <FormControlLabel
        label="Recibed information for this page"
        control={
          <Checkbox
            value={reciveInformation}
            onChange={(evt) =>
              dispatch({
                type: ACTIONS.UPDATE_CHECKBOX,
                payload: evt.target.checked,
              })
            }
            color="secondary"
          />
        }
      />
      <FormControlLabel
        label="Accept terms and services"
        control={
          <Checkbox
            value={acceptTerms}
            onChange={() => setAcceptTerms((prevState) => !prevState)}
            color="secondary"
          />
        }
      />
      {acceptTerms ? (
        <Button disableElevation variant="contained" color="secondary">
          {" "}
          Register{" "}
        </Button>
      ) : (
        <Button disabled disableElevation variant="contained" color="secondary">
          {" "}
          Register{" "}
        </Button>
      )}
    </form>
  );
};

export default FormRegister;

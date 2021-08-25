import React, { useReducer, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, Checkbox, FormControlLabel, Button } from "@material-ui/core";

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

const useStyles = makeStyles(() => ({
  Form: {
    display: 'flex',
    flexDirection: 'column',
    margin: "20px 0",
  },
}));

const handleSubmit = () => {

}

const FormRegister = () => {
  const classes = useStyles();

  const [state, dispatch] = useReducer(reducer, initialState);
  const [acceptTerms, setAcceptTerms] = useState(false)

  const { account, password, country, phone, name, lastName, email, reciveInformation } = state;
  return (
    <form autoComplete="off" className={classes.Form} onSubmit={handleSubmit}>
    <TextField
      label='Account'ñ
      value={account}
      onChange={(evt) =>
        dispatch({ type: ACTIONS.UPDATE_ACCOUNT, payload: evt.target.value })
      }
    />
    <TextField
      label='Password'
      value={password}
      onChange={(evt) =>
        dispatch({ type: ACTIONS.UPDATE_PASSWORD, payload: evt.target.value })
      }
    />
    <TextField
      label='Name'
      value={name}
      onChange={(evt) =>
        dispatch({ type: ACTIONS.UPDATE_NAME, payload: evt.target.value })
      }
    />
    <TextField
      label='Last name'
      value={lastName}
      onChange={(evt) =>
        dispatch({
          type: ACTIONS.UPDATE_LASTNAME,
          payload: evt.target.value,
        })
      }
    />
    <TextField
      label='Email'
      value={email}
      onChange={(evt) =>
        dispatch({
          type: ACTIONS.UPDATE_EMAIL,
          payload: evt.target.value,
        })
      }
    />
    <TextField
      label='Country'
      value={country}
      onChange={(evt) =>
        dispatch({
          type: ACTIONS.UPDATE_COUNTRY,
          payload: evt.target.value,
        })
      }
    />
    <TextField
      label='Phone'
      value={phone}
      onChange={(evt) =>
        dispatch({
          type: ACTIONS.UPDATE_PHONE,
          payload: evt.target.value,
        })
      }
    />
    <FormControlLabel
      label="Recibed information for this page"
      control={
        <Checkbox
          value={reciveInformation}
          onChange={ evt => (dispatch({ type: ACTIONS.UPDATE_CHECKBOX, payload: evt.target.checked }))}
          color="secondary"
        />
      }
    />
    <FormControlLabel
      label="Accept terms and services"
      control={
        <Checkbox
          value={acceptTerms}
          onChange={ () => setAcceptTerms(prevState => !prevState)}
          color="secondary"
        />
      }
    />
    {
      acceptTerms
        ?
      <Button disableElevation variant='contained' color='secondary'> Register </Button>
        :
      <Button disabled disableElevation variant='contained' color='secondary'> Register </Button>
    }
</form>
  )
}

export default FormRegister

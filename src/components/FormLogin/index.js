import { TextField } from "@material-ui/core";
import React from "react";

const handleSubmit = () => {};

const FormLogin = () => {
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        label="email"
        // value={name}
        // onChange={(evt) =>
        //   dispatch({ type: ACTIONS.UPDATE_NAME, payload: evt.target.value })
        // }
      />
      <TextField
        label="password"
        // value={name}
        // onChange={(evt) =>
        //   dispatch({ type: ACTIONS.UPDATE_NAME, payload: evt.target.value })
        // }
      />
    </form>
  );
};

export default FormLogin;

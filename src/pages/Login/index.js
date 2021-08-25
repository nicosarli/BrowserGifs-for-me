import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import FormLogin from "../../components/FormLogin";
import FormRegister from "../../components/FormRegister";

const useStyles = makeStyles(() => ({
  Container: {
    background: "#f1f1f1f1",
    display: "flex",
    flexDirection: "column",
    margin: 'auto auto',
  },
  Fondo: {
    height: '79.9vh',
    background: '#f99',
    display: 'flex'
  }
}));

const Login = () => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.Fondo}>
        <Container maxWidth="sm" className={classes.Container}>
          <FormLogin />
        </Container>
      </div>
    </div>
  );
};

export default Login;

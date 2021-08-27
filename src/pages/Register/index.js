import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import FormRegister from "../../components/FormRegister";

const useStyles = makeStyles(() => ({
  Container: {
    background: "#f1f1f1f1",
    display: "flex",
    flexDirection: "column",
    margin: '10px auto',
  },
  Fondo: {
    height: '100%',
    background: '#f99',
    display: 'flex'
  }
}));

const Register = () => {
  const classes = useStyles();

  return (
    <div className={classes.Fondo}>
    <Container maxWidth="sm" className={classes.Container}>
      <FormRegister  />
    </Container>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import { userStyles } from "./themes/styles/login_signup_style";
import SideBanner from "./components/SideBanner";
const Login = (props) => {
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});
  const classes = userStyles();
  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="flex-start"
      alignItems="stretch"
    >
      <SideBanner />
      <Grid item xs={12} md={7}>
        <Grid container direction="column" justify="center">
          <Grid item>
            <Grid
              container
              justify="flex-end"
              alignItems="center"
              className={classes.linkSection}
            >
              <Typography color="secondary">
                Already have an account?
              </Typography>
              <Button color="primary" onClick={() => history.push("/login")}>
                Login
              </Button>
            </Grid>
          </Grid>
          <form onSubmit={handleRegister}>
            <Grid
              item
              className={`${classes.fitContent} ${classes.signupPage}`}
            >
              <Grid>
                <h3>Create an account.</h3>
                <FormControl>
                  <TextField
                    className="inputMargin"
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                    InputLabelProps={{ required: false }}
                  />
                </FormControl>
              </Grid>
              <Grid>
                <FormControl>
                  <TextField
                    className="inputMargin"
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    required
                    InputLabelProps={{ required: false }}
                  />
                </FormControl>
              </Grid>
              <Grid>
                <FormControl error={!!formErrorMessage.confirmPassword}>
                  <TextField
                    className="inputMargin"
                    aria-label="password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    required
                    InputLabelProps={{ required: false }}
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid>
                <FormControl error={!!formErrorMessage.confirmPassword}>
                  <TextField
                    className="inputMargin"
                    label="Confirm Password"
                    aria-label="confirm password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="confirmPassword"
                    required
                    InputLabelProps={{ required: false }}
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid container justify="center" alignItems="center">
                <Button
                  color="primary"
                  type="submit"
                  variant="contained"
                  size="large"
                >
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

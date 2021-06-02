import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Link,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import { userStyles } from "./themes/styles/login_signup_style";
const Login = (props) => {
  const history = useHistory();
  const { user, login } = props;
  const classes = userStyles();
  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
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
      <Grid item xs={12} md={5} className={classes.banner}>
        <Grid
          container
          className={classes.bannerText}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <img src="assets/bubble.svg" alt="" />
          <p>Converse with anyone with any language</p>
        </Grid>
      </Grid>
      <Grid item xs={12} md={7}>
        <Grid container direction="column" justify="center">
          <Grid item>
            <Grid
              container
              justify="flex-end"
              alignItems="center"
              className={classes.linkSection}
            >
              <Typography color="secondary">Don't have an account?</Typography>
              <Button color="primary" onClick={() => history.push("/register")}>
                Create account
              </Button>
            </Grid>
          </Grid>
          <form onSubmit={handleLogin}>
            <Grid item className={`${classes.fitContent} ${classes.loginPage}`}>
              <Grid>
                <h3>Welcome back!</h3>
                <FormControl margin="normal" required>
                  <TextField
                    className="inputMargin"
                    aria-label="username"
                    label="E-mail address"
                    name="username"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <FormControl margin="normal" required>
                <TextField
                  className="inputMargin"
                  label="Password"
                  aria-label="password"
                  type="password"
                  name="password"
                />
                <Link href="#" className={classes.forgotLink}>
                  Forgot?
                </Link>
              </FormControl>
              <Grid container justify="center" alignItems="center">
                <Button
                  color="primary"
                  type="submit"
                  variant="contained"
                  size="large"
                >
                  Login
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

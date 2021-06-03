import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { userStyles } from "../themes/styles/login_signup_style";

function SideBanner() {
  const classes = userStyles();
  return (
    <Grid item xs={12} md={5} className={classes.banner}>
      <Grid
        container
        className={classes.bannerText}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <img src="assets/bubble.svg" alt="" />
        <Typography>Converse with anyone with any language</Typography>
      </Grid>
    </Grid>
  );
}

export default SideBanner;

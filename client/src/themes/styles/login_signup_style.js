import { makeStyles } from "@material-ui/styles";
import Image from "../../assets/bg-img.png";
export const userStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  banner: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  bannerText: {
    height: "100%",
    background:
      "linear-gradient(rgba(58,141,255,0.85), rgba(134,185,255,0.85))",
    fontWeight: "400",
    fontSize: "26px",
    color: "#fff",
    "& p": {
      width: "269px",
      fontWeight: "400",
      textAlign: "center",
    },
    "& img": {
      [theme.breakpoints.up("md")]: {
        marginTop: "-25%",
      },
    },
  },
  linkSection: {
    "& button": {
      fontWeight: "600",
      fontSize: "14px",
      width: "140px",
      height: "54px",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
      [theme.breakpoints.down("sm")]: {
        margin: "40px auto",
      },
      [theme.breakpoints.up("md")]: {
        margin: "40px 50px 40px 20px",
      },
    },
    "& p": {
      fontWeight: "400",
      fontSize: "14px",
      [theme.breakpoints.down("sm")]: {
        margin: "20px auto",
      },
      [theme.breakpoints.up("md")]: {
        margin: "20px 20px",
      },
    },
  },
  fitContent: {
    width: "fit-content",
    "& button": {
      color: "#fff",
      "-webkit-box-shadow": "none",
      "-moz-box-shadow": "none",
      boxShadow: "none",
      marginTop: "20px",
      padding: "15px 60px",
      "& span": {
        fontWeight: "700",
      },
    },
    "& label": {
      fontSize: "14px",
    },
    "& .inputMargin": {
      marginBottom: "20px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0 10%",
      position: "absolute",
      transform: "translateY(-50%)",
      "& input": {
        width: "380px",
        marginTop: "15px",
        fontSize: "14px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      "& input": {
        width: "250px",
        marginTop: "15px",
        fontSize: "14px",
      },
    },
  },
  forgotLink: {
    position: "absolute",
    right: "0px",
    bottom: "25px",
    fontSize: "12px",
  },
  loginPage: {
    [theme.breakpoints.up("md")]: {
      top: "45%",
    },
  },
  signupPage: {
    [theme.breakpoints.up("md")]: {
      top: "53%",
    },
  },
}));

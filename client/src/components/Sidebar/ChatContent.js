import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
    position: "relative",
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  notification: {
    height: 25,
    width: 25,
    backgroundColor: "#3F92FF",
    marginRight: 10,
    color: "white",
    fontSize: 12,
    letterSpacing: -0.5,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    paddingRight: "1px",
  },
  name: {
    display: "flex",
  },
  unRead: {
    color: "#000",
    fontWeight: "bold",
  },
  smallCircle: {
    borderRadius: "50%",
  },
  smallOvale: {
    borderRadius: "15px 15px 15px 15px",
    width: 35,
  },
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser, messages } = conversation;

  let count = messages.filter(
    (message) =>
      message.readStatus === false && otherUser.id === message.senderId
  ).length;

  return (
    <Box className={classes.root}>
      <Box>
        <Box className={classes.name}>
          <Typography className={classes.username}>
            {otherUser.username}
          </Typography>
          {count !== 0 && (
            <Typography
              className={
                count > 9
                  ? `${classes.notification} ${classes.smallOvale}`
                  : `${classes.notification} ${classes.smallCircle}`
              }
            >
              {count}{" "}
            </Typography>
          )}
        </Box>
        <Typography
          className={
            count !== 0
              ? `${classes.previewText} ${classes.unRead}`
              : `${classes.previewText}`
          }
        >
          {latestMessageText}
          {}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatContent;

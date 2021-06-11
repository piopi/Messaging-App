import React, { useState, useEffect } from "react";
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
    borderRadius: "15px 15px 15px 15px",
    width: "fit-content",
    padding: "0 10px",
  },
  name: {
    display: "flex",
  },
  unRead: {
    color: "#000",
    fontWeight: "bold",
  },
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser } = conversation;

  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    setUnreadCount(
      conversation.messages.filter(
        (message) =>
          message.readStatus === false &&
          conversation.otherUser.id === message.senderId
      ).length
    );
  }, [conversation]);
  return (
    <Box className={classes.root}>
      <Box>
        <Box className={classes.name}>
          <Typography className={classes.username}>
            {otherUser.username}
          </Typography>
          {unreadCount !== 0 && (
            <Typography className={classes.notification}>
              {unreadCount}
            </Typography>
          )}
        </Box>
        <Typography
          className={
            unreadCount !== 0
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

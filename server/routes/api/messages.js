const router = require("express").Router();
const { Op } = require("sequelize");
const { Conversation, Message } = require("../../db/models");
const onlineUsers = require("../../onlineUsers");

// expects {recipientId, text, conversationId } in body (conversationId will be null if no conversation exists yet)
router.post("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const senderId = req.user.id;
    const { recipientId, text, conversationId, sender, readStatus } = req.body;

    let conversation = await Conversation.findConversation(
      senderId,
      recipientId
    );
    if (!conversation) {
      // create conversation
      conversation = await Conversation.create({
        user1Id: senderId,
        user2Id: recipientId,
      });
      if (onlineUsers.includes(sender.id)) {
        sender.online = true;
      }
    }
    const message = await Message.create({
      senderId,
      text,
      readStatus,
      conversationId: conversation.id,
    });
    res.json({ message, sender });
  } catch (error) {
    next(error);
  }
});
router.patch("/:conversationId/readStatus", async (req, res, next) => {
  try {
    const { conversationId, otherUserId } = req.body;
    await Message.update(
      { readStatus: true },
      {
        where: {
          [Op.and]: [
            {
              conversationId: conversationId,
            },
            {
              senderId: otherUserId,
            },
          ],
        },
      }
    );
    res.json({ id: otherUserId });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

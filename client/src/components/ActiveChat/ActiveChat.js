import React, { useEffect, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Input, Header, Messages } from './index';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexGrow: 8,
    flexDirection: 'column',
  },
  chatContainer: {
    marginLeft: 41,
    marginRight: 41,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
}));

const ActiveChat = ({
  user,
  conversations,
  activeConversation,
  postMessage,
  updateReadReceipts,
}) => {
  const classes = useStyles();

  const conversation = useMemo(
    () =>
      conversations
        ? conversations.find(
            (conversation) =>
              conversation.otherUser.username === activeConversation
          )
        : {},
    [conversations, activeConversation]
  );

  const isConversation = (obj) => {
    return obj !== {} && obj !== undefined;
  };

  useEffect(() => {
    if (conversation?.id) {
      // check if there are any messages and that some are unread
      if (conversation.messages.length === 0) return;
      if (conversation.unreadMessages?.length === 0) return;
      const conversationId = conversation.id;
      const senderId = user.id;
      const reqBody = {
        conversationId,
        senderId,
      };
      updateReadReceipts(reqBody);
    }
  }, [conversation, updateReadReceipts, user]);

  return (
    <Box className={classes.root}>
      {isConversation(conversation) && conversation.otherUser && (
        <>
          <Header
            username={conversation.otherUser.username}
            online={conversation.otherUser.online || false}
          />
          <Box className={classes.chatContainer}>
            {user && (
              <>
                <Messages
                  messages={conversation.messages}
                  otherUser={conversation.otherUser}
                  userId={user.id}
                />
                <Input
                  otherUser={conversation.otherUser}
                  conversationId={conversation.id || null}
                  user={user}
                  postMessage={postMessage}
                />
              </>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default ActiveChat;

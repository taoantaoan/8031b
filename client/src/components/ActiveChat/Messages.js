import React from 'react';
import { Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';

const useStyles = makeStyles(() => ({
  smallAvatar: {
    height: 20,
    width: 20,
    marginTop: 9,
  },
}));

const Messages = (props) => {
  const { messages, otherUser, userId, lastReadMessageId } = props;
  const classes = useStyles();

  let lastReadAvatar = (
    <Avatar
      alt={otherUser.username}
      src={otherUser.photoUrl}
      className={classes.smallAvatar}
    />
  );

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');
        const isLastReadMessage = message.id === lastReadMessageId;
        return message.senderId === userId ? (
          <SenderBubble
            key={message.id}
            text={message.text}
            time={time}
            lastReadAvatarProps={isLastReadMessage && lastReadAvatar}
          />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;

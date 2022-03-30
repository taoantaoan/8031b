import React from 'react';
import { Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  badge: {
    backgroundColor: '#3F92FF',
    color: '#FFFFFF',
    fontSize: '10px',
    fontWeight: '700',
    lineHeight: '2em',
    textAlign: 'center',
    marginRight: '25px',
  },
}));

const UnreadMessages = ({ count }) => {
  const classes = useStyles();
  return (
    <Badge badgeContent={count} classes={{ badge: classes.badge }}></Badge>
  );
};

export default UnreadMessages;

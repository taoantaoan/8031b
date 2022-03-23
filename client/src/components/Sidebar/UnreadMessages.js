import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#3F92FF',
    borderRadius: '1rem',
    color: '#FFFFFF',
    fontSize: '10px',
    fontWeight: '700',
    lineHeight: '2em',
    padding: '0.02rem 0.5rem',
    textAlign: 'center',
  },
}));

const UnreadMessages = ({ count }) => {
  const classes = useStyles();
  console.log(`count: `, count);
  return <div className={classes.root}>{count}</div>;
};

export default UnreadMessages;

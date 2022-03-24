import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  circle: {
    backgroundColor: '#3F92FF',
    borderRadius: '1rem',
    color: '#FFFFFF',
    fontSize: '10px',
    fontWeight: '700',
    lineHeight: '2em',
    padding: '0.02rem 0.5rem',
    marginRight: '20px',
    textAlign: 'center',
  },
  oval: {
    backgroundColor: '#3F92FF',
    borderRadius: '1rem',
    color: '#FFFFFF',
    fontSize: '10px',
    fontWeight: '700',
    lineHeight: '2em',
    padding: '0.02rem 0.6rem',
    marginRight: '20px',
    textAlign: 'center',
  },
}));

const UnreadMessages = ({ count }) => {
  const classes = useStyles();
  return (
    <div className={count > 9 ? classes.oval : classes.circle}>{count}</div>
  );
};

export default UnreadMessages;

import React, {useContext} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const authContext = useContext(AuthContext);

  let buttonStyle = props.showPersons ? classes.withPersons : null;

  let buttonLoginStyle = authContext.authenticated ? classes.withPersons : null;

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <button
          className={buttonStyle}
          onClick={props.togglePersons}>Show persons</button>
      {props.showPersons ? <button
          className={buttonLoginStyle}
          onClick={authContext.login}>Log in</button> : null}
    </div>
  )
};

export default React.memo(cockpit);
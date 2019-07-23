import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WithClass from '../../../hoc/WithClass';
import personStyles from './Person.module.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    return (
      <WithClass classes={personStyles.person}>
        {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
        <div key='e1' className={personStyles.deleteButton}
             onClick={this.props.deletePerson}>x</div>
        <p key='e2'>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p key='e3'>{this.props.children}</p>
        <input key='e4'
               ref={this.inputElementRef}
               onChange={this.props.change}
               value={this.props.name}
               type='text'/>
      </WithClass>
    )
  };
}

Person.propTypes = {
  deletePerson: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func,
};

export default Person;
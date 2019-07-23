import React from 'react';
import appStyle from './App.module.css';
import PersonList from '../Components/PersonList/PersonList';
import Cockpit from '../Components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';

class App extends React.Component {

  state = {
    persons: [
      {name: 'Alex', age: 23, id: 'assldfjlskdfjdfkj3'},
      {name: 'Arthur', age: 33, id: '34jdfjsljfsdfksd'},
      {name: 'Sam', age: 13, id: '21dkdkkskkdkk'},
    ],
    showPersons: false,
    inputText: '',
    showCockpit: true,
    changeCounter: null,
    authenticated: false
  };

  changeNameHandler = (e, id) => {

    const personIndex = this.state.persons.findIndex(person => person.id === id);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = e.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    })
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    })
  };

  loginHandler = () => {
    this.setState({authenticated: !this.state.authenticated});
  };

  render() {
    let persons = null;

    if(this.state.showPersons) {
      persons = <PersonList persons={this.state.persons}
                            // isAuthenticated={this.state.authenticated}
                            change={this.changeNameHandler}
                            deletePerson={this.deletePersonHandler}/>
    }

    return (
      <WithClass classes={appStyle.App}>
        <button onClick={() => {
            this.setState({showCockpit: false})
          }
        }>Remove Cockpit</button>
        <AuthContext.Provider
            value={{
                authenticated: this.state.authenticated,
                login: this.loginHandler
              }}
        >
          {this.state.showCockpit ? <Cockpit
              // persons={this.state.persons}
              title={this.props.title}
              togglePersons={this.togglePersonsHandler}
              showPersons={this.state.showPersons}/> : null}
          {persons}
        </AuthContext.Provider>
      </WithClass>
    );
  }
}

export default App;
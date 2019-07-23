import React, {PureComponent} from 'react';
import Person from './Person/Person';

class PersonList extends PureComponent {

  render() {
    return this.props.persons.map((person, index) => {
      return <Person
          deletePerson={this.props.deletePerson.bind(this, index)}
          name={person.name}
          age={person.age}
          key={person.id}
          change={(e) => this.props.change(e, person.id)}/>
    })
  }
}

export default PersonList;
import React, { Component } from 'react'

import ContactForm from '../ContactForm/ContactForm';
import ContactsTable from '../ContactsTable/ContactsTable'


export class App extends Component {

  state = {
    list : [
      {
    name:'Darrin Cormiergg',
    surname:'Schaeferggg',
    email:'Kaitlyn62@yahoo.comgggg',
    id:'23',},
    {
      name:'Dan Coergg',
      surname:'Schaef',
      email:'Kain62@yahoo.comgggg',
      id:'24',},
  ],

  };


  deleteContact = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  }

  createContact = (newContact) => {
    this.setState({
      list: [...this.state.list, { ...newContact, id: Date.now()}],
    });
  }

  render() {
    return (
      <div className="container">
        
          <ContactsTable list={this.state.list }
          onDelete={this.deleteContact} />
          
          <ContactForm onSave={this.createContact} />
      </div>
    )
  }
}

export default App;
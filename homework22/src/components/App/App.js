import React, { Component } from 'react'
import ContactsTable from '../ContactsTable/ContactsTable'

export class App extends Component {

  state = {
    list: [
      {
        name: 'aecaecea',
        surname: 'aecae',
        email: '13e@gmail.com',
        id: '1',
      },],

  };




  render() {
    return (
      <div className="container">
          <ContactsTable list={this.state.list} />
      </div>
    )
  }
}

export default App
import React, { Component } from 'react'
import ContactTableHeader from '../ContactTableHeader/ContactTableHeader'
import ContactTableList from '../ContactTableList/ContactTableList'

export class ContactsTable extends Component {
  render() {
    return (
      <div>
        <ContactTableHeader />
        <ContactTableList list={this.props.list} />
      </div>
    );
  }
}

export default ContactsTable;
import React, { Component } from 'react';

export class ContactTableListItem extends Component {


  render() {
    const { id, name, surname, email } = this.props.contact;
    return (
        <div className="row">
          <div className="columns">{name}</div>
          <div className="columns">{surname}</div>
          <div className="columns">{email}</div>
          <div className="columns">
            <button onClick={() => this.props.onDelete(id)}>Delete</button>
          </div>
        </div>
      );
  }
}

export default ContactTableListItem;
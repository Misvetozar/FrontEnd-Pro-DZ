import React, { Component } from 'react';

export class ContactTableListItem extends Component {
  render() {
    const { name, surname, email } = this.props.contact;
    return (
        <div className="row">
          <div className='three columns'>{name}</div>
          <div className='three columns'>{surname}</div>
          <div className='three columns'>{email}</div>
          <div className='three columns'>
            <button>Delete</button>
          </div>
        </div>
      );
  }
}

export default ContactTableListItem;
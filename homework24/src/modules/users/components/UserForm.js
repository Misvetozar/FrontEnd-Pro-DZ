import React from 'react'

function UserForm({onSave}) {
  function onFormSubmit(e) {
    e.preventDefault();


    onSave ({
      name: e.target.elements.name.value,
      surname: e.target.elements.surname.value,
      email: e.target.elements.email.value,

    })


  }
  return (
    <form className='row ' onSubmit={onFormSubmit}>
      <div className='column'>
        <input type="text" className='place-form-save' name="name" />
        </div>
      <div className='column'>
        <input type="text"className='place-form-save' name="surname" />
      </div>
      <div className='column'>
      <input type="text"className='place-form-save' name="email" />
      </div>
      <div className='column'>
      <button className='btn2'>Save</button>
      </div>
</form>
  );
}

export default UserForm;
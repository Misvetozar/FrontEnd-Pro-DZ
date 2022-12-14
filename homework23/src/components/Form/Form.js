import React from 'react'

function Form({onSave}) {
  function onFormSubmit(e){
      e.preventDefault();

      onSave({
        title: e.target.title.value,
      });

      e.target.reset();
  }

  return (
    <form onSubmit={onFormSubmit}>
    <div className="row">
        <div className="ten columns">
            <input
            type="text"
            name="title"
            className="place-form"
            />
        </div>
        <div className="two columns">
            <input type="submit" className='btn' id="submitBtn" value="Add" />
        </div>
    </div>
</form>
  );
}

export default Form
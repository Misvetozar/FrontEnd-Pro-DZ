import React from 'react'
import { useDispatch } from 'react-redux';
import { createTodo } from '../../store/actions/todos';

function Form() {
  const dispatch = useDispatch();
  function onFormSubmit(e){
      e.preventDefault();

        dispatch(
          createTodo({
          title: e.target.title.value,
        })
        );

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
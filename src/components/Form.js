import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addArticle } from "../actions/index";

const Form = () => {

  const [data, setData] = useState('');

  const dispatch = useDispatch();

  // function
  const handleChange = (e) => {
    setData(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addArticle(data));
    setData('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input 
          type='text'
          value={data}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>SAVE</button>
    </form>
  );


}

export default Form;
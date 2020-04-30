import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit }) => (
  <div>
    <form onSubmit={onSubmit}>
      
      <label> URL:
        <input type="text">
        </input>
      </label>

      <div>
        <label>
          <input type="radio" name="method" value="get" /> GET 
        </label>
        <label>
          <input type="radio" name="method" value="post" /> POST 
        </label>
        <label>
          <input type="radio" name="method" value="put" /> PUT 
        </label>
        <label>
          <input type="radio" name="method" value="patch" /> PATCH 
        </label>
        <label>
          <input type="radio" name="method" value="delete" /> DELETE 
        </label>
      </div>

      <textarea placeholder="JSON Body"></textarea>
      <button type="submit">GO!</button>
    </form>
  </div>
);

Form.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};


export default Form;


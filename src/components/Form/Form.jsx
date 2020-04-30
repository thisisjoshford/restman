import React from 'react';

const Form = () => (
  <div>
    <form>
      <label>URL:
        <input type="text">
        </input>
      </label>
      <div>
        <label><input type="radio" name="method" value="get" /> GET </label>
        <label><input type="radio" name="method" value="post" /> POST </label>
        <label><input type="radio" name="method" value="put" /> PUT </label>
        <label><input type="radio" name="method" value="patch" /> PATCH </label>
        <label><input type="radio" name="method" value="delete" /> DELETE </label>
      </div>
      <textarea placeholder="JSON Body"></textarea>
      <button type="submit">GO!</button>
    </form>
  </div>
);

export default Form;


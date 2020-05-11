import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ url, textBody, onChange, onSubmit }) => (
  <div>
    <form onSubmit={onSubmit}>
      
      <label> URL:
        <input 
          type="text"
          name="url"
          value={url}
          onChange={onChange}
        >
        </input>
      </label>
      
      <div>
        <label>
          <input 
            type="radio" 
            name="method" 
            value="GET" 
            onChange={onChange}
          /> GET 
        </label>
        <label>
          <input 
            type="radio" 
            name="method" 
            value="POST"
            onChange={onChange}
          /> POST 
        </label>
        <label>
          <input 
            type="radio" 
            name="method" 
            value="PUT"
            onChange={onChange} 
          /> PUT 
        </label>
        <label>
          <input 
            type="radio" 
            name="method" 
            value="PATCH" 
            onChange={onChange}
          /> PATCH 
        </label>
        <label>
          <input 
            type="radio" 
            name="method" 
            value="DELETE"
            onChange={onChange}
          /> DELETE 
        </label>
      </div>

      <textarea 
        placeholder="JSON Body"
        name="textBody"
        value={textBody}
        onChange={onChange}
      >
      </textarea>

      <button type="submit">GO!</button>

    </form>
  </div>
);

Form.propTypes = {
  url: PropTypes.string.isRequired,
  textBody: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;


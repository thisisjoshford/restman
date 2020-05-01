import React, { useState } from 'react';
import Form from '../../components/Form/Form';

const FormContainer = () => {
  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');
  const [textBody, setTextBody] = useState('');

  const handleChange = ({ target }) => {
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'textBody') setTextBody(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit was clicked');
    console.log(method + url + textBody);
  };

  return (
    <Form
      url={url} 
      textBody={textBody} 
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );

};

export default FormContainer;


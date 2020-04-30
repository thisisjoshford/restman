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

  const handleSubmit = ({ target }) => {
    event.preventDefault();
    console.log(method + url + textBody);
  };

  return (
    <Form 
      method={method} 
      url={url} 
      textBody={textBody} 
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );

};

export default FormContainer;


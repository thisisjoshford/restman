import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import { fetchRequest } from '../../services/fetchRequest';

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
    fetchRequest(url, method, textBody)
      .then(json => console.log(json));
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


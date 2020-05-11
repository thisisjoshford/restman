import React from 'react';
import PropTypes from 'prop-types';

const Response = ({ response }) => (
  <p>
    {JSON.stringify(response)}
  </p>
);

Response.propTypes = {
  response: PropTypes.object.isRequired
};

export default Response;



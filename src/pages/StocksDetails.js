import React from 'react';
import { useParams } from 'react-router-dom';

function StocksDetails() {
  let { id } = useParams();

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}

export default StocksDetails;

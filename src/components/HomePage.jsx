import { useSelector } from 'react-redux';
import persistedReducer from '../store/persist';

import React from 'react';

const HomePage = () => {
  const data = useSelector((state) => state.data);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Data from Redux Store: {data}</p>
    </div>
  );
};

export default HomePage;
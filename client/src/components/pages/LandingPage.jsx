import React from 'react';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to ReWear</h1>
      <p>Exchange unused clothing and promote sustainable fashion!</p>
      <button onClick={() => window.location.href = '/add-item'}>Start Swapping</button>
      <button onClick={() => window.location.href = '/dashboard'}>Browse Items</button>
    </div>
  );
};

export default LandingPage;

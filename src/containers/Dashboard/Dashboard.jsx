import React from 'react';
import Button from '../../components/Button/Button';

const Dashboard = () => {
  const handleClick = () => {};

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ margin: '10px' }}>
        <Button className="primary" value={'Submit'} onClick={handleClick} />
      </div>
      <div style={{ margin: '10px' }}>
        <Button className="secondary" value={'Cancel'} onClick={handleClick} />
      </div>
      <div style={{ margin: '10px' }}>
        <Button className="disabled" value={'Ok'} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Dashboard;

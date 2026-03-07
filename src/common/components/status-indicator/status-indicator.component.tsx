import * as React from 'react';

interface Props {
  status: string;
}

export const StatusIndicator: React.FunctionComponent<Props> = ({ status }) => {
  const isAlive = status === 'Alive';

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
      <div
        style={{
          backgroundColor: isAlive ? 'green' : 'red',
          height: '20px',
          width: '20px',
          borderRadius: '50%',
          display: 'inline-block',
        }}
      ></div>
    </div>
  );
};

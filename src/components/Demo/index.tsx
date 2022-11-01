import React from 'react';

import './index.scss';

interface DemoProps {
  welcome: string
}

const Demo: React.FC<DemoProps> = (props: DemoProps) => {
  const { welcome } = props;

  return (
    <>
      <h1 className="demo">Demo</h1>
      <h2 className="welcome">{welcome}</h2>
    </>
  );
};

export default Demo;

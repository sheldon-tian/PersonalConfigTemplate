import React from 'react';

import Demo from './components/Demo';

import './App.scss';

const App: React.FC = () => (
  <>
    <div className="hello">Hello World!</div>
    <div><Demo welcome="welcome to my channel!" /></div>
  </>
);

export default App;

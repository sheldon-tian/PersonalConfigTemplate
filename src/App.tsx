import { FC, StrictMode } from 'react';

import Layout from './components/Layout';

import './App.scss';

const App: FC = () => (
  <StrictMode>
    <Layout welcome="welcome to my channel!" />
  </StrictMode>
);

export default App;

import { FC, StrictMode } from 'react';
import { Provider } from 'react-redux';

import Layout from './components/Layout';

import './App.scss';
import store from './store';

const App: FC = () => (
  <StrictMode>
    <Provider store={store}>
      <Layout welcome="welcome to my channel!" />
    </Provider>
  </StrictMode>
);

export default App;

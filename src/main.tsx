// react version < 18
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// import App from './App';

// import './main.scss';

// ReactDOM.render(<App />, document.getElementById('app'));

// react version >= 18
import { createRoot } from 'react-dom/client';

import App from './App';

import './main.scss';

const root = createRoot(document.getElementById('app')!);
root.render(<App />);

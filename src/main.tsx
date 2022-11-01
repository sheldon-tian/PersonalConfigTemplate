// react version < 18
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));

// react version >= 18
// import { createRoot } from 'react-dom/client'

// import { App } from './App';

// const root = createRoot(document.getElementById('app')!);
// root.render(<App />);

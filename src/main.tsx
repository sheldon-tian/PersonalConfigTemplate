// react version < 18
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// import App from './App';

// import './main.scss';

// ReactDOM.render(<App />, document.getElementById('app'));

// react version >= 18
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter, createRoutesFromElements, RouterProvider,
} from 'react-router-dom';

import App from './App';
import ErrorPage from './common/error-page';

import './main.scss';
import Index from './routes/index';
import Contact, { loader as contactLoader, action as contactAction } from './routes/contact';
import { action as destroyAction } from './routes/destroy';
import EditContact, { action as editAction } from './routes/edit';
import Root, { loader as rootLoader, action as rootAction } from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: 'contacts/:contactId',
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: 'contacts/:contactId/edit',
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: 'contacts/:contactId/destroy',
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route
//       path="/"
//       element={<Root />}
//       loader={rootLoader}
//       action={rootAction}
//       errorElement={<ErrorPage />}
//     >
//       <Route errorElement={<ErrorPage />}>
//         <Route index element={<Index />} />
//         <Route
//           path="contacts/:contactId"
//           element={<Contact />}
//           loader={contactLoader}
//           action={contactAction}
//         />
//         <Route
//           path="contacts/:contactId/edit"
//           element={<EditContact />}
//           loader={contactLoader}
//           action={editAction}
//         />
//         <Route
//           path="contacts/:contactId/destroy"
//           action={destroyAction}
//         />
//       </Route>
//     </Route>
//   )
// );

const root = createRoot(document.getElementById('app')!);

// root.render(<App />);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

import './App.css';
import Login from './pages/Login';
import TeamsUpdateComponent from './pages/TeamsUpdateComponent';

import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SecureRoute from "./components/SecureRoute"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/main",
    element: (
      <SecureRoute>
        <TeamsUpdateComponent />
      </SecureRoute>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

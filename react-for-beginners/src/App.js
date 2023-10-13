import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Error from "./routes/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
  },
  {
    path: "/movie/:id",
    element: <Detail></Detail>,
    errorElement: <Error></Error>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

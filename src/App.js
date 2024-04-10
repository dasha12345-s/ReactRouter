import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

const routeDef = createRoutesFromElements(
  <Route>
    <Route path='/' element={<HomePage/>}/>
  </Route>
) 

// const  router = createBrowserRouter([
//   {path: '/', element: <HomePage /> },
//   {path: '/products', element: <ProductsPage />}
// ])

const router = createBrowserRouter(routeDef) 
function App() {
  return <RouterProvider router={router}/>;
}

export default App;

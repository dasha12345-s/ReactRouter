import { createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProdDetail";

// const routeDef = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>}/>
//   </Route>
// ) 

const  router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index:true, element: <HomePage /> },
      {path: '/products', element: <ProductsPage />},
      {path: '/products/:productId', element: <ProductDetail/>}
    ]
  },
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;

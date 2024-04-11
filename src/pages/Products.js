import { Link } from "react-router-dom"

const PRODUCTS = [
  {id: 'p1', title: 'Prod1'},
  {id: 'p2', title: 'Prod2'},
  {id: 'p3', title: 'Prod3'},
];

export default function ProductPage(){
  return(
    <>
    <h1> my products</h1>
    <ul>
      {PRODUCTS.map((prod) => (
      <li key={prod.id}>
        <Link to={`/products/${prod.id}`}>{prod.title}</Link>
      </li>))}
    </ul>
    </>
  )
  }

import {Link, useParams } from 'react-router-dom'

function ProductDetail(){
  const params = useParams();

  
  return(
  <>
    <h1>blablabla</h1>
    <p>{params.productId}</p>
    <p><Link to='..' relative='path'>BAck</Link></p>
  </>
  )
}

export default ProductDetail;
import React, { useContext } from 'react'
import ProductList from './Products_container'




function Main_page() {
  

  return (
    <div>
      <ProductList/>
      <button onClick={()=> localStorage.clear()}>Clear Cart</button>
    </div>
  )
}

export default Main_page

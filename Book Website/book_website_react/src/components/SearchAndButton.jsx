import React from 'react'
import Search from './Search'






export default function SearchAndButton() {
    // let JASON_DATA= Search();
    // console.log(JASON_DATA);
  return (
    
      <>
          <input type="search" name="search_bar" id="search_bar" defaultValue="react" />
          <button onClick={Search}>Click</button>
      </>
    
  )
}



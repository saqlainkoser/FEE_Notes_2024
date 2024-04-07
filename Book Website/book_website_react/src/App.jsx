import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from '/Users/S K Ansari/OneDrive/Desktop/FEE/Book Website/book_website_react/src/components/Book.jsx'
import Button from './components/Search'
import Search from './components/Search'
import SearchAndButton from './components/SearchAndButton'
import All_books from './components/All_books'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        {/* <!-- Navbar --> */}
        <div id="navbar">
            <div id="logo">booked.</div>
            <ul>
                <li id="li1">Home
                    <div id="tile1">Home</div>
                </li>
                <li id="li2">Collection
                    <div id="tile2">Collection</div>
                </li>
                <li id="li3">Category
                    <div id="tile3">Category</div>
                </li>
                <li id="li4">Pricing
                    <div id="tile4">Pricing</div>
                </li>
            </ul>
            <div className="login">Login</div>
        </div>
        

          {/* <!-- LINE --> */}
          <div className="line"></div>
      <div className="main">
      <SearchAndButton/>
          <div className="point-box">
            <pre>........
              <br />
      ........
      <br />      
      ........
      <br />
      ........
      <br />
      ........
      <br />
      ........
      <br />
      ........
      <br />
      ........
      <br />
      ........
      <br />
      ........

              
                  </pre></div>
        
          
      <p id="main-text">Collect Your Best <br /> Articles <span> easily</span></p> 
      <div className='grid_box'>
        <All_books />
        {/* <Search/> */}
        
        </div>   
      
      <br />
      {/* <!-- <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id cum omnis excepturi. At, voluptas temporibus provident iure laborum hic ipsa! Quasi, ad. Soluta, cumque! A eum fugit beatae ratione, in commodi sit repellat velit itaque cum inventore nostrum laudantium ab nisi vel corrupti asperiores autem quos? Eum, autem! Earum qui vero veritatis magnam error non porro. Quibusdam ipsa nostrum ab ducimus non laboriosam rerum eligendi aut culpa suscipit vel aliquam fuga in, adipisci minima error quos excepturi facere facilis fugit iure natus maxime sed? Adipisci ut consequuntur sunt pariatur. Magnam velit veritatis harum, laboriosam odit ut minima quaerat necessitatibus in, animi, inventore maxime ex. Necessitatibus a itaque cupiditate perferendis sit voluptatem corrupti sed, aspernatur id. Quod ut animi, possimus necessitatibus doloremque nihil neque amet similique non minima. Aliquid, qui! Corporis adipisci fuga totam quaerat laudantium rem suscipit cupiditate repellat, quod eos placeat perspiciatis repudiandae dolorum? Voluptatibus iure molestias mollitia harum expedita accusamus, nisi impedit, voluptatum tempora saepe laborum minus velit. Explicabo quas repellat quidem accusamus? Consequuntur, cupiditate non corrupti explicabo reiciendis perferendis corporis nobis repellendus excepturi praesentium quidem rerum suscipit quae harum cum nulla velit, ut quaerat assumenda doloremque et dolor eaque maiores. Enim, ullam recusandae aperiam et beatae dignissimos modi nostrum accusantium veniam cum quo, ab voluptates laborum excepturi culpa repudiandae. Accusamus neque asperiores ipsum dicta tenetur aspernatur, eligendi earum adipisci! Pariatur, ipsa similique. Totam at expedita voluptatum explicabo architecto molestiae inventore minima quo. Nulla repudiandae ratione, adipisci eos earum sit iure hic alias. Nemo exercitationem animi voluptatem alias molestiae id amet cum eos eum error, perspiciatis incidunt, itaque, maxime quis. Id quos rem, nisi qui aliquam vero. Repellat facilis sunt nulla incidunt. Numquam aliquid quas magnam ipsum sunt, veritatis omnis voluptatum fuga dolorem expedita. Natus officia culpa necessitatibus voluptatibus, sit excepturi amet libero, iure itaque corrupti autem vero, sapiente voluptas accusantium rerum? Optio error a animi impedit, labore odit repellendus pariatur. Eligendi, aliquid consequuntur laudantium molestias eaque repellendus. Architecto modi voluptatum recusandae eius vitae deleniti at quisquam reiciendis repellat. Animi rem fugit nulla natus dolorem minima excepturi nemo consequatur ipsam corrupti in iure aliquid quibusdam temporibus hic aspernatur quasi tempore dolorum quos, vitae, ad incidunt accusamus? Perspiciatis aliquid at modi consequatur culpa explicabo nesciunt beatae animi unde reprehenderit. Doloribus dolores voluptates sit sapiente corporis tempora ut totam quas facere aspernatur consequatur assumenda fugit laborum unde suscipit, ab hic reiciendis placeat minus ullam, necessitatibus repudiandae obcaecati iusto sed! Porro.</div> --> */}
      </div>
      <br></br>
    </>
  )
}

export default App

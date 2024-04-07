import { useState } from "react";
import '/Users/S K Ansari/OneDrive/Desktop/FEE/Book Website/book_website_react/src/Book.css'
let image_url = 'http://books.google.com/books/content?id=2TgzEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api';


let JASON_DATA = {};

export default function Search() {
  let search_bar = document.getElementById('search_bar');
  let search_value = search_bar.value;
  console.log(search_bar.value);

  fetch(`https://www.googleapis.com/books/v1/volumes?q=${search_value}=epub&key=AIzaSyBQ5IXDWvK0rWAe4tN69iGB-9Pcv-BPvfI`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // setData(data);
      // console.log(data)
      JASON_DATA = data;
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });

  setTimeout(() => { console.log(JASON_DATA.items) 
    JASON_DATA.items.map((item)=> {
      console.log(item.volumeInfo.imageLinks.thumbnail
        )
    })
  
  }, 2000);

  // const myArray = {};    

  



  return (
    JASON_DATA
  )

}

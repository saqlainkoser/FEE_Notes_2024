import React, { useState } from 'react'
import Book from '/Users/S K Ansari/OneDrive/Desktop/FEE/Book Website/book_website_react/src/components/Book'
import Search from './Search';


let imageLinks = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/250',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/350',
];

try {
  let Data = Search();
  console.log(Data.items.map((item)=> {
    console.log(item.volumeInfo.imageLinks.thumbnail
      )
  }));
} catch (error) {
  console.log("Fetching.. Data")
}


export default function All_books(props) {
  // let [imageLinks,setImageLinks] =useState(imageLinks)

  return (
    <>
      <Book imgUrl="http://books.google.com/books/content?id=2TgzEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
      {imageLinks.map((e)=>(<Book key={Math.random()*8} imgUrl={e}/>))}
    </>
  )
}

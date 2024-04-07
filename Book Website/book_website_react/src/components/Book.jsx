import React from 'react'
import '/Users/S K Ansari/OneDrive/Desktop/FEE/Book Website/book_website_react/src/Book.css'
import Search from './Search';

let image_url = '';

let countFlag=0;
let per="40%";


export default function Book(props) {

  // console.log(props.imgUrl);
if (countFlag%2!=0) {
  per="40%"
  countFlag=countFlag+1;
}
else{
  per="0%"
}
  return (
    <>
    <div className='book_box' style={{top:per}} >
    <div className="coverb"></div>
    <div className="page" ></div>
    <div className="cover" style={{backgroundImage:`url(${props.imgUrl})`}}></div>
    <div className="left-shadow"></div>
    </div>
    </>
  )
  
}



{/* <div className='book_box' style={{top:'40%'}} >
<div className="coverb"></div>
<div className="page" ></div>
<div className="cover" style={{backgroundImage:`url(${image_url})`}}></div>
<div className="left-shadow"></div>
</div>
<div className='book_box' style={{}} >
<div className="coverb"></div>
<div className="page" ></div>
<div className="cover" style={{backgroundImage:`url(${image_url})`}}></div>
<div className="left-shadow"></div>
</div>
<div className='book_box' style={{top:'40%'}} >
<div className="coverb"></div>
<div className="page" ></div>
<div className="cover" style={{backgroundImage:`url(${image_url})`}}></div>
<div className="left-shadow"></div>
</div>
<div className='book_box' style={{}} >
<div className="coverb"></div>
<div className="page" ></div>
<div className="cover" style={{backgroundImage:`url(${image_url})`}}></div>
<div className="left-shadow"></div>
</div>
<div className='book_box' style={{top:'40%'}} >
<div className="coverb"></div>
<div className="page" ></div>
<div className="cover" style={{backgroundImage:`url(${image_url})`}}></div>
<div className="left-shadow"></div>
</div> */}
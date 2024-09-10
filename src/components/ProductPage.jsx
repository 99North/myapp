import React from "react";
import "./ProductPageStyle.css";
import { useState,useEffect } from "react";

// PROPS RECIVED FROM APP.JS
function ProductPage({ price, color, model }) {
  const initialState = true;
  const [flag,setFlag]=useState(initialState);


// CONDITIONAL RENDERING EXAMPLE USING TERNARY OPERATOR
  const getFlags=()=>{
    return flag?<div>
            <ul className='product-list'>
                {
                    productDetails.map((p,index)=>{
                        return <li key={index}>{p.description} {price} {color} {model}</li>
                    })
                }
            </ul>
        </div> : <div>
            <p>No products available</p>
            </div>
  }

  const handleClick=()=>{
    setFlag(prevFlag=>!prevFlag);
  }

  useEffect(()=>{
    console.log("Flag is changed");
  },[flag]);


//   COUNT VALUE CHANGE WITH USE EFFECT
    const initialCount=0;
    const [count,setCount]=useState(initialCount);
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    useEffect(()=>{
        console.log(`Count value is ${count}`);
        
    },[count]);

    function bcred(){
        document.body.style.backgroundColor="red";
    }

    function bcblue(){
        document.body.style.backgroundColor="blue";
    }  



 
  const productDetails = [
    {
      id: 11,
      name: "Product 1",
      price: 100,
      description: "This is the first product",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      description: "This is the second product",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      description: "This is the third product",
    },
  ];

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product Description</p>

      {getFlags()}
      <button onClick={handleClick}>{flag ? "Hide" : "Show"}</button>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <div>
        <button onClick={bcred}>Red</button>
        <button onClick={bcblue}>Blue</button>
      </div>
    </div>
  );
} 

export default ProductPage;

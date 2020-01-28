import React, {useState, useEffect, createContext} from 'react'
import {storeProducts} from "./data"

const ProductContext= createContext()
const ProductProvider =(props)=>{

// states here
// state of all products which is an array
    const [products, setProducts]= useState(storeProducts);

// state of a single product
    const [product, setProduct]= useState({});


    const [cart, setCart]= useState([]);



// THIS METHOD GETS ITEM  AS PER THE ID PARSED,IF WE REQUEST ID NUMBER 2 THE METHOD GETS THE ITEM

    const setProductSelected=(id)=>{
    var product = products.find(item=>item.id===id)
    setProduct(product);

 

    return product
  

    }

const addToCart=(id)=>{
   let tempProducts = products

//  getting the index of the product clicked. This ensures that the products are always arranged in order in cart
  const index = tempProducts.indexOf(setProductSelected(id))
  const indexedProduct = tempProducts[index]
  
  indexedProduct.inCart= true
  indexedProduct.count=1
  const initialPrice= indexedProduct.price
  indexedProduct.total= initialPrice

  
  setCart([...cart, indexedProduct]); 
 
  
  
}
    
    return (
        <ProductContext.Provider value={{products,product,setProductSelected,addToCart}}>
            {props.children}
        </ProductContext.Provider>
    )
 }

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductConsumer, ProductContext}

import React, {useContext, useState} from 'react'
import Product from "./Product"
import Title from "./Title"
import {ProductContext} from "../Context"




const ProductList=()=> {
    const context = useContext(ProductContext)
    const {products}=context
  
   
    return (
        
        <React.Fragment>
        <div className="py-5">
            <div className="container">
            <Title name="our" title="products"/>
                <div className="row">
               {products.map(product=>{
                  return <Product key={product.id} product={product}/> 
               })}
           
                {/* <ProductConsumer> */}
                    {/* we can use any word in place of value e.g hello */}
                    {/* {(value)=>{
                        return value.products.map(product=>{
                            return <Product key={product.id} product={product}/>
                        })

                    }}
                </ProductConsumer> */}
                    
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default ProductList

                  // from the value from context we are accessing products state which is an array,
                        // we are mapping the products array and returning a single product .....(product=>{return <Product/>.....
                        // this product is getting some props i.e a key(mandatory when we mapping arrays), and a product={product} which is equal to the single product we get after mapping  
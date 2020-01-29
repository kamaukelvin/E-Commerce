import React,{useContext} from 'react'
import {ProductContext} from "../Context";
import {Link} from "react-router-dom"
import {ButtonContainer} from "./Button"

const Details=()=> {

    const context= useContext(ProductContext)
    const{product,openModal,addToCart}=context
 
               return(
                   <div className="container py-5">
                  

                       <div className="row">
                           <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                               <h1>{product.title}</h1>
                           </div>
                       </div>
                       {/* product info here */}
                       <div className="row">
                           <div className="col-10 mx-auto col-md-6 my-3 ">
                               <img src={product.img} className="img-fluid" alt="product"/>
                           </div>
                           <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                               <h2>model: {product.title}</h2>
                               <h4 className="text-title text-uppercase text-muted mt-3 mb-2">made by: <span className="text-uppercase">{product.company}</span></h4>
                                <h4 className="text-blue"><strong>price: <span>$</span>{product.price}</strong></h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-2">
                                    some information about the product:
                                </p>
                                <p className="text-muted lead">{product.info}</p>
                              
                                <div>
                                    <Link to="/">
                                        <ButtonContainer>
                                            back to products
                                        </ButtonContainer>
                                    </Link>
                                    {/* "cart is prop which when passed renders a differnt color for the button, check button component to see usage" */}
                                    <ButtonContainer cart disabled={product.inCart?true:false} onClick={()=>{addToCart(product.id); openModal(product.id)}}>
                                     {product.inCart? "inCart" : "add to cart"}
                                        </ButtonContainer>
                                </div>
                           </div>
                       </div>
                   </div>
               )

}

export default Details
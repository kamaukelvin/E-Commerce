import React, {useContext} from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import {ProductConsumer} from "../Context"

// this component takes props from ProductList Component
const Product=({product, key})=> {

//   after mapping is done in the productList component one single product containing some values  is returned
// the single product is an object which we can destructure the items in it as follows
const {id, title, img, price, inCart}= product
    
// we can now use each item destructed indepedently(the image, price, title....) 
    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
         <div className="card">
             <ProductConsumer>
                 {(value)=>(
                      <div className="img-container p-5" onClick={()=>{
                         
                          value.setProductSelected(id)
                          }}>

                      <Link to="/details">
                          <img src={img} alt="product" className="card-img-top"/>
                      </Link>
                      {/* the button has an attribute of disabled
                          the attribute is rendered conditionally i.e it checks to see if the value of the inCart is true, if it is, the button is disabled, if the value is false, the button is active
                          the inCart state checks if the product is in the cart already, by default it is set to false (see data.js file) */}
                      <button className="cart-btn" disabled={inCart? true:false} onClick={()=>value.addToCart(id)}>
                          {/* we also want to render the paragraph "in cart" if the item is already in the cart, if not in the cart we have an icon of cart displayed
                          note: this should be done within the button */}
                          {inCart?<p className="text-capitalize mb-0" disabled>In cart</p>:<i class="fas fa-cart-plus"></i>}
                      </button>
                   </div>

                 )}
            
             </ProductConsumer>
             {/* card footer */}
             <div className="card-footer d-flex justify-content-between">
                 <p className="align-self-center mb-0">
                     {title}
                 </p>
                 <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">$ {price}</span>
                 </h5>
             </div>
          
         </div>
        </ProductWrapper>
    )
}
export default Product

// proptypes to make sure that we specify the type of data we expect
// if data in our data file is changed to a type that is not specifies as in our proptypes an error is displayed in console
  // add isRequired to effect the proptypes check
Product.propTypes ={
    product: PropTypes.shape({
        id: PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

// styled component

const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 1s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
}
&: hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2)
    }
    .card-footer{
        background: rgba(247,247,247)
    }

}
.img-container{
    position: relative;
    overflow: hidden;

}
.card-img-top{
    transition: all 1s linear;
}
.img-container:hover .card-img-top{
    transform: scale(1.2);
}
.cart-btn{
    position: absolute;
    bottom: 0;
    right:0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    color: var(--mainWhite);
    border: none;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
`
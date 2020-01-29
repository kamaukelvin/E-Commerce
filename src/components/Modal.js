import React, {useContext} from 'react'
import styled from "styled-components"
import {ProductContext} from '../Context'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'



 function Modal() {
    const Context= useContext(ProductContext)
    const {modalOpen, closeModal, modalProduct}= Context
    const {id, title, img, price, inCart}= modalProduct

     if (!modalOpen){
         return null
         
     } else{
         return(
            <ModalContainer>
         <div className= "container">
             <div className="row">
                 <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                    <h5>Item added to the cart</h5>
                    <img src={img} className= "img-fluid" alt="product"/>
                    <h5>{title}</h5>
                    <h5 className="text-muted">pice : $ {price}</h5>
                    <Link to="/">
                        <ButtonContainer onClick={()=>closeModal()}>Continue Shopping</ButtonContainer>
                    </Link>
                    <Link to="/cart">
                        <ButtonContainer cart onClick={()=>closeModal()}>View Cart</ButtonContainer>
                    </Link>
                 </div>
             </div>
         </div>
        </ModalContainer>
         )

     }

}
export default Modal

const ModalContainer= styled.div`
position: fixed;
top:0;
bottom:0;
right:0;
left:0;

background: rgba(0,0,0,0.3);
display: flex;
justify-content: center;
align-items:center;
#modal{
    background: var(--mainWhite);
    border-radius: 10px;
}
`

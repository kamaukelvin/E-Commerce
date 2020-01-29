import React, {useContext} from 'react'
import Title from "../Title"
import CartColumns from "./CartColumns"
import {ProductContext} from "../../Context"
import EmptyCart from "./EmptyCart"
import CartList from './CartList'
import CartTotals from './CartTotals'


const Cart=(props)=> {

    const context= useContext(ProductContext)
    const {cart}= context

    if (cart.length>0){
        return(
        <section>
           <Title name="your" title="cart"/>
           <CartColumns/>
           <CartList context={context}/>
           <CartTotals context={context} history={props.history} />
        </section>    
        )
    } else
    return (
        <EmptyCart/>
       
    )
}
export default Cart
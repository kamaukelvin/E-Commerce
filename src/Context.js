import React, {useState, useEffect,createContext} from 'react'
import {storeProducts} from "./data"

const ProductContext= createContext()
const ProductProvider =(props)=>{

// states here
// state of all products which is an array
    const [products, setProducts]= useState(storeProducts);

// state of a single product
    const [product, setProduct]= useState({});


    const [cart, setCart]= useState([]);
    const [modalOpen, setModalOpen]= useState(false)
    const [modalProduct, setModalProduct]= useState({})
    const [cartSubTotal, setCartSubTotal] = useState(0)
    const [cartTax, setCartTax] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
// THIS METHOD GETS ITEM  AS PER THE ID PARSED,IF WE REQUEST ID NUMBER 2 THE METHOD GETS THE ITEM

    const setProductSelected=(id)=>{
        var product = products.find(item=>item.id===id)
        setProduct(product);
        return product
    }

    const refreshProducts=()=>{
        let tempProducts = [];
        storeProducts.forEach (item=>{
            const singleItem ={...item};
            tempProducts=[...tempProducts, singleItem]
        })
        setProducts(tempProducts)

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
    
        setCart([...cart, indexedProduct])
     
 
}

    const openModal=(id)=>{
        const productDisplayed= setProductSelected(id)

        setModalProduct(productDisplayed)
        setModalOpen(true)
}

    const closeModal=()=>{
        setModalOpen(false)
}

    const increment=(id)=>{
       let tempCart=[...cart]
       const increasedItem = tempCart.find(item=>item.id===id)
       
       const index = tempCart.indexOf(increasedItem)
       const product= tempCart[index]

       product.count =product.count+1
       product.total= product.count * product.price
       

       setCart([...tempCart])
    }
    const decrement=(id)=>{
        let tempCart=[...cart]
       const decreasedItem = tempCart.find(item=>item.id===id)
       
       const index = tempCart.indexOf(decreasedItem)
       const product= tempCart[index]

       product.count =product.count-1

    //    if statement to remove item if its count is zero
    if(product.count===0){
        removeItem(id)
    }else{
        product.total =product.count*product.price
        setCart([...tempCart])

    }
    }
    const removeItem=(id)=>{
        let tempProducts = [...products]
        let tempCart = [...cart]
        tempCart= tempCart.filter(item=> item.id!==id)
      

        const index = tempProducts.indexOf(setProductSelected(id))
        const removedProduct= tempProducts[index]
     
        removedProduct.inCart= false
        removedProduct.count= 0
        removedProduct.total= 0

        setCart([...tempCart])
        setProducts([...tempProducts])
        
    }
    const clearCart=()=>{
        setCart([])
        refreshProducts()
    
       

    }

    // method to compute totals
    // we first let subtotal to be 0, then we map through all the items in the cart
    // since each item has a total, we can add it to the subTotal
    const addTotals = ()=>{

        // calculating subtotal for each item
        let subTotal=0;
        cart.map(item=>(subTotal+=item.total))

        // calculating tax
        const tempTax = subTotal * 0.16;

        // Making sure that the tax we get is always in 2 decimal places
        const tax =parseFloat(tempTax.toFixed(2))

        // calcualting the full total amount
        const total = subTotal + tax

        setCartSubTotal(subTotal)
        setCartTax(tax)
        setCartTotal(total)
    }
// this ensures that addTotals is effected only when the cart changes
// its a callback function to addToCart Method
// call back functions only run when a certain condition is met
    useEffect(()=>{
        addTotals()
        },[cart])

 
    return (
        <ProductContext.Provider value={{products, cart,product,setProductSelected,addToCart, openModal, closeModal, modalOpen, modalProduct, cartSubTotal, setCartSubTotal, cartTax,setCartTax, cartTotal,setCartTotal, setModalProduct, increment, decrement, removeItem,clearCart}}>
            {props.children}
        </ProductContext.Provider>
    )
 }

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductConsumer, ProductContext}

import React, {createContext, useState} from 'react';
import axios from 'axios';

export const ProductContext = createContext();
const ProductContextProvider = ({children})=> {
    const [stateProduct, setStateProduct]= useState({
        products:[]
    })

    // //GET http://localhost:3000/api/products
    const getProduct = async ()=>{
        try {
            // const response = await axios.get("http://localhost:3000/api/products")
            // console.log(response.data)
            console.log('oke')
        } catch (error) {
            // setStateProduct({
            //     products: []
            // })
            console.log('aaaa')
        }
    }
    const productContextData={stateProduct, getProduct};
    return (
        <ProductContext.Provider value={productContextData}>
        {children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider

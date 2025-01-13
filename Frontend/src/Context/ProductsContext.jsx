import { createContext, useEffect, useState } from "react";
import axios from "axios"
export let ProductContext = createContext()

function ProductProvider({ children }) {
    let [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then(res => setProducts(res.data))
    }, [])

    const value = {
        products,
        setProducts
    }

    return <ProductContext.Provider value={value}> {children}</ProductContext.Provider>
}

export default ProductProvider
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export let WishlistContext = createContext()

function WishlistProvider({ children }) {
    let localWishlist = JSON.parse(localStorage.getItem("wishlist"))
    let [wishlist, setWishlist] = useState(localWishlist ? localWishlist : [])

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }, [wishlist])

    const value = {
        wishlist,
        setWishlist
    }

    return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export default WishlistProvider

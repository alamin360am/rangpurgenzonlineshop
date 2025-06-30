import { useState } from "react";
import { products } from "../assets/assets"
import { ShopContext } from "./Context";

const ShopContextProvider = ({children}) => {
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(true);

    const value = {products, search, setSearch, showSearch, setShowSearch}

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
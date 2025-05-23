import { products } from "../assets/assets"
import { ShopContext } from "./Context";

const ShopContextProvider = ({children}) => {

    const value = {products}

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
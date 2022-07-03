import { createContext,useState } from "react";

 export const ProductContext = createContext(null)

function Fpost ({children}){
    const [product,setProduct] = useState([])
 return(
     <ProductContext.Provider value={{product,setProduct}}>
         {children}
     </ProductContext.Provider>
 )
} 


export default Fpost
import { createContext,useState,useContext } from "react";

const PlaceContext = createContext(null)
 const Place = ({children}) =>{
 const [isplaceopen,setisPlaceOpen] = useState(false)

 const openplace=()=>{
     setisPlaceOpen(true)
 }
 const closeplace =()=>{
     setisPlaceOpen(false)
 }
 return(
     <PlaceContext.Provider value={{isplaceopen,openplace,closeplace}}>
         {children}
     </PlaceContext.Provider>
 )

 }
 export const useGlobalContext = ()=>{
     return useContext(PlaceContext);
 }
 export {PlaceContext,Place}









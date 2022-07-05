import { ProductionQuantityLimitsSharp } from "@mui/icons-material";
import React from "react";
import ItemCount from '../ItemCount/ItemCount.js';

const ItemListContainer =(props)=>{

    const onAdd=()=>{
        alert("Gracias por tu compra")
    }


    return(    
        <>
        <h1>{props.catalogo}</h1>
        <ItemCount onAdd={onAdd}/>
        <>
        
        </>
        </>
    )
}




export default ItemListContainer;
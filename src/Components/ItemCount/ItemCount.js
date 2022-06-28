import React,{useState} from "react";
import "./ItemCount.css"

function ItemCount({stock=5,initial=0,onAdd}){

    const [cuenta, setCuenta] = useState(initial)

    const sumar=()=>{
        if(cuenta<stock){
        setCuenta(cuenta + 1)
        }else{
            alert("No se puede sumar más")
        }
    }

    const restar=()=>{
        if(cuenta>0){
        setCuenta(cuenta-1)
        }
    }

   



    return(
        <div className="contador">
            <button className="button-" onClick={restar}>-</button>
            <p>{cuenta}</p>
            <button className="button+" onClick={sumar}>+</button>
            <button className="buttonBuy" onClick={onAdd}>Comprar</button>
        </div>
    )
}

export default ItemCount;
import React, { useEffect,useState } from "react";
import Item from "../Item/Item";



const[Item,setItem]=useState([]);





function ItemList({Item}){



const promesa=new Promise((res,rej)=>{
    setTimeout(()=>{
        res(Item)
    },2000)
})

useEffect(()=>{
    promesa.then((data)=>{
        setItem(data)
    }).catch(()=>{
        console.log("Mal")
    })
},[]);

    {Item.map((Item)=><h2 key={Item.id}>{Item.name}</h2>)};

}


export default  ItemList;

import React, { useState, useContext } from 'react'
import Contexto from "../contexto/Contexto";
import Spain from "../../public/spain.jpg";
import Francia from "../../public/francia.png";
import Uk from "../../public/uk.png";

function Banderas() {
    const {setValores} = useContext(Contexto)
    const {valores} = useContext(Contexto)
    const posicion = (indice) =>{
        setValores(
            valores.map((v,i)=>{
                return(
                    i===3
                    ? {...v,idioma:indice}
                    : {...v}
                )
            })
        )
    }

    const btnSpain = () =>{
       posicion(0)
    }
    const btnUk = () =>{
        posicion(1)
    }
    const btnFrance = () =>{
        posicion(2)
    }
  return (
    <>
        <img onClick={btnSpain} className='img-banderas' src={Spain}/>
        <img onClick={btnFrance} className='img-banderas' src={Francia}/>
        <img onClick={btnUk} className='img-banderas' src={Uk}/>
    </>
  )
}

export default Banderas
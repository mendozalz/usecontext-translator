import React, { useState, useContext } from 'react'
import {CardHeader} from "@nextui-org/react";
import Contexto from "../contexto/Contexto";

function Nombres() {
    const {valores} = useContext(Contexto)
    const idioma = valores[3].idioma
  return (
    <div>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{valores[idioma].boton1}</p>
        <h4 className="font-bold text-large">{valores[idioma].nombre}</h4>
      </CardHeader>
    </div>
  )
}

export default Nombres
import React, { useState, useContext } from 'react'
import {CardHeader} from "@nextui-org/react";
import Contexto from "../contexto/Contexto";

function Direccion() {
    const {valores} = useContext(Contexto)
    const idioma = valores[3].idioma
  return (
    <div>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{valores[idioma].boton2}</p>
        <h4 className="font-bold text-large">{valores[idioma].direccion}</h4>
      </CardHeader>
    </div>
  )
}

export default Direccion
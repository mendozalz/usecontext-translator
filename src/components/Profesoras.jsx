import React, {useContext, useState} from 'react'
import {Image} from "@nextui-org/react";
import Contexto from "../contexto/Contexto";

function Profesoras() {
    const {valores} = useContext(Contexto)
    const idioma = valores[3].idioma
    const foto = `../public/${valores[idioma].foto}`
  return (
    <div className='img-prof'>
        <Image
          alt="card background"
          className="object-cover rounded"
          src={foto}
          width={270}
        />
    </div>
  )
}

export default Profesoras
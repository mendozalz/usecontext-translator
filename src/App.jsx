import React, { useState } from "react";
import Cuerpo from "./components/Cuerpo";
import Datos from "./contexto/Datos";
import Banderas from "./components/Banderas";

export default function App() {
  return (
    <Datos>
      <div className="banderas flex">
        <Banderas />
      </div>
      <div>
        <Cuerpo />
      </div>
    </Datos>
  );
}

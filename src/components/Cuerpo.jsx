import React, { useState, useContext } from "react";
import Contexto from "../contexto/Contexto";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
} from "@nextui-org/react";
import Nombres from "./Nombres";
import Direccion from "./Direccion";
import Profesoras from "./Profesoras";

export default function Cuerpo() {
  const { valores } = useContext(Contexto);
  const idioma = valores[3].idioma;
  const [prof, setProf] = useState(true);
  const [lugar, setLugar] = useState(false);
  const nomProf = () => {
    setProf(true);
    setLugar(false);
  };
  const nomLugar = () => {
    setProf(false);
    setLugar(true);
  };
  return (
    <div>
      <div className="btn">
        <ButtonGroup>
          <Button onClick={nomProf}>{valores[idioma].boton1}</Button>
          <Button onClick={nomLugar}>{valores[idioma].boton2}</Button>
        </ButtonGroup>
      </div>
      <div className="card">
        <Card>
          {
            prof
            ?<Nombres />
            : null
          }
          {
            lugar
            ?<Direccion />
            : null
          }
          <CardBody>
            <Profesoras />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

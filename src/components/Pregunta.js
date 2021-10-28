import { useState } from "react";
import Error from "./Error";

const Pregunta = () => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    let value = parseInt(e.target.value, 10);
    setCantidad(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    //validado
    setError(false);
  };

  console.log(error);

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error msj="El Presupuesto es Incorrecto" /> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Definir Presupuesto"
          className="button-primary u-full-width"
        />
      </form>
    </>
  );
};

export default Pregunta;

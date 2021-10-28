import { useState } from "react";

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
  };

  console.log(error);

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={handleChange}
          value={cantidad}
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

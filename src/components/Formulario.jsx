import { useState } from 'react'
import '../css/Formulario.css'

function Formulario() {
  const [mostrarTexto, setMostrarTexto] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setMostrarTexto(true)
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      {mostrarTexto && <p>Formulario creado</p>}

      <div className="campo">
        <label className="label">Moneda</label>
        <select className="select">
          <option value="">Seleccione</option>
          <option value="USD">Dolar USD</option>
          <option value="MXN">Peso Mexicano MXN</option>
          <option value="EUR">Euro EUR</option>
          <option value="GBP">Libra Esterlina GBP</option>
        </select>
      </div>

      <div className="campo">
        <label className="label">Criptomoneda</label>
        <select className="select">
          <option value="">Seleccione</option>
        </select>
      </div>

      <button type="submit" className="btn-cotizar">Cotizar</button>
    </form>
  )
}

export default Formulario


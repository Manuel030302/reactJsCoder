import React from "react";

function CheckIn(props) {
  const {
    nombre,
    setNombre,
    correo,
    setCorreo,
    confirmarCorreo,
    setConfirmarCorreo,
    telefono,
    setTelefono,
    confirmarTelefono,
    setConfirmarTelefono,
    handleSubmit
  } = props

  return (
    <div className="checkout-form">
      <h2>Finalizar Compra</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="email"
          name="emailConfirm"
          placeholder="Confirmar Correo Electrónico"
          value={confirmarCorreo}
          onChange={(e) => setConfirmarCorreo(e.target.value)}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <input
          type="tel"
          name="phoneConfirm"
          placeholder="Confirmar Teléfono"
          value={confirmarTelefono}
          onChange={(e) => setConfirmarTelefono(e.target.value)}
          required
        />
        <button type="submit">Finalizar compra</button>
      </form>
    </div>
  );
}

export default CheckIn;

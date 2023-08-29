import React, { useState } from "react";
import Swal from 'sweetalert2'
import { db } from "../../Firebase/FirebaseConfig.js";
import { collection, addDoc } from "firebase/firestore"
import CheckIn from "../CheckIn/CheckIn.jsx";

function CheckInContainer({ onCompraExitosa }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [confirmarCorreo, setConfirmarCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [confirmarTelefono, setConfirmarTelefono] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (correo !== confirmarCorreo || telefono !== confirmarTelefono) {
      alert('Los campos de correo y teléfono deben coincidir.')
      return
    }

    const timestamp = new Date()

    // Guardar la información en Firebase
    try {
      const docRef = await addDoc(collection(db,'libros-seg'), {
        nombre,
        correo,
        telefono,
        timestamp
      })

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tú compra ha sido exitosa',
        text: `Tú número de seguimiento es: ${docRef.id}`,
        showConfirmButton: true,
      })

      onCompraExitosa()

      // Limpiar el formulario después de una compra exitosa
      setNombre('')
      setCorreo('')
      setConfirmarCorreo('')
      setTelefono('')
      setConfirmarTelefono('')
    } catch (error) {
      console.error('Error al guardar la compra:', error)
      alert('Error al realizar la compra. Inténtalo nuevamente.')
    }
  }

  return (
    <CheckIn
      nombre={nombre}
      setNombre={setNombre}
      correo={correo}
      setCorreo={setCorreo}
      confirmarCorreo={confirmarCorreo}
      setConfirmarCorreo={setConfirmarCorreo}
      telefono={telefono}
      setTelefono={setTelefono}
      confirmarTelefono={confirmarTelefono}
      setConfirmarTelefono={setConfirmarTelefono}
      handleSubmit={handleSubmit}
    />
  );
}

export default CheckInContainer;

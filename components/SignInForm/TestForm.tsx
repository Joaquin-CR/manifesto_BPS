"use client";
import React, { useState } from "react";

interface FormData {
  nombre: string;
  telefono: string;
  mail: string;
}

const Formulario: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    mail: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors: Partial<FormData> = {};

    // Validación del campo Nombre
    if (!formData.nombre) {
      validationErrors.nombre = "Por favor, ingresa un nombre";
    }

    // Validación del campo Teléfono
    if (!formData.telefono) {
      validationErrors.telefono = "Por favor, ingresa un teléfono";
    } else if (!/^\d+$/.test(formData.telefono)) {
      validationErrors.telefono = "El teléfono debe contener solo números";
    }

    // Validación del campo Correo electrónico
    if (!formData.mail) {
      validationErrors.mail = "Por favor, ingresa un correo electrónico";
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.mail)
    ) {
      validationErrors.mail = "Por favor, ingresa un correo electrónico válido";
    }

    if (Object.keys(validationErrors).length === 0) {
      // Si no hay errores, enviar el formulario
      console.log("Formulario válido:", formData);
      // Aquí podrías enviar los datos a una API, realizar acciones, etc.
    } else {
      // Si hay errores, mostrarlos
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />
        {errors.nombre && <span>{errors.nombre}</span>}
      </div>

      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleInputChange}
        />
        {errors.telefono && <span>{errors.telefono}</span>}
      </div>

      <div>
        <label htmlFor="mail">Correo Electrónico:</label>
        <input
          type="email"
          id="mail"
          name="mail"
          value={formData.mail}
          onChange={handleInputChange}
        />
        {errors.mail && <span>{errors.mail}</span>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;

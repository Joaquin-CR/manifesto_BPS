"use client";
import Link from "next/link";
import React, { useState } from "react";

interface FormData {
  nombre: string;
  telefono: string;
  mail: string;
  emergencyName: string;
  emergencyPhone: string;
}

export default function SignInForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    mail: "",
    emergencyName: "",
    emergencyPhone: "",
  });
  const [disable, setDisable] = useState(true);

  const validationErrors: Partial<FormData> = {};

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateInput = (name: string) => {
    if (name === formData.nombre) {
      validationErrors.nombre = "Por favor, ingresa un nombre";
    }
    console.log("Valor", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    validateInput(name);
    // Validación del campo Nombre
    if (!formData.nombre) {
      validationErrors.nombre = "Por favor, ingresa un nombre";
    }

    // Validación del campo Teléfono
    if (!formData.telefono) {
      validationErrors.telefono = "Por favor, ingresa un teléfono";
    } else if (!/^\d+$/.test(formData.telefono)) {
      validationErrors.telefono = "Must enter 10 digits number";
    }

    // Validación del campo Correo electrónico
    if (!formData.mail) {
      validationErrors.mail = "Por favor, ingresa un correo electrónico";
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.mail)
    ) {
      validationErrors.mail = "We do not recognize that as an email. Try again";
    }

    // Validación del campo Emergency Name
    if (!formData.emergencyName) {
      validationErrors.emergencyName = "Por favor, ingresa un nombre";
    }

    // Validación del campo Emergency phone
    if (!formData.emergencyPhone) {
      validationErrors.emergencyPhone = "Por favor, ingresa un teléfono";
    } else if (!/^\d+$/.test(formData.emergencyPhone)) {
      validationErrors.emergencyPhone =
        "El teléfono debe contener solo números";
    }
    console.log("Llegando a la validacion");
    if (Object.keys(validationErrors).length > 0) {
      console.log("Si hay");
      setErrors(validationErrors);
      setDisable(true);
    } else {
      setDisable(false);
      console.log("No hay");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.keys(validationErrors).length === 0) {
      // Si no hay errores, enviar el formulario
      console.log("Formulario válido:", formData);
      // Aquí podrías enviar los datos a una API, realizar acciones, etc.
    } else {
      // Si hay errores, mostrarlos
      setErrors(validationErrors);
    }
  };

  const content = (
    <>
      <div className="w-screen bg-bgColor-SignInForm">
        <div className="flex align-middle ml-5 mt-4">
          <Link href={"/"} className="flex align-middle pt-2">
            <picture>
              <source
                media="(min-width:1007px)"
                srcSet="/Images/ArrowLeft@3x.webp"
              />
              <source
                media="(min-width:640px)"
                srcSet="/Images/ArrowLeft@2x.webp"
              />
              <img src="/Images/ArrowLeft.webp" alt="<" />
            </picture>
            <label className="text-Color-M&BTN text-xl Montserrat">Back</label>
          </Link>
        </div>
        <form className="" onSubmit={handleSubmit}>
          <div className="h-auto mt-4 mx-5 drop-shadow-xl bg-bgColor-Form flex flex-col items-center justify-center">
            {/* mb-9 */}
            {/* INPUT NAME */}
            <input
              className={`w-4/5 mx-8 mt-8 h-11 pl-2 py-2 text-black rounded-md border-solid border-2 border-ColorBorder-Inputs mb-7 ${
                errors.nombre && "border-Color-ErrorValidation mb-0"
              }`}
              placeholder="Full Name"
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
            {errors.nombre && (
              <span className="text-Color-ErrorValidation mx-8 mb-1">
                {errors.nombre}
              </span>
            )}
            {/* INPUT PHONE  */}
            <input
              className={`w-4/5 mx-8 h-11 pl-2 py-2 text-black rounded-md border-solid border-2 border-ColorBorder-Inputs mb-7 ${
                errors.telefono && "border-Color-ErrorValidation mb-0"
              }`}
              placeholder="Phone Number"
              type="text"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
            />
            {errors.telefono && (
              <span className="text-Color-ErrorValidation mx-8 mb-1">
                {errors.telefono}
              </span>
            )}
            {/* INPUT MAIL */}
            <input
              type="email"
              id="mail"
              name="mail"
              value={formData.mail}
              onChange={handleInputChange}
              className={`w-4/5 mx-8 h-11 pl-2 py-2 text-black rounded-md border-solid border-2 border-ColorBorder-Inputs mb-7 ${
                errors.mail && "border-Color-ErrorValidation mb-0"
              }`}
              placeholder="Email"
            />
            {errors.mail && (
              <span className="text-Color-ErrorValidation mx-8 mb-1">
                {errors.mail}
              </span>
            )}
            {/* INPUT EMERGENCY CONTACT NAME */}
            <input
              type="text"
              id="emergencyName"
              name="emergencyName"
              value={formData.emergencyName}
              onChange={handleInputChange}
              className={`w-4/5 mx-8 h-11 pl-2 py-2 text-black rounded-md border-solid border-2 border-ColorBorder-Inputs mb-7 ${
                errors.emergencyName && "border-Color-ErrorValidation mb-0"
              }`}
              placeholder="Emergency Contact Name"
            />
            {errors.emergencyName && (
              <span className="text-Color-ErrorValidation mx-8 mb-1">
                {errors.emergencyName}
              </span>
            )}
            {/* INPUT EMERGENCY CONTACT PHONE */}
            <input
              type="text"
              id="emergencyPhone"
              name="emergencyPhone"
              value={formData.emergencyPhone}
              onChange={handleInputChange}
              className={`w-4/5 mx-8 h-11 pl-2 py-2 text-black rounded-md border-solid border-2 border-ColorBorder-Inputs mb-12 ${
                errors.emergencyPhone && "border-Color-ErrorValidation mb-0"
              }`}
              placeholder="Emergency Contact Number"
            />
            {errors.emergencyPhone && (
              <span className="text-Color-ErrorValidation mx-8 mb-12">
                {errors.emergencyPhone}
              </span>
            )}

            {/* <Link href={"/"}> */}
            <button
              disabled={disable}
              type="submit"
              className={`py-3 px-5 mb-12 bg-Color-SubmitForm ${
                disable && "opacity-70"
              }`}
            >
              Save and Sign
            </button>
            {/* </Link> */}
          </div>
        </form>
        <div className="mt-1">
          <picture>
            <source
              media="(min-width:1007px)"
              srcSet="/Images/BgImgForm@3x.webp"
            />
            <source
              media="(min-width:640px)"
              srcSet="/Images/BgImgForm@2x.webp"
            />
            <img
              src="/Images/BgImgForm.webp"
              alt="Image"
              className="w-screen"
            />
          </picture>
        </div>
      </div>
    </>
  );

  return content;
}

'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface FormData {
  name: string;
  phoneNumber: string;
  mail: string;
  emergencyName: string;
  emergencyPhone: string;
}

export default function SignInForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '',
    mail: '',
    emergencyName: '',
    emergencyPhone: '',
  });

  const [firstChange, setFirstChange] = useState(false);
  const [disable, setDisable] = useState(true);

  const validationErrors: Partial<FormData> = {};

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateInput = () => {
    // console.log("Valor", formData);
    //? VALIDATION INPUT NAME
    if (!formData.name) {
      validationErrors.name = 'Please, write your name';
    }

    //? VALIDATION INPUT PHONE NUMBER
    if (!formData.phoneNumber) {
      validationErrors.phoneNumber = 'Please, write your phone';
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      validationErrors.phoneNumber = 'Only accept numbers';
    } else if (formData.phoneNumber.length < 10) {
      validationErrors.phoneNumber = 'Must enter 10 digits number';
    }

    //? VALIDATION INPUT MAIL
    if (!formData.mail) {
      validationErrors.mail = 'Please, Write your email address';
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.mail)
    ) {
      validationErrors.mail = 'We do not recognize that as an email. Try again';
    }

    //? VALIDATION INPUT EMERGENCY NAME
    if (!formData.emergencyName) {
      validationErrors.emergencyName =
        'Please, write the name of a emergency contact';
    }

    //? VALIDATION INPUT EMERGENCY PHONE
    if (!formData.emergencyPhone) {
      validationErrors.emergencyPhone =
        'Please, write the phone number of your emergency contact';
    } else if (!/^\d+$/.test(formData.emergencyPhone)) {
      validationErrors.emergencyPhone = 'Only accept numbers';
    } else if (formData.emergencyPhone.length < 10) {
      validationErrors.emergencyPhone = 'Must enter 10 digits number';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setDisable(true);
    } else {
      setErrors({});
      setDisable(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFirstChange(true);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (!formData) {
      return; // loading
    }
    if (!firstChange) {
      return;
    }
    validateInput();
  }, [formData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.keys(validationErrors).length === 0) {
      // Si no hay errores, enviar el formulario
      console.log('Form valid:', formData);
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
          <Link href={'/'} className="flex align-middle pt-2">
            <img src="/Images/ArrowLeft.webp" alt="<" />
            <label className="text-Color-M&BTN text-xl Montserrat">Back</label>
          </Link>
        </div>
        <form className="z-10" onSubmit={handleSubmit}>
          <div className="mt-4 sm:mx-5 md:m-16 lg:mx-24 drop-shadow-xl bg-bgColor-Form flex flex-col items-center justify-center xl:mx-96">
            {/* mb-9 */}
            {/* INPUT NAME */}
            <input
              className={`w-4/5 mt-8 sm:mx-8 sm:mt-8 lg:mx-14 lg:mt-24 xl:mt-24 xl:mx-14 sm:h-11 lg:h-14 xl:h-14 pl-2 py-2 text-black rounded-md border-solid border-2 ${
                errors.name
                  ? 'border-Color-ErrorValidation mb-0'
                  : 'mb-7 border-ColorBorder-Inputs'
              }`}
              placeholder="Full Name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              required
              onChange={handleInputChange}
            />
            {errors.name && (
              <span className="text-Color-ErrorValidation mx-8 mb-1">
                {errors.name}
              </span>
            )}
            {/* INPUT PHONE  */}
            <input
              className={`w-4/5 mx-8 sm:h-11 lg:h-14 xl:h-14 pl-2 py-2 text-black rounded-md border-solid border-2 ${
                errors.phoneNumber
                  ? 'border-Color-ErrorValidation mb-0'
                  : 'mb-7 border-ColorBorder-Inputs'
              }`}
              placeholder="Phone Number"
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            {errors.phoneNumber && (
              <span className="text-Color-ErrorValidation mx-8 mb-1">
                {errors.phoneNumber}
              </span>
            )}
            {/* INPUT MAIL */}
            <input
              type="email"
              id="mail"
              name="mail"
              required
              value={formData.mail}
              onChange={handleInputChange}
              className={`w-4/5 mx-8 sm:h-11 lg:h-14 xl:h-14 pl-2 py-2 text-black rounded-md border-solid border-2 ${
                errors.mail
                  ? 'border-Color-ErrorValidation mb-0'
                  : 'mb-7 border-ColorBorder-Inputs'
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
              required
              value={formData.emergencyName}
              onChange={handleInputChange}
              className={`w-4/5 mx-8 sm:h-11 lg:h-14 xl:h-14 pl-2 py-2 text-black rounded-md border-solid border-2 ${
                errors.emergencyName
                  ? 'border-Color-ErrorValidation mb-0'
                  : 'mb-7 border-ColorBorder-Inputs'
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
              required
              value={formData.emergencyPhone}
              onChange={handleInputChange}
              className={`w-4/5 mx-8 sm:h-11 lg:h-14 xl:h-14 pl-2 py-2 text-black rounded-md border-solid border-2 ${
                errors.emergencyPhone
                  ? 'border-Color-ErrorValidation mb-0'
                  : 'mb-12 border-ColorBorder-Inputs'
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
                disable && 'opacity-70'
              }`}
            >
              Save and Sign
            </button>
            {/* </Link> */}
          </div>
        </form>
        <div className="mt-1 sticky bottom-0 ">
          <picture>
            <source
              media="(min-width:1007px)"
              srcSet="/Images/FullScreenFormImg.webp"
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

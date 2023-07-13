'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface FormData {
  id: number;
  name: string;
  phoneNumber: string;
  mail: string;
  emergencyName: string;
  emergencyPhone: string;
}

export default function SignInForm() {
  const [formData, setFormData] = useState<FormData>({
    id: -1,
    name: '',
    phoneNumber: '',
    mail: '',
    emergencyName: '',
    emergencyPhone: '',
  });

  const [btnTitle, setButtonTitle] = useState('Save and Sign');
  const [firstChange, setFirstChange] = useState(false);
  const [disable, setDisable] = useState(true);
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emergencyNameError, setEmergencyNameError] = useState('');
  const [emergencyPhoneError, setEmergencyPhoneError] = useState('');

  const handleNameBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      !/^[a-z ,.'-]+$/i.test(e.target.value) ||
      e.target.value.length <= 2 ||
      !/^[a-z ,.'-]+$/i.test(e.target.value) ||
      e.target.value.length > 12
    ) {
      setNameError(
        'Must be 2-12 characters long and have no special characters.'
      );
    } else {
      setNameError('');
    }
  };
  const handlePhoneBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!/^[0-9]+$/.test(e.target.value)) {
      setPhoneError('Phone should only contain digits');
    } else if (e.target.value.length !== 10) {
      setPhoneError('Must enter 10 digit number.');
    } else {
      setPhoneError('');
    }
  };
  const handleEmailBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value)) {
      setEmailError('Email is invalid');
    } else {
      setEmailError('');
    }
  };
  const handleEmergenyNameBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      !/^[a-z ,.'-]+$/i.test(e.target.value) ||
      e.target.value.length < 2 ||
      !/^[a-z ,.'-]+$/i.test(e.target.value) ||
      e.target.value.length > 12
    ) {
      setEmergencyNameError(
        'Must be 2-12 characters long and have no special characters.'
      );
    } else {
      setEmergencyNameError('');
    }
  };
  const handleEmergencyPhoneBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!/^[0-9]+$/.test(e.target.value)) {
      setEmergencyPhoneError('should only contain digits');
    } else if (e.target.value.length !== 10) {
      setEmergencyPhoneError('Must enter 10 digit number.');
    } else {
      setEmergencyPhoneError('');
    }
  };

  const validateInput = () => {
    if (
      nameError &&
      phoneError &&
      emailError &&
      emergencyNameError &&
      emergencyPhoneError
    ) {
      setDisable(true);
    } else {
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
    switch (name) {
      case 'name':
        console.log('entando');
        handleNameBlur(e);
        break;
      case 'phoneNumber':
        handlePhoneBlur(e);
        break;
      case 'mail':
        handleEmailBlur(e);
        break;
      case 'emergencyName':
        handleEmergenyNameBlur(e);
        break;
      case 'emergencyPhone':
        handleEmergencyPhoneBlur(e);
        break;
    }
  };

  useEffect(() => {
    const edit = localStorage.getItem('Edit Id');
    if (edit) {
      setButtonTitle('Update');
      const dataList = JSON.parse(localStorage.getItem('JSONList') ?? 'null');
      for (let i = 0; i < dataList.length; i++) {
        if (dataList[i].id == edit) {
          setFormData(dataList[i]);
          break;
        }
      }
    }
  }, []);

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
    let dataList = JSON.parse(localStorage.getItem('JSONList') ?? 'null');
    if (btnTitle === 'Update') {
      const id = localStorage.getItem('Edit Id');
      for (let i = 0; i < dataList.length; i++) {
        if (dataList[i].id == id) {
          dataList[i].name = formData.name;
          dataList[i].phoneNumber = formData.phoneNumber;
          dataList[i].mail = formData.mail;
          dataList[i].emergencyName = formData.emergencyName;
          dataList[i].emergencyPhone = formData.emergencyPhone;
          break;
        }
      }
      localStorage.setItem('JSONList', JSON.stringify(dataList));
      localStorage.removeItem('Edit Id');
      window.location.href = '/';
    } else {
      const maxId = dataList.reduce((max: any, item: any) => {
        if (item.id > max) {
          return item.id;
        } else {
          return max;
        }
      }, -1);
      formData.id = maxId + 1;
      dataList.push(formData);
      localStorage.setItem('JSONList', JSON.stringify(dataList));
      window.location.href = '/';
    }
  };

  const goBackHome = () => {
    localStorage.removeItem('Edit Id');
  };

  const content = (
    <>
      <div className="relative w-screen bg-bgColor-SignInForm h-full max-h-screen">
        <div className="flex align-middle ml-5 mt-4">
          <Link
            href={'/'}
            className="flex align-middle pt-2"
            onClick={goBackHome}
          >
            <img src="/Images/ArrowLeft.webp" alt="<" />
            <label className="text-Color-M&BTN text-xl Montserrat">Back</label>
          </Link>
        </div>
        <form className="z-10 md:relative" onSubmit={handleSubmit}>
          <div className="mt-4 sm:mx-5 md:m-16 lg:mx-24 drop-shadow-xl bg-bgColor-Form flex flex-col items-center justify-center xl:mx-96">
            {/* INPUT NAME */}
            <input
              className={`w-4/5 mt-8 sm:mx-8 sm:mt-8 lg:mx-14 lg:mt-24 xl:mt-24 xl:mx-14 sm:h-11 lg:h-14 xl:h-14 pl-2 py-2 text-black rounded-md border-solid border-2 ${
                nameError
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
            {nameError && (
              <span className="text-Color-ErrorValidation mx-8 mb-1">
                {nameError}
              </span>
            )}
            {/* INPUT PHONE  */}
            <input
              className={`w-4/5 mx-8 sm:h-11 lg:h-14 xl:h-14 pl-2 py-2 text-black rounded-md border-solid border-2 ${
                phoneError
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
            {phoneError && (
              <span className="text-Color-ErrorValidation mx-8 mb-1">
                {phoneError}
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
                emailError
                  ? 'border-Color-ErrorValidation mb-0'
                  : 'mb-7 border-ColorBorder-Inputs'
              }`}
              placeholder="Email"
            />
            {emailError && (
              <span className="text-Color-ErrorValidation mx-8 mb-1">
                {emailError}
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
                emergencyNameError
                  ? 'border-Color-ErrorValidation mb-0'
                  : 'mb-7 border-ColorBorder-Inputs'
              }`}
              placeholder="Emergency Contact Name"
            />
            {emergencyNameError && (
              <span className="text-Color-ErrorValidation mx-8 mb-1">
                {emergencyNameError}
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
                emergencyPhoneError
                  ? 'border-Color-ErrorValidation mb-0'
                  : 'mb-12 border-ColorBorder-Inputs'
              }`}
              placeholder="Emergency Contact Number"
            />
            {emergencyPhoneError && (
              <span className="text-Color-ErrorValidation mx-8 mb-12">
                {emergencyPhoneError}
              </span>
            )}
            <button
              disabled={disable}
              type="submit"
              className={`py-3 px-5 mb-12 bg-Color-SubmitForm text-white ${
                disable && 'opacity-70'
              }`}
            >
              {btnTitle}
            </button>
          </div>
        </form>
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <picture>
          <source
            media="(min-width:1007px)"
            srcSet="/Images/FullScreenFormImg.webp"
          />
          <source
            media="(min-width:640px)"
            srcSet="/Images/BgImgForm@2x.webp"
          />
          <img src="/Images/BgImgForm.webp" alt="Image" className="w-screen" />
        </picture>
      </div>
    </>
  );

  return content;
}

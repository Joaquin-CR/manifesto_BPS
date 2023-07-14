'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Input from '../Input/Input';

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
    if (
      !nameError &&
      !phoneError &&
      !emailError &&
      !emergencyNameError &&
      !emergencyPhoneError
    ) {
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
        <form className="z-10 relative" onSubmit={handleSubmit}>
          <div className="mt-4 sm:mx-5 md:m-16 lg:mx-24 drop-shadow-xl bg-bgColor-Form flex flex-col items-center justify-center xl:mx-96 pt-4">
            {/* INPUT NAME */}
            <Input
              name={'name'}
              placeholder={'Full Name'}
              value={formData.name}
              errors={nameError}
              type={'text'}
              onValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleInputChange(e);
              }}
            />

            {/* INPUT PHONE  */}
            <Input
              name={'phoneNumber'}
              placeholder={'Phone Number'}
              value={formData.phoneNumber}
              errors={phoneError}
              type={'text'}
              onValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleInputChange(e);
              }}
            />

            {/* INPUT MAIL */}
            <Input
              name={'mail'}
              placeholder={'Email'}
              value={formData.mail}
              errors={emailError}
              type={'email'}
              onValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleInputChange(e);
              }}
            />

            {/* INPUT EMERGENCY CONTACT NAME */}
            <Input
              name={'emergencyName'}
              placeholder={'Emergency Contact Name'}
              value={formData.emergencyName}
              errors={emergencyNameError}
              type={'text'}
              onValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleInputChange(e);
              }}
            />

            {/* INPUT EMERGENCY CONTACT PHONE */}
            <Input
              name={'emergencyPhone'}
              placeholder={'Emergency Contact Number'}
              value={formData.emergencyPhone}
              errors={emergencyPhoneError}
              type={'text'}
              onValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleInputChange(e);
              }}
            />

            <button
              disabled={disable}
              type="submit"
              className={`mt-3 py-3 px-5 mb-12 bg-Color-SubmitForm text-white ${
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

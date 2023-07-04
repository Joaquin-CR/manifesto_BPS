import Link from 'next/link'
import React from 'react'

export default function SignInForm() {

  const content = (
    <>
      <div className='w-screen bg-bgColor-SignInForm'>
        <div className='flex align-middle ml-5 mt-4'>
          <Link href={'/'} className='flex align-middle'>
            <picture>
              <source media="(min-width:1007px)" srcSet="/Images/ArrowLeft@3x.webp" />
              <source media="(min-width:640px)" srcSet="/Images/ArrowLeft@2x.webp" />
              <img src="/Images/ArrowLeft.webp" alt="<" />
            </picture>
            <label className='text-Color-M&BTN text-xl Montserrat'>Back</label>
          </Link>
        </div>
        <form action="" className=''>
          <div className='h-auto mt-4 mx-5 drop-shadow-xl bg-bgColor-Form flex flex-col items-center justify-center' >
            <input type="text" className='w-4/5 mx-8 mt-8 mb-9 h-11 pl-2 py-2 text-black rounded-md border-solid border-2 border-ColorBorder-Inputs' placeholder='Full Name' />
            <input type="text" className='w-4/5 mx-8 mb-9 h-11 pl-2 py-2 text-black rounded-md border-solid border-2 border-ColorBorder-Inputs' placeholder='Phone Number' />
            <input type="text" className='w-4/5 mx-8 mb-9 h-11 pl-2 py-2 text-black rounded-md border-solid border-2 border-ColorBorder-Inputs' placeholder='Email' />
            <input type="text" className='w-4/5 mx-8 mb-9 h-11 pl-2 py-2 text-black rounded-md border-solid border-2 border-ColorBorder-Inputs' placeholder='Emergency Contact Name' />
            <input type="text" className='w-4/5 mx-8 mb-12 h-11 pl-2 py-2 text-black rounded-md border-solid border-2 border-ColorBorder-Inputs' placeholder='Emergency Contact Number' />
            <Link href={'/'}>
              <button className='py-3 px-5 mb-12 bg-Color-SubmitForm'>Save and Sign</button>
            </Link>
          </div>
        </form>

        <div className=''>
          <picture>
            <source media="(min-width:1007px)" srcSet="/Images/BgImgForm@3x.webp" />
            <source media="(min-width:640px)" srcSet="/Images/BgImgForm@2x.webp" />
            <img src="/Images/BgImgForm.webp" alt="Image" className='w-screen' />
          </picture>
        </div>
      </div>
    </>
  )

  return content
}

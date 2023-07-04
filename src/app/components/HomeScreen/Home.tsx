import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='w-screen'>
        <picture>
          <source media='(min-width:1008px)' srcSet='/Images/BgImgHome@3x.webp' />
          <source media='(min-width:640px)' srcSet='/Images/BgImgHome@2x.webp'/>
          <img src="/Images/BgImgHome.webp" alt="Manifesto" className='w-screen'/>
        </picture>
      </div>
      <div className='pb-44 pt-36 w-80 flex flex-col items-center text-center text-xl font-medium'>
        {/* VA LA LISTA */}
        No one is currently signed in. 
        Be the fist to sign in.
      </div>
      <div>
        <button className='w-44 h-14 flex-grow-0 py-3 px-8
         bg-Color-M&BTN text-black Inter'>Sign In</button>
      </div>
    </>
  )
}

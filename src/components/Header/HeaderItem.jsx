import React from 'react'
const HeaderItem = ({name,icon}) => {
  return (
    <nav className='text-white flex items-center font-semibold cursor-pointer gap-3 text-[15px] hover:underline underline-offset-8'>
        <h1>{name}</h1>
        <h1>{icon}</h1>
    </nav>
  )
}

export default HeaderItem
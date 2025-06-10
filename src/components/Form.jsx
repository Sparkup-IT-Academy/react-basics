import React from 'react'

export default function Form({ title, children }) {
  return (
    <div className='form-wrapper p-4 border border-gray-300 shadow-md  rounded-md max-w-[50%] mx-auto mt-3'>
        <h2 className='title text-center font-semibold text-blue-800 text-2xl' >{ title }</h2>
        <form className='mt-5'>
            { children }
        </form>
        <button className='px-5 py-2 bg-blue-500 text-white rounded-md w-full block mt-5'>Submit</button>
    </div>
  )
}

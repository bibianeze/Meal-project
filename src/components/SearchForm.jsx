import React from 'react'
import { useGlobalContext } from '../../context'
import { useRef } from 'react'

const SearchForm = () => {
  const {setSearchValue} = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const inputContainer = useRef()
  return (
    <div className="my-3">
      <form className='w-50  mx-auto' onSubmit={handleSubmit}>
        <label htmlFor="name" className='form-label text-success fw-bold fs-4 text-center w-100'>
          Search for your Favorite Meal
        </label>

        <input type="text"
          ref={inputContainer}
          onChange={() => setSearchValue(inputContainer.current.value)}
          id='name'
          className='form-control border border-sucess border-2 shadow-none bg-success-subtle text-success fs-5'
        
        />
      </form>
      
    </div>
  )
}

export default SearchForm

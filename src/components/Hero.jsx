import React from 'react'

const Hero = () => {
  return (
    <div className='hero-wrapper px-2 d-flex justify-content-center justify-content-md-start align-items-center'>
      <div className='text-start'>
        <p className='display-5 text-white'>Healthy Foods</p>
        <h1 className='text-White fw-light'>Explore Different Meal</h1>
        <button className='btn btn-success text-white'>
            <a href="#below" className='text-decoration-none text-white'>See More Below</a>
        </button>
      </div>
    </div>
  )
}

export default Hero

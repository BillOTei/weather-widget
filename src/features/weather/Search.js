import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { fetchCityWeather, reset } from './searchSlice'

const mapDispatch = { reset }

const Search = ({ reset }) => {
  const [cityName, setCityName] = useState('')
  const [unit, setUnit] = useState('metric')
  const dispatch = useDispatch()

  const onChange = e => setCityName(e.target.value)
  const onChangeUnit = e => setUnit(e.target.value)

  return (
    <div>

      <form
        className={'my-form'}
        onSubmit={e => {
          e.preventDefault()
          if (!cityName.trim()) {
            return
          }
          dispatch(fetchCityWeather({ cityName, unit }))
        }}
      >
        <div className='container'>
          <h1>Get weather info</h1>
          <ul>
            <li>
              <input placeholder={'City'} value={cityName} onChange={onChange} />
            </li>
            <li>
              <select value={unit} onChange={onChangeUnit}>
                <option value='metric'>Metric</option>
                <option value='imperial'>Imperial</option>
                <option value='kelvin'>Kelvin</option>
              </select>
            </li>
            <li>
              <div className='grid grid-2'>
                <button className='btn-grid' type='submit'>
                <span className='back'>
                  <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg' alt='' />
                </span>
                  <span className='front'>SUBMIT</span>
                </button>
                <button className='btn-grid' type='reset' onClick={() => {
                  setCityName('')
                  reset()
                }}>
                <span className='back'>
                  <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg' alt='' />
                </span>
                  <span className='front'>RESET</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </form>
    </div>
  )
}

export default connect(null, mapDispatch)(Search)

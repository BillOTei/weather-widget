import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCityWeather } from './searchSlice'

const Search = () => {
  const [cityName, setCityName] = useState('')
  const [unit, setUnit] = useState('metric')
  const dispatch = useDispatch()

  const onChange = e => setCityName(e.target.value)
  const onChangeUnit = e => setUnit(e.target.value)

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!cityName.trim()) {
            return
          }
          dispatch(fetchCityWeather({ cityName, unit }))
        }}
      >
        <input value={cityName} onChange={onChange} />
        <select value={unit} onChange={onChangeUnit}>
          <option value='metric'>Metric</option>
          <option value='imperial'>Imperial</option>
          <option value='kelvin'>Kelvin</option>
        </select>
        <button type='submit'>Get weather</button>
      </form>
    </div>
  )
}

export default Search

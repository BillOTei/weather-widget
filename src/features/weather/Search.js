import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCityWeather } from './searchSlice'

const Search = () => {
  const [cityName, setCityName] = useState('')
  const dispatch = useDispatch()

  const onChange = e => setCityName(e.target.value)

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!cityName.trim()) {
            return
          }
          dispatch(fetchCityWeather(cityName))
        }}
      >
        <input value={cityName} onChange={onChange} />
        <button type='submit'>Get weather</button>
      </form>
    </div>
  )
}

export default Search

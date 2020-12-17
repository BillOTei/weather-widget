import React from 'react'
import { useSelector } from 'react-redux'
import { City } from './City'

const CityWrapper = () => {
  const { city, loading, error } = useSelector(state => state.search)

  return city ? <City {...city} /> : <></>
}

export default CityWrapper

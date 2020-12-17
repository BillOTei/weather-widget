import React from 'react'
import { connect, useSelector } from 'react-redux'
import { City } from './City'

const CityWrapper = () => {
  const { city, loading, error } = useSelector(state => state.search)

  return city ? <City {...city} /> : <></>
}

export default connect(
  null,
  null
)(CityWrapper)

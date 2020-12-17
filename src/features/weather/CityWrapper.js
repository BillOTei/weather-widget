import React from 'react'
import { useSelector } from 'react-redux'
import { City } from './City'
import Loader from 'react-loader-spinner'

const CityWrapper = () => {
  const { city, loading, error } = useSelector(state => state.search)

  return loading === 'pending' ? <div className={'loader'}><Loader color={'#372F2F'} type={'ThreeDots'} /></div> : <div>
    {city ? <City {...city} /> : city === null ? <div>City not found.</div> : <></>}
    {error && <p>An error occurred during the request, please try again or contact
      us if the problem persists.</p>}
  </div>
}

export default CityWrapper

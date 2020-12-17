import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { client } from '../../apollo-client'
import { getGetCityWeather } from '../../api'

export const fetchCityWeather = createAsyncThunk(
  'weather/getCityByName',
  async (cityName, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().search
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }
    const response = await client.query({
      query: getGetCityWeather,
      variables: { name: cityName }
    })

    return response.data.getCityByName
  }
)

const searchSlice = createSlice({
  name: 'search',
  initialState: { currentRequestId: undefined, city: undefined, loading: 'idle', error: null },
  extraReducers: {
    [fetchCityWeather.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    },
    [fetchCityWeather.fulfilled]: (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.city = action.payload
        state.currentRequestId = undefined
      }
    },
    [fetchCityWeather.rejected]: (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.error = action.error
        state.currentRequestId = undefined
      }
    }
  }
})

export default searchSlice.reducer

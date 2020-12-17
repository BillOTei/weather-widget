import { combineReducers } from 'redux'
import searchReducer from 'features/weather/searchSlice'

export default combineReducers({
  search: searchReducer
})

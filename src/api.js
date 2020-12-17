import { gql } from '@apollo/client'

export const getGetCityWeather = gql`
    query GetCityWeather($name: String!, $unit: Unit!) {
        getCityByName(name: $name, config: { units: $unit }) {
        country
        weather {
          temperature {
            actual
    
            feelsLike
    
            min
    
            max
          }
          summary {
            title
            description
          }
          wind {
            speed
            deg
          }
          clouds {
            all
            visibility
            humidity
          }
        }
      }
      }
    `
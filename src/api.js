import { gql } from '@apollo/client'

export const getGetCityWeather = gql`
    query GetCityWeather($name: String!) {
        getCityByName(name: $name, config: { units: metric }) {
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
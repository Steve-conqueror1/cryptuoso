import { gql } from '@apollo/client';
 
export const getRobot = (id: string) => {

    const ROBOT_QUERY =   gql`
    query Robots {
      robots_by_pk(id: "${id}") {
          id
          name
          robot_settings {
          robot_settings
          }           
      }
    }
  `;
  
  return ROBOT_QUERY
}

   
 
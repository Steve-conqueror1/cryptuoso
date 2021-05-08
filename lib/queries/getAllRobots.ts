import { gql } from '@apollo/client';

export const getQuery = () => {
  const LOAD_ROBOTS= gql`
    query GetRobots {
      robots(limit:10) {
        id
        code      
      }
    }
  `;
   
  return LOAD_ROBOTS;
}

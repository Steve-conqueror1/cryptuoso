import { gql } from '@apollo/client';
 
  export const LOAD_ROBOTS =  gql`
          query Robots {
              robots {
                id
                code            
              }
            }`;

   
 


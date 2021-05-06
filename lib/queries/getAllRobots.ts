import { gql } from '@apollo/client';
import { useQuery} from '@apollo/client';

export const LOAD_ROBOTS= gql`
  query GetRobots {
    robots(limit:10, offset:0) {
      id
      code      
    }
  }
`;


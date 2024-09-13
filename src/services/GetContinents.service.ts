import { gql } from '@apollo/client';
import { clientGHQL } from '../config/graphql';

const GET_CONTINENTS = gql`
  query{
    continents {
      name
    }
  }
`;
const GetContinentsService = async () => {
    try {
        const result = await clientGHQL.query({
            query: GET_CONTINENTS
        });
        console.log(result.data)
        return {
            isSuccess: true,
            data: result.data,
            error: null
        }
    } catch (err: any) {
        console.log(err)
        return {
            isSuccess: false,
            data: null,
            error: err
        }
    }
}

export default GetContinentsService
import { gql } from '@apollo/client';
import { clientGHQL } from '../config/graphql';

const GET_CONTINENTS = gql`
  query{
    continents {
      name
      code
    }
  }
`;
const GetContinentsService = async () => {
  try {
    const result = await clientGHQL.query({
      query: GET_CONTINENTS
    });

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


import { gql } from "@apollo/client";
import { clientGHQL } from "../config/graphql";
import { Response } from "../models/models";


const GET_COUNTRIES_BY_CONTINENT = gql`
  query GetCountriesByContinent($continents: [String!]) {
     countries(filter: { continent: { in: $continents } }) {
        name
        code
        continent {
            name
        }
        capital
        languages {
            name
        }
        currency
         states {
            name
            code
         }
        
    }
  }
`;




const CoutriesFilterService = async (continents: string[]): Promise<Response> => {
    try {
        const result = await clientGHQL.query({
            query: GET_COUNTRIES_BY_CONTINENT,
            variables: { continents },
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

export default CoutriesFilterService
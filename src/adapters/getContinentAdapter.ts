import Continent from "../models/Continent.model";



export const getContinentAdapter = (continent: any): Continent => ({
    code: continent.code,
    contries: continent.contries,
    name: continent.name
})
import Country from "./Country.model"



export default interface Continent {
    code: string,
    contries: Country[]
    name: string
}
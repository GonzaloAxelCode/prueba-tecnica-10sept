import Country from "./Country.model"



export default interface State {
    code: string
    country: Country
    name: string
}
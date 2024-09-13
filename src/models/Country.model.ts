
import Continent from "./Continent.model"
import Language from "./Language.model"
import Subdivision from "./Subdivision.model"

export default interface Country {
    awsRegion: string
    capital: String
    code: string
    continent: Continent
    currencies: string
    currency: string
    emoji: string
    emojiU: string
    languages: Language
    native: string
    phone: string
    phones: string
    states: any[]
    subdivisions: Subdivision
}
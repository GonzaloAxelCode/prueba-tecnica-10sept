export interface Response {
    data: any
    error: any
    isSuccess: boolean
}

export interface State {
    code: string
    country: Country
    name: string
}
export interface Language {
    code: string
    name: string
    native: string
    rtl: string
}

export interface Country {
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

}
export interface Continent {
    code: string,
    contries: Country[]
    name: string
}
export interface CountryItem {
    background?: string | undefined | null
    flagImage?: string
    name?: string
    continent?: string
    capital?: string
    language?: any[]
    population?: string,
    currency?: string,
    region?: any[]
}
export interface Region {
    name: string
    code: any
}


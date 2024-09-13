
export const countriesAdapter = (data: any) => {


    return data.map((country: any) => {


        return {
            continent: country.continent.name,
            name: country.name,
            flagImage: `https://flagcdn.com/112x84/${country.code.toString().toLowerCase()}.png`,
            background: `https://picsum.photos/seed/${country.name}/600/400`,

            capital: country.capital,
            language: country.languages,
            currency: country.currency,
            region: country.states
        }
    })

}
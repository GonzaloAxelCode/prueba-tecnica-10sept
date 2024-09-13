
export const countriesAdapter = (data: any) => {

    return data.map((country: any) => {

        return {
            continent: country.continent.name,
            name: country.name,
            flagImage: `https://flagcdn.com/112x84/${country.code.toString().toLowerCase()}.png`,
            background: "https://media.istockphoto.com/id/1396814518/es/vector/imagen-pr%C3%B3ximamente-sin-foto-sin-imagen-en-miniatura-disponible-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=aA0kj2K7ir8xAey-SaPc44r5f-MATKGN0X0ybu_A774=",
            capital: country.capital,
            language: country.languages,
            currency: country.currency,
            region: country.states
        }
    })
}
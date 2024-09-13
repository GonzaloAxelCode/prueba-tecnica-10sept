import InputSelectSearch from "../../components/InputSelectSearch"
import ItemCountry, { CountryItem } from "../../components/ItemCountry"
import ModalInformationCountry from "../../components/ModalInformationCountry"
import { useUI } from "../../contexts/UIContext"



const countriesFilter: CountryItem[] = [
    {
        name: "Peru",
        flagImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS8HmQlMalHG14YpWHYkN3Uj9Wq2DCsBB3mw&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKOiU1VOFukYAgpdGGZLdJfIrInj6G8bEXg&s",
        continent: "America",
        capital: "Lima",
        language: "Español",
        currency: "Soles",
        region: [
            {
                name: "Moquegua",
                code: "MO"
            }
        ],
        population: "34M people"
    }
]

const HomePage = () => {
    const { openModalCountryInformation } = useUI()
    return (
        <div className="">

            <InputSelectSearch />
            <h2>Lista de continentes</h2>
            <div>
                {countriesFilter.map((country: CountryItem, index: any) => {
                    return <ItemCountry

                        key={index}
                        country={country}
                    />
                })}

            </div>
            <div className="absolute bottom-0 right-0">
                <ModalInformationCountry open={openModalCountryInformation} />
            </div>

        </div>

    )
}

export default HomePage
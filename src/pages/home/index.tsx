import InputSelectSearch from "../../components/InputSelectSearch"
import ItemCountry, { CountryItem } from "../../components/ItemCountry"
import ModalInformationCountry from "../../components/ModalInformationCountry"
import { useData } from "../../hooks/useData"


const HomePage = () => {

    const { countriesState, continentsState } = useData()
    console.log(continentsState.continents)
    console.log(countriesState.countries)

    return (
        <div className="relative mx-auto">
            <div className="mx-auto">
                <InputSelectSearch />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-3 px-2">
                {countriesState.countries.map((country: CountryItem, index: any) => {
                    return <ItemCountry
                        key={index}
                        country={country}
                    />
                })}

            </div>

            <div className="fixed bottom-4  right-4 z-30">
                <ModalInformationCountry />
            </div>
        </div>

    )
}

export default HomePage
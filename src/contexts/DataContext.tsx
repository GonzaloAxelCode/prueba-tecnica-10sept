import { createContext, useContext, useState } from "react";
import { CountryItem } from "../components/ItemCountry";


const DataContext = createContext<DataContextTypes>({
    countrySelected: null,
    setCountrySelected: () => null
})


interface DataContextTypes {
    countrySelected: CountryItem | null
    setCountrySelected: Function
}


export const UIProvider = ({ children }: any) => {

    const [countrySelected, setCountrySelected] = useState<CountryItem | null>(null)


    const values: DataContextTypes = {
        countrySelected, setCountrySelected
    }
    return <DataContext.Provider value={values}>
        {children}
    </DataContext.Provider>
}


export const useData = () => useContext<DataContextTypes>(DataContext)


import { createContext, useEffect, useState } from "react";
import { continentsAdapter } from "../adapters/continents.adapter";
import { countriesAdapter } from "../adapters/country.adapter";

import { Response } from "../models/models";
import GetContinentsService from "../services/GetContinents.service";
import CoutriesFilterService from "../services/GetCountryFilter.service";


export const DataContext = createContext<any>({})




interface DataContextTypes {
    countrySelected: any
    setCountrySelected: Function
    countriesState: any
    continentsState: any
    GetCountriesFilter: Function,
    groupContinentsSelected: any
    setGroupContinentsSelected: Function
    searchTerms: string, setSearchTerms: Function
}

export const DataProvider = ({ children }: any) => {

    const [groupContinentsSelected, setGroupContinentsSelected] = useState<any>([]);
    const [searchTerms, setSearchTerms] = useState<string>("");

    const [countrySelected, setCountrySelected] = useState<any>({})
    const [continentsState, setContinentsState] = useState<any>({
        continents: [],
        loading: false,
        error: null
    })
    const [countriesState, setCountriesState] = useState<any>({
        countries: [],
        loading: false,
        error: null,


    })
    const GetCountriesFilter = async (continents: string[], terms: any) => {
        setCountriesState((prevState: any) => ({
            ...prevState,
            loading: true
        }));
        const response: Response = await CoutriesFilterService(continents)
        if (response.isSuccess) {
            const resolveCountries = countriesAdapter(response.data.countries)
            const filterCountries = resolveCountries.filter((country: any) => country.name.includes(terms))

            setCountriesState((prevState: any) => ({
                ...prevState,
                loading: false,
                countries: terms === "" ? countriesAdapter(response.data.countries) : filterCountries,

            }));

        } else {
            setCountriesState((prevState: any) => ({
                ...prevState,
                loading: false
            }));
        }

    }
    const GetContinents = async () => {
        setContinentsState((prevState: any) => ({
            ...prevState,
            loading: true
        }));
        const response: Response = await GetContinentsService()
        if (response.isSuccess) {
            setContinentsState((prevState: any) => ({
                ...prevState,
                loading: false,
                continents: continentsAdapter(response.data)
            }));

        } else {
            setContinentsState((prevState: any) => ({
                ...prevState,
                loading: false
            }));
        }

    }
    useEffect(() => {
        GetContinents()
    }, [])
    useEffect(() => {
        GetCountriesFilter(groupContinentsSelected.length !== 0 ? groupContinentsSelected : ['SA', 'EU', 'NA', 'AF', 'AN', 'AS', 'OC'], searchTerms)
    }, [groupContinentsSelected, searchTerms])

    const values: DataContextTypes = {
        countrySelected,
        setCountrySelected,
        countriesState,
        continentsState,
        GetCountriesFilter,
        groupContinentsSelected,
        setGroupContinentsSelected,
        searchTerms, setSearchTerms
    }
    return <DataContext.Provider value={values}>
        {children}
    </DataContext.Provider>
}



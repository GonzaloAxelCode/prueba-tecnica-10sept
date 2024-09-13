import { createContext, useCallback, useEffect, useState } from "react";
import { continentsAdapter } from "../adapters/continents.adapter";
import { countriesAdapter } from "../adapters/country.adapter";
import { Response } from "../models/Response";
import GetContinentsService from "../services/GetContinents.service";
import CoutriesFilterService from "../services/GetCountryFilter.service";


export const DataContext = createContext<any>({})


interface DataContextTypes {
    countrySelected: any
    setCountrySelected: Function
    countriesState: any
    continentsState: any
    GetCountriesFilter: Function
}


export const DataProvider = ({ children }: any) => {
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
        hasMore: true,
        currentIndex: 0,
        chunkSize: 20
    })



    const GetCountriesFilter = async (continents: string[]) => {
        if (countriesState.loading || !countriesState.hasMore) return;

        setCountriesState((prevState: any) => ({
            ...prevState,
            loading: false
        }));
        const response: Response = await CoutriesFilterService(continents)
        if (response.isSuccess) {
            const newCountries = response.data.countries.slice(
                countriesState.currentIndex,
                countriesState.currentIndex + countriesState.chunkSize
            );
            setCountriesState((prevState: any) => ({
                ...prevState,
                loading: false,
                countries: countriesAdapter(newCountries),
                currentIndex: prevState.currentIndex + prevState.chunkSize,
                hasMore: newCountries.length === prevState.chunkSize
            }));

        } else {
            setCountriesState((prevState: any) => ({
                ...prevState,
                loading: false
            }));
        }

    }

    const handleScroll = useCallback(() => {

        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && !countriesState.loading) {
            GetCountriesFilter(["AF", "AS", "EU"])
        }


    }, []);

    useEffect(() => {
        GetCountriesFilter(["AF", "AS", "EU"])

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

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

    const values: DataContextTypes = {
        countrySelected,
        setCountrySelected,
        countriesState,
        continentsState,
        GetCountriesFilter
    }
    return <DataContext.Provider value={values}>
        {children}
    </DataContext.Provider>
}



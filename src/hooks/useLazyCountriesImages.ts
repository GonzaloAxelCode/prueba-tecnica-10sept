import { useEffect, useState } from 'react';
import { CountryItem } from '../models/models';
import GetImagesPexel from '../services/GetImagesPexel.service';

const useLazyCountriesImages = (countries: CountryItem[]) => {

    const [visibleCountries, setVisibleCountries] = useState<CountryItem[]>(countries.slice(0, 8));
    const [hasMore, setHasMore] = useState(true);


    const generateCountryImages = async (countryList: CountryItem[]) => {
        const countriesWithImages = await Promise.all(
            countryList.map(async (country) => {
                const imageUrl = await GetImagesPexel(country.name);
                return {
                    ...country,
                    background: imageUrl || country.background,
                };
            })
        );
        return countriesWithImages;
    };

    const loadMoreData = async () => {
        if (visibleCountries.length >= countries.length) {
            setHasMore(false);
            return;
        }

        const newCountries = countries.slice(visibleCountries.length, visibleCountries.length + 8);

        const countriesWithImages = await generateCountryImages(newCountries);

        setVisibleCountries((prevCountries) => [
            ...prevCountries,
            ...countriesWithImages,
        ]);
    };
    useEffect(() => {

        const loadInitialCountries = async () => {
            const initialCountries = await generateCountryImages(countries.slice(0, 8));
            setVisibleCountries(initialCountries);
        };

        loadInitialCountries();
    }, [countries]);

    return { visibleCountries, loadMoreData, hasMore }
}

export default useLazyCountriesImages
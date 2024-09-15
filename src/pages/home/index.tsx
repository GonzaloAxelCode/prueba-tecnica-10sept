import InfiniteScroll from "react-infinite-scroll-component";
import InputSelectSearch from "../../components/InputSelectSearch";
import ItemCountry from "../../components/ItemCountry";
import ModalInformationCountry from "../../components/ModalInformationCountry";
import SkeletonCountries from "../../components/SkeletonCountries";
import { useData } from "../../hooks/useData";
import useLazyCountriesImages from "../../hooks/useLazyCountriesImages";
import { CountryItem } from "../../models/models";

const HomePage = () => {
    const { countriesState } = useData();
    const countries = countriesState.countries;
    const loading = countriesState.loading;
    const { visibleCountries, loadMoreData, hasMore } = useLazyCountriesImages(countries)
    return (
        <div className="relative mx-auto w-full">
            <div className="mx-auto">
                <InputSelectSearch />
            </div>
            <div className="flex w-full h-full">


                <InfiniteScroll
                    dataLength={visibleCountries.length}
                    next={loadMoreData}
                    hasMore={hasMore}
                    loader={<SkeletonCountries />}

                    className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-2"
                >
                    {!loading &&
                        visibleCountries.map((country: CountryItem, index: any) => {
                            return <ItemCountry key={index} country={country} />;
                        })}

                    {loading && <SkeletonCountries />}
                </InfiniteScroll>
            </div>
            <div className="fixed bottom-4 right-4 z-30">
                <ModalInformationCountry />
            </div>
        </div>
    );
};

export default HomePage;

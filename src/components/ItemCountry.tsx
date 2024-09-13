import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { useData } from "../contexts/DataContext"
import { useUI } from "../contexts/UIContext"
import { Region } from "./ModalInformationCountry"


export interface CountryItem {
    background?: string | undefined | null
    flagImage: string
    name: string
    continent: string
    capital: string
    language: string
    population: string,
    currency: string,
    region: Region[]
}
const ItemCountry = ({ country }: { country: CountryItem }) => {
    const { background, flagImage, name, continent, capital, language, currency, region, population } = country
    const { openModalCountryInformation, setOpenModalCountryInformation } = useUI()
    const { setCountrySelected } = useData()

    return (
        <div onClick={() => {
            setCountrySelected(country)
            setOpenModalCountryInformation(!openModalCountryInformation)
        }}>


            <Card className={`py-4 cursor-pointer ${openModalCountryInformation ? "bg-blue-200" : "bg-white"}`}

            >
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
                    <div className="flex flex-row gap-3 z-50">
                        <img src={flagImage} alt={name} className="object-contain" width={40} height={25} />
                        <div>
                            <h4 className="font-bold text-gray-600 text-large">{name}</h4>
                            <h4 className="font-bold text-gray-300 text-sm">{continent}</h4>
                        </div>


                    </div>



                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image

                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={background || "https://media.istockphoto.com/id/1396814518/es/vector/imagen-pr%C3%B3ximamente-sin-foto-sin-imagen-en-miniatura-disponible-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=aA0kj2K7ir8xAey-SaPc44r5f-MATKGN0X0ybu_A774="}
                        width={270}
                    />
                </CardBody>
            </Card>
        </div>
    )
}

export default ItemCountry
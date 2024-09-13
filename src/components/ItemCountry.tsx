import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"

import { useData } from "../hooks/useData"
import { useUI } from "../hooks/useUI"
import { CountryItem } from "../models/models"



const ItemCountry = ({ country }: { country: CountryItem }) => {
    const { background, flagImage, name, continent } = country
    const { modalStateCountry, setModalStateCountry } = useUI()
    const { setCountrySelected } = useData()
    const isOpen = modalStateCountry.open && modalStateCountry.name === country.name
    return (
        <div className="flex-1 flex mx-auto" onClick={() => {
            setCountrySelected(country)
            setModalStateCountry({
                open: !modalStateCountry.open,
                name: country.name
            })

        }}
        >
            <Card className={`py-4 flex flex-1 flex-col  justify-between cursor-pointer ${isOpen ? "bg-green-300" : "bg-white"}`}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start min-h-[85px]">
                    <div className="flex flex-row gap-3 z-50">
                        <img src={flagImage || "https://media.istockphoto.com/id/1396814518/es/vector/imagen-pr%C3%B3ximamente-sin-foto-sin-imagen-en-miniatura-disponible-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=aA0kj2K7ir8xAey-SaPc44r5f-MATKGN0X0ybu_A774="} alt={name} className="object-contain w-[40px]" />
                        <div>
                            <h4 className="font-bold text-gray-600 text-md">{name}</h4>
                            <h4 className="font-bold text-gray-400 text-sm">{continent}</h4>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="py-2">
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
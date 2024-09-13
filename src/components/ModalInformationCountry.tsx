import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { CountryItem } from "./ItemCountry"



export interface Region {
    name: string
    code: any
}

const country: CountryItem =
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



const ModalInformationCountry = ({ open }: { open: boolean }) => {
    if (!open) {
        return null
    }
    const { background, flagImage, name, continent, capital, language, currency, region, population } = country
    return (
        <Card >
            <CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">




                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image

                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={background || "https://media.istockphoto.com/id/1396814518/es/vector/imagen-pr%C3%B3ximamente-sin-foto-sin-imagen-en-miniatura-disponible-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=aA0kj2K7ir8xAey-SaPc44r5f-MATKGN0X0ybu_A774="}
                        width={270}
                    />
                    <div className="flex flex-row gap-3 z-50">
                        <img src={flagImage} alt={name} className="object-contain" width={40} height={25} />
                        <div>
                            <h4 className="font-bold text-gray-600 text-large">{name}</h4>
                            <h4 className="font-bold text-gray-300 text-sm">{continent}</h4>
                        </div>


                    </div>
                    <p>
                        <span className="font-bold text-md">Capital: </span>
                        <span>{capital}</span>
                    </p>
                    <p>
                        <span className="font-bold text-md">Language: </span>
                        <span>{language}</span>
                    </p>
                    <p>
                        <span className="font-bold text-md">Pupulation: </span>
                        <span>{population}</span>
                    </p>
                    <p>
                        <span className="font-bold text-md">Currency: </span>
                        <span>{currency}</span>
                    </p>
                    <p>
                        <span className="font-bold text-md">Region </span>

                    </p>
                    <div>
                        {region.map((re: Region, index: number) => {
                            return <p key={index}>{re.name}</p>
                        })}

                    </div>

                </CardBody>
            </CardBody>
        </Card>
    )
}

export default ModalInformationCountry
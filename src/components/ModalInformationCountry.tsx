import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { useData } from "../hooks/useData"
import { useUI } from "../hooks/useUI"

export interface Region {
    name: string
    code: any
}



const ModalInformationCountry = () => {
    const { countrySelected } = useData()
    const { modalStateCountry, setModalStateCountry } = useUI()
    if (!modalStateCountry.open) {
        return null
    }
    return (

        <Card className="">
            <CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-end ">
                    <div className="cursor-pointer " onClick={() => setModalStateCountry({
                        name: "",
                        open: false
                    })}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </div>

                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        className="object-cover rounded-xl"
                        src={countrySelected?.background || "https://media.istockphoto.com/id/1396814518/es/vector/imagen-pr%C3%B3ximamente-sin-foto-sin-imagen-en-miniatura-disponible-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=aA0kj2K7ir8xAey-SaPc44r5f-MATKGN0X0ybu_A774="}
                        alt={countrySelected?.name}
                        width={270}
                    />
                    <div className="flex flex-row gap-3 z-50">
                        <img src={countrySelected?.flagImage || "https://media.istockphoto.com/id/1396814518/es/vector/imagen-pr%C3%B3ximamente-sin-foto-sin-imagen-en-miniatura-disponible-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=aA0kj2K7ir8xAey-SaPc44r5f-MATKGN0X0ybu_A774="} alt={countrySelected?.name} className="object-contain" width={40} height={25} />
                        <div>
                            <h4 className="font-bold text-gray-600 text-large">{countrySelected?.name}</h4>
                            <h4 className="font-bold text-gray-300 text-sm">{countrySelected?.continent}</h4>
                        </div>


                    </div>
                    <p>
                        <span className="font-bold text-md">Capital: </span>
                        <span>{countrySelected?.capital || "Sin datos"}</span>
                    </p>
                    <p>
                        <span className="font-bold text-md">Language: </span>
                        {countrySelected?.language?.map((el: any, index: any) => {
                            return <span key={index}>, {el.name || "Sin datos"}</span>
                        })}

                    </p>
                    <p>
                        <span className="font-bold text-md">Pupulation: </span>
                        <span>{countrySelected?.population || "Sin datos"}</span>
                    </p>
                    <p>
                        <span className="font-bold text-md">Currency: </span>
                        <span>{countrySelected?.currency || "Sin datos"}</span>
                    </p>
                    <p>
                        <span className="font-bold text-md">Region </span>

                    </p>

                    <div className="overflow-y-auto max-h-[150px]">
                        {countrySelected?.region && countrySelected?.region?.map((re: Region, index: number) => {
                            return <p key={index} className="max-w-[270px]">{re.name}</p>
                        })}
                        <span>{countrySelected?.region?.length || "Sin datos"}</span>
                    </div>

                </CardBody>
            </CardBody>
        </Card>


    )
}

export default ModalInformationCountry
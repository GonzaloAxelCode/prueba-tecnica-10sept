import { CheckboxGroup } from "@nextui-org/checkbox";
import React from 'react';
import { ContinentItemSelect } from './ContinentItemSelect';
const GroupContinentSelect = ({ continentes }: any) => {
    const [groupSelected, setGroupSelected] = React.useState<any>([]);
    const onChange = (e: any) => {
        setGroupSelected(e)
        console.log(e)
    }
    return (

        <CheckboxGroup

            value={groupSelected}
            onChange={onChange}


        >
            <div className="flex px-4 flex-row justify-between">
                <p className="font-bold text-gray-700">Filtrar por continentes</p>
                <p onClick={() => setGroupSelected([])} className="text-blue-400 cursor-pointer">Limpiar</p>
            </div>
            <div className=" grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-4">


                {continentes.map((continente: any, index: any) => {
                    return <div key={index} >
                        <ContinentItemSelect

                            value={continente.name}
                            image={continente.urlimage}
                        />
                    </div>
                })}

            </div>
        </CheckboxGroup>


    )
}

export default GroupContinentSelect
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
        <div className="flex flex-col gap-1 w-full">
            <CheckboxGroup

                value={groupSelected}
                onChange={onChange}
                classNames={{


                }}

            >
                <div className="flex flex-row gap-2 flex-wrap  items-center">

                    {continentes.slice(0, 3).map((continente: any, index: any) => {
                        return <div key={index}>
                            <ContinentItemSelect

                                value={continente.name}
                                image={continente.urlimage}
                            />
                        </div>
                    })}
                    {continentes.slice(3).map((continente: any, index: any) => {
                        return <div key={index}>
                            <ContinentItemSelect

                                value={continente.name}
                                image={continente.urlimage}
                            />
                        </div>
                    })}

                </div>
            </CheckboxGroup>

        </div>
    )
}

export default GroupContinentSelect
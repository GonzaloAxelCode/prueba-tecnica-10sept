import { Button } from "@nextui-org/react";
import { useState } from 'react';
import { useData } from "../hooks/useData";
import GroupContinentSelect from './GroupContinentSelect';



const InputSelectSearch = () => {

    const [open, setOpen] = useState(false);
    const { continentsState } = useData()
    const { searchTerms, setSearchTerms } = useData()
    const onChange = (e: any) => {
        setSearchTerms(e.target.value)
    }

    return (
        <div className="relative z-30 w-full">
            <div className="max-w-2xl  rounded-full my-20 py-2 px-3  mx-4 sm:mx-auto flex flex-row gap-2 border-gray-200 border-1 items-center justify-between">

                <input
                    type="text"
                    placeholder='Escriba el pais que desea ver'
                    value={searchTerms}
                    onChange={onChange}
                    onFocus={() => setOpen(true)}

                    onBlur={() => setOpen(false)}
                    className="outline-none px-3 w-full"
                />

                <Button onClick={() => {
                    setSearchTerms(searchTerms)
                    setOpen(false)
                }} radius="full" className="px-6" color="primary">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </span>

                    <span>Buscar</span>
                </Button>
            </div>
            <div onMouseDown={(e) => {
                e.preventDefault()

            }}

            >

                {open && (
                    <div
                        className={` min-w-[75%] w-[95%]  sm:w-[75%] absolute  left-1/2 -translate-x-1/2 top-14 mt-2  p-4 bg-white border border-gray-300 rounded-xl shadow-lg transition-all ease-out duration-300 transform ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                            }`}
                        onFocus={() => setOpen(true)}

                    >
                        <GroupContinentSelect continentes={continentsState.continents} />
                    </div>
                )}
            </div>
        </div >
    )
}

export default InputSelectSearch
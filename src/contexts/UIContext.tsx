import { createContext, useContext, useState } from "react";

const UIContext = createContext<UIContextTypes>({
    openModalCountryInformation: false,
    setOpenModalCountryInformation: () => false
})


interface UIContextTypes {
    openModalCountryInformation: boolean
    setOpenModalCountryInformation: Function
}


export const UIProvider = ({ children }: any) => {

    const [openModalCountryInformation, setOpenModalCountryInformation] = useState(false)


    const values: UIContextTypes = {
        openModalCountryInformation,
        setOpenModalCountryInformation
    }
    return <UIContext.Provider value={values}>
        {children}
    </UIContext.Provider>
}


export const useUI = () => useContext<UIContextTypes>(UIContext)

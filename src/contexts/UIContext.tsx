import { createContext, useState } from "react";

export const UIContext = createContext<UIContextTypes>({
    modalStateCountry: null,
    setModalStateCountry: () => null
})


interface UIContextTypes {
    modalStateCountry: any
    setModalStateCountry: Function
}


export const UIProvider = ({ children }: any) => {

    const [modalStateCountry, setModalStateCountry] = useState<any>({
        name: "",
        open: false
    })


    const values: UIContextTypes = {
        modalStateCountry, setModalStateCountry
    }
    return <UIContext.Provider value={values}>
        {children}
    </UIContext.Provider>
}




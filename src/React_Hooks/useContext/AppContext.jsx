import { createContext } from 'react'

export const AppContext = createContext();

const ContextProvider = ( props ) => {

    const PhoneNumber = "0987654321"
    const name = "Swaroop"

    return (
        <AppContext.Provider value={{PhoneNumber, name}}>
            {props.children}
        </AppContext.Provider>
    )

}

export default ContextProvider;

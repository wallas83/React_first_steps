import React, { useState } from 'react'
import { UserContext } from './UserContext'

    // const user = {
    //     name: 'macario',
    //     email: 'wowowo@fas',
    //     edad : 'pingon'
    // }
export const UserProvider = ({ children }) => {

    const [user, setUser] = useState()
    return (
        // < UserContext.Provider value={{ hola: 'mundo', user: user }}>
        < UserContext.Provider value={{ user , setUser}}>
            {children}
        </UserContext.Provider>
    )
}

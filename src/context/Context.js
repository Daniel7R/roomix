import React, {createContext, useState} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'

const Context= createContext()

const Provider= ({children}) => {

    const auth= () => {
        onAuthStateChanged(auth, user => {
            if(user) {
                console.log(user);
                return true
            } else {
                console.log(user);
                return false
            }
        })
    }
    
    const [getAuth, setAuth]= useState(auth === null)
    const [data, setData]= useState([])
    
    const value= {
        getAuth,
        activeAuth: () => {
            setAuth(true)
        },
        removeAuth: () => {
            setAuth(false)
        }, 
        data,
        setData
    }

    return(
        <Context.Provider value={value}>
            {
                children
            }
        </Context.Provider>
    )
}

export {
    Provider,
    Context
}
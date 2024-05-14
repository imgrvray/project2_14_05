import React,{ Children, createContext,useState} from "react";


export const UserAuthContext = createContext();


export const UserAuthProvider = ({Children})=>{
    const [user,setUser] = useState({
        name:'John',
        email:'john@gmail.com',
    });
    return(
        <UserAuthContext.Provider value={user}>
            {Children}
        </UserAuthContext.Provider>
    )   
}
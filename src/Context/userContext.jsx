import {createContext } from "react";
import { useContext,useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';

const UserContext = createContext();

const UserProvider = ({children}) =>{
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('userInfo')));
    const navigate = useNavigate();

    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        setUser(userInfo);
        console.log('Log from Context',userInfo,user);
        if(!userInfo) navigate('/login');
    },[navigate]);

    return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
}

export const userState = () =>{
    return useContext(UserContext);
}

export default UserProvider;

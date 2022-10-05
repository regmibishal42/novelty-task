import { useContext } from "react";
import { createContext,useReducer } from "react";
import employeeReducer,{ initialState } from "./employeeReducer";


const EmployeeContext = createContext(initialState);
export const EmployeeProvider = ({children}) =>{
    const [state,dispatch] = useReducer(employeeReducer,initialState);
    
    const addNewEmployee = (employee) =>{
        dispatch({type:'ADD_EMPLOYEE',payload:employee});
    }
    const removeEmployee = (id) =>{
        dispatch({type:'REMOVE_EMPLOYEE',payload:id});
    }
    const updateEmployee = (employee) =>{
        dispatch({type:'UPDATE_EMPLOYEE',payload:employee});
    }
    const values = {
        employees:state.employees,
        addNewEmployee,
        removeEmployee,
        updateEmployee
    };
    return <EmployeeContext.Provider value={values}>{children}</EmployeeContext.Provider>
}

const useEmployee = () =>{
    const context = useContext(EmployeeContext);
    if(context == undefined) throw new Error('UseEmployee Must be used within EmployeeContext');
    return context; 
}

export default useEmployee;
import React,{useEffect} from 'react';
import { userState } from '../../Context/userContext';
import useEmployee from '../../Context/employeeContext';
import { useNavigate,Link} from 'react-router-dom';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Box,
    useToast
} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import Sidebar from '../Sidebar';
import './AddEmployee.css';

const AddEmployee = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const { user } = userState();
    const { employees,addNewEmployee } = useEmployee();
    const {register,handleSubmit,formState:errors} = useForm();

    useEffect(() => {
        console.log('Add Employye UseEffect', user);
        if (!user) navigate('/login');
      }, []);
      const submitHandler = (data) =>{
        console.log('Data in Add',data,employees.length);
        const newEmployeeId = employees.length;
        addNewEmployee({
            id:newEmployeeId + 1,
            employee_name:data.name,
            employee_salary:data.salary,
            employee_age:data.age,
        });
        toast({
            title:`Employee ${data.name} Added`,
            status: 'success',
            duration: 9000,
            isClosable: true,
        });
        navigate('/');
      }
  return (
    <div className='add-employee'>
        <Sidebar />
        <form onSubmit={handleSubmit(submitHandler)} className='add-employee-form'>
        <FormControl isInvalid={errors.name}>
           <Box className='employee-input' margin={2}>
           <FormLabel htmlFor='name' margin={2}>Employee Name:</FormLabel>
            <Input 
                id='name' 
                type='text' 
                isRequired 
                placeholder='Full Name'
                {...register('name',{
                    required:'Employee Name is required',
                    // pattern:^[a-zA-Z].*[\s\.]*$
                    minLength:{value:4,message:'Name Should be more the 4'}
                })}
                />
           </Box>
                <FormErrorMessage>
                    {errors.name && errors.message}
                </FormErrorMessage>
            <Box className='employee-input' margin={3.5}>
            <FormLabel htmlFor='name' marginTop={2}>Employee Age:</FormLabel>
            <Input 
                id='age' 
                type='number' 
                isRequired
                marginLeft={2.5}
                placeholder='Employee Age'
                {...register('age',{
                    min:18,
                    max:60,
                    required:'Employee Age is required',
                })}
                />
            </Box>
                <FormErrorMessage>
                    {errors.age && errors.message}
                </FormErrorMessage>
            <Box className='employee-input' margin={3.5}>
            <FormLabel htmlFor='name'>Employee Salary</FormLabel>
            <Input 
                id='salary' 
                type='number' 
                isRequired 
                placeholder='Employee Salary'
                {...register('salary',{
                    min:10000,
                    max:100000,
                    required:'Employee salary is required',
                })}
                />
            </Box>
                <FormErrorMessage>
                    {errors.name && errors.message}
                </FormErrorMessage>
                <Input type='submit' />
        </FormControl>
    </form>
    </div>
  )
}

export default AddEmployee
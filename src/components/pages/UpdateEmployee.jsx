import React,{useEffect,useState} from 'react';
import { userState } from '../../Context/userContext';
import useEmployee from '../../Context/employeeContext';
import { useNavigate,useParams } from 'react-router-dom';
import {
FormControl,
FormLabel,
FormErrorMessage,
Input,
Box,
useToast,
Button
} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import Sidebar from '../Sidebar';
import './AddEmployee.css';

const UpdateEmployee = () => {
  const {id} = useParams();
  const toast = useToast();
  const {user} = userState();
  const {employees,updateEmployee} = useEmployee();
  const navigate = useNavigate();
  const {register,handleSubmit,formState:errors} = useForm();
  const employee = employees ? employees?.filter(employee=>employee.id == id)[0] : {};

  const submitHandler = (data) =>{
    if(data.name == employee.employee_name && data.salary == employee.employee_salary && data.age == employee.employee_age)
    return toast({
      title:'You didnot change anything',
      description:'Please Change employee details or press cancel',
      status:'warning',
      duration:6000,
      isClosable:true
    });
    updateEmployee({
      id,
      employee_name:data.name,
      employee_salary:data.salary,
      employee_age:data.age
    });
    toast({
      title:'Details Updated Successfully',
      description:`Details of ${data.name} has been updated successfully`,
      status:'success',
      duration:6000,
      isClosable:true
    });
    navigate('/')
  };
  useEffect(()=>{
    if(!user) navigate('/login');
  },[]);
  return (
    <div className='update-employee'>
      <Sidebar/>
      <form onSubmit={handleSubmit(submitHandler)} className='update-employee-form'>
      <FormControl isInvalid={errors.name}>
           <Box className='employee-input' margin={2}>
           <FormLabel htmlFor='name' margin={2}>Employee Name:</FormLabel>
            <Input 
                id='name' 
                type='text' 
                isRequired 
                placeholder='Full Name'
                defaultValue={employee.employee_name}
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
                defaultValue={employee.employee_age}
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
                defaultValue={employee.employee_salary}
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
                <Button type='submit'>Update</Button>
                <Button>Cancel</Button>
        </FormControl>
      </form>
    </div>
  )
}

export default UpdateEmployee;
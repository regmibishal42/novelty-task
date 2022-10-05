import React,{useState} from 'react';
import { useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { userState } from '../../Context/userContext';
import useEmployee from '../../Context/employeeContext';
import Sidebar from '../Sidebar';
import './HomePage.css';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Input,
  useToast
} from '@chakra-ui/react';


const HomePage = () => {
  const { user } = userState();
  const { employees,removeEmployee } = useEmployee();
  const [showSearch,setShowSearch] = useState(false);
  const [searchedData,setSearcedData] = useState([]);
  const navigate = useNavigate();
  const toast = useToast();
  const [search,setSearch] = useState('');
  const [index, setIndex] = useState(0);
  let indexedEmployees = [];
  indexedEmployees = employees.slice(index, index + 8);
  const upperIndexLimit = (employees.length / 8 == 0) ? employees.length / 8 : Math.ceil(employees.length / 8);

  const handleSearch = () =>{
    if(!search)
      return toast({
        title:'Enter Valid Employee Id or Details',
        status:'warning',
        duration:5000,
        isClosable:true,
      }); 
      setSearcedData(employees.filter((employee)=>employee.id == search || employee.employee_name == search));
      if(!searchedData) return toast({
        title:'Employee Not Found',
        status:'warning',
        duration:5000,
        isClosable:true,
      });
      setShowSearch(true);
      console.log('We are here',searchedData);
      console.log(search);
  }

  const handleDelete =  (id) =>{
      removeEmployee(id);
      toast({
        title: 'Deleated Successfully',
        description:`Employee With Id ${id} has been Deleated`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
  }

  useEffect(() => {
    console.log('Before Rendering', user);
    if (!user) navigate('/login');
  }, []);

  return (
    <div className='main-section'>
      <Sidebar />

      <div className='employeeList'>
        <h2 className='tableHeading'>List All Employees</h2>
        <div className='searchField'>
          <Input placeholder='Enter Employee ID/Name' marginRight={3} marginTop={3} onChange={(e)=>setSearch(e.target.value)}/>
          <Button variant='ghost' colorScheme='orange' marginTop={3} onClick={()=>handleSearch()}>Search</Button>
          <Button variant='ghost' colorScheme='orange' marginTop={3} onClick={()=>setShowSearch(false)}>Reset</Button>
          
        </div>
        <TableContainer marginLeft={2} marginTop={4}>
          <Table variant='striped' colorScheme='teal' size='sm'>
            <TableCaption>
              <Button size='xs' variant='ghost' marginRight={2} onClick={() => index == 0 ? setIndex(0) : setIndex(index - 1)}>Prev</Button>
              {index}
              <Button size='xs' variant='ghost' marginLeft={2} onClick={() => index >= upperIndexLimit ? setIndex(index) : setIndex(index + 1)}>Next</Button>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Emp_Id</Th>
                <Th>Name</Th>
                <Th>Age</Th>
                <Th isNumeric>Salary</Th>
                <Th marginLeft={3}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {!showSearch && indexedEmployees?.map((employee, index) => <Tr key={index}>
                <Td>{employee.id}</Td>
                <Td>{employee.employee_name}</Td>
                <Td>{employee.employee_age}</Td>
                <Td>{employee.employee_salary}</Td>
                <Td>
                  <Button color='orange.300' variant='ghost' size='md' marginRight={1} ><Link to={`/update-employee/${employee.id}`}>Update</Link></Button>
                  <Button colorScheme='red' variant='outline' size='md' onClick={()=>handleDelete(employee.id)}>Delete</Button>
                </Td>
              </Tr>)}
              {searchedData?.map((employee,index)=><Tr key={index}>
              <Td>{employee.id}</Td>
                <Td>{employee.employee_name}</Td>
                <Td>{employee.employee_age}</Td>
                <Td>{employee.employee_salary}</Td>
                <Td>
                  <Button color='orange.300' variant='ghost' size='md' marginRight={1}>Update</Button>
                  <Button colorScheme='red' variant='outline' size='md' onClick={()=>handleDelete(employee.id)}>Delete</Button>
                </Td>
              </Tr>)}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default HomePage;
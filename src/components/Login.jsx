import React,{useState,useEffect} from 'react';
import {Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack,useToast} from '@chakra-ui/react';
import {BiShow,BiHide} from 'react-icons/bi';
import {useFetcher, useNavigate} from 'react-router-dom';
import {userState} from '../Context/userContext';


const Login = ({}) => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [show,setShow] = useState(false);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const {user,setUser} = userState();
  const listOfUsers = [{email:'regmibishal42@gmail.com',password:'admin123'}];

  const handleClick = () =>setShow(!show);
  const submitHandler = ()=>{
    setLoading(true);
    if(!email || !password){
      toast({
        title:"Please Enter Email And Password",
        status:"warning",
        duration:5000,
        isClosable:true,
        position:"botton"
      });
      setLoading(false);
      console.log('Login Failed')
      return;
    }
    setLoading(false);
    console.log('Logged In')
    let users = JSON.parse(localStorage.getItem('usersList'));
    console.log(users,typeof(users));
    let isLogged = users.some((user)=>(user.email == email && user.password == password))
    if(!isLogged) return toast({
        title:'Log In Failed',
        description:'Invalid Username or password',
        duration:6000,
        isClosable:true,
        status:'error'
    });
    localStorage.setItem('userInfo',JSON.stringify({email:email,password:password}));
    setUser({email:email,password:password});
    navigate('/');
  }
useEffect(()=>{
  let usersList = localStorage.getItem('usersList');
  if(!usersList) localStorage.setItem('usersList',JSON.stringify(listOfUsers));
  if(user) navigate('/');
},[])
  return (
    <VStack spacing='5px' color="black">
    <FormControl id='email' isRequired>
      <FormLabel>E-mail</FormLabel>
      <Input placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value) } />
    </FormControl>
    <FormControl id='password' isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup>
      <Input type={show ? "text" :"password"} placeholder="Enter Your Name" onChange={(e)=>setPassword(e.target.value) } />
      <InputRightElement width="4.5rem">
        <Button h='1.50rem' size="sm" onClick={handleClick}>
          {show ?<BiShow /> : <BiHide />}
        </Button>
      </InputRightElement>
      </InputGroup>
    </FormControl>
    <Button colorScheme="customOrange" width="100%" style={{marginTop:15}} onClick={submitHandler} isLoading={loading}>Submit</Button>
</VStack>
  )
}

export default Login;
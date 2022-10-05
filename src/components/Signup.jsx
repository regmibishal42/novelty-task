import React,{useState} from 'react';
import {Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack,useToast} from '@chakra-ui/react';
import {BiShow,BiHide} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

 

const Signup = () => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [confirmPassword,setConfirmPassword] = useState();
  const [show,setShow] = useState(false);
  const [loading,setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();


  const handleClick = () =>setShow(!show);
  const submitHandler = async ()=>{
    let emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
    let passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    setLoading(true);
    if( !email || !password || !confirmPassword || !emailRegx.test(email) || !passwordRegx.test(password)){
      console.log('regax donot match');
      console.log( emailRegx.test(email));
      console.log(passwordRegx.test(password))
      console.log(!email,!password,!confirmPassword)
      toast({
        title:"Please Fill All The Fields Correctly",
        status:"warning",
        duration:5000,
        isClosable:true,
      });
      setLoading(false);
      return;
    }
    if(password !== confirmPassword) {
      toast({
        title:"Passwords DoNot Match",
        status:'warning',
        duration:5000,
        isClosable:true,
        position:"bottom"
      })
      return;
    }
    setLoading(false);
    toast({
      title:"Registration Successfull",
      description:`${email} is registered now`,
        status:'success',
        duration:5000,
        isClosable:true,
        position:"bottom"
    });
    let users = JSON.parse(localStorage.getItem('usersList'));
    users.push({email:email,password:password});
    localStorage.removeItem('usersList');
    localStorage.setItem('usersList',JSON.stringify(users));
    navigate('/login');
    
  }


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
        <FormControl id='password' isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
          <Input type={show ? "text" :"password"} placeholder="Enter Your Name" onChange={(e)=>setConfirmPassword(e.target.value) } />
          <InputRightElement width="4.5rem">
            <Button h='1.50rem' size="sm" onClick={handleClick}>
              {show ? <BiShow/> : <BiHide/>}
            </Button>
          </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button colorScheme="customOrange" width="100%" style={{marginTop:15}} onClick={submitHandler} isLoading={loading}>Sign Up</Button>
    </VStack>
  )
}

export default Signup;
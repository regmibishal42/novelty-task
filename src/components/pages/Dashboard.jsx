import React, { useState, useEffect } from 'react';
import {
  Flex,
  Center,
  Text,
  Stack,
  Box,
  Heading
} from '@chakra-ui/react';
import Sidebar from '../Sidebar';
import { userState } from '../../Context/userContext';
import { useNavigate } from 'react-router-dom';
import BarChart from '../Charts/BarChart';
import LineChart from '../Charts/LineChart';
import PieChart from '../Charts/PieChart';

const Dashboard = () => {
  const { user } = userState();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate('/login');
  }, [])
  // {base:'row',md:'row',lg:'column'}
  return (
    <Flex width='100%'>
      <Sidebar />
      <Stack direction='column' flexGrow={1} width='100%' height='100%'>
        <Center  color='white'>
          <Text fontSize='2xl' borderBottom='1px solid'>DASHBOARD</Text>
        </Center>
        <Stack spacing={8} direction={{base:'column',md:'column',lg:'row'}} marginTop={3}>
          <Box p={5} shadow='md' borderWidth='2px' width='50%'>
            <Heading fontSize='xl'>Employee Number</Heading>
            <Text mt={4}>Currently,there are 25 employees working in this company.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Iure quidem laudantium vitae repellat? Nemo, suscipit aspernatur nihil
              obcaecati at quia esse cum saepe mollitia facere maxime a similique 
              adipisci enim aperiam quo tempora ipsum ducimus exercitationem porro. 
              Dignissimos, perferendis beatae.</Text>
          </Box>
          <Box p={5} shadow='md' borderWidth='2px'>
          <Heading fontSize='lg'>Employee By Depertment</Heading>
            <PieChart />
          </Box>
        </Stack>
        <Stack direction={{base:'column',md:'column',lg:'row'}} width='100%' height='100%'>
          <Box width={{base:'80%',md:'70%',lg:'45%'}}>
          <BarChart />
          </Box>
          <Box width={{base:'80%',md:'70%',lg:'45%'}} marginLeft={5}>
          <LineChart />
          </Box>
        </Stack>
      </Stack>
    </Flex>
  )
}

export default Dashboard

import React from 'react';
import './LoginPage.css';
import {
    Box,
    Text,
    Container,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel
} from '@chakra-ui/react';
import Login from '../Login';
import Signup from '../Signup';

export const LoginPage = () => {
  return  <Container maxWidth="xl" centerContent>
  <div className="custom-shape-divider-top-1658929212">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
      </svg>
  </div>
  {/* Box Works The Same as Div */}
  <Box display='flex' justifyContent='center' alignItems='center'
      p={3}
      bg="white"
      w="100%"
      m="40px 0 15px 0"
      borderRadius="2xl"
      borderWidth="1px">
      <Text fontSize="4xl" fontFamily="Work Sans" color="black">Novelty EMS</Text>
  </Box>
  <Box bg='white'
      p={4}
      w="100%"
      borderRadius='2xl'
      borderWidth="1px">
      <Tabs variant='soft-rounded' colorScheme='orange'>
          <TabList mb='1em'>
              <Tab width='50%'>Login</Tab>
              <Tab width='50%'>Signup</Tab>
          </TabList>
          <TabPanels>
              <TabPanel>
                  <Login />
              </TabPanel>
              <TabPanel>
                  <Signup />
              </TabPanel>
          </TabPanels>
      </Tabs>
  </Box>
</Container>
}

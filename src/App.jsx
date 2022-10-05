import HomePage from './components/pages/HomePage';
import {Route,Routes} from 'react-router-dom';
import {LoginPage} from './components/pages/LoginPage';
import './App.css';
import { EmployeeProvider } from './Context/employeeContext';
import AddEmployee from './components/pages/AddEmployee';
import UpdateEmployee from './components/pages/UpdateEmployee';
import Dashboard from './components/pages/Dashboard';

function App() {
  return <EmployeeProvider>
    <div className='App'>
    <Routes>
    {/* <Route path='/' element={<FirstPage />} /> */}
    <Route path='/' element={<HomePage/>} />
    <Route path='/login' element={<LoginPage/>} />
    <Route path='/add-employee' element={<AddEmployee />} />
    <Route path='/update-employee/:id' element={<UpdateEmployee />}/>
    <Route path='/dashboard' element={<Dashboard />} />
  </Routes>
  </div>
  </EmployeeProvider>
}




export default App;

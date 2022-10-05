import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import '../../node_modules/react-pro-sidebar/dist/css/styles.css';
import {Text,useToast} from '@chakra-ui/react';
import {TbLayoutSidebarRightCollapse,TbLayoutSidebarLeftCollapse} from 'react-icons/tb';
import {GrUserAdmin} from 'react-icons/gr';
import {TbLogout} from 'react-icons/tb';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

 
const Sidebar = () => {
    const naviagte = useNavigate();
    const toast = useToast();

    const logoutHandler = () =>{
        localStorage.removeItem('userInfo');
        toast({
            title:`Logout Successful`,
            status: 'success',
            duration: 9000,
            isClosable: true,
        });
        naviagte('/login');

    }
    const [collapse, setCollapse] = useState(true);
    return <>
        <ProSidebar collapsed={collapse}>
            <Menu iconShape="square">
                <MenuItem icon={collapse?<TbLayoutSidebarRightCollapse />:<TbLayoutSidebarLeftCollapse/>} onClick={()=>setCollapse(!collapse)}>{collapse?<Text>Expand</Text>:<Text>Collapse</Text>}</MenuItem>
                <MenuItem icon={<GrUserAdmin />}><Link to='/dashboard'>Dashboard</Link></MenuItem>
                <SubMenu title="Employee" icon={<AiOutlineUsergroupAdd />}>
                   
                    <MenuItem icon={<AiOutlineUsergroupAdd/>}> <Link to='/'>List Employees</Link></MenuItem>
                    
                  
                   <MenuItem icon={<AiOutlineUsergroupAdd/>}> <Link to='/add-employee'>Add Employee </Link></MenuItem>
                  
                </SubMenu>
            <MenuItem icon={<TbLogout />} onClick={logoutHandler}>Logout</MenuItem>
            </Menu>
        </ProSidebar>
    </>;
}

export default Sidebar
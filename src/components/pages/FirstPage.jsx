import React from 'react';
import { userState } from '../../Context/userContext';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
    const {user} = userState();
    const navigate = useNavigate();
  return (
    <div>FirstPage</div>
  )
}

export default FirstPage
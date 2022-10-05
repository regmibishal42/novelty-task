import React, { useState } from 'react';
import {Chart} from 'react-chartjs-2';
import {ClientData} from '../Data/Data.js';
import 'chart.js/auto';


const BarChart = () => {
    const options = {
        responsive:true,
        title:{
            display:true,
            text:'Clients Gained/Lost in Last 5 Years'
        }
    }
    const [data,setData] = useState({
        labels: ClientData.map((data)=>data.year),
        datasets:[{
            label:'Clients Gained',
            data:ClientData.map((data)=>data.clientGain),
            backgroundColor:['black'],
        }]
    });
  return (
    <Chart type='bar' data={data}/>
  )
}

export default BarChart;
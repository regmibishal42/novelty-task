import React, { useState } from 'react';
import {Chart} from 'react-chartjs-2';
import {ClientData} from '../Data/Data.js';
import 'chart.js/auto';

const LineChart = () => {
    const [data,setData] = useState({
        labels: ClientData.map((data)=>data.year),
        datasets:[{
            label:'Clients Lost',
            data:ClientData.map((data)=>data.clientLost),
            backgroundColor:['white'],
            color:['red']
        }]
    });
  return (
    <Chart type='line' data={data}/>
  )
}

export default LineChart;
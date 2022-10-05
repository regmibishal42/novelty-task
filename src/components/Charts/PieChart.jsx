import React, { useState } from 'react';
import {Chart} from 'react-chartjs-2';
import {EmployeesByDepertment} from '../Data/Data.js';
import 'chart.js/auto';
const PieChart = () => {
    const [data,setData] = useState({
        labels: EmployeesByDepertment.map((data)=>data.depertment),
        datasets:[{
            label:'Clients Gained',
            data:EmployeesByDepertment.map((data)=>data.coders),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
        }]
    });
  return (
    <Chart type='doughnut' data={data}/>
  )
}

export default PieChart;
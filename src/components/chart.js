import React from 'react';
import { Line } from 'react-chartjs-2';


export default function Chart(props) {
    const datas = props.data;
    const dates  = datas.map(getDates);
    const calls = datas.map(getCalls);
    const appointments = datas.map(getAppointments);
    const sales = datas.map(getSales);
    console.log(datas);
    const data = {
        labels: dates,
        datasets: [
          {
            label: '# of Calls',
            data: calls,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            label: '# of Appointments',
            data: appointments,
            fill: false,
            backgroundColor: 'rgb(0, 99, 132)',
            borderColor: 'rgba(0, 99, 132, 0.2)',
          },
          {
            label: '# of Sales',
            data: sales,
            fill: false,
            backgroundColor: 'rgb(52, 235, 131)',
            borderColor: 'rgba(52, 235, 131, 0.2)',
          },
        ],
        
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

      function getDates(date){
        return date.Dates;
      }
      function getCalls(calls){
        return calls.Calls
      }
      function getAppointments(appointments){
        return appointments.Appointments
      }
      function getSales(sales){
        return sales.Sales
      }
    return (
        <div>
            <Line data={data} options={options} />
        </div>
    )
}


import React from "react";
import { Bar } from "react-chartjs-2";

const ChartComponent = ({ property }) => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Income",
        data: [
          property.income?.January,
          property.income?.February,
          property.income?.March,
          property.income?.April,
          property.income?.May,
          property.income?.June,
          property.income?.July,
          property.income?.August,
          property.income?.September,
          property.income?.October,
          property.income?.November,
          property.income?.December,
        ],
        backgroundColor: "#2CAE76",
        borderColor: "white",
        borderWidth: 1,
      },
      {
        label: "Expense",
        data: [
          property.income?.January,
          property.income?.February,
          property.income?.March,
          property.income?.April,
          property.income?.May,
          property.income?.June,
          property.income?.July,
          property.income?.August,
          property.income?.September,
          property.income?.October,
          property.income?.November,
          property.income?.December,
        ],
        backgroundColor: "#FAA245",
        borderColor: "white",
        borderWidth: 1,
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
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: property.propertyName,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ChartComponent;

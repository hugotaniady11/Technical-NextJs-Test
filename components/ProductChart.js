import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)
const getItemsPerBrand = async () => {
  try {
    const { data } = await axios.get('https://dummyjson.com/products');
    const brandMap = data.products.reduce((acc, product) => {
      if (acc[product.brand]) {
        acc[product.brand] += 1;
      } else {
        acc[product.brand] = 1;
      }
      return acc;
    }, {});
    const itemsPerBrand = Object.entries(brandMap).map(([brand, count]) => ({ brand, count }));
    return itemsPerBrand;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const ProductChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getItemsPerBrand().then(setData);
  }, []);

  const chartData = {
    labels: data.map(({ brand }) => brand),
    datasets: [
      {
        label: 'Items per Brand',
        data: data.map(({ count }) => count),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: 'Items per Brand',
            fontSize: 24,
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
};

export default ProductChart;

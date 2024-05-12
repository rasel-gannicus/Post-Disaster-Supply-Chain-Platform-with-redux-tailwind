import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const supplies = [
    {
        title: 'Plastic Aid Box',
        category: 'Medical Equipment',
        amount: 55,
        img: 'https://i.ibb.co/ZVVPJcZ/ploegerson-j-ped4-HD32-Q-unsplash.jpg',
        description: ''
    },
    {
        title: 'Medicin Holder Box',
        category: 'Medical Equipment',
        amount: 445,
        img: 'https://i.ibb.co/tx38KqP/laurynas-me-1-TL8-Ao-EDj-c-unsplash.jpg',
        description: ''
    },
    {
        title: 'Saline Packet',
        category: 'Medical Equipment',
        amount: 2000,
        img: 'https://i.ibb.co/8Mg0w6H/marcelo-leal-6pc-GTJDuf6-M-unsplash.jpg',
        description: ''
    },
    {
        title: 'Stethoscope',
        category: 'Medical Equipment',
        amount: 300,
        img: 'https://i.ibb.co/ZN4Twrw/hush-naidoo-jade-photography-yo01-Z-9-HQAw-unsplash.jpg',
        description: ''
    },
    {
        title: 'Paracetamol Tablet',
        category: 'Health',
        amount: 12000,
        img: 'https://i.ibb.co/85NQTn8/hal-gatewood-uo7x-JIV4-Awk-unsplash.jpg',
        description: ''
    },
    {
        title: 'Felazill Tablet',
        category: 'Health',
        amount: 12000,
        img: 'https://i.ibb.co/qC4X8zr/freestocks-nss2e-Rz-Qwgw-unsplash.jpg',
        description: ''
    },
    {
        title: 'Floor Cleaner',
        category: 'Health',
        amount: 600,
        img: 'https://i.ibb.co/9yDsv92/clay-banks-k-Baf0-Dw-BPb-E-unsplash.jpg',
        description: ''
    },
    {
        title: 'N-95 Mask',
        category: 'Health',
        amount: 1600,
        img: 'https://i.ibb.co/C1n0Vq5/ashkan-forouzani-f44b7g7c-M7-E-unsplash.jpg',
        description: ''
    },
    {
        title: 'One Time Gloves',
        category: 'Health',
        amount: 1900,
        img: 'https://i.ibb.co/h7CvT4v/clay-banks-c-Ez-MOp5-Ft-V4-unsplash.jpg',
        description: ''
    },
];

// Function to aggregate amounts by category
const aggregateData = (data : any) => {
    const aggregatedData = {};
    data.forEach(item  => {
        if (aggregatedData[item.category]) {
            aggregatedData[item.category] += item.amount;
        } else {
            aggregatedData[item.category] = item.amount;
        }
    });
    return aggregatedData;
};

// Function to convert aggregated data into pie chart data format
const convertToPieChartData = (aggregatedData) => {
    return Object.keys(aggregatedData).map(category => ({
        title: category,
        value: aggregatedData[category],
        color: getRandomColor() // You can define your own color scheme here
    }));
};

// Function to generate random color
const getRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
};

const DashBoardHome = () => {
    const aggregatedData = aggregateData(supplies);
    const pieChartData = convertToPieChartData(aggregatedData);
    return (
        <div>
            DashBoard home here
            <PieChart
            className='w-1/3'
            data={pieChartData}
            label={({ dataEntry }) => `${dataEntry.title} (${dataEntry.value})`}
            labelStyle={{
                fontSize: '5px',
                fontFamily: 'sans-serif'
            }}
        />
        </div>
    );
};

export default DashBoardHome;